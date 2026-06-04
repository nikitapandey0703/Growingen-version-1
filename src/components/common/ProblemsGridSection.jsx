import { useState } from 'react'
import CurvedUnderlineText from './CurvedUnderlineText'
import SectionWrapper from './SectionWrapper'

function ProblemCard({ item, index, isActive, onEnter, onLeave }) {
  let bgFlipClass = ''
  if (index === 1) bgFlipClass = 'sm:-scale-x-100'
  else if (index === 2) bgFlipClass = 'sm:-scale-y-100'
  else if (index === 3) bgFlipClass = 'sm:-scale-x-100 sm:-scale-y-100'

  const isLeftAligned = index % 2 === 0
  const alignmentClass = isLeftAligned
    ? 'items-end text-right sm:items-start sm:text-left'
    : 'items-end text-right sm:items-end sm:text-right'
    
  let numberPosClass = ''
  if (index === 0) numberPosClass = 'left-5 top-5 sm:left-auto sm:right-6 sm:top-11 sm:bottom-auto'
  if (index === 1) numberPosClass = 'left-5 top-5 sm:left-6 sm:right-auto sm:top-11 sm:bottom-auto'
  if (index === 2) numberPosClass = 'left-5 top-5 sm:left-auto sm:right-6 sm:top-auto sm:bottom-11'
  if (index === 3) numberPosClass = 'left-5 top-5 sm:left-6 sm:right-auto sm:top-auto sm:bottom-11'

  return (
    <article
      className="group relative z-10 min-w-0 w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[490px] 2xl:max-w-[560px]"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div
        className={[
          // CHANGED: Added `flex flex-col` so height can dynamically grow with content on mobile
          'relative flex flex-col min-h-[170px] w-full overflow-hidden bg-transparent transition-all duration-500 ease-out sm:min-h-[206px] sm:overflow-visible lg:min-h-[220px] 2xl:min-h-[248px]',
          isActive ? 'z-20 scale-100 sm:scale-[1.035] drop-shadow-[0_20px_35px_rgba(244,83,40,0.15)]' : 'z-10 scale-100',
        ].join(' ')}
      >
        {/* Background Images */}
        <img
          src="/images/portfolio/subtract-white.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-[-1%] block h-full w-[102%] max-w-none -scale-x-100 object-fill transition-opacity duration-500 ease-out sm:hidden ${
            isActive ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src="/images/portfolio/Subtract-colored.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-[-1%] block h-full w-[102%] max-w-none -scale-x-100 object-fill transition-opacity duration-500 ease-out sm:hidden ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <img
          src="/images/portfolio/subtract-white.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-[-1%] hidden h-full w-[102%] max-w-none object-fill transition-opacity duration-500 ease-out sm:block ${bgFlipClass} ${
            isActive ? 'opacity-0' : 'opacity-100'
          }`}
        />
        <img
          src="/images/portfolio/Subtract-colored.png"
          alt=""
          aria-hidden="true"
          className={`pointer-events-none absolute inset-y-0 left-[-1%] hidden h-full w-[102%] max-w-none object-fill transition-opacity duration-500 ease-out sm:block ${bgFlipClass} ${
            isActive ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* CHANGED: Swapped absolute inset-0 for a relative wrapper so it pushes the card boundaries natively if text overflows */}
        <div
          className={`relative z-10 flex h-full w-full flex-col justify-start px-5 py-6 transition-colors duration-500 ease-out sm:px-10 sm:py-10 md:px-10 md:py-10 lg:px-14 lg:py-11 2xl:px-16 2xl:py-12 ${
            isLeftAligned ? 'items-end sm:items-start' : 'items-end sm:items-end'
          }`}
        >
          
          {/* NUMBER */}
          <span
            className={`pointer-events-none absolute select-none text-[56px] font-bold leading-none transition-all duration-500 ease-out sm:text-[52px] lg:text-[64px] 2xl:text-[74px] ${numberPosClass} ${
              isActive ? 'scale-100 text-white opacity-20' : 'scale-100 text-[#F45328] opacity-10'
            }`}
          >
            {index + 1}
          </span>

          {/* CHANGED: Removed rigid calc() widths. We now use standard flex + pl-[4.2rem] to clear the number gracefully without cutting off */}
          <div className={`relative z-10 flex w-full flex-col gap-1.5 pt-1 pl-[4.2rem] sm:pl-0 sm:pt-0 sm:w-full sm:max-w-[320px] sm:gap-2 lg:max-w-[340px] 2xl:max-w-[390px] ${alignmentClass}`}>
            <h3
              className={[
                'order-1 text-[18px] font-bold leading-[1.25] tracking-[-0.03em] transition-colors duration-500 ease-out sm:order-2 sm:text-[22px] lg:text-[24px] 2xl:text-[28px]',
                'max-w-full text-balance whitespace-pre-line',
                item.titleClassName ?? '',
                isActive ? '!text-white' : '!text-black',
              ].join(' ')}
              style={{ fontSize: 'clamp(18px, 0.92rem + 0.5vw, var(--fs-card-title))' }}
            >
              {item.title}
            </h3>

            <p
              className={[
                'order-2 max-w-full text-[12px] font-normal leading-[1.55] transition-colors duration-500 ease-out sm:order-1 sm:max-w-[31ch] lg:max-w-none lg:text-[15px] 2xl:text-[17px]',
                isActive ? '!text-white/90' : '!text-[#000000]',
              ].join(' ')}
              style={{ fontSize: 'clamp(12px, 0.76rem + 0.22vw, var(--fs-card-body))' }}
            >
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ProblemsGridSection({
  eyebrow,
  title,
  highlight,
  items,
  className = '',
  maxWidthClass = 'max-w-[640px]',
}) {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <SectionWrapper as="section" className={`relative overflow-hidden bg-transparent pt-2 sm:pt-4 lg:pt-6 xl:px-12 ${className}`}>
      <div className="pointer-events-none absolute left-[10%] top-[22%] h-[180px] w-[180px] rounded-full bg-[radial-gradient(circle,rgba(255,151,113,0.22)_0%,rgba(255,151,113,0.08)_44%,rgba(255,151,113,0)_74%)] blur-3xl sm:h-[220px] sm:w-[220px] 2xl:h-[320px] 2xl:w-[320px]" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-[190px] w-[190px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.2)_0%,rgba(104,141,255,0.08)_42%,rgba(104,141,255,0)_74%)] blur-3xl sm:h-[240px] sm:w-[240px] 2xl:h-[340px] 2xl:w-[340px]" />

      {/* CHANGED: Added px-4 sm:px-8 xl:px-0 padding so the cards don't bleed completely off screen edges on small devices */}
      <div className="relative mx-auto max-w-[1200px] 2xl:max-w-[1400px] px-4 sm:px-8 xl:px-0">
        <div className={`mx-auto text-center ${maxWidthClass}`}>
          {eyebrow ? (
            <p className="mb-2 text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium uppercase tracking-[0.28em] ">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="text-balance text-[32px] font-semibold leading-[1.08] tracking-[-0.05em]  sm:text-[40px] lg:text-[50px]"
            style={{ fontSize: 'clamp(32px, 1.55rem + 1.65vw, var(--fs-section-title))' }}
          >
            {title}{' '}
          
            <CurvedUnderlineText className="hero-highlight pb-[0.16em] inline-block" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
              {highlight}
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="relative mt-10 sm:mt-12 lg:mt-16 2xl:mt-20">
          <div className="grid justify-items-center gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-10 lg:gap-y-10 xl:gap-y-12 2xl:gap-x-12 2xl:gap-y-14">
            {items.map((item, index) => (
              <ProblemCard
                key={item.id}
                item={item}
                index={index}
                isActive={activeIndex === index}
                onEnter={() => setActiveIndex(index)}
                onLeave={() => setActiveIndex(null)}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:flex">
            <div
              className={`absolute inset-0 rounded-full bg-[#F45328] blur-2xl transition-all duration-700 ease-out ${
              activeIndex !== null ? 'scale-150 opacity-40' : 'scale-100 opacity-10 animate-pulse'
              }`}
            />

            <div
              className={`relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border bg-white/30 shadow-xl backdrop-blur-md transition-all duration-500 ease-out lg:h-32 lg:w-32 2xl:h-36 2xl:w-36 ${
                activeIndex !== null
                  ? 'scale-110 border-white/80 bg-white/60 shadow-[0_0_50px_rgba(244,83,40,0.3)]'
                  : 'scale-100 border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.05)]'
              }`}
            >
              <div
                className={`absolute h-4 w-4 rounded-full bg-gradient-to-tr from-[#F45328] to-[#FF8A6A] shadow-[0_0_15px_#F45328] transition-all duration-500 ease-in-out ${
                  activeIndex === null ? 'scale-100 opacity-100 animate-pulse' : 'scale-50 opacity-0'
                }`}
              />

              {items.map((item, index) => (
                <img
                  key={item.id}
                  src={item.icon}
                  alt=""
                  className={`absolute h-10 w-10 object-contain transition-all duration-500 ease-out lg:h-12 lg:w-12 2xl:h-14 2xl:w-14 ${
                    activeIndex === index
                      ? 'scale-100 rotate-0 opacity-100 drop-shadow-[0_4px_10px_rgba(244,83,40,0.4)]'
                      : 'scale-50 -rotate-12 opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}