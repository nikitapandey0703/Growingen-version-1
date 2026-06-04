import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import OrangeButtonLabel from '../../../components/common/OrangeButtonLabel'
import { portfolioCaseStudies } from '../data/portfolioCaseStudies'
import PortfolioCaseStudyPopup from './PortfolioCaseStudyPopup'

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
      <section
        id="portfolio-carousel"
        className="relative scroll-mt-24 overflow-hidden bg-transparent py-14 sm:py-16 md:py-[4.5rem] lg:py-20 xl:py-[5.5rem] 2xl:py-24"
      >
        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:max-w-[1560px] 2xl:px-16">
          <div className="mb-10 text-center sm:mb-12 md:mb-[3.25rem] lg:mb-14 xl:mb-[3.75rem] 2xl:mb-16">
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#111827] sm:text-[40px] md:text-[42px] lg:text-[46px] xl:text-[50px] 2xl:text-[70px]">
              Build a{' '}
              <CurvedUnderlineText 
                className="hero-highlight pb-[0.16em]"  
                lineClassName="left-[0%] w-[120%] h-[0.18em] -bottom-[6px] sm:-bottom-[8px] md:-bottom-[10px] lg:-bottom-[12px] xl:-bottom-[14px] 2xl:-bottom-[16px]"
              >
                 Brand
              </CurvedUnderlineText>{' '}
              People Recognize
            </h2>
          </div>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-[#fffdfb] to-transparent sm:w-12 md:w-14 lg:w-16 xl:w-[4.5rem] 2xl:w-20" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-[#fffdfb] to-transparent sm:w-12 md:w-14 lg:w-16 xl:w-[4.5rem] 2xl:w-20" />

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
              className={`flex w-full cursor-grab select-none overflow-hidden ${isDragging ? 'active:cursor-grabbing' : ''}`}
              style={{ touchAction: 'pan-y' }}
            >
              {[1, 2, 3].map((setIndex) => (
                <div key={setIndex} className="flex shrink-0 gap-4 pr-4 sm:gap-5 sm:pr-5 md:gap-6 md:pr-6 lg:gap-7 lg:pr-7 xl:gap-[1.85rem] xl:pr-[1.85rem] 2xl:gap-8 2xl:pr-8">
                  {portfolioCaseStudies.map((item, index) => (
                    <button
                      key={`${setIndex}-${item.id}-${index}`}
                      type="button"
                      draggable="false"
                      onClick={() => handleCardClick(item)}
                      className="
                        group flex w-[78vw] max-w-[250px] min-w-[212px] flex-shrink-0 flex-col appearance-none overflow-hidden rounded-t-[clamp(16px,3vw,32px)] rounded-b-none border-0 bg-black p-0 text-left shadow-[0_12px_34px_rgba(15,23,42,0.08)]
                        transition-transform duration-300 ease-out active:scale-[0.98]
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F45328] focus-visible:ring-offset-2
                        sm:w-[240px] sm:min-w-[240px] md:w-[248px] md:min-w-[248px] lg:w-[250px] lg:min-w-[250px] xl:w-[258px] xl:min-w-[258px] 2xl:w-[292px] 2xl:min-w-[292px]
                      "
                    >
                      {/* Top Image Section */}
                      <div className="relative h-[250px] w-full shrink-0 overflow-hidden rounded-t-[clamp(16px,3vw,32px)] rounded-b-none sm:h-[270px] md:h-[280px] lg:h-[290px] xl:h-[300px] 2xl:h-[340px]">
                        <img
                          src={item.img}
                          alt={item.title}
                          draggable="false"
                          className="pointer-events-none absolute inset-0 block h-full w-full object-cover object-center"
                        />
                      </div>

                      {/* Bottom Black Details Section */}
                      <div className="relative z-10 flex flex-1 w-full flex-col items-center justify-center gap-1.5 bg-black px-2 py-3 sm:gap-2 sm:px-3 sm:py-3.5 md:gap-2 md:py-3.5 lg:py-3.5 xl:py-4 2xl:gap-2.5 2xl:py-4">
                        <span className="pointer-events-none text-center text-[12.5px] font-semibold leading-[1.2] text-white sm:text-[13px] md:text-[13.5px] lg:text-[14px] xl:text-[14.5px] 2xl:text-[16px] pb-2">
                          {item.title}
                        </span>
                        <span className="pointer-events-none inline-flex min-h-[26px] w-auto items-center justify-center rounded-full bg-[#F45328] px-3.5 py-1 text-[10.5px] font-medium text-white transition-colors group-hover:bg-[#e24a21] sm:min-h-[28px] sm:px-4 sm:text-[11px] md:min-h-[30px] md:text-[11.5px] lg:min-h-[32px] lg:text-[12px] xl:min-h-[34px] 2xl:min-h-[38px] 2xl:px-5 2xl:text-[13px]">
                          <OrangeButtonLabel>View Case study</OrangeButtonLabel>
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PortfolioCaseStudyPopup
        isOpen={Boolean(selectedStudy)}
        study={selectedStudy ?? portfolioCaseStudies[0]}
        onClose={() => {
          setSelectedStudy(null)
          setIsPaused(false)
        }}
      />
    </>
  )
}
