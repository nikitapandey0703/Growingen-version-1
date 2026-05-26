import 'dotenv/config'

import express from 'express'
import nodemailer from 'nodemailer'
import path from 'node:path'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
const port = Number(process.env.PORT || 3001)
const smtpPort = Number(process.env.SMTP_PORT || 587)
const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173,http://localhost:3001')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean)
const rateLimitWindowMs = Number(process.env.RATE_LIMIT_WINDOW_MS || 15 * 60 * 1000)
const rateLimitMaxRequests = Number(process.env.RATE_LIMIT_MAX_REQUESTS || 5)
const rateLimitStore = new Map()

const requiredFields = ['name', 'email', 'phone', 'service', 'message']
const emailPattern =
  /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z]{2,})+$/

app.set('trust proxy', 1)

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

app.use((req, res, next) => {
  const startedAt = Date.now()

  res.on('finish', () => {
    console.log(
      `${new Date().toISOString()} ${req.method} ${req.originalUrl} ${res.statusCode} ${Date.now() - startedAt}ms`,
    )
  })

  next()
})

app.use((req, res, next) => {
  const origin = req.get('origin')

  if (!origin || allowedOrigins.includes(origin)) {
    if (origin) res.setHeader('Access-Control-Allow-Origin', origin)
    res.setHeader('Vary', 'Origin')
    res.setHeader('Access-Control-Allow-Credentials', 'true')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Accept')
  }

  if (req.method === 'OPTIONS') return res.sendStatus(204)

  return next()
})

app.use(express.json({ limit: '32kb' }))

function contactRateLimiter(req, res, next) {
  const now = Date.now()
  const key = req.ip || req.socket.remoteAddress || 'unknown'
  const current = rateLimitStore.get(key)

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + rateLimitWindowMs })
    return next()
  }

  if (current.count >= rateLimitMaxRequests) {
    const retryAfterSeconds = Math.ceil((current.resetAt - now) / 1000)
    res.setHeader('Retry-After', String(retryAfterSeconds))

    return res.status(429).json({
      success: false,
      message: 'Too many messages sent. Please try again later.',
    })
  }

  current.count += 1
  rateLimitStore.set(key, current)
  return next()
}

function sanitizeContactPayload(payload) {
  return {
    name: String(payload.name || '').trim(),
    email: String(payload.email || '').trim(),
    phone: String(payload.phone || '').trim(),
    service: String(payload.service || '').trim(),
    message: String(payload.message || '').trim(),
  }
}

function validateContactPayload(data) {
  for (const field of requiredFields) {
    if (!data[field]) return `${field} is required.`
  }

  if (data.name.length < 3 || data.name.length > 60) return 'Please enter a valid full name.'
  if (!emailPattern.test(data.email)) return 'Please enter a valid email address.'
  if (data.message.length < 20 || data.message.length > 1000) return 'Please enter a valid message.'

  return ''
}

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function buildEmailHtml(data) {
  const rows = [
    ['Name', data.name],
    ['Email', data.email],
    ['Phone', data.phone],
    ['Service', data.service],
    ['Submitted At', new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })],
  ]

  const detailRows = rows
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;font-weight:700;background:#f9fafb;">${label}</td>
          <td style="padding:10px 12px;border:1px solid #e5e7eb;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join('')

  return `
    <div style="font-family:Arial,sans-serif;color:#111827;line-height:1.5;">
      <h2 style="margin:0 0 16px;">New contact enquiry</h2>
      <table style="border-collapse:collapse;width:100%;max-width:640px;">${detailRows}</table>
      <h3 style="margin:24px 0 8px;">Message</h3>
      <p style="white-space:pre-wrap;margin:0;padding:14px;border:1px solid #e5e7eb;background:#f9fafb;">${escapeHtml(data.message)}</p>
    </div>
  `
}

app.post('/api/contact', contactRateLimiter, async (req, res) => {
  const missingConfig = ['SMTP_HOST', 'SMTP_USER', 'SMTP_PASS', 'SMTP_TO_EMAIL'].filter(
    (key) => !process.env[key],
  )

  if (missingConfig.length > 0) {
    return res.status(500).json({
      success: false,
      message: `SMTP is not configured. Missing: ${missingConfig.join(', ')}`,
    })
  }

  const contactData = sanitizeContactPayload(req.body || {})
  const validationError = validateContactPayload(contactData)

  if (validationError) {
    return res.status(400).json({ success: false, message: validationError })
  }

  try {
    const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER

    await transporter.sendMail({
      from: `"Growingen Contact" <${fromEmail}>`,
      to: process.env.SMTP_TO_EMAIL,
      replyTo: contactData.email,
      subject: `New ${contactData.service} enquiry from ${contactData.name}`,
      text: [
        `Name: ${contactData.name}`,
        `Email: ${contactData.email}`,
        `Phone: ${contactData.phone}`,
        `Service: ${contactData.service}`,
        '',
        contactData.message,
      ].join('\n'),
      html: buildEmailHtml(contactData),
    })

    console.log(`Contact email sent: ${contactData.service} enquiry from ${contactData.email}`)
    return res.json({ success: true })
  } catch (error) {
    console.error('SMTP contact form submission failed:', error)
    return res.status(500).json({
      success: false,
      message: 'We could not send your message right now.',
    })
  }
})

const distPath = path.resolve(__dirname, '../dist')
app.use(express.static(distPath))

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(port, () => {
  console.log(`Growingen server running on http://localhost:${port}`)
})
