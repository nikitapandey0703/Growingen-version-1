import React from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

const deliverSteps = [
  {
    id: 1,
    title: 'Brand identity',
    description: 'Strong, memorable brands that communicate value instantly and consistently across every touchpoint.',
    image: '/images/about/about-ideacard-1.webp',
  },
  {
    id: 2,
    title: 'Lead generation',
    description: 'Consistent, qualified leads through systems that combine positioning, content, and conversion strategy.',
    image: '/images/about/about-ideacard-2.webp',
  },
  {
    id: 3,
    title: 'Business applications',
    description: 'Custom software built around your operations - not generic tools forced to fit your process.',
    image: '/images/about/about-ideacard-3.webp',
  },
  {
    id: 4,
    title: 'High-converting websites',
    description: 'Websites designed to perform with clear strategy, compelling copy, and seamless UX.',
    image: '/images/about/about-ideacard-4.webp',
  },
  {
    id: 5,
    title: 'UI/UX systems',
    description: 'Intuitive interfaces that reduce friction and create experiences your users actually remember.',
    image: '/images/about/about-ideacard-5.webp',
  },
  {
    id: 6,
    title: 'Digital marketing',
    description: 'Campaigns built on strategy, not guesswork with clear attribution and continuous optimization.',
    image: '/images/about/about-ideacard-6.webp',
  },
]

const cardClassName =
  'group relative flex w-full flex-col justify-between overflow-hidden rounded-[24px] border border-white/60 bg-white p-6 shadow-[0_12px_40px_rgba(0,0,0,0.03)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] sm:px-8 sm:pt-8 sm:pb-5 lg:h-[325px]'

// UPDATED: 20px on mobile, 22px on tablet (sm), and 24px on laptop (lg)
const cardTitleClassName =
  'mb-2 text-[20px] sm:text-[22px] lg:text-[24px] font-bold leading-tight tracking-tight text-[#111827]'

// UPDATED: 14px on mobile, 15px on tablet and laptop (sm/lg)
const cardDescriptionClassName =
  'text-[14px] sm:text-[15px] font-normal leading-[1.5] text-[#5b6472] lg:max-w-[32ch]'

const cardImageWrapperClassName =
  'relative mt-4 h-[150px] overflow-hidden rounded-[14px] bg-[#f8fafc] lg:h-[180px]'

const cardImageClassName =
  'h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.08]'

const sectionContainerClassName = 'relative'

const sectionHeadingClassName =
  'mt-4 text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[40px] lg:text-[50px]'

const gridClassName = 'grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6'

function DeliverCardAbout({ step }) {
  return (
    <div className={cardClassName}>
      <div className="relative z-10">
        <h3 className={cardTitleClassName}>{step.title}</h3>
        <p className={cardDescriptionClassName}>{step.description}</p>
      </div>

      <div className={cardImageWrapperClassName}>
        <img
          src={step.image}
          alt={step.title}
          className={cardImageClassName}
        />
      </div>
    </div>
  )
}

export default function WhatWeDeliverAbout() {
  return (
    <SectionWrapper as="section" className="section-spacing relative bg-transparent pt-12 sm:pt-14 lg:pt-16">
      <div className={sectionContainerClassName}>
        <div className="mx-auto mb-12 max-w-[760px] text-center sm:mb-16">
          <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a7f8e]">
            What We Deliver
          </p>
          <h2 className={sectionHeadingClassName}>
            Turning Ideas {' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
              Into Impact
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className={gridClassName}>
          {deliverSteps.map((step) => (
            <DeliverCardAbout key={step.id} step={step} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
