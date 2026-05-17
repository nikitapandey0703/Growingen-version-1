import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'

import PortfolioCaseStudyPopup from './PortfolioCaseStudyPopup'

const items = [
  {
    title: 'Brand Guidelines',
    img: '/images/portfolio/portfolio-service-1.png',
    popupTitle: 'EdTech Brand',
    popupSubtitle:
      'A focused case study on how strategy, interface design, and conversion storytelling were merged into one scalable brand system.',
    sectionHeading: 'Designed To Build Trust Fast',
    body:
      'This case study shows how we translated a complex product into a cleaner experience, sharper proof hierarchy, and a more conversion-ready visual system. Every layer of the presentation was designed to reduce friction and make the offer easier to understand.',
  },
  {
    title: 'UI/UX',
    img: '/images/portfolio/portfolio-service-2.png',
    popupTitle: 'Product Dashboard UX',
    popupSubtitle:
      'A usability-first redesign that turned cluttered reporting into a guided dashboard flow built for clarity and action.',
    sectionHeading: 'Clarity Became The Conversion Lever',
    body:
      'We simplified the information architecture, introduced cleaner visual grouping, and built interface moments that help users understand value faster. The result was a smoother product story across demos, landing pages, and onboarding touchpoints.',
  },
  {
    title: 'Social Media',
    img: '/images/portfolio/portfolio-service-3.png',
    popupTitle: 'Social Growth System',
    popupSubtitle:
      'A case study focused on building repeatable content hooks, stronger creative direction, and campaign-ready visuals.',
    sectionHeading: 'Content Started Carrying Strategy',
    body:
      'Instead of isolated social posts, we created a more structured visual language that made campaigns easier to scale. Messaging, proof, and offers were shaped to support awareness and lead generation at the same time.',
  },
  {
    title: 'Storytelling',
    img: '/images/portfolio/portfolio-service-4.png',
    popupTitle: 'Narrative-Led Campaign',
    popupSubtitle:
      'A storytelling framework built to make the brand more memorable, more persuasive, and easier to market across channels.',
    sectionHeading: 'The Story Finally Matched The Value',
    body:
      'We reframed the offer around a stronger narrative arc, then supported it with visual hierarchy, proof blocks, and campaign execution. That made the brand feel more premium while also improving decision-making for users.',
  },
]

export default function PortfolioCarousel() {
  const [isPaused, setIsPaused] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [selectedStudy, setSelectedStudy] = useState(null)

  const trackRef = useRef(null)
  const startX = useRef(0)
  const scrollLeft = useRef(0)
  const dragDistance = useRef(0)
  const resumeTimerRef = useRef(null)

  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollLeft = trackRef.current.scrollWidth / 3
    }
  }, [])

  useEffect(() => {
    let animationId
    let lastTime = performance.now()
    const speed = 0.07

    const scroll = (time) => {
      const delta = time - lastTime
      lastTime = time

      if (trackRef.current && !isPaused && !isDragging && !selectedStudy && delta < 100) {
        trackRef.current.scrollLeft += speed * delta

        const singleSetWidth = trackRef.current.scrollWidth / 3

        if (trackRef.current.scrollLeft >= singleSetWidth * 2) {
          trackRef.current.scrollLeft -= singleSetWidth
        } else if (trackRef.current.scrollLeft <= 0) {
          trackRef.current.scrollLeft += singleSetWidth
        }
      }
      animationId = requestAnimationFrame(scroll)
    }

    animationId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationId)
  }, [isDragging, isPaused, selectedStudy])

  const handlePointerDown = (e) => {
    if (!trackRef.current) {
      return
    }

    setIsPaused(true)
    setIsDragging(true)
    dragDistance.current = 0

    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
    startX.current = pageX - trackRef.current.offsetLeft
    scrollLeft.current = trackRef.current.scrollLeft
  }

  const handlePointerMove = (e) => {
    if (!isDragging || !trackRef.current) {
      return
    }

    const pageX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX
    const x = pageX - trackRef.current.offsetLeft
    const walk = (x - startX.current) * 1.35

    dragDistance.current = Math.max(dragDistance.current, Math.abs(walk))

    let newScroll = scrollLeft.current - walk
    const singleSetWidth = trackRef.current.scrollWidth / 3

    if (newScroll >= singleSetWidth * 2) {
      newScroll -= singleSetWidth
      startX.current = pageX - trackRef.current.offsetLeft
      scrollLeft.current = newScroll
    } else if (newScroll <= 0) {
      newScroll += singleSetWidth
      startX.current = pageX - trackRef.current.offsetLeft
      scrollLeft.current = newScroll
    }

    trackRef.current.scrollLeft = newScroll
  }

  const handlePointerUpOrLeave = () => {
    setIsDragging(false)

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current)
    }

    resumeTimerRef.current = window.setTimeout(() => {
      setIsPaused(false)
    }, 1400)
  }

  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) {
        window.clearTimeout(resumeTimerRef.current)
      }
    }
  }, [])

  const handleCardClick = (study) => {
    if (dragDistance.current > 14) {
      return
    }

    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current)
    }

    setIsPaused(true)
    setSelectedStudy(study)
  }

  return (
    <>
      <section className="section-spacing relative overflow-hidden bg-transparent">
        <div className="site-container">
          <div className="mx-auto max-w-[1320px]">
          <div className="mb-14 text-center">
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-[40px] lg:text-[50px]">
              Build a Brand{' '}
              <CurvedUnderlineText className="hero-highlight pb-[0.16em]">
                People
              </CurvedUnderlineText>{' '}
              Recognize
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-[#fffdfb] to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-[#fffdfb] to-transparent" />

            <div
              ref={trackRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => {
                if (!selectedStudy) {
                  setIsPaused(false)
                }
                handlePointerUpOrLeave()
              }}
              onMouseDown={handlePointerDown}
              onMouseMove={handlePointerMove}
              onMouseUp={handlePointerUpOrLeave}
              onTouchStart={handlePointerDown}
              onTouchMove={handlePointerMove}
              onTouchEnd={handlePointerUpOrLeave}
              onTouchCancel={handlePointerUpOrLeave}
              className="flex w-full cursor-grab select-none overflow-hidden active:cursor-grabbing"
              style={{ touchAction: 'pan-y' }}
            >
              {[1, 2, 3].map((setIndex) => (
                <div key={setIndex} className="flex shrink-0 gap-7 pr-7">
                  {items.map((item, index) => (
                    <button
                      key={`${setIndex}-${item.title}-${index}`}
                      type="button"
                      onClick={() => handleCardClick(item)}
                      className="
                        w-[220px] sm:w-[240px] lg:w-[250px]
                        flex-shrink-0
                        rounded-[18px]
                        overflow-hidden
                        bg-white/70 backdrop-blur-sm
                        text-left
                        shadow-[0_12px_34px_rgba(15,23,42,0.08)]
                        transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                        hover:-translate-y-1 hover:scale-[1.03]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F45328] focus-visible:ring-offset-2
                      "
                    >
                      <div className="h-[240px] w-full overflow-hidden sm:h-[260px] lg:h-[280px]">
                        <img
                          src={item.img}
                          alt={item.title}
                          draggable="false"
                          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.06]"
                        />
                      </div>

                      <div className="bg-black px-4 py-3.5 text-center text-[13px] font-medium text-white">
                        <span>{item.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      <PortfolioCaseStudyPopup
        isOpen={Boolean(selectedStudy)}
        study={selectedStudy ?? items[0]}
        onClose={() => {
          setSelectedStudy(null)
          setIsPaused(false)
        }}
      />
    </>
  )
}
