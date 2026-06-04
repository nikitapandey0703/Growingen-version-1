import { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'motion/react'
import { Link } from 'react-router-dom'
import OrangeButtonLabel from '../../../components/common/OrangeButtonLabel'
import SectionWrapper from '../../../components/common/SectionWrapper'

const MotionDiv = motion.div

const stackedPromoCards = [
  {
    id: 'projects',
    stat: '100+',
    label: 'Live Projects',
    detailPrimary: 'Real solutions delivered',
    detailSecondary: 'across industries.',
    theme: 'white',
    icon: '/images/hero/projects.webp',
  },
  {
    id: 'team',
    stat: '10+',
    label: 'Team Members',
    detailPrimary: 'Collaboration that drives',
    detailSecondary: 'innovation.',
    theme: 'orange',
    icon: '/images/hero/team-member.webp',
  },
  {
    id: 'clients',
    stat: '15+',
    label: 'Satisfied Clients',
    detailPrimary: 'Building long-term',
    detailSecondary: 'partnerships through results.',
    theme: 'white',
    icon: '/images/hero/customer.webp',
  },
  {
    id: 'expertise',
    stat: '12+',
    label: 'Years of Expertise',
    detailPrimary: 'Decades of design and',
    detailSecondary: 'strategy mastery.',
    theme: 'orange',
    icon: '/images/hero/expert.webp',
  },
]

function CardRotate({ children, onSendToBack, sensitivity, disableDrag = false }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [16, -16])
  const rotateY = useTransform(x, [-100, 100], [-16, 16])

  function handleDragEnd(_, info) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack()
    } else {
      x.set(0)
      y.set(0)
    }
  }

  if (disableDrag) {
    return (
      <MotionDiv className="absolute inset-0 cursor-pointer" style={{ x: 0, y: 0 }}>
        {children}
      </MotionDiv>
    )
  }

  return (
    <MotionDiv
      className="absolute inset-0 cursor-grab active:cursor-grabbing"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.55}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </MotionDiv>
  )
}

function PromoStack({
  sensitivity = 110,
  animationConfig = { stiffness: 260, damping: 22 },
  autoplay = true,
  autoplayDelay = 1800,
  pauseOnHover = true,
  mobileClickOnly = true,
  mobileBreakpoint = 1024,
}) {
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [stack, setStack] = useState(stackedPromoCards)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < mobileBreakpoint)
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
      if (index === -1) return prev
      const [card] = next.splice(index, 1)
      next.unshift(card)
      return next
    })
  }

  useEffect(() => {
    if (!autoplay || stack.length <= 1 || isPaused) return undefined
    const interval = window.setInterval(() => {
      const topCardId = stack[stack.length - 1].id
      sendToBack(topCardId)
    }, autoplayDelay)
    return () => window.clearInterval(interval)
  }, [autoplay, autoplayDelay, stack, isPaused])

  return (
    <div
      className="relative h-[250px] w-[220px] sm:h-[285px] sm:w-[246px] md:h-[320px] md:w-[286px]"
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
          <MotionDiv
            /* 
               UPDATED PADDING: 
               Changed from 'p-7' to responsive values.
               Increased bottom padding (pb-11) and top padding (pt-9) for balance.
            */
            className={[
              'flex h-full w-full flex-col rounded-[24px] px-7 pt-8 pb-10 sm:pt-9 sm:pb-11 lg:p-8 shadow-[0_24px_44px_rgba(15,23,42,0.2)]',
              card.theme === 'white'
                ? 'border border-[#f3f3f3] bg-white text-[#111111] shadow-[0_22px_44px_rgba(255,255,255,0.2)]'
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
              <p className="text-[50px] font-semibold leading-none tracking-[-0.06em] sm:text-[58px]">
                {card.stat}
              </p>
              <p
                className={[
                  'mt-1 w-full text-[16px] font-bold leading-[1.2] tracking-[-0.03em] sm:text-[18px] lg:text-[22px]',
                  card.theme === 'white' ? '' : 'text-white',
                ].join(' ')}
              >
                {card.label}
              </p>
            </div>

            <div className="mt-3 flex items-center sm:mt-4">
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

            <div className="mt-3 sm:mt-4">
              <p className={['text-[12px] font-light leading-[1.25] sm:text-[15px] lg:text-[16px]', card.theme === 'white' ? 'text-[#111111]/85' : 'text-white/90'].join(' ')}>
                {card.detailPrimary}
              </p>
              <p className={['text-[12px] font-light leading-[1.25] sm:text-[15px] lg:text-[16px]', card.theme === 'white' ? 'text-[#111111]/85' : 'text-white/90'].join(' ')}>
                {card.detailSecondary}
              </p>
            </div>

            {/* Icon Container: Lifted by the container's pb-10 and adjusted padding top */}
            <div className="mt-auto flex justify-center pt-2 sm:pt-4">
              <img
                src={card.icon}
                alt=""
                aria-hidden="true"
                className="h-[38px] w-[38px] object-contain sm:h-[42px] sm:w-[42px] md:h-[44px] md:w-[44px]"
              />
            </div>
          </MotionDiv>
        </CardRotate>
      ))}
    </div>
  )
}

export default function PromoBannerSection() {
  return (
    <SectionWrapper
      as="section"
      className="section-spacing relative isolate mt-14 overflow-hidden bg-transparent sm:mt-16 lg:mt-0 xl:mx-4"
    >
      <div className="section-content">
        <div className="relative">
          <div className="mx-auto w-full max-w-[1060px]">
            <div className="relative flex flex-col gap-8 lg:min-h-[460px] lg:justify-center">
              
              {/* Desktop View (LG and above) */}
              <div className="relative z-20 mx-auto hidden lg:absolute lg:-left-[20px] lg:top-1/2 lg:block lg:mx-0 lg:-translate-y-1/2">
                <PromoStack />
              </div>

              {/* Black Container */}
              <div
                className="relative overflow-hidden rounded-[28px] bg-[#0b0b0b] px-5 py-6 text-white shadow-[0_24px_44px_rgba(15,23,42,0.18)] sm:px-8 sm:py-9 lg:ml-[60px] lg:py-10 lg:pl-[270px] lg:pr-10"
                style={{ fontFamily: 'Visby', color: '#ffffff' }}
              >
                <div className="pointer-events-none absolute right-[-30px] top-[-24px] h-[136px] w-[136px] rounded-full bg-[radial-gradient(circle,rgba(255,114,74,0.16)_0%,rgba(255,114,74,0.04)_48%,rgba(255,114,74,0)_76%)] blur-2xl" />

                {/* Mobile/Tablet Stack View */}
                <div className="relative lg:hidden">
                  <div className="flex justify-center pb-10 sm:pb-14 md:pb-16">
                    <PromoStack />
                  </div>
                </div>

                <div className="relative mx-auto max-w-[620px] text-center lg:mx-0 lg:text-left">
                  <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] sm:text-[40px] lg:text-[50px]" style={{ color: '#ffffff' }}>
                    Ready to Elevate Your
                    <br />
                    Digital Presence?
                  </h2>
                  <p className="mt-3 mx-auto lg:mx-0 max-w-[44ch] text-[14px] leading-[1.55] sm:text-[15px]" style={{ color: '#ffffff' }}>
                    Grow your business with smart digital solutions. From stunning websites and SEO that brings real results — we help your brand grow online.
                  </p>

                  <Link
                    to="/contact"
                    className="mt-6 mx-auto lg:mx-0 flex h-[44px] w-[200px] items-center justify-center rounded-full bg-[#ff5b2e] text-[15px] font-medium text-white transition-transform duration-300 ease-out hover:-translate-y-0.5 sm:h-[48px] sm:w-[220px] lg:h-[50px] lg:w-[240px]"
                  >
                    <OrangeButtonLabel>Book A Demo</OrangeButtonLabel>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}