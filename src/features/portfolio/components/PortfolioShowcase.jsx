import { AnimatePresence, motion } from 'framer-motion'
import { useMemo, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import OrangeButtonLabel from '../../../components/common/OrangeButtonLabel'
import SectionWrapper from '../../../components/common/SectionWrapper'

const tabs = [
  'Web Design',
  'UI/UX',
  'Branding',
  'Social Media',
]

const tabLayouts = [
  // Tab 0: Web Design 
  [
    { id: 'wd-1', src: '/images/grid/web-design-1.webp', alt: 'Web design presentation 1', className: 'sm:col-span-1 lg:col-[1] lg:row-[1/5]' },
    { id: 'wd-2', src: '/images/grid/web-design-2.webp', alt: 'Web design presentation 2', className: 'sm:col-span-2 lg:col-[2/4] lg:row-[1/3]' },
    { id: 'wd-3', src: '/images/grid/web-design-3.webp', alt: 'Web design presentation 3', className: 'sm:col-span-1 lg:col-[4] lg:row-[1/4]' },
    { id: 'wd-4', src: '/images/grid/web-design-4.webp', alt: 'Web design presentation 4', className: 'sm:col-span-2 lg:col-[2/4] lg:row-[3/5]' },
    { id: 'wd-5', src: '/images/grid/web-design-5.webp', alt: 'Web design presentation 5', className: 'sm:col-span-2 lg:col-[1/3] lg:row-[5/7]' },
    { id: 'wd-6', src: '/images/grid/web-design-6.webp', alt: 'Web design presentation 6', className: 'sm:col-span-1 lg:col-[3] lg:row-[5/7]' },
    { id: 'wd-7', src: '/images/grid/web-design-7.webp', alt: 'Web design presentation 7', className: 'sm:col-span-1 lg:col-[4] lg:row-[4/7]' },
  ],
  // Tab 1: UI/UX (Exact Layout as per Reference)
  [
    { 
      id: 'ui-top-left', 
      src: '/images/grid/ui-ux-2-1.webp', 
      alt: 'UI/UX interface Top Left', 
      className: 'sm:col-span-1 lg:col-[1] lg:row-[1]' 
    },
    { 
      id: 'ui-bottom-left', 
      src: '/images/grid/ui-ux-4.webp', 
      alt: 'UI/UX interface Bottom Left', 
      className: 'sm:col-span-1 lg:col-[1] lg:row-[2]' 
    },
    { 
      id: 'ui-right-tall', 
      src: '/images/grid/ui-ux-3-1.webp', 
      alt: 'UI/UX interface Right Tall', 
      className: 'sm:col-span-2 lg:col-[2] lg:row-[1/3] '
      
      // Spans from row 1 to 3 to cover full height
    },
  ],
  // Tab 2: Branding
  [
    { id: 'br-1', src: '/images/grid/branding-1.webp', alt: 'Branding showcase 1', className: 'sm:col-span-1 lg:col-[1] lg:row-[1/5]' },
    { id: 'br-2', src: '/images/grid/branding-2.webp', alt: 'Branding showcase 2', className: 'sm:col-span-2 lg:col-[2/4] lg:row-[1/3]' },
    { id: 'br-3', src: '/images/grid/branding-3.webp', alt: 'Branding showcase 3', className: 'sm:col-span-1 lg:col-[4] lg:row-[1/4]' },
    { id: 'br-4', src: '/images/grid/branding-4.webp', alt: 'Branding showcase 4', className: 'sm:col-span-2 lg:col-[2/4] lg:row-[3/5]' },
    { id: 'br-5', src: '/images/grid/branding-5.webp', alt: 'Branding showcase 5', className: 'sm:col-span-2 lg:col-[1/3] lg:row-[5/7]' },
    { id: 'br-6', src: '/images/grid/branding-6.webp', alt: 'Branding showcase 6', className: 'sm:col-span-1 lg:col-[3] lg:row-[5/7]' },
    { id: 'br-7', src: '/images/grid/branding-7.webp', alt: 'Branding showcase 7', className: 'sm:col-span-1 lg:col-[4] lg:row-[4/7]' },
  ],
  // Tab 3: Social Media
  [
    { id: 'sm-1', src: '/images/grid/social-media-1.webp', alt: 'Social media post 1', className: 'sm:col-span-1 lg:col-[1] lg:row-[1/3]' },
    { id: 'sm-2', src: '/images/grid/social-media-2.webp', alt: 'Social media post 2', className: 'sm:col-span-2 lg:col-[2/4] lg:row-[1]' },
    { id: 'sm-3', src: '/images/grid/social-media-3.webp', alt: 'Social media post 3', className: 'sm:col-span-1 lg:col-[4] lg:row-[1/3]' },
    { id: 'sm-4', src: '/images/grid/social-media-4.webp', alt: 'Social media post 4', className: 'sm:col-span-2 lg:col-[2/4] lg:row-[2]' },
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
      className={`relative flex h-full w-full items-center justify-center ${item.className || ''}`}
    >
      <img
        src={item.src}
        alt={item.alt}
        // CHANGED: h-full w-full object-cover ensures it hugs the grid corners perfectly without distorting pixels
        className={`block h-full w-full object-cover rounded-[clamp(14px,2vw,31px)] shadow-[0_2px_12px_rgba(0,0,0,0.06)] ${item.imageClassName || ''}`}
      />
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
        <div className="section-content max-w-[1240px]">
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

          <div className="mx-auto mt-8 flex w-full max-w-[1200px] flex-wrap justify-between gap-y-4 sm:mt-10 lg:flex-nowrap lg:gap-0">
            {tabs.map((tab, index) => {
              const isActive = activeTab === index

              return (
                <MotionButton
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  whileTap={{ scale: 0.97 }}
                  className={[
                    'relative flex h-10 w-[48%] items-center justify-center overflow-hidden rounded-full border-[1.5px] text-center text-[11px] font-extrabold tracking-tight transition-[border-color,color,background-color] duration-300 sm:w-[calc(50%-0.5rem)] sm:text-[12px] lg:h-[32px] lg:w-[200px] lg:text-[13px]',
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

                  <span className="relative z-10 font-extrabold leading-[1.5]">
                    {isActive ? <OrangeButtonLabel>{tab}</OrangeButtonLabel> : tab}
                  </span>
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
                className={`mx-auto mt-8 grid max-w-[1200px] grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-10 lg:gap-6 ${
                  activeTab === 0 || activeTab === 2
                    ? 'lg:grid-cols-[1.25fr_0.75fr_1.25fr_1.25fr]'
                    : activeTab === 1
                    // ADDED: lg:auto-rows-fr enforces the two left rows to share equal height, making alignment mathematically perfect
                    ? 'lg:grid-cols-2 lg:auto-rows-fr' 
                    : 'lg:grid-cols-[1.25fr_1fr_1fr_1.25fr]'
                }`}
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