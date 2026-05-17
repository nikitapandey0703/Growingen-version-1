import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'

const AUTO_ROTATE_DELAY = 3800

const tabs = [
  'Brand Identity',
  'UI/UX Dashboards',
  'Ad Campaign',
  'Web Design',
]

const baseImages = [
  { id: 1, src: '/images/grid/grid-1.png', alt: 'Brand identity showcase collage' },
  { id: 2, src: '/images/grid/grid-2.png', alt: 'Creative dashboard presentation screens' },
  { id: 3, src: '/images/grid/grid-3.png', alt: 'Dark web product dashboard interface' },
  { id: 4, src: '/images/grid/grid-4.png', alt: 'Ad campaign creative collection' },
  { id: 5, src: '/images/grid/grid-5.png', alt: 'Chat and mobile interface design showcase' },
  { id: 6, src: '/images/grid/grid-6.png', alt: 'Analytics dashboard interface showcase' },
  { id: 7, src: '/images/grid/grid-7.png', alt: 'Luxury product campaign visual' },
]

const tabLayouts = [
  [
    { ...baseImages[0], className: 'sm:col-span-1 lg:col-[1] lg:row-[1/3] min-h-[340px] sm:min-h-[420px] lg:min-h-0' },
    { ...baseImages[1], className: 'sm:col-span-1 lg:col-[2/4] lg:row-[1] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[2], className: 'sm:col-span-1 lg:col-[4] lg:row-[1] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[3], className: 'sm:col-span-2 lg:col-[2/4] lg:row-[2] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[4], className: 'sm:col-span-1 lg:col-[1/3] lg:row-[3] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[5], className: 'sm:col-span-1 lg:col-[3] lg:row-[3] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[6], className: 'sm:col-span-1 lg:col-[4] lg:row-[2/4] min-h-[340px] sm:min-h-[420px] lg:min-h-0' },
  ],
  [
    { ...baseImages[1], className: 'sm:col-span-2 lg:col-[1/3] lg:row-[1/3] min-h-[340px] sm:min-h-[400px] lg:min-h-0' },
    { ...baseImages[2], className: 'sm:col-span-2 lg:col-[3/5] lg:row-[1] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[4], className: 'sm:col-span-1 lg:col-[3] lg:row-[2] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[5], className: 'sm:col-span-1 lg:col-[4] lg:row-[2] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
  ],
  [
    { ...baseImages[3], className: 'sm:col-span-2 lg:col-[1/3] lg:row-[1] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[6], className: 'sm:col-span-1 lg:col-[3] lg:row-[1/3] min-h-[340px] sm:min-h-[420px] lg:min-h-0' },
    { ...baseImages[0], className: 'sm:col-span-1 lg:col-[4] lg:row-[1] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[1], className: 'sm:col-span-1 lg:col-[1] lg:row-[2] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[2], className: 'sm:col-span-1 lg:col-[2] lg:row-[2] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[4], className: 'sm:col-span-2 lg:col-[4] lg:row-[2] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
  ],
  [
    { ...baseImages[4], className: 'sm:col-span-2 lg:col-[1/3] lg:row-[1/3] min-h-[340px] sm:min-h-[420px] lg:min-h-0' },
    { ...baseImages[1], className: 'sm:col-span-2 lg:col-[3/5] lg:row-[1] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[0], className: 'sm:col-span-1 lg:col-[3] lg:row-[2] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[2], className: 'sm:col-span-1 lg:col-[4] lg:row-[2] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
    { ...baseImages[3], className: 'sm:col-span-2 lg:col-[1/5] lg:row-[3] min-h-[270px] sm:min-h-[300px] lg:min-h-0' },
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

function ShowcaseCard({ item, isAutoFocused }) {
  return (
    <motion.article
      variants={cardVariants}
      className={`group overflow-hidden rounded-[16px] sm:rounded-[18px] ${item.className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[16px] sm:rounded-[18px]">
        <img
          src={item.src}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
        />
        <div
          className={[
            'absolute inset-0 transition duration-500',
            isAutoFocused
              ? 'bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_0%,rgba(0,0,0,0.22)_100%)]'
              : 'bg-black/0 group-hover:bg-black/10',
          ].join(' ')}
        />
      </div>
    </motion.article>
  )
}

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) {
      return undefined
    }

    const timerId = window.setInterval(() => {
      setActiveTab((current) => (current === tabs.length - 1 ? 0 : current + 1))
    }, AUTO_ROTATE_DELAY)

    return () => window.clearInterval(timerId)
  }, [isPaused])

  const animatedItems = useMemo(
    () =>
      tabLayouts[activeTab].map((item, index) => ({
        ...item,
        animationKey: `${activeTab}-${item.id}`,
        isAutoFocused: index === 0,
      })),
    [activeTab],
  )

  return (
    <section className="section-spacing relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute left-[10%] top-[16%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,151,113,0.18)_0%,rgba(255,151,113,0.06)_44%,rgba(255,151,113,0)_74%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[14%] right-[8%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.18)_0%,rgba(104,141,255,0.06)_42%,rgba(104,141,255,0)_74%)] blur-3xl" />

      <div className="site-container relative">
        <div className="section-content max-w-[1080px]">
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.05em] text-[#111827] sm:text-[40px] lg:text-[50px]">
            Visual{' '}
            <CurvedUnderlineText
              className="hero-highlight pb-[0.18em]"
              lineClassName="left-[7%] w-[86%] h-[0.18em]"
            >
              Showcase
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="mx-auto mt-8 flex w-full max-w-[1020px] flex-wrap justify-between gap-y-3 sm:mt-10 lg:flex-nowrap lg:gap-0">
          {tabs.map((tab, index) => {
            const isActive = activeTab === index

            return (
              <motion.button
                key={tab}
                type="button"
                onClick={() => {
                  setIsPaused(true)
                  setActiveTab(index)
                  window.setTimeout(() => setIsPaused(false), AUTO_ROTATE_DELAY)
                }}
                whileTap={{ scale: 0.97 }}
                className={[
                  'relative flex items-center justify-center overflow-hidden rounded-full border-[1.5px] text-center font-extrabold tracking-tight transition-[border-color,color,box-shadow,background-color] duration-300',
                  'w-[48%] sm:w-[calc(50%-0.5rem)] lg:h-[32px] lg:w-[200px]',
                  'h-10 text-[11px] sm:text-[12px] lg:text-[13px]',
                  isActive
                    ? 'border-[#F45328] text-white shadow-[0_10px_22px_rgba(244,83,40,0.22),0_0_0_1px_rgba(255,255,255,0.08)_inset]'
                    : 'border-[#b8bec9] bg-transparent text-black shadow-[0_1px_0_rgba(255,255,255,0.65)_inset] hover:border-[#8b94a3] hover:shadow-[0_8px_18px_rgba(15,23,42,0.08)]',
                ].join(' ')}
              >
                {isActive ? (
                  <motion.span
                    layoutId="portfolio-showcase-tab-pill"
                    className="absolute inset-0 rounded-full bg-[#F45328]"
                    transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                  />
                ) : null}

                <span className="relative z-10 leading-none font-extrabold">{tab}</span>
              </motion.button>
            )
          })}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mx-auto mt-8 grid max-w-[1020px] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:mt-10 lg:grid-cols-4 lg:auto-rows-[236px] lg:gap-3"
            >
              {animatedItems.map((item) => (
                <ShowcaseCard
                  key={item.animationKey}
                  item={item}
                  isAutoFocused={item.isAutoFocused}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </div>
    </section>
  )
}
