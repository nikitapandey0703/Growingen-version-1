import { Play, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Button from '../../../components/common/Button'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import ScrollStack, { ScrollStackItem } from '../../../components/common/ScrollStack'

const solutionCards = [
  {
    id: 1,
    title: 'The Power of Social SEO',
    subtitle: 'Stop Guessing, Start Answering',
    description:
      'Why traditional hashtags like #MarketingStrategy are becoming less effective. People are now searching for direct solutions to their specific problems rather than browsing broad categories. By using "Social SEO"—writing captions that match the exact questions people ask—you can ensure your content appears right when they need it most.',
    buttonLabel: "Let's Explore",
    ctaHref: 'https://www.instagram.com/growin.gen?igsh=MWZiemU5cHZwa3VoYQ==',
    previewImageSrc: '/images/hero/social-seo-thumbnail.webp',
    videoSrc: '/videos/social-seo-video-main.webm',
  },
  {
    id: 2,
    title: 'Why Saves Matter More Than Likes',
    subtitle: 'Prioritising "Saves" Over "Likes"',
    description:
      'While a "like" is a brief nod of approval, a "save" represents a long-term commitment to a piece of content. To drive real impact, focus on creating a "reference library" of blueprints, checklists, and guides that offer lasting utility. Content reaches its highest value when it is useful enough to be revisited later. By prioritising practical resources over fleeting interactions, a feed becomes an essential tool for its audience.',
    buttonLabel: "Let's Explore",
    ctaHref: 'https://www.instagram.com/growin.gen?igsh=MWZiemU5cHZwa3VoYQ==',
    previewImageSrc: '/images/hero/saves-matter-thumbnail.webp',
    videoSrc: '/videos/saves-matter-video-main.webm',
  },
  {
    id: 3,
    title: 'The Power of the Human Glitch',
    subtitle: 'Authenticity Over Perfection',
    description:
      'In an era of highly polished AI content, perfection can often feel robotic or untrustworthy. Real connection is built through "human glitches"—the raw, unedited moments like a simple stutter or a coffee stain that show personality. Keeping audio and visuals authentic makes a brand feel more relatable and grounded. The goal is to move away from cold logos and lean into the messy, genuine traits that make people want to connect.',
    buttonLabel: "Let's Explore",
    ctaHref: 'https://www.instagram.com/growin.gen?igsh=MWZiemU5cHZwa3VoYQ==',
    previewImageSrc: '/images/hero/human-glitch-thumbnail.webp',
    videoSrc: '/videos/human-glitch-video-main.webm',
  },
]

function PlayIconButton({ onClick, className = '', ariaLabel = 'Play' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`inline-flex h-[44px] w-[44px] flex-none items-center justify-center rounded-full border-none bg-[#F45328] shadow-[2px_2px_10px_rgba(0,0,0,0.18)] transition-transform duration-300 ease-out hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F45328]/40 focus-visible:ring-offset-2 ${className}`}
    >
      <Play size={18} fill="white" className="ml-[2px] text-white" />
    </button>
  )
}

function SolutionPreviewCard({ card, onOpenMobileVideo, isMobile }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)
  const cardContainerRef = useRef(null)

  // --- LOGIC: AUTO-PAUSE ON SWITCH (Custom Event) ---
  useEffect(() => {
    const handleGlobalPlay = (e) => {
      if (e.detail.id !== card.id && isPlaying) {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
        setIsPlaying(false)
      }
    }

    window.addEventListener('solution-video-playing', handleGlobalPlay)
    return () => window.removeEventListener('solution-video-playing', handleGlobalPlay)
  }, [isPlaying, card.id])

  // --- LOGIC: RESET ALL VIDEOS WHEN ENTIRE SECTION LEAVES VIEWPORT ---
  useEffect(() => {
    const handleSectionLeave = () => {
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
      setIsPlaying(false)
    }

    window.addEventListener('reset-all-solution-videos', handleSectionLeave)
    return () => window.removeEventListener('reset-all-solution-videos', handleSectionLeave)
  }, [])

  // --- LOGIC: AUTO-PAUSE ON SCROLL BEYOND CARD (Intersection Observer) ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isPlaying) {
          if (videoRef.current) {
            videoRef.current.pause()
            videoRef.current.currentTime = 0 
          }
          setIsPlaying(false)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = cardContainerRef.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [isPlaying])

  // --- LOGIC: AUTO-PAUSE WHEN ANOTHER STACK CARD BECOMES ACTIVE OR WHEN UNSTACKING ---
  useEffect(() => {
    if (!isPlaying || isMobile) {
      return undefined
    }

    let animationFrameId = null

    const pauseIfAnotherCardStacks = () => {
      animationFrameId = null

      const currentStackCard = cardContainerRef.current?.closest('.scroll-stack-card')
      if (!currentStackCard) return

      const stackCards = Array.from(document.querySelectorAll('.scroll-stack-card'))
      const currentIndex = stackCards.indexOf(currentStackCard)
      if (currentIndex === -1) return

      const stackLine = window.innerHeight * 0.2
      const ITEM_STACK_DISTANCE = 28 // This matches itemStackDistance in ScrollStack configuration below
      const activationBuffer = 60 // Clean buffer range

      const activeIndex = stackCards.reduce((latestActiveIndex, stackCard, index) => {
        const cardTop = stackCard.getBoundingClientRect().top
        // Calculate the actual position where this specific card rests when fully stacked.
        const expectedPinnedTop = stackLine + (index * ITEM_STACK_DISTANCE)
        return cardTop <= expectedPinnedTop + activationBuffer ? index : latestActiveIndex
      }, -1)

      // If activeIndex changed (e.g. unstacking backward or stacking forward), pause.
      if (activeIndex >= 0 && activeIndex !== currentIndex) {
        if (videoRef.current) {
          videoRef.current.pause()
          videoRef.current.currentTime = 0
        }
        setIsPlaying(false)
      }
    }

    const handleScrollOrResize = () => {
      if (animationFrameId !== null) return
      animationFrameId = window.requestAnimationFrame(pauseIfAnotherCardStacks)
    }

    window.addEventListener('scroll', handleScrollOrResize, { passive: true })
    window.addEventListener('resize', handleScrollOrResize)
    handleScrollOrResize()

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize)
      window.removeEventListener('resize', handleScrollOrResize)

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isMobile, isPlaying])

  const handleStartJourney = () => {
    window.open(card.ctaHref, '_blank', 'noopener,noreferrer')
  }

  const handleToggleVideo = async () => {
    if (!videoRef.current) return

    // --- PREVENT PLAY DURING STACKING / UNSTACKING ---
    if (!isPlaying && !isMobile) {
      const currentStackCard = cardContainerRef.current?.closest('.scroll-stack-card')
      if (currentStackCard) {
        const stackCards = Array.from(document.querySelectorAll('.scroll-stack-card'))
        const currentIndex = stackCards.indexOf(currentStackCard)
        
        if (currentIndex !== -1) {
          const stackLine = window.innerHeight * 0.2
          const ITEM_STACK_DISTANCE = 28
          const activationBuffer = 60
          
          const activeIndex = stackCards.reduce((latestActiveIndex, stackCard, index) => {
            const cardTop = stackCard.getBoundingClientRect().top
            const expectedPinnedTop = stackLine + (index * ITEM_STACK_DISTANCE)
            return cardTop <= expectedPinnedTop + activationBuffer ? index : latestActiveIndex
          }, -1)

          // If this card hasn't locked into its active stack location, block play logic
          if (activeIndex >= 0 && activeIndex !== currentIndex) {
            return;
          }
        }
      }
    }

    // MANUAL TOGGLE: If it's playing, just pause (Do NOT reset currentTime here)
    if (isPlaying) {
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      window.dispatchEvent(new CustomEvent('solution-video-playing', { detail: { id: card.id } }))

      try {
        if (videoRef.current.currentTime === videoRef.current.duration) {
          videoRef.current.currentTime = 0
        }
        await videoRef.current.play()
        setIsPlaying(true)
      } catch (error) {
        console.error('Preview video could not start:', error)
      }
    }
  }

  const handleVideoEnded = () => {
    setIsPlaying(false)
  }

  const innerContent = (
    <div 
      ref={cardContainerRef} 
      className="grid gap-5 sm:gap-6 md:grid-cols-[minmax(0,1fr)_clamp(220px,28vw,270px)] md:items-center lg:gap-12 2xl:grid-cols-[minmax(0,1fr)_300px] 2xl:gap-14"
    >
      {/* LEFT CONTENT */}
      <div className="flex w-full flex-col items-start justify-center gap-3 px-1 sm:gap-4 sm:px-3 md:px-2 lg:px-6 lg:py-4 2xl:gap-5 2xl:px-8 2xl:py-6">
        <h2 className="w-full text-left font-[var(--font-heading)] text-[22px] font-semibold capitalize leading-[1.1] tracking-[-0.03em] sm:max-w-[18ch] sm:text-[26px] md:max-w-none md:text-[30px] lg:whitespace-nowrap lg:text-[36px] 2xl:max-w-[18ch] 2xl:whitespace-normal 2xl:text-[40px]">
          {card.title}
        </h2>
        
        <p className="w-full text-left text-[16px] font-semibold leading-[1.3]  sm:text-[18px] md:text-[20px] lg:text-[24px] 2xl:text-[28px]">
          {card.subtitle}
        </p>
        
        <p className="w-full max-w-[58ch] text-left text-[14px] font-medium leading-[1.65] text-[#334155] sm:text-[14px] md:text-[15px] 2xl:max-w-[60ch] 2xl:text-[18px] 2xl:leading-[1.75]">
          {card.description}
        </p>
        
        <div className="mt-2 flex w-full flex-wrap items-center justify-start gap-3 2xl:mt-3 2xl:gap-4">
          <Button
            className="m-0 w-[198px] self-start [&>button]:h-[42px] [&>button]:w-full [&>button]:min-h-[42px] [&>button]:justify-center [&>button]:pl-5 [&>button]:pr-[56px] [&>button]:text-[13px] [&>button_span:last-child]:h-[42px] [&>button_span:last-child]:w-[42px] sm:w-[214px] lg:w-[236px] lg:[&>button]:h-[46px] lg:[&>button]:min-h-[46px] lg:[&>button]:pl-6 lg:[&>button]:pr-[62px] lg:[&>button]:text-[14px] lg:[&>button_span:last-child]:h-[46px] lg:[&>button_span:last-child]:w-[46px] 2xl:w-[270px] 2xl:[&>button]:h-[54px] 2xl:[&>button]:min-h-[54px] 2xl:[&>button]:pl-7 2xl:[&>button]:pr-[72px] 2xl:[&>button]:text-[16px] 2xl:[&>button_span:last-child]:h-[54px] 2xl:[&>button_span:last-child]:w-[54px]"
            size="default"
            onClick={handleStartJourney}
          >
            {card.buttonLabel}
          </Button>

          <div className="md:hidden">
            <PlayIconButton ariaLabel="View video" onClick={() => onOpenMobileVideo(card)} />
          </div>
        </div>
      </div>

      {/* REEL PREVIEW */}
      <div className="relative isolate mx-auto hidden aspect-[0.64/1] w-full max-w-[250px] overflow-hidden rounded-[28px] bg-[#06131d] shadow-[0_16px_32px_rgba(4,8,15,0.24)] [backface-visibility:hidden] [contain:layout_paint] md:block 2xl:max-w-[300px] 2xl:rounded-[32px] 2xl:shadow-[0_20px_40px_rgba(4,8,15,0.26)]">
        <img
          src={card.previewImageSrc}
          alt={`${card.title} reel preview`}
          className={[
            'absolute inset-0 h-full w-full cursor-pointer object-cover transition-opacity duration-300 [backface-visibility:hidden]',
            isPlaying ? 'pointer-events-none opacity-0' : 'opacity-100',
          ].join(' ')}
          onClick={handleToggleVideo}
        />

        <video
          ref={videoRef}
          src={card.videoSrc}
          poster={card.previewImageSrc}
          playsInline
          onEnded={handleVideoEnded}
          onClick={handleToggleVideo}
          preload="metadata"
          className={[
            'absolute inset-0 h-full w-full cursor-pointer object-cover transition-opacity duration-300 [backface-visibility:hidden]',
            isPlaying ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
        />

        {!isPlaying ? (
          <PlayIconButton
            ariaLabel={`Play ${card.title} reel`}
            onClick={handleToggleVideo}
            className="absolute bottom-4 right-4 z-20 2xl:bottom-6 2xl:right-6"
          />
        ) : null}
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <div className="relative w-full overflow-hidden rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_100%)] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:p-6">
        {innerContent}
      </div>
    )
  }

  return (
    <ScrollStackItem itemClassName="border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_100%)]">
      {innerContent}
    </ScrollStackItem>
  )
}

export default function GrowthStoriesSection() {
  const sectionRef = useRef(null)
  const [mobileVideoCard, setMobileVideoCard] = useState(null)
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
    }
    return false
  })

  // --- OBSERVE ENTIRE SECTION SCROLLING OUT OF VIEW ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is entirely scrolled out of the viewport (top or bottom)
        if (!entry.isIntersecting) {
          window.dispatchEvent(new CustomEvent('reset-all-solution-videos'))
        }
      },
      { threshold: 0 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!mobileVideoCard) return undefined

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileVideoCard(null)
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [mobileVideoCard])

  return (
    <section 
      ref={sectionRef} 
      className="section-spacing relative overflow-visible bg-transparent pb-14 sm:pb-16 md:pb-20 lg:pb-24 2xl:pb-28 3xl:pb-32"
    >
      <div className="pointer-events-none absolute left-[16%] top-[18%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,171,144,0.18)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(102,145,255,0.18)_0%,transparent_70%)] blur-3xl" />

      <div className="site-container relative">
        <div className="section-content relative">
          <div className="mx-auto mb-2 max-w-[620px] text-center sm:mb-3 2xl:max-w-[760px]">
            <h2
              className="text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] "
              style={{ fontSize: 'var(--fs-section-title)' }}
            >
              Smart Solutions For
              <br />
              Growing{' '}
              <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[2%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
                Brands
              </CurvedUnderlineText>
            </h2>
          </div>

          <div className="relative mx-auto mt-5 max-w-[1030px] sm:mt-6 lg:mt-8 2xl:mt-10 2xl:max-w-[1280px]">
            {isMobile ? (
              <div className="flex flex-col gap-6 sm:gap-8">
                {solutionCards.map((card) => (
                  <SolutionPreviewCard
                    key={card.id}
                    card={card}
                    onOpenMobileVideo={setMobileVideoCard}
                    isMobile={true}
                  />
                ))}
              </div>
            ) : (
              <ScrollStack
                useWindowScroll
                itemDistance={90}
                itemScale={0.04}
                itemStackDistance={28}
                stackPosition="20%"
                scaleEndPosition="12%"
                baseScale={0.94}
                className="mx-auto max-w-[1030px] 2xl:max-w-[1280px]"
              >
                {solutionCards.map((card) => (
                  <SolutionPreviewCard
                    key={card.id}
                    card={card}
                    onOpenMobileVideo={setMobileVideoCard}
                    isMobile={false}
                  />
                ))}
              </ScrollStack>
            )}
          </div>
        </div>
      </div>

      {mobileVideoCard ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center bg-[#020617]/70 px-4 py-6 backdrop-blur-[3px] md:hidden">
          <div className="relative w-full max-w-[360px] rounded-[28px] bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.28)]">
            <button
              type="button"
              aria-label="Close video"
              onClick={() => setMobileVideoCard(null)}
              className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/65 text-white transition-colors duration-200 hover:bg-black/80"
            >
              <X size={18} />
            </button>

            <div className="overflow-hidden rounded-[22px] bg-[#06131d]">
              <video
                src={mobileVideoCard.videoSrc}
                poster={mobileVideoCard.previewImageSrc}
                controls
                playsInline
                autoPlay
                preload="metadata"
                className="aspect-[0.64/1] w-full object-cover"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}