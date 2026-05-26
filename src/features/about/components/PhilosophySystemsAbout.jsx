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
      ? 'rounded-tl-[90px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[90px]'
      : 'rounded-tl-[90px] rounded-tr-[0px] rounded-bl-[0px] rounded-br-[90px]'

  const cardStateClass = isActive
    ? 'border-transparent bg-[#F45328] shadow-[0_20px_35px_rgba(244,83,40,0.18)]'
    : 'border border-[#eef0f4] bg-white shadow-[0_12px_22px_rgba(15,23,42,0.06)]'

  return (
    <article
      className="group relative z-10 min-w-0 w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div
        className={[
          'relative h-[190px] w-full overflow-hidden transition-all duration-500 ease-out sm:h-[206px] lg:h-[220px]',
          shapeClass,
          cardStateClass,
          isActive ? 'z-20 scale-[1.035]' : 'z-10 scale-100',
        ].join(' ')}
      >
        <div
          className="absolute inset-0 z-10 flex flex-col justify-center overflow-hidden px-7 py-7 text-left transition-colors duration-500 ease-out sm:px-12 sm:py-10 lg:px-14 lg:py-11"
        >
          <div className="relative z-10 flex w-full max-w-[95%] flex-col items-start gap-1.5 sm:max-w-[320px] lg:max-w-[340px]">
            <div
              className={[
                'mb-2 flex h-14 w-14 items-center justify-center rounded-[10px] border transition-all duration-500 ease-out sm:h-12 sm:w-12',
                isActive ? 'border-white/70 bg-white shadow-[0_8px_18px_rgba(255,255,255,0.18)]' : 'border-[#dfe4ec] bg-white',
              ].join(' ')}
            >
              <img src={item.icon} alt="" aria-hidden="true" className="h-10 w-10 object-contain sm:h-7 sm:w-7" />
            </div>

            <h3
              className={[
                'max-w-[30ch] text-[20px] font-bold leading-[1.18] tracking-[-0.03em] text-balance transition-colors duration-500 ease-out sm:text-[22px] lg:text-[24px]',
                isActive ? '!text-white' : '!text-black',
              ].join(' ')}
            >
              {item.title}
            </h3>

            <p
              className={[
                'max-w-[34ch] text-[14px] font-medium leading-[1.45] transition-colors duration-500 ease-out lg:text-[15px]',
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
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <SectionWrapper as="section" className="relative bg-transparent section-spacing">
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mx-auto mb-10 max-w-[760px] text-center sm:mb-12">
          <p className="mb-3 text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium uppercase tracking-[0.28em] ">
            OUR PHILOSOPHY
          </p>
          <h2 className="text-[32px] font-bold leading-[1.08] tracking-[-0.04em]  sm:text-[40px] lg:text-[50px]">
            We Build Brands, Products &
            <br />
            Systems{' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
              That Scale
            </CurvedUnderlineText>
          </h2> 
        </div>

        <div className="relative mt-12 lg:mt-16">
          <div className="grid justify-items-center gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-y-6 lg:gap-x-10 lg:gap-y-6 xl:gap-y-7">
          {philosophyData.map((item, index) => (
            <PhilosophyCard
              key={item.id}
              item={item}
              index={index}
              isActive={activeIndex === index}
              onEnter={() => setActiveIndex(index)}
              onLeave={() => setActiveIndex(0)}
            />
          ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
