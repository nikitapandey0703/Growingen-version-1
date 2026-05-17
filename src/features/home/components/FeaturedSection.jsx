// We provide the best service with tools
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import TickerBanner from '../../../components/common/TickerBanner'

const cards = [
  {
    title: 'Optimizing Speed for your webpages',
    imageSrc: '/images/featured/card-1.png',
    badgeIconSrc: '/icons/optimizing-speed.svg',
    badgeAlt: 'Optimizing speed icon',
  },
  {
    title: 'Integrated Digital Strategy',
    imageSrc: '/images/featured/card-2.png',
    badgeIconSrc: '/icons/digital-strategy.svg',
    badgeAlt: 'Integrated digital strategy icon',
  },
  {
    title: 'Custom Web Platform Engineering',
    imageSrc: '/images/featured/card-3.png',
    badgeIconSrc: '/icons/web-platform.svg',
    badgeAlt: 'Custom web platform engineering icon',
  },
  {
    title: 'Performance-driven growth strategies',
    imageSrc: '/images/featured/card-4.png',
    badgeIconSrc: '/icons/optimizing-speed.svg', // Update with your actual path
    badgeAlt: 'Cloud hosting solutions icon',
  },
  {
    title: 'Visibility that compounds over time',
    imageSrc: '/images/featured/card-5.png',
    badgeIconSrc: '/icons/digital-strategy.svg', // Update with your actual path
    badgeAlt: 'Mobile app development icon',
  },
  {
    title: 'From concept to market-ready product',
    imageSrc: '/images/featured/card-6.png',
    badgeIconSrc: '/icons/web-platform.svg', // Update with your actual path
    badgeAlt: 'Data analytics icon',
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
    <div className="relative h-[312px] w-full overflow-hidden rounded-[16px] border border-[#e4ebfb] bg-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.72)] sm:h-[322px] lg:h-[336px]">
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
        'relative isolate flex h-[340px] cursor-pointer flex-col overflow-visible bg-transparent transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F45328] focus-visible:ring-offset-4 focus-visible:ring-offset-white sm:h-[356px] lg:h-[372px]',
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

<div className="relative z-10 flex h-full flex-col px-[15px] pb-[18px] pt-[12px] sm:px-[16px] sm:pb-[20px] sm:pt-[13px] lg:px-[16px] lg:pb-[24px]">        <FeatureArt imageSrc={card.imageSrc} />

        <div className="flex min-h-[84px] flex-1 items-center justify-center px-3 py-5 text-center sm:min-h-[92px] sm:px-3.5 sm:py-5 lg:min-h-[98px] lg:px-4 lg:py-5">
          <h3 className="max-w-[16ch] overflow-hidden text-[15px] font-medium leading-[1.32] tracking-[-0.01em] text-[#111827] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2] sm:text-[16px] lg:text-[17px]">
            {card.title}
          </h3>
        </div>
      </div>

      <div className="absolute bottom-[-0px] left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
        <span
          className={`inline-flex h-[38px] w-[38px] items-center justify-center rounded-full border shadow-md transition-[background-color,border-color,transform,box-shadow] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isActive
              ? 'scale-105 border-[#F45328] bg-[#F45328] shadow-[0_12px_24px_rgba(244,83,40,0.24)]'
              : 'border-[#f3d8d0] bg-white'
          }`}
        >
          {card.badgeIconSrc ? (
            <img
              src={card.badgeIconSrc}
              alt={card.badgeAlt}
              className={[
                'h-[20px] w-[20px] object-contain',
                isActive ? 'brightness-0 invert' : 'opacity-90',
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
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[32px] font-semibold leading-[1.1] tracking-[-0.05em] text-[#111827] sm:text-[40px] lg:text-[50px]">
            We Provide The Best Service
            <br />
            With{' '}
            <CurvedUnderlineText
              className="featured-highlight pb-[0.14em]"
              lineClassName="h-[0.38em] w-[118%] left-[-9%] -bottom-[0.08em]"
            >
              Our Tools
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="relative mx-auto mt-6 max-w-[1120px] px-2 sm:mt-8 sm:px-10 lg:mt-10 lg:max-w-[980px] lg:px-[54px] xl:max-w-[1040px] xl:px-[58px] 2xl:max-w-[1110px] 2xl:px-[64px]">
          <button
            type="button"
            aria-label="Previous featured service"
            onClick={goToPrevious}
            className="absolute left-3 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#111827]/12 bg-white text-[#111827] shadow-[0_16px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-[#F45328]/30 hover:text-[#F45328] sm:inline-flex lg:left-1 xl:left-2 2xl:left-3"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            type="button"
            aria-label="Next featured service"
            onClick={goToNext}
            className="absolute right-3 top-[42%] z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#111827]/12 bg-white text-[#111827] shadow-[0_16px_30px_rgba(15,23,42,0.12)] transition-all duration-300 hover:border-[#F45328]/30 hover:text-[#F45328] sm:inline-flex lg:right-1 xl:right-2 2xl:right-3"
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={viewportRef}
            className="overflow-hidden px-1 pb-14"
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
                'flex items-start gap-4 will-change-transform sm:gap-5 lg:gap-6',
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
                      'w-[84vw] max-w-[255px] min-w-[222px] flex-none transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[242px] sm:min-w-[242px] lg:w-[255px] lg:min-w-[255px]',
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

          <div className="mt-2 flex items-center justify-center gap-3 sm:hidden">
            <button
              type="button"
              aria-label="Previous featured service"
              onClick={goToPrevious}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/12 bg-white text-[#111827] shadow-[0_12px_24px_rgba(15,23,42,0.1)] transition-colors duration-300 hover:border-[#F45328]/30 hover:text-[#F45328]"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next featured service"
              onClick={goToNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#111827]/12 bg-white text-[#111827] shadow-[0_12px_24px_rgba(15,23,42,0.1)] transition-colors duration-300 hover:border-[#F45328]/30 hover:text-[#F45328]"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center sm:mt-10">
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
        className="mt-12"
        ariaLabel="Featured company stats"
      />
    </section>
  )
}
