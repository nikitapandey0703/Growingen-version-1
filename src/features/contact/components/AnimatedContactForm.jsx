import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ChevronDown } from 'lucide-react'
import { useMemo, useState } from 'react'

import Button from '../../../components/common/Button'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import ContactAvatarCanvas from './ContactAvatarCanvas'

const SERVICE_OPTIONS = [
  'Web Development',
  'UI/UX Design',
  'Brand Identity',
  'Marketing Strategy',
]

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
}

const FORMSUBMIT_ENDPOINT =
  import.meta.env.VITE_FORMSUBMIT_ENDPOINT ||
  (import.meta.env.VITE_FORMSUBMIT_EMAIL
    ? `https://formsubmit.co/ajax/${import.meta.env.VITE_FORMSUBMIT_EMAIL}`
    : '')

const validationRules = {
  name: {
    required: 'Please enter your full name.',
    minLength: {
      value: 3,
      message: 'Full name must be at least 3 characters long.',
    },
    maxLength: {
      value: 60,
      message: 'Full name cannot exceed 60 characters.',
    },
    pattern: {
      value: /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/,
      message: 'Can only contain letters, spaces, hyphens.',
    },
    validate: {
      notOnlySpaces: (value) =>
        value.trim().length > 0 || 'Cannot contain only spaces.',
      atLeastTwoWords: (value) =>
        value.trim().split(/\s+/).length >= 2 ||
        'Please enter both first and last name.',
    },
  },
  phone: {
    required: 'Please enter your contact number.',
    pattern: {
      value: /^(?:\+91[\s-]?|91[\s-]?)?[6-9]\d{9}$/,
      message: 'Please enter a valid 10-digit number.',
    },
    validate: {
      notOnlySpaces: (value) =>
        value.trim().length > 0 || 'Cannot contain only spaces.',
      exactDigits: (value) => {
        const digits = value.replace(/\D/g, '')
        const normalized =
          digits.length === 12 && digits.startsWith('91')
            ? digits.slice(2)
            : digits

        return (
          normalized.length === 10 ||
          'Must contain exactly 10 digits.'
        )
      },
    },
  },
  email: {
    required: 'Please enter your email address.',
    maxLength: {
      value: 254,
      message: 'Email address is too long.',
    },
    pattern: {
      value:
        /^[A-Za-z0-9](?:[A-Za-z0-9._%+-]{0,62}[A-Za-z0-9])?@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z]{2,})+$/,
      message: 'Please enter a valid email address.',
    },
    validate: {
      notOnlySpaces: (value) =>
        value.trim().length > 0 || 'Cannot contain only spaces.',
      noSpaces: (value) =>
        !/\s/.test(value) || 'Cannot contain spaces.',
    },
  },
  service: {
    required: 'Please select a service.',
    validate: {
      validOption: (value) =>
        SERVICE_OPTIONS.includes(value) || 'Please select a valid service.',
    },
  },
  message: {
    required: 'Please enter your message.',
    minLength: {
      value: 20,
      message: 'Message must be at least 20 characters long.',
    },
    maxLength: {
      value: 1000,
      message: 'Message cannot exceed 1000 characters.',
    },
    validate: {
      notOnlySpaces: (value) =>
        value.trim().length > 0 || 'Cannot contain only spaces.',
      meaningfulMessage: (value) =>
        value.trim().length >= 20 ||
        'Please provide more details.',
    },
  },
}

function validateField(fieldName, rawValue) {
  const rules = validationRules[fieldName]

  if (!rules) return ''

  const value = typeof rawValue === 'string' ? rawValue : ''

  if (rules.required && !value.trim()) return rules.required
  if (rules.minLength && value.trim().length < rules.minLength.value) return rules.minLength.message
  if (rules.maxLength && value.length > rules.maxLength.value) return rules.maxLength.message
  if (rules.pattern && !rules.pattern.value.test(value)) return rules.pattern.message

  if (rules.validate) {
    for (const validateFn of Object.values(rules.validate)) {
      const result = validateFn(value)
      if (result !== true) return result
    }
  }

  return ''
}

function validateFormData(data) {
  return {
    name: validateField('name', data.name),
    phone: validateField('phone', data.phone),
    email: validateField('email', data.email),
    service: validateField('service', data.service),
    message: validateField('message', data.message),
  }
}

function getFieldBorderState(fieldName, value, activeField, fieldErrors) {
  if (activeField === fieldName) return 'focus'
  if (fieldErrors[fieldName]) return 'error'
  if (!value.trim()) return 'default'
  return validateField(fieldName, value) ? 'error' : 'success'
}

function getFieldClassName(baseClassName, state) {
  const stateClasses = {
    default: 'border-[#eceaf2] bg-[#f6f5f8]',
    focus: 'border-[#3b82f6] bg-[#f6f5f8] ring-2 ring-[#bfdbfe]',
    error: 'border-[#ef4444] bg-[#f6f5f8] ring-2 ring-[#fecaca]',
    success: 'border-[#22c55e] bg-[#f6f5f8] ring-2 ring-[#bbf7d0]',
  }
  return [baseClassName, stateClasses[state] || stateClasses.default].join(' ')
}

function FieldError({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: -2 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -2 }}
      className="absolute left-0 top-[calc(100%+2px)] text-[10.5px] font-semibold leading-tight tracking-tight text-[#ef4444]"
    >
      {children}
    </motion.span>
  )
}

const MotionDiv = motion.div
const MotionForm = motion.form

export default function AnimatedContactForm() {
  const [formData, setFormData] = useState(initialFormState)
  const [activeField, setActiveField] = useState('')
  const [submitState, setSubmitState] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [submittedName, setSubmittedName] = useState('')
  const [fieldErrors, setFieldErrors] = useState({})

  const avatarState = useMemo(() => {
    if (submitState === 'success') return 'success'
    if (activeField === 'phone') return 'phone'
    if (activeField === 'message') return 'focus'
    return 'idle'
  }, [activeField, submitState])

  const nameFieldState = getFieldBorderState('name', formData.name, activeField, fieldErrors)
  const phoneFieldState = getFieldBorderState('phone', formData.phone, activeField, fieldErrors)
  const emailFieldState = getFieldBorderState('email', formData.email, activeField, fieldErrors)
  const serviceFieldState = getFieldBorderState('service', formData.service, activeField, fieldErrors)
  const messageFieldState = getFieldBorderState('message', formData.message, activeField, fieldErrors)

  const handleChange = (event) => {
    const { name, value } = event.target
    const nextFormData = { ...formData, [name]: value }
    setFormData(nextFormData)
    setErrorMessage('')

    // Clear individual field error on change to give immediate feedback
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  const handleFieldBlur = (event) => {
    const { name, value } = event.target
    setActiveField('')
    
    // Only validate if the user actually typed something
    // If it's left empty, we remove any error instead of validating
    if (!value.trim()) {
      setFieldErrors((prev) => ({ ...prev, [name]: '' }))
    } else {
      const fieldError = validateField(name, value)
      setFieldErrors((prev) => ({ ...prev, [name]: fieldError }))
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setErrorMessage('')

    const sanitizedFormData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      service: formData.service.trim(),
      message: formData.message.trim(),
    }

    const validationErrors = validateFormData(sanitizedFormData)
    const errorsToSet = {}
    let hasErrors = false

    // Identify all fields with errors
    Object.entries(validationErrors).forEach(([key, value]) => {
      if (value) {
        errorsToSet[key] = value
        hasErrors = true
      }
    })

    if (hasErrors) {
      setFieldErrors(errorsToSet)
      setSubmitState('error')
      return
    }

    if (!FORMSUBMIT_ENDPOINT) {
      setSubmitState('error')
      setErrorMessage('The contact form is not configured yet.')
      return
    }

    setFieldErrors({})
    setSubmitState('sending')

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          ...sanitizedFormData,
          _subject: `New ${sanitizedFormData.service} enquiry from ${sanitizedFormData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'FormSubmit submission failed.')
      }

      setSubmittedName(sanitizedFormData.name)
      setFormData(initialFormState)
      setActiveField('')
      setFieldErrors({})
      setErrorMessage('')
      setSubmitState('success')
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setSubmitState('error')
      setErrorMessage('We could not send your message right now. Please try again in a moment.')
    }
  }

  const baseInputClass = "w-full rounded-[5px] bg-[#f6f5f8] px-3 text-[13px] font-medium text-[#101828] outline-none transition placeholder:text-[13px] placeholder:font-medium placeholder:text-[#8D8D90] h-[34px] sm:h-[36px] lg:h-[38px]"
  const baseTextareaClass = "w-full leading-[1.45] resize-none rounded-[5px] bg-[#f6f5f8] px-3 py-2.5 text-[13px] font-medium text-[#101828] outline-none transition placeholder:text-[13px] placeholder:font-medium placeholder:text-[#8D8D90] h-[66px] sm:h-[70px] lg:h-[76px]"

  return (
    <section className="section-spacing relative w-full overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute left-[12%] top-[18%] h-[190px] w-[190px] rounded-full bg-[radial-gradient(circle,rgba(255,192,172,0.3)_0%,rgba(255,192,172,0)_74%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(147,181,255,0.26)_0%,rgba(147,181,255,0)_76%)] blur-3xl" />

      <div className="site-container relative w-full">
        <div className="relative mx-auto w-full max-w-[980px] 2xl:max-w-[1180px]">
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            // Scaled up height and width to provide room for validation gaps
            className="relative mx-auto w-full max-w-full overflow-visible lg:h-[480px] lg:max-w-[840px] 2xl:h-[520px] 2xl:max-w-[920px]"
          >
            <div className="hidden lg:absolute lg:-left-[148px] lg:bottom-0 lg:block lg:w-[210px] 2xl:-left-[176px] 2xl:w-[236px]">
              {/* Scaled Avatar height slightly to match the new card height gracefully */}
              <ContactAvatarCanvas status={avatarState} className="h-[340px] 2xl:h-[380px]" />
            </div>

            <div className="w-full rounded-[30px] border border-white/70 bg-white px-5 py-6 shadow-[0_26px_70px_rgba(15,23,42,0.1)] sm:px-8 sm:py-7 lg:h-full lg:px-12 lg:py-9 2xl:px-[3.75rem] 2xl:py-11">
              <div className="mb-6 lg:hidden">
                <ContactAvatarCanvas status={avatarState} className="mx-auto max-w-[210px] sm:max-w-[228px]" />
              </div>

              <div className="mx-auto flex w-full max-w-[560px] flex-col items-center gap-2 text-center 2xl:max-w-[620px]">
                <h1 className="font-[var(--font-heading)] text-[28px] font-bold leading-[1.03] tracking-[-0.05em] text-[#101828] sm:text-[34px] md:text-[38px] lg:text-[40px] 2xl:text-[42px]">
                  Let&apos;s build{' '}
                  <CurvedUnderlineText className="pb-[0.2em]" lineClassName="2xl:h-[0.46em] h-[0.38em] w-full left-[2%] -bottom-[4px] sm:-bottom-[6px] md:-bottom-[8px] lg:-bottom-[10px] xl:-bottom-[12px] ">
                    your plan
                  </CurvedUnderlineText>
                  {' '}together!
                </h1>
                <p className="mx-auto mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16 max-w-[440px] text-center text-[13px] font-medium leading-[1.42] text-[#666f80] lg:text-[14px] xl:text-[15px] 2xl:max-w-[490px] 2xl:text-[17px] pt-2">
                  Have a question about training, nutrition, or which program fits you
                  best? Reach out we&apos;ll help you find your next step forward
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitState === 'success' ? (
                  <MotionDiv
                    key="success"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="flex min-h-[280px] w-full flex-col items-center justify-center px-2 py-8 text-center lg:min-h-[260px]"
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ecfdf3] text-[#12b76a]">
                      <CheckCircle2 className="h-9 w-9" />
                    </div>
                    <h2 className="mt-6 text-[32px] font-semibold tracking-[-0.04em] text-[#101828]">
                      Message sent
                    </h2>
                    <p className="mt-3 max-w-[34ch] text-[17px] leading-[1.7] text-[#667085]">
                      Thanks, {submittedName || 'there'}. Your message has been sent successfully. We&apos;ll get back to you soon.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormData(initialFormState)
                        setSubmitState('idle')
                        setActiveField('')
                        setErrorMessage('')
                      }}
                      className="mt-6 inline-flex min-h-[46px] items-center justify-center rounded-full border border-[#d0d5dd] px-5 text-[16px] font-semibold text-[#101828] transition hover:border-[#f45328] hover:text-[#f45328]"
                    >
                      Send another message
                    </button>
                  </MotionDiv>
                ) : (
                  <MotionForm
                    key="form"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    onSubmit={handleSubmit}
                    // Scaled max-width for internal form container
                    className="mx-auto mt-6 w-full max-w-[740px] sm:mt-7 lg:flex lg:h-full lg:flex-col 2xl:max-w-[800px]"
                    noValidate
                  >
                    <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6 lg:mt-1 2xl:gap-x-6 2xl:gap-y-7">
                      <div className="relative">
                        <label htmlFor="contact-name" className="mb-1.5 block text-[14px] font-semibold leading-none text-[#101828]">
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setActiveField('name')}
                          onBlur={handleFieldBlur}
                          placeholder="Enter your full name"
                          autoComplete="name"
                          aria-invalid={fieldErrors.name ? 'true' : 'false'}
                          className={getFieldClassName(baseInputClass, nameFieldState)}
                        />
                        <AnimatePresence>
                          {fieldErrors.name && (
                            <FieldError>{fieldErrors.name}</FieldError>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="relative">
                        <label htmlFor="contact-phone" className="mb-1.5 block text-[14px] font-semibold leading-none text-[#101828]">
                          Contact
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setActiveField('phone')}
                          onBlur={handleFieldBlur}
                          placeholder="e.g. +91 9876543210"
                          autoComplete="tel"
                          aria-invalid={fieldErrors.phone ? 'true' : 'false'}
                          className={getFieldClassName(baseInputClass, phoneFieldState)}
                        />
                        <AnimatePresence>
                          {fieldErrors.phone && (
                            <FieldError>{fieldErrors.phone}</FieldError>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="relative">
                        <label htmlFor="contact-email" className="mb-1.5 block text-[14px] font-semibold leading-none text-[#101828]">
                          Email
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setActiveField('email')}
                          onBlur={handleFieldBlur}
                          placeholder="hello@webvision.com"
                          autoComplete="email"
                          aria-invalid={fieldErrors.email ? 'true' : 'false'}
                          className={getFieldClassName(baseInputClass, emailFieldState)}
                        />
                        <AnimatePresence>
                          {fieldErrors.email && (
                            <FieldError>{fieldErrors.email}</FieldError>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="relative">
                        <label htmlFor="contact-service" className="mb-1.5 block text-[14px] font-semibold leading-none text-[#101828]">
                          Service
                        </label>
                        <div className="relative w-full">
                          <select
                            id="contact-service"
                            name="service"
                            required
                            value={formData.service}
                            onChange={handleChange}
                            onFocus={() => setActiveField('service')}
                            onBlur={handleFieldBlur}
                            aria-invalid={fieldErrors.service ? 'true' : 'false'}
                            className={[
                              getFieldClassName(
                                `appearance-none pr-9 ${baseInputClass}`,
                                serviceFieldState,
                              ),
                              formData.service ? 'bg-[#f6f5f8] text-[#101828]' : 'bg-[#f6f5f8] text-[#8D8D90]',
                            ].join(' ')}
                          >
                            <option value="" disabled>
                              Select your service
                            </option>
                            <option value="Web Development">Web Development</option>
                            <option value="UI/UX Design">UI/UX Design</option>
                            <option value="Brand Identity">Brand Identity</option>
                            <option value="Marketing Strategy">Marketing Strategy</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#98a2b3] stroke-[2.5]" />
                        </div>
                        <AnimatePresence>
                          {fieldErrors.service && (
                            <FieldError>{fieldErrors.service}</FieldError>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="relative">
                        {/* Changed mb-2.5 to mb-1.5 to exactly match the other fields */}
                        <label htmlFor="contact-message" className="mb-1.5 block text-[14px] font-semibold leading-none text-[#101828]">
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          name="message"
                          required
                          
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setActiveField('message')}
                          onBlur={handleFieldBlur}
                          placeholder="Tell me about your goals or what you need."
                          aria-invalid={fieldErrors.message ? 'true' : 'false'}
                          className={getFieldClassName(baseTextareaClass, messageFieldState)}
                        />
                        <AnimatePresence>
                          {fieldErrors.message && (
                            <FieldError>{fieldErrors.message}</FieldError>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="flex flex-col pt-[12px] sm:pt-0">
                        {/* Changed mb-2.5 to mb-1.5 to exactly match the other fields */}
                        <label className="mb-1.5 hidden text-[14px] font-semibold leading-none opacity-0 sm:block" aria-hidden="true">
                          Spacer
                        </label>
                        <div className="flex w-full items-center sm:h-[70px] lg:h-[76px]">
                          {/* Increased button heights: from 40px to 46px standard, and 44px to 50px on 2xl */}
                          <Button
                            type="submit"
                            size="hero"
                            disabled={submitState === 'sending'}
                            className="w-full [&>button]:h-[46px] [&>button]:w-full [&>button]:pl-5 [&>button]:pr-[54px] [&>button]:text-[11.5px] [&>button_span:last-child]:h-[46px] [&>button_span:last-child]:w-[46px] 2xl:[&>button]:h-[50px] 2xl:[&>button]:text-[12.5px] 2xl:[&>button_span:last-child]:h-[50px] 2xl:[&>button_span:last-child]:w-[50px]"
                          >
                            {submitState === 'sending' ? 'Sending...' : 'Send Message'}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {submitState === 'error' && errorMessage && (
                      <p className="mt-3 text-[12px] font-bold text-[#F45328]">
                        {errorMessage}
                      </p>
                    )}
                  </MotionForm>
                )}
              </AnimatePresence>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  )
}
