import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import { Link } from 'react-router-dom'

const stackedPromoCards = [
  {
    id: 'expertise',
    stat: '15+',
    label: 'Years of Expertise',
    detailPrimary: '15+ Years of',
    detailSecondary: 'Industry Expertise',
    theme: 'orange',
  },
  {
    id: 'clients',
    stat: '15+',
    label: 'Satisfied Clients',
    detailPrimary: '15+ Happy',
    detailSecondary: 'Satisfied Clients',
    theme: 'white',
  },
  {
    id: 'team',
    stat: '10+',
    label: 'Team Members',
    detailPrimary: '10+ Skilled',
    detailSecondary: 'Team Members',
    theme: 'orange',
  },
  {
    id: 'operations',
    stat: '1',
    label: 'Year of Successful Operations',
    detailPrimary: '1 Year of',
    detailSecondary: 'Successful Operations',
    theme: 'white',
  },
]

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [16, -16])
  const rotateY = useTransform(x, [-100, 100], [-16, 16])

  function handleDragEnd(_, info) {
    if (
      Math.abs(info.offset.x) > sensitivity ||
      Math.abs(info.offset.y) > sensitivity
    ) {
      onSendToBack()
    } else {
      x.set(0)
      y.set(0)
    }
  }

  if (disableDrag) {
    return (
      <motion.div className="absolute inset-0 cursor-pointer" style={{ x: 0, y: 0 }}>
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.55}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  )
}

function PromoStack({
  sensitivity = 110,
  animationConfig = { stiffness: 260, damping: 22 },
  autoplay = true,
  autoplayDelay = 1800,
  pauseOnHover = true,
  mobileClickOnly = true,
  mobileBreakpoint = 768,
}) {
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [stack, setStack] = useState(stackedPromoCards)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [mobileBreakpoint])

  const shouldDisableDrag = mobileClickOnly && isMobile
  const shouldEnableClick = shouldDisableDrag

  const sendToBack = (id) => {
    setStack((prev) => {
      const next = [...prev]
      const index = next.findIndex((card) => card.id === id)

      if (index === -1) {
        return prev
      }

      const [card] = next.splice(index, 1)
      next.unshift(card)
      return next
    })
  }

  useEffect(() => {
    if (!autoplay || stack.length <= 1 || isPaused) {
      return undefined
    }

    const interval = window.setInterval(() => {
      const topCardId = stack[stack.length - 1].id
      sendToBack(topCardId)
    }, autoplayDelay)

    return () => window.clearInterval(interval)
  }, [autoplay, autoplayDelay, stack, isPaused])

  return (
    <div
      className="relative h-[272px] w-[246px] sm:h-[312px] sm:w-[286px]"
      style={{ perspective: 700 }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {stack.map((card, index) => (
        <CardRotate
          key={card.id}
          onSendToBack={() => sendToBack(card.id)}
          sensitivity={sensitivity}
          disableDrag={shouldDisableDrag}
        >
          <motion.div
            className={[
              'flex h-full w-full flex-col rounded-[24px] p-7 shadow-[0_24px_44px_rgba(15,23,42,0.2)]',
              card.theme === 'white'
                ? 'border border-[#f3f3f3] bg-white  shadow-[0_22px_44px_rgba(255,255,255,0.2)]'
                : 'bg-[#ff5b2e] text-white shadow-[0_22px_40px_rgba(255,91,46,0.32)]',
            ].join(' ')}
            onClick={() => shouldEnableClick && sendToBack(card.id)}
            animate={{
              rotateZ: [-6, 3, -4, -8][index] ?? -4,
              scale: [0.86, 0.91, 0.96, 1][index] ?? 1,
              x: [30, 20, 10, 0][index] ?? 0,
              y: [12, 7, 2, -4][index] ?? 0,
              transformOrigin: '18% 84%',
            }}
            initial={false}
            transition={{
              type: 'spring',
              stiffness: animationConfig.stiffness,
              damping: animationConfig.damping,
            }}
          >
            <div>
              <p className="text-[52px] font-semibold leading-none tracking-[-0.06em] sm:text-[58px]">
                {card.stat}
              </p>
              {/* Bold text for the label */}
              <p
                className={[
                  'mt-2 w-full text-[16px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[18px] lg:text-[22px]',
                  card.theme === 'white' ? '' : 'text-white',
                ].join(' ')}
              >
                {card.label}
              </p>
            </div>

            <div className="mt-4 flex items-center">
              <span
                aria-hidden="true"
                className={[
                  'block h-px w-[84%]',
                  card.theme === 'white'
                    ? 'bg-[linear-gradient(90deg,rgba(17,17,17,0.22)_0%,rgba(17,17,17,0.08)_100%)]'
                    : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.68)_0%,rgba(255,255,255,0.14)_100%)]',
                ].join(' ')}
              />
            </div>

            <div className="mt-4">
              {/* Below text with SAME size as label, but NORMAL weight */}
              <p
                className={[
                  'text-[12px] font-light leading-[1.25] sm:text-[18px] lg:text-[16px]',
                  card.theme === 'white' ? 'text-[#111111]/85' : 'text-white/90',
                ].join(' ')}
              >
                {card.detailPrimary}
              </p>
              <p
                className={[
                  'text-[12px] font-light leading-[1.25] sm:text-[18px] lg:text-[16px]',
                  card.theme === 'white' ? 'text-[#111111]/85' : 'text-white/90',
                ].join(' ')}
              >
                {card.detailSecondary}
              </p>
            </div>

            <div className="mt-auto flex justify-center pt-4">
              <img
                src="/images/hero/brand-awareness_200+brands.svg"
                alt=""
                aria-hidden="true"
                className={[
                  'h-[38px] w-[38px] object-contain sm:h-[42px] sm:w-[42px]',
                  card.theme === 'white' ? 'brightness-0 saturate-0' : '',
                ].join(' ')}
              />
            </div>
          </motion.div>
        </CardRotate>
      ))}
    </div>
  )
}

function ServicePromoBanner() {
  return (
    <section className="relative flex w-full flex-col justify-center overflow-hidden bg-[linear-gradient(90deg,#2d2fd3_0%,#2576cf_48%,#13c6a7_100%)] py-12 lg:h-[360px] lg:py-0">
      <style>
        {`
          @keyframes drawEllipse {
            0% { stroke-dashoffset: 100; }
            100% { stroke-dashoffset: 0; }
          }
          .animate-draw-ellipse {
            stroke-dasharray: 100;
            stroke-dashoffset: 100;
            animation: drawEllipse 1.5s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards;
          }
        `}
      </style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-[10%] top-1/2 hidden -translate-y-1/2 text-[160px] font-bold tracking-[0.05em] text-transparent [-webkit-text-stroke:2px_#ffffff] [text-shadow:0_0_35px_rgba(255,255,255,0.4)] lg:block xl:-right-[5%] xl:text-[240px]"
      >
        BRAND
      </div>

      <div className="site-container relative z-10">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="max-w-[650px]">
            <h1 className="text-[32px] font-bold leading-[1.18] tracking-tight text-white sm:text-[40px] lg:text-[50px]">
              Why Most{' '}
              <span className="relative inline-block whitespace-nowrap text-white">
                <span className="relative z-10 text-white">Brands Fail</span>
                <svg
                  className="absolute -bottom-2 -left-4 -right-4 -top-1 z-0 h-[130%] w-[120%] text-[#FBBF24]"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 12 25 C 5 15 18 4 50 4 C 82 4 95 15 95 22 C 95 30 75 36 50 36 C 25 36 10 30 15 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    pathLength="100"
                    className="animate-draw-ellipse"
                  />
                </svg>
              </span>{' '}
              —
              <br />
              And How We Fix It
            </h1>

            <p className="mt-5 max-w-[55ch] text-[14px] font-normal leading-[1.65] text-white/90 sm:text-[15px] lg:text-[16px]">
              Most businesses invest in marketing... but ignore branding. <br className="hidden sm:block" />
              They run ads, post content, build websites yet struggle to stand out.
            </p>
            
            <p className="mt-6 max-w-[50ch] text-[15px] font-semibold leading-[1.55] text-white sm:text-[16px] lg:text-[17px]">
              Branding isn&apos;t an expense. It&apos;s the foundation <br className="hidden sm:block" />
              of everything that follows.
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center lg:mx-0 lg:max-w-[520px] lg:justify-end lg:pr-6 xl:max-w-[580px] xl:pr-10">
            <img
              src="/images/service/service-banner.webp"
              alt="Ant standing on an elephant to represent brand pressure and positioning"
              className="relative z-10 max-h-[280px] w-full object-contain drop-shadow-[0_24px_35px_rgba(15,23,42,0.25)] lg:max-h-[340px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PromoBannerSection({ variant = 'default' }) {
  if (variant === 'service') {
    return <ServicePromoBanner />
  }

  return (
    <section className="section-spacing relative overflow-hidden bg-transparent">
      <div className="site-container relative">
        <div className="mx-auto w-full max-w-[1060px]">
          <div className="relative flex flex-col gap-6 md:min-h-[326px] md:justify-center">
            
            <div className="relative z-20 mx-auto md:absolute md:-left-[10px] md:top-1/2 md:mx-0 md:-translate-y-1/2 lg:-left-[20px]">
              <PromoStack />
            </div>

            {/* 
              Shifted left padding (pl) down from 320px to 270px (lg) and 300px to 260px (md).
              This pulls the text block more left on the right side.
            */}
            <div
              className="relative overflow-hidden rounded-[28px] bg-[#0b0b0b] px-6 py-8 text-white shadow-[0_24px_44px_rgba(15,23,42,0.18)] sm:px-8 sm:py-9 md:ml-[80px] md:py-10 md:pl-[260px] md:pr-12 lg:ml-[60px] lg:pl-[270px]"
              style={{ fontFamily: 'Visby', color: '#ffffff' }}
            >
              <div className="pointer-events-none absolute right-[-30px] top-[-24px] h-[136px] w-[136px] rounded-full bg-[radial-gradient(circle,rgba(255,114,74,0.16)_0%,rgba(255,114,74,0.04)_48%,rgba(255,114,74,0)_76%)] blur-2xl" />

              <div className="relative max-w-[620px]">
                <h2
                  className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[40px] lg:text-[50px]"
                  style={{ color: '#ffffff' }}
                >
                  Ready to Elevate Your
                  <br />
                  Digital Presence?
                </h2>
                <p
                  className="mt-3 max-w-[44ch] text-[14px] leading-[1.55] sm:text-[15px]"
                  style={{ color: '#ffffff', marginTop: '0.5rem' }}
                >
                  Unlock The Power Of Cutting-Edge Digital Strategies With Boostip.
                  Whether You Need A Stunning Website, A Winning Social Media Campaign,
                  Or SEO That Drives Results, We&apos;ve Got You Covered.
                </p>

                {/* 
                  Fully curved borders (rounded-full)
                  Width 240px and Height 50px on laptop, scaling responsively down. 
                */}
                <Link
                  to="/contact"
                  className="mt-6 flex h-[44px] w-[200px] items-center justify-center rounded-full bg-[#ff5b2e] text-[15px] font-bold text-white transition-transform duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 sm:h-[48px] sm:w-[220px] sm:text-[16px] lg:h-[50px] lg:w-[240px]"
                >
                  Book A Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
