import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import OrangeButtonLabel from '../../../components/common/OrangeButtonLabel'
import { portfolioCaseStudies } from '../data/portfolioCaseStudies'

const MotionDiv = motion.div
const MotionSection = motion.section

const defaultInfoCards = [
  {
    title: 'Goal',
    body: 'Build a strong local brand presence in Jaipur during the initial launch stage.',
    icon: '/images/portfolio/pop-up/goal.webp',
    tone: 'bg-[#F1F9F5]',
  },
  {
    title: 'Challenge',
    body: 'Newly launched cloud kitchen with low brand recognition and no established visual identity in a competitive food market.',
    icon: '/images/portfolio/pop-up/challenges.webp',
    tone: 'bg-[#FEF7F0]',
  },
  {
    title: 'Solution',
    body: 'Created a complete brand identity system focused on consistent and memorable customer experience across online and offline touchpoints.',
    icon: '/images/portfolio/pop-up/solution.webp',
    tone: 'bg-[#F2F7FC]',
    hasBorder: true,
  },
  {
    title: 'Execution',
    body: [
      'Logo Design',
      'Menu Card Design',
      'Brochure Design',
      'Packaging Sticker Design',
      'Brand Visual Identity Setup',
    ],
    icon: '/images/portfolio/pop-up/execution.webp',
    tone: 'bg-[#F5F2FB]',
  },
]

const defaultMetrics = [
  {
    value: '2.5X',
    label: 'Higher Brand Recall',
    icon: '/images/portfolio/pop-up/lead-growth.webp',
    tone: 'bg-[#F1F4FD]',
    iconBg: 'bg-[#E2E7FC]',
    valueColor: '#06BA9D',
    labelColor: '#06BA9D',
  },
  {
    value: '100%',
    label: 'Consistent Brand Identity\nAcross Customer Touchpoints',
    icon: '/images/portfolio/pop-up/lower-cpl.webp',
    tone: 'bg-[#F2F9F5]',
    iconBg: 'bg-[#F2F9F5]',
    valueColor: '#1043C6',
    labelColor: '#1043C6',
  },
]

function DetailCard({ title, body, icon, tone, hasBorder }) {
  return (
    <article
      className={`${tone} flex flex-col gap-2.5 rounded-[12px] p-3.5 sm:p-3.5 md:p-3.5 lg:gap-2 lg:p-4 2xl:rounded-[14px] 2xl:p-4 ${hasBorder ? 'border border-[#edf0f4]' : ''}`}
    >
      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.05)] sm:h-[34px] sm:w-[34px] md:h-9 md:w-9 2xl:h-10 2xl:w-10 mb-2 sm:mb-2.5 md:mb-3 lg:mb-3 xl:mb-3 2xl:mb-3">
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-6 w-6 object-contain sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px] xl:h-7 xl:w-7 2xl:h-8 2xl:w-8 "
        />
      </div>
      <div>
        <h3 className="text-[14px] font-bold leading-[1.5] sm:text-[14px] md:text-[14px] lg:text-[16px] lg:leading-none xl:text-[18px] 2xl:text-[20px]">
          {title}
        </h3>
        {Array.isArray(body) ? (
          <ul className="mt-2 space-y-1 text-[11px] leading-[1.42] sm:text-[11px] md:text-[11.5px] lg:mt-1.5 lg:space-y-0.5 lg:text-[11.5px] lg:leading-[1.35] xl:text-[12px] 2xl:text-[15px]">
            {body.map((item, i) => (
              <li key={i} className="flex gap-1.5">
                <span className="text-[#9ca3af]">-</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-[11px] leading-[1.45] sm:text-[11px] md:text-[11.5px] lg:mt-1.5 lg:text-[11.5px] lg:leading-[1.35] xl:text-[13px] 2xl:text-[17px]">
            {body}
          </p>
        )}
      </div>
    </article>
  )
}

function MetricCard({ value, label, icon, tone, iconBg, valueColor, labelColor }) {
  return (
    <article
      className={`${tone} flex flex-col items-center justify-center gap-2 rounded-[8px] px-3 py-3 text-center sm:gap-3.5 sm:px-4 sm:py-4 md:px-4 md:py-[1.1rem] lg:flex-row lg:items-center lg:justify-start lg:gap-3 lg:rounded-[10px] lg:px-[1.05rem] lg:py-[1.15rem] lg:text-left xl:px-[1.1rem] xl:py-[1.2rem] 2xl:rounded-[12px] 2xl:px-5 2xl:py-[1.35rem]`}
    >
      <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${iconBg} sm:h-10 sm:w-10 md:h-10 md:w-10 2xl:h-11 2xl:w-11`}>
        <img
          src={icon}
          alt=""
          aria-hidden="true"
          className="h-6 w-6 object-contain sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px] xl:h-7 xl:w-7 2xl:h-8 2xl:w-8"
        />
      </div>
      <div className="min-w-0">
        <p
          className="text-[25px] font-bold leading-[1.5] tracking-tight sm:text-[23px] md:text-[24px] lg:text-[25px] xl:text-[26px] 2xl:text-[32px]"
          style={{ color: valueColor }}
        >
          {value}
        </p>
        <p
          className="mt-1 whitespace-pre-line text-[10px] font-medium leading-[1.15] sm:text-[11px] md:text-[11.5px] lg:text-[11.5px] xl:text-[12px] 2xl:text-[14px]"
          style={{ color: labelColor }}
        >
          {label}
        </p>
      </div>
    </article>
  )
}

function SectionLabel({ children }) {
  return (
    <div className="mb-2 flex items-center justify-center gap-3 text-center lg:justify-start xl:mb-3">
      <h3 className="whitespace-nowrap text-[13px] font-bold text-black sm:text-[14px] md:text-[14px] lg:text-[16px] xl:text-[18px] 2xl:text-[20px]">
        {children}
      </h3>
      <div className="hidden h-px flex-1 bg-gray-200 lg:block" />
    </div>
  )
}

export default function PortfolioCaseStudyPopup({ isOpen, onClose, study }) {
  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const fallbackStudy = portfolioCaseStudies[0]
  const activeStudy = study ?? fallbackStudy
  const details = activeStudy.details ?? defaultInfoCards
  const metrics = activeStudy.metrics ?? defaultMetrics
  const industry = activeStudy.industry ?? fallbackStudy.industry
  const title = activeStudy.title ?? fallbackStudy.title
  const previewSrc = activeStudy.previewImg ?? activeStudy.img ?? fallbackStudy.previewImg
  const impactText = activeStudy.impact ?? fallbackStudy.impact
  const activeCta = activeStudy.cta ?? fallbackStudy.cta

  return (
    <AnimatePresence>
      {isOpen ? (
        <MotionDiv
          className="fixed inset-0 z-[120] flex items-start justify-center overflow-y-auto bg-black/60 px-3 py-4 backdrop-blur-sm sm:px-4 sm:py-6 md:px-6 lg:items-center xl:px-8 2xl:px-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <MotionSection
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-case-study-title"
            className="relative my-auto flex w-[90vw] max-w-none flex-col overflow-hidden rounded-[12px] bg-white p-3.5 shadow-[0_32px_80px_rgba(0,0,0,0.4)] sm:max-h-[calc(100dvh-3rem)] sm:p-5 md:w-[70vw] md:p-5 lg:p-6 xl:rounded-[24px] xl:p-7 2xl:max-h-[calc(100dvh-4rem)] 2xl:rounded-[28px] 2xl:p-8"
            initial={{ opacity: 0, y: 20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.985 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3.5 top-3.5 z-20 flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 hover:text-black sm:right-4 sm:top-4 md:right-4 md:top-4 lg:right-[1.1rem] lg:top-[1.1rem] xl:right-5 xl:top-5 2xl:h-9 2xl:w-9"
              aria-label="Close case study popup"
            >
              <X className="h-4 w-4 2xl:h-5 2xl:w-5" strokeWidth={2.5} />
            </button>

            {/* Content Container */}
            <div className="min-h-0 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
              
              {/* 1. Header */}
              <div className="mb-3 shrink-0 text-left lg:mb-1.5 xl:mb-4">
                <span className="inline-flex rounded-full bg-[#eef2ff] px-2.5 py-1 text-[10px] font-bold text-[#4f46e5] sm:text-[10px] md:text-[10.5px] lg:text-[10.5px] xl:text-[11px] 2xl:px-3 2xl:py-1.5 2xl:text-[12px]">
                  Case Study
                </span>
                <h2
                  id="portfolio-case-study-title"
                  className="mb-1.5 mt-2 pr-8 text-[24px] font-bold leading-[1.08] tracking-[-0.04em] sm:mb-2 sm:text-[30px] md:mb-3 md:text-[32px] lg:mb-4 lg:pr-0 lg:text-[34px] xl:mb-4 xl:text-[38px] 2xl:text-[46px]"
                >
                  {title}
                </h2>
                <p className="mt-2 text-[12px] font-bold leading-[1.35] text-[#111827] sm:text-[12px] md:text-[13px] lg:text-[13px] xl:text-[13.5px] 2xl:text-[16px]">
                  Client&apos;s Industry: <span className="text-[#f45328]">{industry}</span>
                </p>
              </div> 

              <div className="flex flex-col">
                {/* 2. Detail Cards */}
                <div className="order-2 mt-4 grid gap-3 sm:grid-cols-2 md:gap-3.5 lg:order-1 lg:mb-5 lg:mt-0 lg:grid-cols-4 lg:gap-4 xl:mb-6 xl:gap-4 2xl:gap-5">
                  {details.map((card) => (
                    <DetailCard key={card.title} {...card} />
                  ))}
                </div>

                {/* 3. Image and Metrics Grid Section */}
                <div className="order-1 grid grid-cols-1 gap-3 sm:gap-5 md:gap-5 lg:order-2 lg:grid-cols-2 lg:items-center lg:gap-6 xl:gap-7 2xl:gap-8">
                
                {/* Left Side: Preview Image */}
                <div className="flex w-full items-center justify-center rounded-[14px] 2xl:rounded-[16px]">
                  <img
                    src={previewSrc}
                    alt={`${title} case study preview`}
                    className="h-auto w-full max-w-none object-contain sm:max-h-[380px] md:max-h-[420px] lg:max-h-[500px] xl:max-h-[550px]"
                  />
                </div>

                {/* Right Side: Impact and Results */}
                {/* Changed to justify-center and removed flex-1 inside to "hug" content properly */}
                <div className="flex flex-col justify-center gap-4 xl:gap-8">
                  
                  {/* Impact section */}
                  <div className="order-2 flex flex-col lg:order-1">
                    <SectionLabel>Impact</SectionLabel>
                    <article className="rounded-[8px] bg-[#faeefe] px-3 py-4 sm:px-4 sm:py-4 md:px-4 md:py-5 lg:rounded-[12px] xl:px-5 xl:py-[1.4rem] 2xl:rounded-[14px] 2xl:px-6 2xl:py-7">
                      <div className="flex flex-col items-center gap-2 text-center lg:flex-row lg:items-start lg:gap-3 lg:text-left">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#f3d9ff] sm:h-10 sm:w-10 md:h-10 md:w-10 xl:h-10 xl:w-10 2xl:h-11 2xl:w-11">
                          <img
                            src="/images/portfolio/pop-up/system.webp"
                            alt=""
                            aria-hidden="true"
                            className="h-6 w-6 object-contain sm:h-[17px] sm:w-[17px] md:h-[18px] md:w-[18px] xl:h-[1.4rem] xl:w-[1.4rem] 2xl:h-8 2xl:w-8"
                          />
                        </div>
                        {/* Added text-justify to beautifully align the text content block */}
                        <p className="pt-0.5 text-pretty text-[9.5px] leading-[1.18] text-black sm:text-[11.5px] md:text-[12px] lg:text-[13px] xl:text-[13.5px] 2xl:text-[17px]">
                          {impactText}
                        </p>
                      </div>
                    </article>
                  </div>

                  {/* Results section */}
                  <div className="order-1 flex flex-col lg:order-2">
                    <SectionLabel>Results</SectionLabel>
                    <div className="flex flex-col gap-2.5 xl:gap-3.5 2xl:gap-4">
                      {metrics.map((metric) => (
                        <MetricCard key={metric.label} {...metric} />
                      ))}
                    </div>
                  </div>

                </div>
                </div>
              </div>

              {/* 4. CTA */}
              <div className="mt-5 flex flex-col items-start rounded-[8px] border border-[#ffb199] bg-[#FFDCCE] px-4 py-3.5 sm:px-4 sm:py-3 md:px-5 md:py-3 lg:flex-row lg:items-center lg:justify-between lg:gap-3 lg:rounded-[12px] lg:border-0 xl:mt-6 xl:px-6 xl:py-4 2xl:mt-7 2xl:rounded-[14px] 2xl:px-7 2xl:py-5">
                <div className="flex flex-col items-start lg:flex-row lg:items-center lg:gap-3">
                  <div className="flex h-[54px] w-[54px] flex-shrink-0 items-center justify-center rounded-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.04)] sm:h-10 sm:w-10 md:h-10 md:w-10 lg:h-10 lg:w-10 2xl:h-11 2xl:w-11">
                    <img
                      src="/images/portfolio/pop-up/dashboard-portfolio.webp"
                      alt=""
                      aria-hidden="true"
                      className="h-7 w-7 object-contain sm:h-[16px] sm:w-[16px] md:h-[17px] md:w-[17px] lg:h-[17px] lg:w-[17px] xl:h-6 xl:w-6 2xl:h-7 2xl:w-7"
                    />
                  </div>
                  <div className="mt-3 lg:mt-0">
                    <h4 className="max-w-[15ch] text-[19px] font-bold leading-[1.18] text-black sm:max-w-none sm:text-[13.5px] md:text-[14px] lg:text-[14px] xl:text-[15px] 2xl:text-[18px]">
                      {activeCta.title}
                    </h4>
                    <p className="mt-1 text-[16px] font-medium leading-[1.2] text-black sm:text-[11px] md:text-[11.5px] lg:mt-0.5 lg:text-[11.5px] xl:text-[12px] 2xl:text-[14px]">
                      {activeCta.subtitle}
                    </p>
                  </div>
                </div>

                <Link
                  to="/contact"
                  onClick={onClose}
                  className="mt-4 inline-flex min-h-[38px] w-full items-center justify-center rounded-full bg-[#F45328] px-5 text-[12.5px] font-bold text-white transition hover:bg-[#e24a21] sm:mt-3 sm:min-h-10 sm:text-[12.5px] md:min-h-[42px] md:text-[13px] lg:mt-0 lg:w-auto lg:min-w-[190px] lg:text-[13px] xl:min-w-[210px] xl:text-[15px] 2xl:min-h-[48px] 2xl:min-w-[240px] 2xl:px-6 2xl:text-[17px]"
                >
                  <OrangeButtonLabel>{activeCta.buttonLabel}</OrangeButtonLabel>
                </Link>
              </div>
            </div>
          </MotionSection>
        </MotionDiv>
      ) : null}
    </AnimatePresence>
  )
}
