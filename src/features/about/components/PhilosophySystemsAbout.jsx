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
      // Width scales completely fluidly up to 490px
      className="group relative z-10 min-w-0 w-full max-w-[490px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div
        className={[
          // Height fluidly scales from 190px (mobile) up to precisely 220px
          'relative w-full overflow-hidden transition-all duration-500 ease-out h-[clamp(190px,22vw,220px)]',
          shapeClass,
          cardStateClass,
          isActive ? 'z-20 scale-[1.035]' : 'z-10 scale-100',
        ].join(' ')}
      >
        <div
          // Padding fluidly scales up to your preferred desktop limits
          className="absolute inset-0 z-10 flex flex-col justify-center overflow-hidden px-[clamp(1.75rem,4vw,3.5rem)] py-[clamp(1.75rem,3vw,2.75rem)] text-left transition-colors duration-500 ease-out"
        >
          <div className="relative z-10 flex w-full flex-col items-start gap-[clamp(4px,0.8vw,6px)] max-w-[340px]">
            <div
              className={[
                'mb-[clamp(4px,0.6vw,8px)] flex items-center justify-center rounded-[10px] border transition-all duration-500 ease-out h-[clamp(48px,5vw,56px)] w-[clamp(48px,5vw,56px)]',
                isActive ? 'border-white/70 bg-white shadow-[0_8px_18px_rgba(255,255,255,0.18)]' : 'border-[#dfe4ec] bg-white',
              ].join(' ')}
            >
              <img src={item.icon} alt="" aria-hidden="true" className="object-contain h-[clamp(28px,3vw,32px)] w-[clamp(28px,3vw,32px)]" />
            </div>

            <h3
              className={[
                'line-clamp-2 font-bold leading-[1.18] tracking-[-0.03em] transition-colors duration-500 ease-out text-[clamp(18px,2.5vw,24px)]',
                isActive ? '!text-white' : '!text-black',
              ].join(' ')}
              title={item.title}
            >
              {item.title}
            </h3>

            <p
              className={[
                'mt-0.5 max-w-[36ch] font-medium leading-[1.25] xl:leading-[1.5] 2xl:leading-[1.5] transition-colors duration-500 ease-out text-[clamp(14px,1.5vw,15px)]',
                isActive ? '!text-white/90' : '!text-black',
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
          <p className="mb-3 font-medium uppercase tracking-[0.28em] text-[clamp(16px,2vw,24px)]">
            OUR PHILOSOPHY
          </p>
          <h2 className="font-bold leading-[1.08] tracking-[-0.04em] text-[clamp(32px,4vw+10px,50px)]">
            We Build Brands, Products &
            <br />
            Systems{' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
              That Scale
            </CurvedUnderlineText>
          </h2> 
        </div>

        <div className="relative mt-[clamp(3rem,4.5vw,4rem)]">
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