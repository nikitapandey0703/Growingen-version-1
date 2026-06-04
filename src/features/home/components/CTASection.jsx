import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import OrangeButtonLabel from '../../../components/common/OrangeButtonLabel'

const businessWhatsappLink = 'https://wa.me/918625912593'

const planCards = [
  {
    id: 1,
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
    id: 2,
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
    <span className="mt-[6px] inline-flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-[linear-gradient(180deg,#12cfb0_0%,#06BA9D_100%)] shadow-[0_4px_10px_rgba(6,186,157,0.22)] sm:h-4 sm:w-4">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[8px] w-[8px] text-white sm:h-[9px] sm:w-[9px]"
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

// Reusable Navigation Arrow Component
function NavArrow({ direction, onClick, disabled }) {
  const isLeft = direction === 'left'
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        'absolute top-1/2 z-20 flex h-[70px] w-[26px] sm:h-[100px] sm:w-[36px] lg:h-[110px] lg:w-[40px] -translate-y-1/2 items-center justify-center rounded-[24px] transition-all duration-300 ease-out outline-none',
        'shadow-[0_0_18px_rgba(244,83,40,0.5)] border-[1.5px] border-[#F45328]/40', // Red/Orange glowing border and shadow
        isLeft ? 'left-1 sm:left-4 lg:left-1 xl:-left-6' : 'right-1 sm:right-4 lg:right-1 xl:-right-6',
        disabled ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-[1.05] cursor-pointer'
      ].join(' ')}
      aria-label={isLeft ? 'Previous plan' : 'Next plan'}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="black"
        className="h-5 w-5 sm:h-7 sm:w-7 lg:h-10 lg:w-8"
      >
        {isLeft ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        )}
      </svg>
    </button>
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
        'group relative min-w-0 flex-none snap-center self-stretch cursor-pointer outline-none',
        // Updated Widths to account for the reduced gaps (gap-6)
        'w-full max-[399px]:w-[min(84vw,314px)] sm:w-[min(82vw,500px)] md:w-[min(70vw,540px)] lg:w-[calc(50%-12px)]',
        'transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1',
      ].join(' ')}
    >
      <div className="relative flex h-full w-full flex-col min-h-[460px] max-[399px]:min-h-[530px] sm:min-h-[640px] lg:min-h-[620px] drop-shadow-[0_16px_28px_rgba(15,23,42,0.14)]">
        
        <img
          src="/icons/Subtract-outline.svg"
          alt=""
          aria-hidden="true"
          className={[
            'pointer-events-none absolute inset-y-0 left-[-4%] z-0 h-full w-[108%] max-w-none object-fill transition-opacity duration-300 ease-out max-[399px]:left-[-2%] max-[399px]:w-[104%]',
            isActive ? 'opacity-0 sm:opacity-100 sm:group-hover:opacity-0' : 'opacity-100 group-hover:opacity-0',
          ].join(' ')}
        />
        <img
          src="/icons/Subtract-C.svg"
          alt=""
          aria-hidden="true"
          className={[
            'pointer-events-none absolute inset-y-0 left-[-4%] z-0 h-full w-[108%] max-w-none object-fill transition-opacity duration-300 ease-out max-[399px]:left-[-2%] max-[399px]:w-[104%]',
            isActive ? 'opacity-100 sm:opacity-0 sm:group-hover:opacity-100' : 'opacity-0 group-hover:opacity-100',
          ].join(' ')}
        />

        <div
          className={[
            'cta-card-copy relative z-10 flex flex-1 flex-col',
            'px-6 pt-4 pb-16 max-[399px]:px-4 max-[399px]:pt-20 max-[399px]:pb-8 min-[400px]:max-[540px]:pl-[12%] min-[400px]:max-[540px]:pr-[8%] min-[400px]:max-[540px]:pt-[24%] sm:pl-[12%] sm:pr-[10%] sm:pt-[16%] sm:pb-[4%] md:pl-[13.5%] md:pr-[10.5%] lg:pl-[14%] lg:pr-[10%] lg:pb-[8%]',
            'transition-colors duration-300 ease-out',
            isActive ? 'text-white sm:text-[#000000] sm:group-hover:text-white' : 'text-[#000000] group-hover:text-white',
          ].join(' ')}
        >
          <div className="max-w-[100%] sm:max-w-[95%] lg:max-w-[90%] ">
            <h3 className="max-w-full break-words text-[22px] font-semibold leading-[1.08] tracking-[-0.045em] transition-colors duration-300 ease-out max-[399px]:text-[18px] sm:text-[28px] md:text-[30px] lg:text-[31px] xl:text-[32px] ">
              {renderHeadingWithLastWordOnNextLine(card.name)}
            </h3>

            <p
              className={[
                'mt-3 max-w-[98%] break-words pt-2 text-[13px] leading-[1.45] transition-colors duration-300 ease-out max-[399px]:mt-2.5 max-[399px]:pt-1 max-[399px]:text-[11.5px] max-[399px]:leading-[1.35] sm:mt-5 sm:max-w-[95%] sm:text-[14px] md:text-[15px]',
                isActive ? 'text-white/80 sm:text-[#404040] sm:group-hover:text-white/76' : 'text-[#404040] group-hover:text-white/76',
              ].join(' ')}
            >
              {card.description}
            </p>

            <div
              className={[
                'mt-4 h-px w-[96%] transition-colors duration-300 ease-out max-[399px]:mt-3 sm:mt-4 sm:w-[94%]',
                isActive ? 'bg-white/20 sm:bg-[#121212]/12 sm:group-hover:bg-white/20' : 'bg-[#121212]/12 group-hover:bg-white/20',
              ].join(' ')}
            />

            <ul className="mt-4 space-y-3 max-[399px]:mt-3 max-[399px]:space-y-1.5 sm:mt-4 lg:space-y-2.5">
              {card.features.map((feature) => (
                <li key={feature} className="flex max-w-[100%] items-start gap-2.5 pt-1 max-[399px]:gap-2 max-[399px]:pt-0.5">
                  <FeatureBullet />
                  <span
                    className={[
                      'min-w-0 max-w-full break-words pt-0.5 text-[13px] leading-[1.35] transition-colors duration-300 ease-out max-[399px]:text-[11.5px] max-[399px]:leading-[1.28] sm:pt-1 sm:text-[14px] md:text-[15px]',
                      isActive ? 'text-white/84 sm:text-[#222222] sm:group-hover:text-white/84' : 'text-[#222222] group-hover:text-white/84',
                    ].join(' ')}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 max-w-[100%] pt-2 max-[399px]:mt-5 max-[399px]:pt-1 sm:mt-auto sm:max-w-[95%] sm:pt-5 lg:max-w-[98%]">
            <p
              className={[
                'text-[12px] tracking-[0] transition-colors duration-300 ease-out max-[399px]:text-[11px] sm:text-[14px] md:text-[15px]',
                isActive ? 'text-white/60 sm:text-[#5f5f5f] sm:group-hover:text-white/60' : 'text-[#5f5f5f] group-hover:text-white/60',
              ].join(' ')}
            >
              {card.startingLabel}
            </p>
            <p className="mt-1 text-[30px] font-semibold leading-[0.94] tracking-[-0.05em] transition-colors duration-300 ease-out max-[399px]:text-[24px] sm:text-[38px] md:text-[42px] lg:text-[44px] xl:text-[46px]">
              {card.startingValue}
            </p>

            <a
              href={businessWhatsappLink}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => {
                event.stopPropagation()
              }}
              className="mt-5 inline-flex h-[40px] w-full items-center justify-center self-start rounded-full bg-[linear-gradient(180deg,#ff6a33_0%,#F45328_100%)] px-8 text-[13px] font-medium tracking-[-0.01em] !text-white shadow-[0_12px_24px_rgba(244,83,40,0.24),inset_0_1px_0_rgba(255,255,255,0.18)] transition-all duration-300 ease-out max-[399px]:mt-4 max-[399px]:h-[36px] max-[399px]:px-5 max-[399px]:text-[12px] sm:mt-6 sm:h-[44px] sm:text-[14px] md:h-[45px] lg:w-[96%]"
            >
              <OrangeButtonLabel>Get Started</OrangeButtonLabel>
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
  const [cardsPerView, setCardsPerView] = useState(1)

  // 1. Listen for screen resize to dynamically update the viewable amount
  useEffect(() => {
    const updateCardsPerView = () => {
      if (typeof window !== 'undefined') {
        setCardsPerView(window.innerWidth >= 1024 ? 2 : 1)
      }
    }
    updateCardsPerView()
    window.addEventListener('resize', updateCardsPerView)
    return () => window.removeEventListener('resize', updateCardsPerView)
  }, [])

  // 2. Track the active/nearest card on scroll
  useEffect(() => {
    const node = scrollRef.current
    if (!node) return undefined

    const handleScroll = () => {
      const cards = Array.from(node.children)
      if (!cards.length) return

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

  // 3. Compute dynamic indicators calculation
  const numIndicators = Math.max(1, planCards.length - cardsPerView + 1)
  const activeIndicator = Math.min(activeIndex, numIndicators - 1)
  const indicatorsArray = Array.from({ length: numIndicators }, (_, i) => i)

  const scrollToCard = (index) => {
    const node = scrollRef.current
    const target = node?.children?.[index]

    if (!node || !target) return

    node.scrollTo({
      left: target.offsetLeft,
      behavior: 'smooth',
    })
  }

  // 4. Update the card advancer functions
  const handlePrevCard = () => {
    const prevIndicator = Math.max(0, activeIndicator - 1)
    scrollToCard(prevIndicator)
  }

  const handleNextCard = () => {
    const nextIndicator = Math.min(numIndicators - 1, activeIndicator + 1)
    scrollToCard(nextIndicator)
  }

  return (
    <section className="section-spacing relative overflow-hidden bg-transparent pt-8">
      <div className="pointer-events-none absolute left-[10%] top-[30%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,151,113,0.24)_0%,rgba(255,151,113,0.09)_42%,rgba(255,151,113,0)_74%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[8%] right-[8%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.22)_0%,rgba(104,141,255,0.08)_42%,rgba(104,141,255,0)_74%)] blur-3xl" />

      <div className="site-container relative lg:pt-12">
        <div className="section-content">
          
          <div className="mx-auto max-w-[520px] lg:max-w-[960px] xl:max-w-[1100px] 2xl:max-w-full px-4 text-center">
            <h2
              className="text-[32px] font-semibold leading-[1.08] tracking-[-0.05em]"
              style={{ fontSize: 'var(--fs-section-title)' }}
            >
              <span className="block sm:whitespace-nowrap">
                Select A Suitable Plan
              </span>
              <span className="block sm:whitespace-nowrap">
                For Your Next{' '}
                <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[2%] -bottom-[10px] sm:-bottom-[12px] md:-bottom-[14px] lg:-bottom-[16px] xl:-bottom-[18px] 2xl:-bottom-[20px]">
                  Projects
                </CurvedUnderlineText>
              </span>
            </h2>
          </div>

          <div className="relative mt-6 sm:mt-8 lg:mt-10 mx-auto max-w-[1080px]">
            
            {/* Custom Arrow Navigators */}
            <NavArrow direction="left" onClick={handlePrevCard} disabled={activeIndicator === 0} />
            <NavArrow direction="right" onClick={handleNextCard} disabled={activeIndicator === numIndicators - 1} />

            <div
              ref={scrollRef}
              // SIGNIFICANTLY REDUCED GAPS: changed gap-12 to gap-4 sm:gap-6
              className="mx-auto flex items-stretch snap-x snap-mandatory gap-4 sm:gap-6 px-4 sm:px-14 lg:px-8 pb-8 pt-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {planCards.map((card, index) => (
                <PlanCard
                  key={card.id}
                  card={card}
                  onAdvance={handleNextCard}
                  isActive={activeIndex === index}
                />
              ))}
            </div>

            <div className="mt-3 flex items-center justify-center gap-2">
              {indicatorsArray.map((indicatorIndex) => (
                <button
                  key={indicatorIndex}
                  type="button"
                  aria-label={`Scroll to view ${indicatorIndex + 1}`}
                  onClick={() => scrollToCard(indicatorIndex)}
                  className={[
                    'featured-indicator',
                    'featured-indicator-teal',
                    activeIndicator === indicatorIndex ? 'featured-indicator-active-teal featured-indicator-active' : '',
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