import { useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'

const benefitCards = [
  {
    id: 1,
    title: 'Start With Clarity, Not Assumptions',
    description:
      'Every successful project begins with understanding the problem deeply, not rushing into production based on guesswork.',
    icon: '/images/about/clearity.webp',
  },
  {
    id: 2,
    title: 'Design With Purpose, Not Just Aesthetics',
    description:
      'Good design is not decoration. It should communicate, guide decisions, and make every interaction easier to trust.',
    icon: '/images/about/target.svg',
  },
  {
    id: 3,
    title: 'Build For Scale, Not Just Launch',
    description:
      'We create systems and experiences that can keep growing with your business instead of breaking after version one.',
    icon: '/images/about/products.webp',
  },
  {
    id: 4,
    title: 'Focus On Outcomes, Not Just Deliverables',
    description:
      'Reports, pages, and campaigns only matter when they improve clarity, performance, trust, and long-term momentum.',
    icon: '/images/about/focus-outcomes.svg',
  },
]

function BenefitCard({ card, index, isActive, onEnter, onLeave }) {
  return (
    <article
      className={[
        'group relative flex min-h-[320px] flex-col justify-between overflow-hidden border border-black/12 px-8 py-8 transition-colors duration-300 ease-out sm:min-h-[348px] lg:min-h-[372px] 2xl:min-h-[393px]',
        isActive ? 'bg-black text-white shadow-[0_18px_38px_rgba(15,23,42,0.18)]' : 'bg-white text-[#000000]',
      ].join(' ')}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <span
        className={[
          'pointer-events-none absolute right-6 top-4 text-[56px] font-bold leading-none transition-colors duration-300 sm:text-[64px] lg:text-[72px]',
          isActive ? 'text-white/10' : 'text-black/7',
        ].join(' ')}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative z-10 flex flex-col gap-5">
        <div className="flex h-[68px] w-[68px] items-center justify-center  p-3 transition-colors duration-300 ">
          <img src={card.icon} alt="" aria-hidden="true" className="h-full w-full object-contain" />
        </div>

        <div className="max-w-[26ch] ">
          <h3
            className={[
              'text-[24px] font-bold leading-[1.15] tracking-[-0.03em] transition-colors duration-300 sm:text-[26px] lg:text-[28px] 2xl:text-[30px]',
              isActive ? '!text-white' : 'text-[#000000]',
            ].join(' ')}
          >
            {card.title}
          </h3>
          <p
            className={[
              'mt-4 text-[14px] font-medium leading-[1.55] transition-colors duration-300 space-y-4 pt-2 lg:text-[15px] xl:text-[15px] 2xl:text-[17px]',
              isActive ? 'text-white/72' : 'text-[#838181]',
            ].join(' ')}
          >
            {card.description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function WhyGrowingenAboutSection() {
  const [activeId, setActiveId] = useState(null)

  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 bg-transparent section-spacing">
      <div className="relative w-full max-w-none">
        <div className="mx-auto max-w-[760px] text-center">
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium uppercase tracking-[0.28em] ">
            Why Growingen
          </p>
          <h2 className="mt-4 text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[40px] lg:text-[50px]">
            When You Work With
          <br />
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[2%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
             {' '} Growingen,
            </CurvedUnderlineText>
           
            {" "}You Get More.
          </h2>
        </div>

        <div className="mt-12 grid overflow-hidden border border-black/10 sm:grid-cols-2 xl:grid-cols-4">
          {benefitCards.map((card, index) => (
            <BenefitCard
              key={card.id}
              card={card}
              index={index}
              isActive={activeId === card.id}
              onEnter={() => setActiveId(card.id)}
              onLeave={() => setActiveId(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
