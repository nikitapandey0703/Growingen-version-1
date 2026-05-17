import { Play } from 'lucide-react'
import { useRef, useState } from 'react'
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
    buttonLabel: 'Start the Journey',
    previewImageSrc: '/images/hero/social-seo-thumbnail.png',
    videoSrc: '/videos/social-seo-video.webm',
  },
  {
    id: 2,
    title: 'Why Saves Matter More Than Likes',
    subtitle: 'Prioritising "Saves" Over "Likes"',
    description:
      'While a "like" is a brief nod of approval, a "save" represents a long-term commitment to a piece of content. To drive real impact, focus on creating a "reference library" of blueprints, checklists, and guides that offer lasting utility. Content reaches its highest value when it is useful enough to be revisited later. By prioritising practical resources over fleeting interactions, a feed becomes an essential tool for its audience.',
    buttonLabel: 'Start the Journey',
    previewImageSrc: '/images/hero/saves-matter-thumbnail.png',
    videoSrc: '/videos/saves-matter-video.webm',
  },
  {
    id: 3,
    title: 'The Power of the Human Glitch',
    subtitle: 'Authenticity Over Perfection',
    description:
      'In an era of highly polished AI content, perfection can often feel robotic or untrustworthy. Real connection is built through "human glitches"—the raw, unedited moments like a simple stutter or a coffee stain that show personality. Keeping audio and visuals authentic makes a brand feel more relatable and grounded. The goal is to move away from cold logos and lean into the messy, genuine traits that make people want to connect.',
    buttonLabel: 'Start the Journey',
    previewImageSrc: '/images/hero/human-glitch-thumbnail.png',
    videoSrc: '/videos/human-glitch-video.mp4',
  },
]

function SolutionPreviewCard({ card }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef(null)

  const handleStartJourney = () => {
    document.getElementById('home')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  const handleToggleVideo = async () => {
    if (!videoRef.current) return

    if (isPlaying) {
      // Pause if currently playing
      videoRef.current.pause()
      setIsPlaying(false)
    } else {
      // Play if paused
      try {
        // If it ended previously, restart it
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

  return (
    <ScrollStackItem itemClassName="border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.98)_0%,rgba(255,255,255,0.94)_100%)]">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_clamp(220px,28vw,270px)] md:items-center lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="flex w-full flex-col items-start justify-center gap-3 px-2 sm:gap-4 sm:px-4 lg:px-6 lg:py-4">
          <h2 className="w-full text-left font-[var(--font-heading)] text-[22px] font-semibold capitalize leading-[1.1] tracking-[-0.03em]  sm:text-[32px] lg:whitespace-nowrap lg:text-[36px]">
            {card.title}
          </h2>
          
          <p className="w-full text-left text-[18px] font-semibold leading-[1.3] sm:text-[20px] lg:text-[24px]">
            {card.subtitle}
          </p>
          
          <p className="w-full max-w-[56ch] text-left text-[14px] font-medium leading-[1.6]  sm:text-[15px]">
            {card.description}
          </p>
          
          {/* WRAPPER guarantees strict left alignment to match paragraph text */}
          <div className="mt-2 flex w-full justify-start">
            <Button
              className="m-0 w-[214px] self-start [&>button]:h-[42px] [&>button]:w-full [&>button]:min-h-[42px] [&>button]:justify-center [&>button]:pl-5 [&>button]:pr-[56px] [&>button]:text-[13px] [&>button_span:last-child]:h-[42px] [&>button_span:last-child]:w-[42px] lg:w-[236px] lg:[&>button]:h-[46px] lg:[&>button]:min-h-[46px] lg:[&>button]:pl-6 lg:[&>button]:pr-[62px] lg:[&>button]:text-[14px] lg:[&>button_span:last-child]:h-[46px] lg:[&>button_span:last-child]:w-[46px]"
              size="default"
              onClick={handleStartJourney}
            >
              {card.buttonLabel}
            </Button>
          </div>
        </div>

        {/* REEL PREVIEW */}
        <div className="relative mx-auto aspect-[0.64/1] w-full max-w-[250px] overflow-hidden rounded-[28px] bg-[#06131d] shadow-[0_16px_32px_rgba(4,8,15,0.24)]">
          {!isPlaying ? (
            <img
              src={card.previewImageSrc}
              alt={`${card.title} reel preview`}
              className="h-full w-full cursor-pointer object-cover"
              onClick={handleToggleVideo}
            />
          ) : null}

          <video
            ref={videoRef}
            src={card.videoSrc}
            poster={card.previewImageSrc}
            playsInline
            onEnded={handleVideoEnded}
            onClick={handleToggleVideo}
            preload="metadata"
            className={[
              'h-full w-full cursor-pointer object-cover transition-opacity duration-300',
              isPlaying ? 'opacity-100' : 'absolute inset-0 opacity-0',
            ].join(' ')}
          />

          {!isPlaying ? (
            <button
              type="button"
              onClick={handleToggleVideo}
              aria-label={`Play ${card.title} reel`}
              className="absolute left-1/2 top-1/2 z-20 flex h-[58px] w-[58px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/75 shadow-[0_10px_24px_rgba(15,23,42,0.2)] backdrop-blur-md transition-transform duration-300 hover:scale-105"
            >
              <Play size={18} fill="#111827" className="ml-1 text-[#111827]" />
            </button>
          ) : null}
        </div>
      </div>
    </ScrollStackItem>
  )
}

export default function GrowthStoriesSection() {
  return (
    <section className="section-spacing relative overflow-visible bg-transparent">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute left-[16%] top-[18%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,171,144,0.18)_0%,transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[10%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(102,145,255,0.18)_0%,transparent_70%)] blur-3xl" />

      <div className="site-container relative">
        <div className="section-content relative">
          {/* SECTION HEADING */}
          <div className="mx-auto mb-2 max-w-[620px] text-center sm:mb-3">
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#111827] sm:text-[40px] lg:text-[50px]">
              Smart Solutions For
              <br />
              Growing{' '}
              <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
                Brands
              </CurvedUnderlineText>
            </h2>
          </div>

          {/* STACK */}
          <div className="relative mx-auto mt-5 max-w-[1030px] sm:mt-6 lg:mt-8">
            <ScrollStack
              useWindowScroll
              itemDistance={90}
              itemScale={0.04}
              itemStackDistance={28}
              stackPosition="20%"
              scaleEndPosition="12%"
              baseScale={0.94}
              className="mx-auto max-w-[1030px]"
            >
              {solutionCards.map((card) => (
                <SolutionPreviewCard key={card.id} card={card} />
              ))}
            </ScrollStack>
          </div>
        </div>
      </div>
    </section>
  )
}
