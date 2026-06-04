import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import TickerBanner from '../../../components/common/TickerBanner'

const cards = [
  {
    title: 'AI-Powered Software Solutions',
    imageSrc: '/images/featured/card-1.svg',
    badgeIconSrc: '/icons/ai-powered-white.svg',
    activeBadgeIconSrc: '/icons/ai-powered-orange.svg',
    badgeAlt: 'AI software solutions icon',
  },
  {
    title: 'Content & Campaign Management',
    imageSrc: '/images/featured/card-2.png',
    badgeIconSrc: '/icons/content-white.svg',
    activeBadgeIconSrc: '/icons/content-orange.svg',
    badgeAlt: 'Content and campaign management icon',
  },
  {
    title: 'Website & App Development',
    imageSrc: '/images/featured/card-3.png',
    badgeIconSrc: '/icons/website-development-white.svg',
    activeBadgeIconSrc: '/icons/website-development-orange.svg',
    badgeAlt: 'Website and app development icon',
  },
  {
    title: 'Social Media & Digital Marketing ',
    imageSrc: '/images/featured/card-4.png',
    badgeIconSrc: '/icons/social-media-white.svg',
    activeBadgeIconSrc: '/icons/social-media-orange.svg',
    badgeAlt: 'Digital marketing icon',
  },
  {
    title: 'Business Growth Strategy ',
    imageSrc: '/images/featured/card-5.png',
    badgeIconSrc: '/icons/business-growth-white.svg',
    activeBadgeIconSrc: '/icons/business-growth-orange.svg',
    badgeAlt: 'Business growth strategy icon',
  },
  {
    title: 'Branding & Creative Design',
    imageSrc: '/images/featured/card-6.png',
    badgeIconSrc: '/icons/branding-white.svg',
    activeBadgeIconSrc: '/icons/branding-orange.svg',
    badgeAlt: 'Branding and creative design icon',
  },
]

const tickerItems = [
  '15+ Years of expertise',
  '15+ Satisfied Clients',
  '10+ Team members',
  '1 Year of successful Operations',
]
const AUTO_PLAY_DELAY = 4200
const AUTO_PLAY_RESUME_DELAY = 5000
const SWIPE_THRESHOLD = 70

function FeatureArt({ imageSrc }) {
  return (
    <div className="relative w-full overflow-hidden rounded-[14px] border border-[#e4ebfb] bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.72)] h-[clamp(248px,55vw,304px)] lg:h-[clamp(318px,28vw,340px)] 2xl:h-[clamp(408px,26vw,436px)]">
      <img
        src={imageSrc}
        alt=""
        className="h-full w-full scale-[1.08] object-cover object-center"
      />
    </div>
  )
}

function FeatureCardFrame({ isActive }) {
  return (
    <svg
      viewBox="85 16 348.028 505.847"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={[
        'absolute inset-0 h-full w-full transition-[filter] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
        isActive
          ? 'drop-shadow-[0_24px_40px_rgba(15,23,42,0.16)]'
          : 'drop-shadow-[0_18px_34px_rgba(15,23,42,0.12)]',
      ].join(' ')}
    >
      <path
        d="M433.028 491.847C433.028 508.415 419.597 521.847 403.028 521.847H297.696C296.294 521.847 295.195 520.657 295.195 519.255C295.195 499.463 279.15 483.419 259.358 483.419C239.567 483.419 223.523 499.463 223.522 519.255C223.522 520.657 222.424 521.847 221.022 521.847H115C98.4315 521.847 85 508.415 85 491.847V46C85 29.4315 98.4315 16 115 16H403.028C419.597 16 433.028 29.4315 433.028 46V491.847Z"
        fill="white"
        stroke={isActive ? '#FFD6CA' : '#F0E5E2'}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

function FeatureCard({ card, isActive, onSelect }) {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onSelect()
    }
  }

  return (
    <article
      className={[
        'relative isolate flex cursor-pointer flex-col overflow-visible bg-transparent transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F45328] focus-visible:ring-offset-4 focus-visible:ring-offset-white h-[clamp(276px,65vw,344px)] lg:h-[clamp(352px,30vw,380px)] 2xl:h-[clamp(492px,32vw,527px)]',
      ].join(' ')}
      role="button"
      tabIndex={0}
      aria-pressed={isActive}
      aria-label={card.title}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
    >
      <span
        aria-hidden="true"
        className={[
          'absolute inset-x-2 top-8 bottom-[-10px] rounded-[34px] bg-[#ffe2d8]/55 blur-[34px] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]',
          isActive ? 'opacity-100' : 'opacity-0',
        ].join(' ')}
      />
      <FeatureCardFrame isActive={isActive} />

      <div className="relative z-10 flex h-full flex-col px-[clamp(12px,1.5vw,15px)] pt-[clamp(10px,1vw,14px)] pb-[clamp(16px,2vw,22px)] lg:px-[16px] lg:pb-[24px] 2xl:px-[20px] 2xl:pt-[15px] 2xl:pb-[30px]">
        <FeatureArt imageSrc={card.imageSrc} />

        <div className="flex flex-1 items-center justify-center text-center min-h-[clamp(72px,15vw,88px)] px-3 py-4 lg:min-h-[clamp(92px,8vw,100px)] lg:px-4 2xl:min-h-[clamp(112px,8vw,122px)] 2xl:px-6">
          <h3
            className="max-w-[16ch] overflow-hidden font-medium leading-[1.32] tracking-[-0.01em] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] text-[clamp(14px,2vw,15px)] lg:text-[clamp(16px,1.5vw,18px)] 2xl:text-[clamp(22px,1.5vw,26px)]"
          >
            {card.title}
          </h3>
        </div>
      </div>

      <div className="absolute bottom-[-5px] left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
        <span
          className={`inline-flex items-center justify-center rounded-full border shadow-md transition-[background-color,border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] h-[clamp(36px,4vw,40px)] w-[clamp(36px,4vw,40px)] 2xl:h-[clamp(46px,3vw,50px)] 2xl:w-[clamp(46px,3vw,50px)] ${
            isActive
              ? 'scale-105 border-[#F45328] bg-[#F45328] shadow-[0_12px_24px_rgba(244,83,40,0.24)]'
              : 'border-[#f3d8d0] bg-white'
          }`}
        >
          {card.badgeIconSrc ? (
            <img
              src={isActive ? card.activeBadgeIconSrc ?? card.badgeIconSrc : card.badgeIconSrc}
              alt={card.badgeAlt}
              className={[
                'object-contain h-[clamp(18px,2vw,20px)] w-[clamp(18px,2vw,20px)] 2xl:h-[clamp(24px,1.5vw,26px)] 2xl:w-[clamp(24px,1.5vw,26px)]',
                isActive ? 'opacity-100' : 'opacity-90',
              ].join(' ')}
            />
          ) : (
            <span aria-hidden="true" className="block h-5 w-5" />
          )}
        </span>
      </div>
    </article>
  )
}

function getCardPresentation(activeCard, index) {
  const totalCards = cards.length
  const forwardSteps = (index - activeCard + totalCards) % totalCards
  const backwardSteps = (activeCard - index + totalCards) % totalCards
  const distance = Math.min(forwardSteps, backwardSteps)
  const isActive = activeCard === index
  const isNearby = distance === 1

  return {
    isActive,
    opacityClass: isActive
      ? 'opacity-100'
      : isNearby
      ? 'opacity-92'
      : 'opacity-80',
    scale: isActive ? 1 : isNearby ? 0.975 : 0.95,
    translateY: isActive ? 0 : isNearby ? 10 : 14,
    zIndex: isActive ? 3 : isNearby ? 2 : 1,
  }
}

export default function FeaturedSection() {
  const [activeCard, setActiveCard] = useState(1)
  const [trackOffset, setTrackOffset] = useState(0)
  const [dragOffset, setDragOffset] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  const viewportRef = useRef(null)
  const cardRefs = useRef([])
  const resizeFrameRef = useRef(null)
  const resumeAutoplayRef = useRef(null)
  const dragStateRef = useRef({
    active: false,
    startX: 0,
    pointerId: null,
  })

  // Keep the selected card centered as card sizes shift across breakpoints.
  useEffect(() => {
    const updateOffset = () => {
      const viewport = viewportRef.current
      const activeElement = cardRefs.current[activeCard]
      const firstElement = cardRefs.current[0]
      const lastElement = cardRefs.current[cards.length - 1]

      if (!viewport || !activeElement || !firstElement || !lastElement) {
        return
      }

      const viewportWidth = viewport.clientWidth
      const trackStart = firstElement.offsetLeft
      const contentWidth =
        lastElement.offsetLeft + lastElement.offsetWidth - trackStart
      const desiredOffset =
        viewportWidth / 2 -
        (activeElement.offsetLeft - trackStart + activeElement.offsetWidth / 2)

      const minOffset = Math.min(0, viewportWidth - contentWidth)
      const nextOffset = Math.max(minOffset, Math.min(desiredOffset, 0))

      setTrackOffset(nextOffset)
    }

    const scheduleOffsetUpdate = () => {
      if (resizeFrameRef.current !== null) {
        window.cancelAnimationFrame(resizeFrameRef.current)
      }

      resizeFrameRef.current = window.requestAnimationFrame(updateOffset)
    }

    scheduleOffsetUpdate()

    const viewport = viewportRef.current

    if (!viewport || typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', scheduleOffsetUpdate)

      return () => {
        if (resizeFrameRef.current !== null) {
          window.cancelAnimationFrame(resizeFrameRef.current)
        }

        window.removeEventListener('resize', scheduleOffsetUpdate)
      }
    }

    const observer = new ResizeObserver(scheduleOffsetUpdate)
    observer.observe(viewport)
    window.addEventListener('resize', scheduleOffsetUpdate)

    return () => {
      if (resizeFrameRef.current !== null) {
        window.cancelAnimationFrame(resizeFrameRef.current)
      }

      window.removeEventListener('resize', scheduleOffsetUpdate)
      observer.disconnect()
    }
  }, [activeCard])

  // Autoplay should never fight against an active user interaction.
  useEffect(() => {
    if (isDragging || isPaused) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setActiveCard((current) =>
        current === cards.length - 1 ? 0 : current + 1
      )
    }, AUTO_PLAY_DELAY)

    return () => {
      window.clearInterval(timerId)
    }
  }, [isDragging, isPaused])

  useEffect(() => {
    return () => {
      if (resumeAutoplayRef.current !== null) {
        window.clearTimeout(resumeAutoplayRef.current)
      }
    }
  }, [])

  const pauseAutoplayTemporarily = () => {
    setIsPaused(true)

    if (resumeAutoplayRef.current !== null) {
      window.clearTimeout(resumeAutoplayRef.current)
    }

    resumeAutoplayRef.current = window.setTimeout(() => {
      setIsPaused(false)
      resumeAutoplayRef.current = null
    }, AUTO_PLAY_RESUME_DELAY)
  }

  const goToCard = (index) => {
    pauseAutoplayTemporarily()
    setActiveCard(index)
  }

  const goToPrevious = () => {
    pauseAutoplayTemporarily()
    setActiveCard((current) => (current === 0 ? cards.length - 1 : current - 1))
  }

  const goToNext = () => {
    pauseAutoplayTemporarily()
    setActiveCard((current) => (current === cards.length - 1 ? 0 : current + 1))
  }

  const handlePointerDown = (event) => {
    dragStateRef.current = {
      active: true,
      startX: event.clientX,
      pointerId: event.pointerId,
    }

    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event) => {
    if (!dragStateRef.current.active) {
      return
    }

    setDragOffset(event.clientX - dragStateRef.current.startX)
  }

  const handlePointerEnd = (event) => {
    const { active, pointerId } = dragStateRef.current

    if (
      pointerId !== null &&
      event.currentTarget.hasPointerCapture(pointerId)
    ) {
      event.currentTarget.releasePointerCapture(pointerId)
    }

    if (!active) {
      return
    }

    const swipeDistance = dragOffset

    dragStateRef.current = {
      active: false,
      startX: 0,
      pointerId: null,
    }

    setIsDragging(false)
    setDragOffset(0)

    if (swipeDistance <= -SWIPE_THRESHOLD) {
      goToNext()
      return
    }

    if (swipeDistance >= SWIPE_THRESHOLD) {
      goToPrevious()
    }
  }

  const handleViewportBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false)
    }
  }

  return (
    <section className="section-spacing relative overflow-hidden bg-transparent pt-2 sm:pt-4">
      <div className="site-container relative">
        
        {/* HEADING WRAPPER */}
        <div className="mx-auto w-full max-w-[1100px] px-4 text-center">
          <h2
            className="text-[32px] font-semibold leading-[1.1] tracking-[-0.05em]"
            style={{ fontSize: 'var(--fs-section-title)' }}
          >
            <span className="block whitespace-normal lg:whitespace-nowrap">
              We Provide The Best Service
            </span>
            <span className="block whitespace-normal lg:whitespace-nowrap">
              With{' '}
              <CurvedUnderlineText
                className="featured-highlight pb-[0.14em]"
                lineClassName="h-[0.38em] w-[118%] left-[1%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]"
              >
                Our Tools
              </CurvedUnderlineText>
            </span>
          </h2>
        </div>

        {/* FLUID CAROUSEL WRAPPER */}
        <div className="relative mx-auto mt-6 w-full max-w-[clamp(800px,95vw,1560px)] px-1 sm:mt-8 sm:px-8 lg:mt-10 lg:px-[clamp(40px,4vw,84px)]">
          
          <button
            type="button"
            aria-label="Previous featured service"
            onClick={goToPrevious}
            className="absolute left-3 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#111827]/12 bg-white text-[#111827] shadow-[0_16px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-[#F45328]/30 hover:text-[#F45328] sm:inline-flex lg:left-1 xl:left-2 2xl:left-3 3xl:left-4"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next featured service"
            onClick={goToNext}
            className="absolute right-3 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#111827]/12 bg-white text-[#111827] shadow-[0_16px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-[#F45328]/30 hover:text-[#F45328] sm:inline-flex lg:right-1 xl:right-2 2xl:right-3 3xl:right-4"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={viewportRef}
            className="overflow-hidden px-0.5 pb-14 sm:px-1 md:px-2"
            onFocusCapture={() => setIsPaused(true)}
            onBlurCapture={handleViewportBlur}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerEnd}
            onPointerCancel={handlePointerEnd}
            onPointerLeave={handlePointerEnd}
          >
            <div
              className={[
                'flex items-start gap-4 will-change-transform sm:gap-5 lg:gap-6 2xl:gap-7 3xl:gap-8',
                isDragging
                  ? 'transition-none'
                  : 'transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
              ].join(' ')}
              style={{
                transform: `translate3d(${trackOffset + dragOffset}px, 0, 0)`,
              }}
            >
              {cards.map((card, index) => {
                const presentation = getCardPresentation(activeCard, index)

                return (
                  <div
                    key={`${card.title}-${index}`}
                    ref={(element) => {
                      cardRefs.current[index] = element
                    }}
                    className={[
                      'shrink-0 flex-none transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
                      'w-[clamp(214px,65vw,250px)] sm:w-[clamp(250px,35vw,270px)] lg:w-[clamp(255px,22vw,270px)] 2xl:w-[clamp(324px,22vw,350px)]',
                      presentation.opacityClass,
                    ].join(' ')}
                    style={{
                      transform: `translateY(${presentation.translateY}px) scale(${presentation.scale})`,
                      transformOrigin: 'center top',
                      zIndex: presentation.zIndex,
                    }}
                  >
                    <FeatureCard
                      card={card}
                      isActive={presentation.isActive}
                      onSelect={() => goToCard(index)}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* MOBILE ARROWS */}
          <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Previous featured service"
              onClick={goToPrevious}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/12 bg-white shadow-[0_12px_24px_rgba(15,23,42,0.1)] transition-colors duration-300 hover:border-[#F45328]/30 hover:text-[#F45328]"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next featured service"
              onClick={goToNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/12 bg-white shadow-[0_12px_24px_rgba(15,23,42,0.1)] transition-colors duration-300 hover:border-[#F45328]/30 hover:text-[#F45328]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* INDICATOR DOTS (Desktop Only) */}
        <div className="mt-8 hidden items-center justify-center lg:flex sm:mt-10">
          <div className="flex items-center gap-1.5">
            {cards.map((card, index) => (
              <button
                key={`${card.title}-${index}`}
                type="button"
                aria-label={`Show ${card.title}`}
                onClick={() => goToCard(index)}
                className={[
                  'featured-indicator',
                  'featured-indicator-teal',
                  activeCard === index
                    ? 'featured-indicator-active featured-indicator-active-teal'
                    : '',
                ].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>

      <TickerBanner
        items={tickerItems}
        className="mt-12 uppercase"
        ariaLabel="Featured company stats"
      />
    </section>
  )
}