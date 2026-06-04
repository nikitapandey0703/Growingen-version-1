import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import HeroYellowUnderlineText from '../../../components/common/HeroYellowUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

const MotionDiv = motion.div

const timelineSteps = [
  {
    id: 1,
    tag: 'FOUNDATION',
    title: 'Building Before The Company Even Existed',
    description:
      'Before Growingen had a name, the work had already started through experiments in strategy, design, and digital execution.',
    images: [
      '/images/about/timeline-brand-experiments-primary.webp',
      '/images/about/timeline-brand-experiments-secondary.webp',
      
    ],
  },
  {
    id: 2,
    tag: '12+ YEARS',
    title: 'Learning Through Real Projects',
    description:
      'Small projects became a training ground for understanding what makes brands earn trust and stay memorable.',
    images: [
      '/images/about/timeline-real-projects-primary.webp',
      '/images/about/timeline-real-projects-secondary.webp',
     
    ],
  },
  {
    id: 3,
    tag: 'KEY REALIZATION',
    title: 'Seeing The Gap',
    description:
      'Most teams delivered disconnected services. The deeper need was a system where brand, product, and marketing could work together.',
    images: [
      '/images/about/timeline-market-gap-primary.webp',
      '/images/about/timeline-market-gap-secondary.webp',
      
    ],
  },
  {
    id: 4,
    tag: 'LAUNCH',
    title: 'From Freelance Thinking To Systems Thinking',
    description:
      'The approach evolved from isolated execution into repeatable frameworks built around growth, usability, and clarity.',
    images: [
      '/images/about/timeline-systems-thinking-primary.webp',
      '/images/about/timeline-systems-thinking-secondary.webp',
      
    ],
  },
  {
    id: 5,
    tag: 'YEAR 1',
    title: 'Design Became A Growth Tool',
    description:
      'Interfaces, websites, and campaign assets were shaped to do more than look good. They had to convert, guide, and scale.',
    images: [
      '/images/about/timeline-growth-design-primary.webp',
      '/images/about/timeline-growth-design-secondary.webp',
      
    ],
  },
  {
    id: 6,
    tag: 'IMPACT',
    title: 'Technology Closed The Loop',
    description:
      'Custom builds and better systems made it possible to connect strategy with execution instead of treating them as separate tracks.',
    images: [
     
      '/images/about/timeline-impact-primary.webp',
      '/images/about/timeline-impact-secondary.webp',
    ],
  },
  {
    id: 7,
    tag: 'TODAY & BEYOND',
    title: 'The Birth of Growingen',
    description:
      'All these lessons, frameworks, and successful experiments naturally converged into a single unified entity. Growingen was finally born.',
    images: [
      '/images/about/timeline-today&beyond-primary.webp',
      '/images/about/timeline-today&beyond-secondary.webp',
      
    ],
  },
]

const closingOffers = [
  {
    title: 'Strategy First',
    description: 'Product And User Journey, Brand Architecture & Positioning, Brand Communication Strategy.',
    icon: '/images/about/business-strategy.webp',
  },
  {
    title: 'Design With Purpose',
    description: 'UI/UX, Visual Identity System, Virtual Experiences, 3D, Webflow Production.',
    icon: '/images/about/design.png',
  },
  {
    title: 'Technology That Scales',
    description: 'Build Frameworks, WebGL & Interactive, Full-Stack Web App.',
    icon: '/images/about/technology.png',
  },
  {
    title: 'Marketing That Converts',
    description: 'Lead Generation Powered By Brand, Content And Strategic Marketing, SEO And CRO.',
    icon: '/images/about/marketing-line.webp',
  },
]

function TimelineImageCard({ item, isActive }) {
  const [stack, setStack] = useState(item.images)

  useEffect(() => {
    if (stack.length <= 1) {
      return undefined
    }

    const timer = window.setInterval(() => {
      setStack((current) => {
        const next = [...current]
        const topCard = next.pop()

        if (!topCard) {
          return current
        }

        next.unshift(topCard)
        return next
      })
    }, 2200)

    return () => {
      window.clearInterval(timer)
    }
  }, [stack.length])

  return (
    <div
      className={[
        'relative flex w-full justify-start transition-all duration-500 md:w-[calc(50%_-_18px)] md:justify-center lg:w-[calc(50%_-_34px)]',
        isActive ? 'scale-[1.02]' : 'scale-100',
      ].join(' ')}
    >
      <div
        className="relative h-[236px] w-[252px] max-w-full md:h-[271px] md:w-[288px]"
        style={{ perspective: 700 }}
      >
        {stack.map((image, index) => (
          <MotionDiv
            key={`${item.id}-${image}`}
            className="absolute inset-0"
            animate={{
              rotateZ: [-5, 4, -7][index] ?? -5,
              scale: [0.9, 0.95, 1][index] ?? 1,
              x: [18, 10, 0][index] ?? 0,
              y: [8, 3, -2][index] ?? 0,
              transformOrigin: '18% 84%',
            }}
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 22,
            }}
            style={{ zIndex: index + 1 }}
          >
            <div
              className={[
                'h-full w-full overflow-hidden rounded-[14px] shadow-[0_18px_36px_rgba(15,23,42,0.16)]',
                isActive ? 'shadow-[0_24px_44px_rgba(15,23,42,0.2)]' : '',
              ].join(' ')}
            >
              <img
                src={image}
                alt={item.title}
                className="h-full w-full object-cover"
              />
            </div>
          </MotionDiv>
        ))}
      </div>
    </div>
  )
}

function TimelineTextCard({ item, align, isActive }) {
  const isLeft = align === 'left'

  const alignmentClass = isLeft
    ? 'items-end text-right md:items-start md:text-left'
    : 'items-end text-right'
    
  const numberPosClass = isLeft
    ? 'left-4 top-4 md:left-auto md:right-6 md:top-6'
    : 'left-4 top-4 md:left-6 md:top-6'

  let bgFlipClass = ''
  if (isLeft) {
    bgFlipClass = 'max-md:-scale-x-100'
  } else {
    bgFlipClass = '-scale-x-100'
  }

  return (
    <article className="group relative z-10 w-full min-w-0 md:w-[calc(50%_-_18px)] lg:w-[calc(50%_-_26px)]">
      <div
        className={[
          'relative h-[176px] w-full drop-shadow-[0_12px_22px_rgba(15,23,42,0.06)] transition-all duration-500 ease-out md:h-[198px] lg:h-[216px] xl:h-[228px]',
          isActive ? 'scale-[1.02] drop-shadow-[0_20px_35px_rgba(244,83,40,0.15)]' : 'scale-100',
        ].join(' ')}
      >
        <img
          src="/images/portfolio/subtract-white.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-[-1%] h-full w-[102%] max-w-none object-fill transition-opacity duration-500 ease-out ${bgFlipClass} ${
            isActive ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src="/images/portfolio/Subtract-colored.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-[-1%] h-full w-[102%] max-w-none object-fill transition-opacity duration-500 ease-out ${bgFlipClass} ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute inset-0 z-10 flex flex-col justify-center overflow-hidden px-4 py-4 transition-colors duration-500 ease-out sm:px-7 sm:py-6 lg:px-8 lg:py-7 xl:px-9 ${alignmentClass}`}
        >
          <span
            className={`pointer-events-none absolute select-none text-[28px] font-bold leading-none transition-all duration-500 ease-out sm:text-[38px] lg:text-[46px] ${numberPosClass} ${
              isActive ? 'text-white opacity-20' : 'text-[#F45328] opacity-10'
            }`}
          >
            {String(item.id).padStart(2, '0')}
          </span>

          <div className={`relative z-10 flex w-full max-w-[95%] flex-col md:max-w-[260px] lg:max-w-[300px] ${alignmentClass}`}>
            
            {item.tag && (
              <span
                className={[
                  'mb-0.5 text-[clamp(6px,1.1vw,18px)] font-light uppercase tracking-[0.18em] leading-none transition-colors duration-500 ease-out',
                  isActive ? '!text-white/80' : '!text-[#7a7f8e]',
                ].join(' ')}
              >
                {item.tag}
              </span>
            )}

            <h3
              className={[
                'text-[18px] font-bold leading-[1.08] tracking-[-0.03em] transition-colors duration-500 ease-out md:text-[22px] md:leading-[1.18] lg:text-[24px]',
                isActive ? '!text-white' : '!text-black',
              ].join(' ')}
            >
              {item.title}
            </h3>
            
            <div
              className={[
                'mt-1 text-[13px] font-medium leading-[1.34] transition-colors duration-500 ease-out md:mt-1.5 md:text-[14px] md:leading-[1.58] lg:text-[15px]',
                isActive ? '!text-white/90' : '!text-black',
              ].join(' ')}
            >
              {item.description}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

function TimelineBubble({ item, align, isActive }) {
  const isLeft = align === 'left'

  return (
    <div
      className={[
        'relative flex justify-between gap-6 md:gap-4',
        'flex-col items-start md:items-center',
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse',
        'pl-[44px] pr-2 md:px-0' 
      ].join(' ')}
    >
      <TimelineTextCard item={item} align={align} isActive={isActive} />
      <TimelineImageCard item={item} isActive={isActive} />
    </div>
  )
}

export default function PreCompanyTimelineAbout() {
  const sectionRef = useRef(null)
  const timelineTrackRef = useRef(null)
  const finalConnectorRef = useRef(null)
  const finalLineRef = useRef(null)
  const dotRefs = useRef([])
  
  const [progress, setProgress] = useState(0)
  const [dotOffsets, setDotOffsets] = useState([])
  const [trackHeight, setTrackHeight] = useState(0) 

  const { scrollYProgress } = useScroll({
    target: timelineTrackRef,
    offset: ["start 35%", "end 35%"]
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0.001, 1])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest)
  })

  useLayoutEffect(() => {
    const measureDots = () => {
      const trackRect = timelineTrackRef.current?.getBoundingClientRect()

      if (!trackRect) {
        return
      }

      setTrackHeight(trackRect.height)

      const nextDotOffsets = dotRefs.current.map((dot) => {
        if (!dot) {
          return null
        }

        const dotRect = dot.getBoundingClientRect()
        return dotRect.top + dotRect.height / 2 - trackRect.top
      })

      setDotOffsets(nextDotOffsets)
    }

    measureDots()

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(measureDots) : null

    if (timelineTrackRef.current) {
      resizeObserver?.observe(timelineTrackRef.current)
    }

    dotRefs.current.forEach((dot) => {
      if (dot) {
        resizeObserver?.observe(dot)
      }
    })

    window.addEventListener('resize', measureDots)

    return () => {
      resizeObserver?.disconnect()
      window.removeEventListener('resize', measureDots)
    }
  }, [])

  const filledTrackHeight = progress * trackHeight
  
  const finalConnectorStart = 0.99
  const finalConnectorProgress = Math.min(
    Math.max((progress - finalConnectorStart) / (1 - finalConnectorStart), 0),
    1,
  )

  return (
    <SectionWrapper ref={sectionRef} as="section" className="relative overflow-hidden bg-transparent section-spacing">
      <div className="pointer-events-none absolute left-[8%] top-[18%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(244,83,40,0.16)_0%,rgba(244,83,40,0.08)_45%,rgba(244,83,40,0)_75%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[12%] right-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(65,94,255,0.16)_0%,rgba(65,94,255,0.08)_45%,rgba(65,94,255,0)_75%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1180px] xl:px-10 ">
        <div className="mx-auto max-w-[600px] text-center">
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium uppercase tracking-[0.28em]">
            Before Growingen
          </p>
          <h2 className="mt-3 text-[32px] font-bold leading-[1.08] tracking-[-0.04em]  sm:text-[40px] lg:text-[50px]">
            Building Before The
            <br />
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em] -bottom-[0.20em]" lineClassName="h-[0.20em] !w-[50%] left-[22%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
               Company Even Existed
            </CurvedUnderlineText>
          </h2>
        </div>

        <div ref={timelineTrackRef} className="relative mx-auto mt-12 max-w-[940px] sm:mt-14 lg:mt-16 xl:mt-18 2xl:mt-20 xl:max-w-[980px]">
          
          {/* Timeline Tracking Line */}
          <div className="absolute bottom-0 left-[20px] top-0 w-px -translate-x-1/2 bg-[#d8dcef] md:left-1/2" />
          <div className="absolute bottom-0 left-[20px] top-0 w-[3px] -translate-x-1/2 md:left-1/2">
            {/* Using rounded-t-full so the bottom remains completely flat/flush for the connection */}
            <MotionDiv
              className="h-full w-full origin-top rounded-t-full bg-[linear-gradient(180deg,#f45328_0%,#7a4fff_48%,#5b4dff_100%)] shadow-[0_0_18px_rgba(122,79,255,0.18)]"
              style={{ scaleY }}
            />
          </div>

          <div className="space-y-12 md:space-y-6 lg:space-y-7">
            {timelineSteps.map((item, index) => {
              const dotOffset = dotOffsets[index]
              const isActive = dotOffset == null ? index === 0 : filledTrackHeight >= dotOffset - 2

              return (
                <div key={item.id} className="relative">
                  <div
                    ref={(node) => {
                      dotRefs.current[index] = node
                    }}
                    className={[
                      'absolute z-20 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 transition-all duration-300 md:h-4 md:w-4',
                      'left-[20px] top-[88px] md:left-1/2 md:top-1/2', 
                      isActive
                        ? 'border-white bg-[#f45328] shadow-[0_0_0_6px_rgba(244,83,40,0.14)]'
                        : 'border-[#cfd6e6] bg-white',
                    ].join(' ')}
                  />

                  <TimelineBubble
                    item={item}
                    align={index % 2 === 0 ? 'right' : 'left'}
                    isActive={isActive}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-14 max-w-[1140px] sm:mt-20">
        
        {/* CHANGED: Removed top-[8px] to top-0 to close the gap completely */}
        <div ref={finalConnectorRef} className="pointer-events-none absolute left-[20px] top-[-56px] h-[56px] w-4 -translate-x-1/2 sm:top-[-80px] sm:h-[80px] md:left-1/2">
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-[#d8dcef]" />
          <div ref={finalLineRef} className="absolute bottom-0 left-1/2 top-0 w-[3px] -translate-x-1/2">
            {/* Using rounded-b-full so the top remains completely flat/flush for the connection */}
            <MotionDiv
              className="h-full w-full origin-top rounded-b-full bg-[linear-gradient(180deg,#5b4dff_0%,#f45328_100%)]"
              style={{
                scaleY: Math.max(finalConnectorProgress, 0.001),
              }}
            />
          </div>
        </div>

        <div className="flex w-full flex-col overflow-hidden rounded-[28px] bg-[#f45328] shadow-[0_24px_50px_rgba(244,83,40,0.25)] lg:h-[492px] lg:flex-row lg:items-stretch lg:justify-between">
          
          <div className="flex flex-col justify-center px-7 py-8 lg:w-[50%] lg:px-[56px] lg:py-0">
            <h3 className="!text-white text-[34px] font-bold leading-[1.04] tracking-[-0.03em] sm:text-[42px] lg:text-[54px]">
              <span className="block whitespace-nowrap">Most Offer Services.</span>
              <HeroYellowUnderlineText className="hero-highlight mt-2 inline-block whitespace-nowrap !text-white pb-2" lineClassName=" left-[10%] h-[16px] !w-[70%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
                We Build Systems.
              </HeroYellowUnderlineText>
            </h3>

            <p className="mt-7 pt-4 text-[15px] leading-[1.6] !text-white lg:max-w-[430px]">
              Because from experience, we've seen the same problem repeat across every industry we've worked in.
            </p>

            <ul className="mt-5 space-y-3">
              {[
                "Great marketing fails without strong branding",
                "Good products struggle without the right experience",
                "Websites don't perform without strategy behind them",
                "So we changed the approach entirely."
              ].map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-[15px] leading-[1.45] !text-white">
                  <span className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-[6px] bg-white shadow-[0_6px_14px_rgba(0,0,0,0.08)] ${i === 3 ? 'text-[#10b981]' : 'text-[#f45328]'}`}>
                    {i === 3 ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 5L4.5 7.5L8 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2L8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                        <path d="M8 2L2 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    )}
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 pt-4 text-[15px] leading-[1.6] !text-white lg:max-w-[430px]">
              We don't just execute. We understand structure, and then build - ensuring every part of your growth engine works together.
            </p>
          </div>

          <div className="flex flex-col justify-center px-7 pb-8 lg:w-[45%] lg:pl-0 lg:pr-[56px] lg:py-0">
            <div className="flex w-full flex-col gap-3.5">
              {closingOffers.map((offer) => (
                <div
                  key={offer.title}
                  className="flex min-h-[90px] w-full items-center gap-4 rounded-[16px] bg-white p-4 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:scale-[1.01] lg:pr-5"
                >
                  <div className="flex h-[56px] w-[56px] flex-shrink-0 items-center justify-center rounded-[12px] border-[0.5px] border-black/30 shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
                    <img src={offer.icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-bold leading-[1.1] tracking-[-0.02em] ">
                      {offer.title}
                    </h4>
                    <p className="mt-1 text-[15px] leading-[1.45] text-[#6b7280]">
                      {offer.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}