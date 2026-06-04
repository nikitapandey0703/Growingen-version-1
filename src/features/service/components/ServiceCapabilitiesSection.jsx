import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import ScrollStack, { ScrollStackItem } from '../../../components/common/ScrollStack'
import SectionWrapper from '../../../components/common/SectionWrapper'

const capabilityCards = [
  {
    id: 1,
    title: 'Website Development',
    subtitle: 'High-performance websites designed to convert.',
    description:
      'We craft digital experiences that balance aesthetics with performance, ensuring your website becomes a growth engine.',
    imageSrc: '/images/service/website.webp',
    deliverables: [
      'Conversion-focused UI/UX',
      'SEO-ready architecture',
      'Lightning-fast performance',
      'Built to scale with your business',
    ],
  },
  {
    id: 2,
    title: 'AI-Integrated Applications',
    subtitle: 'Intelligence built into your operations.',
    description:
      'We integrate AI where it creates real business value, automating processes, improving decisions, and enhancing user experiences.',
    imageSrc: '/images/service/ai-development.webp',
    deliverables: [
      'Process automation systems',
      'AI-powered dashboards & insights',
      'Smart chat & support systems',
      'Custom AI workflows',
    ],
  },
  {
    id: 3,
    title: 'Digital Marketing',
    subtitle: 'Performance-driven growth strategies.',
    description:
      'Every campaign is designed with purpose and precision — focused on attracting the right audience, increasing conversions, improving customer engagement, and delivering measurable ROI.',
    imageSrc: '/images/service/application.webp',
    deliverables: [
      'Paid advertising (Meta & Google)',
      'Funnel & campaign strategy',
      'Social media growth',
      'Conversion optimization',
    ],
  },
]

function FeatureBullet() {
  return (
    <span className="mt-[5px] inline-flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-[linear-gradient(180deg,#06BA9D_0%,#059f87_100%)] shadow-[0_4px_10px_rgba(6,186,157,0.22)] sm:mt-[6px] sm:h-4 sm:w-4 md:h-[17px] md:w-[17px] lg:h-[18px] lg:w-[18px] xl:h-[19px] xl:w-[19px] 2xl:h-5 2xl:w-5">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[9px] w-[9px] text-white sm:h-[10px] sm:w-[10px] md:h-[10px] md:w-[10px] lg:h-[11px] lg:w-[11px] xl:h-3 xl:w-3 2xl:h-[13px] 2xl:w-[13px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.5L9.2 16.7L18.5 7.5" />
      </svg>
    </span>
  )
}

function CapabilityCardBody({ card, showImage }) {
  const titleParts = card.title.split(' ')
  const titlePrefix = titleParts.slice(0, -1).join(' ')
  const titleSuffix = titleParts.slice(-1).join(' ')

  return (
    <div
      className={[
        'grid gap-6 sm:gap-7 md:gap-8',
        showImage
          ? 'lg:grid-cols-[minmax(0,1fr)_220px_minmax(0,0.9fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,1fr)_240px_minmax(0,0.95fr)] xl:gap-10 2xl:grid-cols-[minmax(0,1fr)_280px_minmax(0,0.95fr)] 2xl:gap-12'
          : 'lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] lg:items-start lg:gap-9 xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] xl:gap-12 2xl:grid-cols-[minmax(0,1.1fr)_minmax(0,0.95fr)] 2xl:gap-14',
      ].join(' ')}
    >
      <div className="flex flex-col gap-3 px-1 sm:gap-3.5 sm:px-2 md:gap-4 md:px-3 lg:px-1 xl:gap-[1.125rem] 2xl:gap-5 2xl:px-2">
        <h3
          className="font-[var(--font-heading)] font-semibold leading-[1.04] tracking-[-0.04em] text-[length:var(--fs-card-title)]"
          style={{
            fontSize: 'clamp(1.875rem, 1.25rem + 2vw, var(--fs-card-title))',
          }}
        >
          {titlePrefix}
          {titlePrefix ? <br /> : null}
          {titleSuffix}
        </h3>
        <p
          className="max-w-[28ch] font-semibold leading-[1.28]  sm:max-w-[30ch] md:max-w-[32ch] lg:max-w-[30ch] xl:max-w-[31ch] 2xl:max-w-[32ch]"
          style={{
            fontSize: 'clamp(1.3rem, 0.88rem + 0.42vw, var(--fs-section-subtitle))',
          }}
        >
          {card.subtitle}
        </p>
        <p
          className="max-w-[42ch] font-medium leading-[1.65]  md:max-w-[48ch] 2xl:max-w-[50ch] 2xl:leading-[1.75]"
          style={{
            fontSize: 'var(--fs-card-body)',
          }}
        >
          {card.description}
        </p>
      </div>

      {showImage ? (
       <div className="mx-auto w-full max-w-[220px] bg-transparent sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[300px] 2xl:max-w-[320px]">
          <img
            src={card.imageSrc}
            alt={card.title}
            className="h-auto w-full object-contain object-center"
          />
        </div>
      ) : null}

      <div className="flex flex-col gap-4 sm:gap-[1.125rem] md:gap-5 lg:pl-2 xl:pl-3 2xl:gap-6">
        <p
          className="leading-[1.2] tracking-[-0.02em] text-[#0f172a]"
          style={{
            fontSize: 'clamp(1.0625rem, 0.96rem + 0.32vw, calc(var(--fs-card-body) + 0.4rem))',
          }}
        >
          Deliverables
        </p>
        <ul className="flex flex-col gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-3.5 xl:gap-4 2xl:gap-[1.125rem]">
          {card.deliverables.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 font-medium leading-[1.5] text-black sm:gap-3 2xl:gap-3.5"
              style={{
                fontSize: 'var(--fs-card-body)',
              }}
            >
              <FeatureBullet />
              <span className="pt-[2px] sm:pt-[3px]">{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-1 flex w-full justify-start pt-1 sm:pt-2 md:pt-3 xl:pt-3 2xl:pt-5">
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-start justify-start"
          >
            {/* Reduced height & Increased width to create a flatter, wider pill shape */}
            <Button
              size="default"
              className="m-0 ml-0 mr-auto shrink-0 self-start h-[40px] w-[220px] min-h-[40px] pr-[60px] text-[14px] sm:h-[42px] sm:min-h-[42px] sm:w-[240px] sm:pr-[64px] sm:text-[14px] md:h-[44px] md:min-h-[44px] md:w-[260px] md:pr-[68px] md:text-[15px] lg:h-[44px] lg:min-h-[44px] lg:w-[280px] lg:pr-[72px] lg:text-[15px] xl:h-[46px] xl:min-h-[46px] xl:w-[300px] xl:pr-[76px] xl:text-[16px] 2xl:h-[48px] 2xl:min-h-[48px] 2xl:w-[320px] 2xl:pr-[80px] 2xl:text-[17px]"
            >
              Get In Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function CapabilityCard({ card, isMobile }) {
  if (isMobile) {
    return (
      <div className="relative overflow-hidden rounded-[24px] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.95)_100%)] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] sm:rounded-[28px] sm:p-6">
        <CapabilityCardBody card={card} showImage={false} />
      </div>
    )
  }

  return (
    <ScrollStackItem itemClassName="border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.99)_0%,rgba(255,255,255,0.95)_100%)]">
      <CapabilityCardBody card={card} showImage />
    </ScrollStackItem>
  )
}

export default function ServiceCapabilitiesSection() {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768
    }
    return false
  })

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <SectionWrapper as="section" className="relative overflow-visible  bg-transparent pt-12 sm:pt-16 md:pt-[4.5rem] lg:pt-20 xl:pt-24 2xl:pt-28">
      <div className="pointer-events-none absolute left-[12%] top-[10%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(255,171,144,0.16)_0%,transparent_70%)] blur-3xl sm:h-[200px] sm:w-[200px] md:h-[220px] md:w-[220px] lg:left-[16%] lg:h-[220px] lg:w-[220px] xl:h-[240px] xl:w-[240px] 2xl:h-[280px] 2xl:w-[280px]" />
      <div className="pointer-events-none absolute right-[8%] top-[8%] h-[190px] w-[190px] rounded-full bg-[radial-gradient(circle,rgba(102,145,255,0.16)_0%,transparent_70%)] blur-3xl sm:h-[210px] sm:w-[210px] md:h-[230px] md:w-[230px] lg:right-[10%] lg:h-[240px] lg:w-[240px] xl:h-[260px] xl:w-[260px] 2xl:h-[300px] 2xl:w-[300px]" />

      <div className="relative mx-auto max-w-[1120px]">
        <div className="mx-auto mb-4 max-w-[320px] text-center sm:max-w-[520px] md:max-w-[620px] lg:max-w-[700px] xl:mb-5 xl:max-w-[760px] 2xl:mb-6 2xl:max-w-[860px]">
          <p
            className="font-medium uppercase tracking-[0.2em] sm:tracking-[0.24em] md:tracking-[0.26em] lg:tracking-[0.28em]"
            style={{
              fontSize: 'clamp(0.75rem, 0.62rem + 0.45vw, var(--fs-section-subtitle))',
            }}
          >
            Our Core Capabilities
          </p>
          <h2
            className="mt-2 font-[var(--font-heading)] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:mt-2.5 lg:mt-3"
            style={{
              fontSize: 'var(--fs-section-title)',
            }}
          >
            Everything Under{' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
              One Roof
            </CurvedUnderlineText>
          </h2>
        </div>
      </div>

      <div className="relative mx-auto mt-5 max-w-[1080px] px-1 sm:mt-6 sm:px-0 md:mt-7 lg:mt-8 xl:mt-10 2xl:mt-12 2xl:max-w-[1180px]">
        {isMobile ? (
          <div className="flex flex-col gap-6 sm:gap-8">
            {capabilityCards.map((card) => (
              <CapabilityCard
                key={card.id}
                card={card}
                isMobile
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
            className="mx-auto max-w-[1080px] 2xl:max-w-[1180px]"
          >
            {capabilityCards.map((card) => (
              <CapabilityCard
                key={card.id}
                card={card}
                isMobile={false}
              />
            ))}
          </ScrollStack>
        )}
      </div>
    </SectionWrapper>
  )
}
