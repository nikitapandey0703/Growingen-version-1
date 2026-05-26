import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

const tabs = [
  'Web Design',
  'UI/UX',
  'Branding',
  'Social Media',
]

const tabLayouts = [
  // Tab 0: Web Design (6-row grid system for perfect fractional proportions)
  [
    { id: 'wd-1', src: '/images/grid/web-design-1.webp', alt: 'Web design presentation 1', className: 'min-h-[390px] sm:col-span-1 sm:min-h-[500px] lg:col-[1] lg:row-[1/5] lg:min-h-0' },
    { id: 'wd-2', src: '/images/grid/web-design-2.webp', alt: 'Web design presentation 2', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[2/4] lg:row-[1/3] lg:min-h-0' },
    { id: 'wd-3', src: '/images/grid/web-design-3.webp', alt: 'Web design presentation 3', className: 'min-h-[390px] sm:col-span-1 sm:min-h-[500px] lg:col-[4] lg:row-[1/4] lg:min-h-0' },
    { id: 'wd-4', src: '/images/grid/web-design-4.webp', alt: 'Web design presentation 4', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[2/4] lg:row-[3/5] lg:min-h-0' },
    { id: 'wd-5', src: '/images/grid/web-design-5.webp', alt: 'Web design presentation 5', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[1/3] lg:row-[5/7] lg:min-h-0' },
    { id: 'wd-6', src: '/images/grid/web-design-6.webp', alt: 'Web design presentation 6', className: 'min-h-[260px] sm:col-span-1 sm:min-h-[320px] lg:col-[3] lg:row-[5/7] lg:min-h-0' },
    { id: 'wd-7', src: '/images/grid/web-design-7.webp', alt: 'Web design presentation 7', className: 'min-h-[260px] sm:col-span-1 sm:min-h-[320px] lg:col-[4] lg:row-[4/7] lg:min-h-0' },
  ],
  // Tab 1: UI/UX (Restored to exact prior 2-row layout)
  [
    { id: 'ui-1', src: '/images/grid/ui-ux-1.webp', alt: 'UI/UX interface 1', className: 'min-h-[390px] sm:col-span-1 sm:min-h-[500px] lg:col-[1] lg:row-[1/3] lg:min-h-0' },
    { id: 'ui-2', src: '/images/grid/ui-ux-2-1.webp', alt: 'UI/UX interface 2', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[2/4] lg:row-[1] lg:min-h-0', imageClassName: 'object-cover scale-[1.38]' },
    { id: 'ui-3', src: '/images/grid/ui-ux-3.webp', alt: 'UI/UX interface 3', className: 'min-h-[390px] sm:col-span-1 sm:min-h-[500px] lg:col-[4] lg:row-[1/3] lg:min-h-0' },
    { id: 'ui-4', src: '/images/grid/ui-ux-4.webp', alt: 'UI/UX interface 4', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[2/4] lg:row-[2] lg:min-h-0' },
  ],
  // Tab 2: Branding (6-row grid system for perfect fractional proportions)
  [
    { id: 'br-1', src: '/images/grid/branding-1.webp', alt: 'Branding showcase 1', className: 'min-h-[390px] sm:col-span-1 sm:min-h-[500px] lg:col-[1] lg:row-[1/5] lg:min-h-0' },
    { id: 'br-2', src: '/images/grid/branding-2.webp', alt: 'Branding showcase 2', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[2/4] lg:row-[1/3] lg:min-h-0' },
    { id: 'br-3', src: '/images/grid/branding-3.webp', alt: 'Branding showcase 3', className: 'min-h-[390px] sm:col-span-1 sm:min-h-[500px] lg:col-[4] lg:row-[1/4] lg:min-h-0' },
    { id: 'br-4', src: '/images/grid/branding-4.webp', alt: 'Branding showcase 4', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[2/4] lg:row-[3/5] lg:min-h-0' },
    { id: 'br-5', src: '/images/grid/branding-5.webp', alt: 'Branding showcase 5', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[1/3] lg:row-[5/7] lg:min-h-0' },
    { id: 'br-6', src: '/images/grid/branding-6.webp', alt: 'Branding showcase 6', className: 'min-h-[260px] sm:col-span-1 sm:min-h-[320px] lg:col-[3] lg:row-[5/7] lg:min-h-0' },
    { id: 'br-7', src: '/images/grid/branding-7.webp', alt: 'Branding showcase 7', className: 'min-h-[260px] sm:col-span-1 sm:min-h-[320px] lg:col-[4] lg:row-[4/7] lg:min-h-0' },
  ],
  // Tab 3: Social Media (Restored to exact prior 2-row layout)
  [
    { id: 'sm-1', src: '/images/grid/social-media-1.webp', alt: 'Social media post 1', className: 'min-h-[390px] sm:col-span-1 sm:min-h-[500px] lg:col-[1] lg:row-[1/3] lg:min-h-0' },
    { id: 'sm-2', src: '/images/grid/social-media-2.webp', alt: 'Social media post 2', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[2/4] lg:row-[1] lg:min-h-0' },
    { id: 'sm-3', src: '/images/grid/social-media-3.webp', alt: 'Social media post 3', className: 'min-h-[390px] sm:col-span-1 sm:min-h-[500px] lg:col-[4] lg:row-[1/3] lg:min-h-0' },
    { id: 'sm-4', src: '/images/grid/social-media-4.svg', alt: 'Social media post 4', className: 'min-h-[260px] sm:col-span-2 sm:min-h-[320px] lg:col-[2/4] lg:row-[2] lg:min-h-0' },
  ],
]

const gridVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.06, staggerChildren: 0.07 },
  },
  exit: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 26, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.985,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  },
}

const MotionArticle = motion.article
const MotionButton = motion.button
const MotionDiv = motion.div

function ShowcaseCard({ item }) {
  return (
    <MotionArticle
      variants={cardVariants}
      className={`h-full w-full overflow-hidden rounded-[clamp(14px,1.8vw,30px)] ${item.className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[clamp(14px,1.8vw,30px)] sm:rounded-[clamp(16px,2.2vw,36px)]">
        <img
          src={item.src}
          alt={item.alt}
          className={`h-full w-full ${item.imageClassName || 'object-cover'}`}
        />
      </div>
    </MotionArticle>
  )
}

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  const animatedItems = useMemo(
    () =>
      tabLayouts[activeTab].map((item) => ({
        ...item,
        animationKey: `${activeTab}-${item.id}`,
      })),
    [activeTab],
  )

  return (
    <SectionWrapper as="section" className="section-spacing relative overflow-hidden bg-transparent">
      <div className="relative">
        <div className="section-content max-w-[1080px]">
          <div className="mx-auto max-w-[560px] text-center">
            <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] sm:text-[40px] lg:text-[50px]">
              Visual{' '}
              <CurvedUnderlineText
                className="hero-highlight pb-[0.18em]"
                lineClassName="left-[-24%] w-[86%] h-[0.18em] -bottom-[6px] sm:-bottom-[8px] md:-bottom-[10px] lg:-bottom-[12px] xl:-bottom-[14px] 2xl:-bottom-[16px]"
              >
                Showcase
              </CurvedUnderlineText>
            </h2>
          </div>

          <div className="mx-auto mt-8 flex w-full max-w-[1020px] flex-wrap justify-between gap-y-3 sm:mt-10 lg:flex-nowrap lg:gap-0">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index

              return (
                <MotionButton
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  whileTap={{ scale: 0.97 }}
                  className={[
                    'relative flex items-center justify-center overflow-hidden rounded-full border-[1.5px] text-center font-extrabold tracking-tight transition-[border-color,color,background-color] duration-300',
                    'w-[48%] sm:w-[calc(50%-0.5rem)] lg:h-[32px] lg:w-[200px]',
                    'h-10 text-[11px] sm:text-[12px] lg:text-[13px]',
                    isActive
                      ? 'border-[#F45328] text-white'
                      : 'border-[#b8bec9] bg-transparent text-black hover:border-[#8b94a3]',
                  ].join(' ')}
                >
                  {isActive ? (
                    <MotionDiv
                      layoutId="portfolio-showcase-tab-pill"
                      className="absolute inset-0 rounded-full bg-[#F45328]"
                      transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                    />
                  ) : null}

                  <span className="relative z-10 leading-none font-extrabold">{tab}</span>
                </MotionButton>
              )
            })}
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <MotionDiv
                key={activeTab}
                variants={gridVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                // The dynamic shift happens here: For 0 & 2, col 2 shrinks and col 3 expands equally by 0.25fr.
                className={`mx-auto mt-8 grid max-w-[1020px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 ${
                  activeTab === 0 || activeTab === 2 
                    ? 'lg:grid-cols-[1.25fr_0.75fr_1.25fr_1.25fr] lg:auto-rows-[140px]' 
                    : 'lg:grid-cols-[1.25fr_1fr_1fr_1.25fr] lg:auto-rows-[280px]'
                } lg:gap-4`}
              >
                {animatedItems.map((item) => (
                  <ShowcaseCard
                    key={item.animationKey}
                    item={item}
                  />
                ))}
              </MotionDiv>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}