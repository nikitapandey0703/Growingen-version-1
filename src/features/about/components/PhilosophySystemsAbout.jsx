import React, { useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

const philosophyData = [
  {
    id: 1,
    title: 'Great Marketing Fails Without Strong Branding',
    description:
      "Without trust, clarity, and visual identity, even strong marketing loses impact before it can build momentum.",
    icon: '/images/about/marketing.webp',
  },
  {
    id: 2,
    title: 'Good Products Struggle Without The Right Experience',
    description:
      'How you present your product matters as much as what you offer. Experience shapes trust, clarity, and conversion.',
    icon: '/images/about/products.webp',
  },
  {
    id: 3,
    title: "Websites Don't Perform Without Strategy",
    description:
      'A beautiful website without positioning or journey design can still look polished while doing very little for growth.',
    icon: '/images/about/strategy.webp',
  },
  {
    id: 4,
    title: 'So We Changed The Approach',
    description:
      'We connect brand, product, strategy, and execution into one growth system instead of treating them separately.',
    icon: '/images/about/approch.webp',
  },
]

function PhilosophyCard({ item, index, isActive, onEnter, onLeave }) {
  const shapeClass =
    index % 2 === 0
      ? 'rounded-tl-[clamp(2rem,4vw,5rem)] rounded-br-[clamp(2rem,4vw,5rem)]'
      : 'rounded-tl-[clamp(2rem,4vw,5rem)] rounded-br-[clamp(2rem,4vw,5rem)]'

  const cardStateClass = isActive
    ? 'border-transparent bg-[#F45328] shadow-[0_20px_35px_rgba(244,83,40,0.18)]'
    : 'border border-[#eef0f4] bg-white shadow-[0_12px_22px_rgba(15,23,42,0.06)]'

  return (
    <article
      className="group relative z-10 min-w-0 w-full max-w-[490px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div
        className={[
          'relative w-full overflow-hidden transition-all duration-500 ease-out h-[clamp(190px,22vw,220px)]',
          shapeClass,
          cardStateClass,
          isActive ? 'z-20 scale-[1.035]' : 'z-10 scale-100',
        ].join(' ')}
      >
        <div
          // FIXED: Reduced py (padding-y) to ensure white space is visible even with fixed height
          // px (padding-x) also reduced slightly so text doesn't wrap into too many lines vertically
          className="absolute inset-0 z-10 flex flex-col justify-center overflow-hidden px-[clamp(1.25rem,3vw,2rem)] py-[clamp(1rem,2vw,1.5rem)] text-left transition-colors duration-500 ease-out"
        >
          <div className="relative z-10 flex w-full flex-col items-start gap-1.5 sm:gap-2">
            <div
              className={[
                'mb-1 flex items-center justify-center rounded-[10px] border transition-all duration-500 ease-out h-[clamp(42px,4vw,50px)] w-[clamp(42px,4vw,50px)]',
                isActive ? 'border-white/70 bg-white shadow-[0_8px_18px_rgba(255,255,255,0.18)]' : 'border-[#dfe4ec] bg-white',
              ].join(' ')}
            >
              <img src={item.icon} alt="" aria-hidden="true" className="object-contain h-6 w-6 sm:h-7 sm:w-7" />
            </div>

            <h3
              className={[
                'line-clamp-2 font-bold leading-[1.15] tracking-[-0.02em] transition-colors duration-500 ease-out text-[clamp(17px,2vw,22px)]',
                isActive ? '!text-white' : '!text-black',
              ].join(' ')}
            >
              {item.title}
            </h3>

            <p
              className={[
                'max-w-[40ch] font-medium leading-[1.3] transition-colors duration-500 ease-out text-[clamp(13px,1.2vw,14.5px)]',
                isActive ? '!text-white/90' : '!text-[#4b5563]',
              ].join(' ')}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function PhilosophySystemsAbout() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <SectionWrapper as="section" className="relative bg-transparent section-spacing">
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto mb-[clamp(2.5rem,4vw,3rem)] max-w-[760px] text-center">
          <p className="mb-3 font-medium uppercase tracking-[0.28em] text-[clamp(14px,1.5vw,18px)] text-[#7a7f8e]">
            OUR PHILOSOPHY
          </p>
          <h2 className="font-bold leading-[1.08] tracking-[-0.04em] text-[clamp(30px,4vw+8px,48px)]">
            We Build Brands, Products &
            <br />
            Systems{' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
              That Scale
            </CurvedUnderlineText>
          </h2> 
        </div>

        <div className="relative mt-[clamp(2.5rem,4vw,3.5rem)] px-4">
          <div className="grid justify-items-center sm:grid-cols-2 gap-x-[clamp(1.5rem,3vw,2.5rem)] gap-y-[clamp(1.25rem,2.5vw,1.75rem)]">
          {philosophyData.map((item, index) => (
            <PhilosophyCard
              key={item.id}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onEnter={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(null)}
            />
          ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}