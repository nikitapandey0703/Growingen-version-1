import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'

const businessWhatsappLink = 'https://wa.me/918625912593'

const planCards = [
  {
    id: 1,
    name: 'Complete Digital Marketing Solution',
    description:
      'Perfect for businesses looking to build visibility, generate leads, and grow consistently online.',
    features: [
      'Social Media Management (Instagram, Facebook & LinkedIn)',
      'SEO Optimization for Better Search Visibility',
      'Paid Ads Management (Meta/Google Ads)',
      'Monthly Content & Creative Support',
      'Lead Generation & Performance Reporting',
    ],
    startingLabel: 'Starting from',
    startingValue: '₹50,000',
    theme: 'dark',
  },
  {
    id: 2,
    name: 'Website Development',
    description:
      'Custom-built websites designed to establish a strong digital presence and improve conversions.',
    features: [
      'Custom Business Website Design',
      'Mobile Responsive Development',
      'Basic SEO Setup',
      'Contact Forms & Lead Capture Integration',
      'Speed & Performance Optimization',
    ],
    startingLabel: 'Starting from',
    startingValue: '₹25,000',
    theme: 'light',
  },
  {
    id: 3,
    name: 'Application Development',
    description:
      'Scalable web and mobile applications tailored to streamline business operations and user experience.',
    features: [
      'Custom UI/UX Design',
      'Web or Mobile App Development',
      'Admin Panel Integration',
      'API & Database Setup',
      'Testing & Deployment Support',
    ],
    startingLabel: 'Starting from',
    startingValue: '₹60,000',
    theme: 'light',
  },
]

function renderHeadingWithLastWordOnNextLine(title) {
  const words = title.trim().split(/\s+/)

  if (words.length < 2) {
    return title
  }

  // Keep long plan names inside the frame by balancing them into two lines.
  const splitIndex = words.length >= 4 ? Math.ceil(words.length / 2) : words.length - 1
  const firstLine = words.slice(0, splitIndex).join(' ')
  const secondLine = words.slice(splitIndex).join(' ')

  return (
    <>
      {firstLine}
      <br />
      {secondLine}
    </>
  )
}

function FeatureBullet() {
  return (
    <span className="mt-[6px] inline-flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-[linear-gradient(180deg,#e63e83_0%,#d4376b_100%)] shadow-[0_4px_10px_rgba(212,55,107,0.2)] sm:h-4 sm:w-4">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[8px] w-[8px] text-[#FFB45E] sm:h-[9px] sm:w-[9px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.5L9.2 16.7L18.5 7.5" />
      </svg>
    </span>
  )
}

function PlanCard({ card, onAdvance, isActive }) {
  return (
    <article
      role="button"
      tabIndex={0}
      onClick={onAdvance}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onAdvance()
        }
      }}
      className={[
        'group relative min-w-0 flex-none snap-center sm:snap-start cursor-pointer outline-none',
        'w-full sm:w-[min(56vw,435px)] lg:w-[calc(50%+38px)]',
        'mr-0 sm:-mr-6 lg:-mr-[58px]', // Reset negative margins on small screens
        'text-medium',
        'transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1',
      ].join(' ')}
    >
      <div className="relative h-[500px] w-full drop-shadow-[0_16px_28px_rgba(15,23,42,0.14)] sm:h-[608px] lg:h-[644px]">
        <img
          src="/icons/Subtract-outline.svg"
          alt=""
          aria-hidden="true"
          className={[
            'pointer-events-none absolute inset-y-0 left-[-4%] h-full w-[108%] max-w-none object-fill transition-opacity duration-300 ease-out',
            isActive ? 'opacity-0 sm:opacity-100 sm:group-hover:opacity-0' : 'opacity-100 group-hover:opacity-0',
          ].join(' ')}
        />
        <img
          src="/icons/Subtract-C.svg"
          alt=""
          aria-hidden="true"
          className={[
            'pointer-events-none absolute inset-y-0 left-[-4%] h-full w-[108%] max-w-none object-fill transition-opacity duration-300 ease-out',
            isActive ? 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100',
          ].join(' ')}
        />

        <div
          className={[
            'cta-card-copy absolute inset-0 z-10 flex flex-col',
            'pl-[16%] pr-[9.5%] pb-[7%] pt-[13%] sm:pl-[18%] sm:pr-[10%] sm:pb-[8%] sm:pt-[14.5%]',
            'min-w-0 overflow-hidden transition-colors duration-300 ease-out',
            isActive ? 'text-white sm:text-[#000000] sm:group-hover:text-white' : 'text-[#000000] group-hover:text-white',
          ].join(' ')}
        >
          <div className="max-w-[92%] sm:max-w-[90%]">
            {/* Added explicit text colors and group-hover states to h3 for guaranteed rendering fix */}
            <h3 className="max-w-full break-words text-[28px] font-semibold leading-[1.08] tracking-[-0.045em] transition-colors duration-300 ease-out sm:text-[30px] lg:text-[32px]">
              {renderHeadingWithLastWordOnNextLine(card.name)}
            </h3>

            <p
              className={[
                'mt-6 pt-1 max-w-[98%] break-words text-[14px] leading-[1.45] transition-colors duration-300 ease-out sm:mt-7 sm:max-w-[95%] sm:text-[15px]',
                isActive ? 'text-white/80 sm:text-[#404040] sm:group-hover:text-white/76' : 'text-[#404040] group-hover:text-white/76',
              ].join(' ')}
            >
              {card.description}
            </p>

            <div
              className={[
                'mt-3 h-px w-[96%] transition-colors duration-300 ease-out sm:mt-4 sm:w-[94%]',
                isActive ? 'bg-white/20 sm:bg-[#121212]/12 sm:group-hover:bg-white/20' : 'bg-[#121212]/12 group-hover:bg-white/20',
              ].join(' ')}
            />

            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {card.features.map((feature) => (
                <li key={feature} className="flex max-w-[98%] items-start gap-2.5 pt-1">
                  <FeatureBullet />
                  <span
                    className={[
                      'min-w-0 max-w-full pt-0.5 break-words text-[14px] leading-[1.35] transition-colors duration-300 ease-out sm:pt-1 sm:text-[15px]',
                      isActive ? 'text-white/84 sm:text-[#222222] sm:group-hover:text-white/84' : 'text-[#222222] group-hover:text-white/84',
                    ].join(' ')}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-auto max-w-[98%] pt-4 sm:max-w-[95%] sm:pt-5">
            <p
              className={[
                'text-[13px] tracking-[0] transition-colors duration-300 ease-out sm:text-[15px]',
                isActive ? 'text-white/60 sm:text-[#5f5f5f] sm:group-hover:text-white/60' : 'text-[#5f5f5f] group-hover:text-white/60',
              ].join(' ')}
            >
              {card.startingLabel}
            </p>
            <p className="mt-1 text-[34px] font-semibold leading-[0.94] tracking-[-0.05em] transition-colors duration-300 ease-out sm:text-[42px] lg:text-[46px]">
              {card.startingValue}
            </p>

            <a
              href={businessWhatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => {
                event.stopPropagation()
              }}
              className="mt-6 inline-flex h-[40px] w-[96%] items-center justify-center self-start rounded-full bg-[linear-gradient(180deg,#ff6a33_0%,#F45328_100%)] px-8 text-[13px] font-medium tracking-[-0.01em] !text-white shadow-[0_12px_24px_rgba(244,83,40,0.24),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-300 ease-out sm:mt-7 sm:h-[45px] sm:w-[96%] sm:text-[14px]"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function CTASection() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const node = scrollRef.current

    if (!node) {
      return undefined
    }

    const handleScroll = () => {
      const cards = Array.from(node.children)

      if (!cards.length) {
        return
      }

      const containerLeft = node.getBoundingClientRect().left
      let closestIndex = 0
      let closestOffset = Number.POSITIVE_INFINITY

      cards.forEach((card, index) => {
        const offset = Math.abs(card.getBoundingClientRect().left - containerLeft)

        if (offset < closestOffset) {
          closestOffset = offset
          closestIndex = index
        }
      })

      setActiveIndex(closestIndex)
    }

    handleScroll()
    node.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      node.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const scrollToCard = (index) => {
    const node = scrollRef.current
    const target = node?.children?.[index]

    if (!node || !target) {
      return
    }

    node.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    })
  }

  const goToNextCard = (index) => {
    const nextIndex = (index + 1) % planCards.length
    scrollToCard(nextIndex)
  }

  return (
    <section className="section-spacing relative overflow-hidden bg-transparent pt-8">
      <div className="pointer-events-none absolute left-[10%] top-[30%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,151,113,0.24)_0%,rgba(255,151,113,0.09)_42%,rgba(255,151,113,0)_74%)] blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] bottom-[8%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.22)_0%,rgba(104,141,255,0.08)_42%,rgba(104,141,255,0)_74%)] blur-3xl" />

      <div className="site-container relative lg:pt-12">
        <div className="section-content">
          <div className="mx-auto max-w-[520px] text-center">
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#111827] sm:text-[40px] lg:text-[50px]">
              <span className="block sm:whitespace-nowrap">
                Select A Suitable Plan
              </span>
              <span className="block sm:whitespace-nowrap">
                For Your Next{' '}
                <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
                  Projects
                </CurvedUnderlineText>
              </span>
            </h2>
          </div>

          <div className="relative mt-6 sm:mt-8 lg:mt-10">
            <div
              ref={scrollRef}
              className="flex snap-x snap-mandatory gap-4 sm:gap-0 overflow-x-auto px-0.5 pb-4 pt-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {planCards.map((card, index) => (
                <PlanCard
                  key={card.id}
                  card={card}
                  onAdvance={() => goToNextCard(index)}
                  isActive={activeIndex === index}
                />
              ))}
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              {planCards.map((card, index) => (
                <button
                  key={card.id}
                  type="button"
                  aria-label={`Scroll to ${card.name}`}
                  onClick={() => scrollToCard(index)}
                  className={[
                    'featured-indicator',
                    activeIndex === index ? 'featured-indicator-active' : '',
                  ].join(' ')}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
