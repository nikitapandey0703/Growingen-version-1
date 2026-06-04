import React from 'react'
import { Link } from 'react-router-dom'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import OrangeButtonLabel from '../../../components/common/OrangeButtonLabel'
import SectionWrapper from '../../../components/common/SectionWrapper'

function FeatureBullet() {
  return (
    <span className="mt-[2px] inline-flex h-3.5 w-3.5 flex-none items-center justify-center rounded-full bg-[linear-gradient(180deg,#06BA9D_0%,#059f87_100%)] shadow-[0_4px_10px_rgba(6,186,157,0.22)] sm:mt-[4px] sm:h-4 sm:w-4 2xl:h-[18px] 2xl:w-[18px]">
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-[9px] w-[9px] text-white sm:h-[10px] sm:w-[10px] 2xl:h-[11px] 2xl:w-[11px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.5L9.2 16.7L18.5 7.5" />
      </svg>
    </span>
  )
}

export default function WhatSetsUsApartSection() {
  return (
    <SectionWrapper as="section" className="relative overflow-hidden bg-transparent section-spacing">
      
      <style>
        {`
          @keyframes drawEllipseLoop {
            0% { stroke-dashoffset: 100; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -100; }
          }

          .animate-draw-ellipse-loop {
            stroke-dasharray: 100;
            animation: drawEllipseLoop 3s linear infinite;
          }
        `}
      </style>
      
      <div className="mx-auto max-w-[1120px] 2xl:max-w-[1360px]">
        
        {/* === SECTION HEADING === */}
        <div className="mx-auto mb-12 max-w-[760px] text-center sm:mb-16 2xl:mb-20 2xl:max-w-[920px]">
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] xl:text-[22px] 2xl:text-[24px] font-medium uppercase tracking-[0.28em] ">
            Why Growingen
          </p>
          <h2
            className="text-balance text-[2.15rem] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[3.15rem] lg:text-[60px]"
            style={{ fontSize: 'clamp(32px, 1.55rem + 1.55vw, var(--fs-section-title))' }}
          >
            What{' '}
            <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em] " lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom:-[16px] 2xl:-bottom-[18px]">
               Sets Us Apart
            </CurvedUnderlineText>
          </h2>
        </div>

        {/* === CONTENT GRID === */}
        <div className="grid grid-cols-1 items-start gap-10 sm:gap-12 sm:grid-cols-[0px_1fr] md:grid-cols-[0px_1fr] lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-14 2xl:grid-cols-[minmax(0,1fr)_500px] 2xl:gap-18">
          
          {/* LEFT SIDE: Image Collage */}
          <div className="relative mx-auto aspect-[4/4.5] w-full max-w-[360px] sm:max-w-[430px] md:max-w-[500px] lg:mx-0 lg:max-w-none 2xl:aspect-[4.2/4.4]">
            
            {/* Image 1 */}
            <div className="hero-float absolute left-0 top-0 z-10 h-[72%] w-[62%] overflow-hidden rounded-[clamp(12px,1vw,20px)] shadow-lg transition-transform duration-500 ease-out hover:scale-105 hover:z-40 ">
              <img
                src="/images/service/service-set-1.webp"
                alt="Growingen Team"
                className="h-full w-full object-cover"
                style={{ backgroundColor: '#e2e8f0' }}
              />
            </div>

            {/* Image 2 */}
            <div 
              className="hero-float absolute right-[0%] top-[25%] z-20 h-[35%] w-[32%] overflow-hidden rounded-[clamp(12px,1vw,20px)] shadow-[0_12px_24px_rgba(0,0,0,0.12)] transition-transform duration-500 ease-out hover:scale-105 hover:z-40 "
              style={{ animationDelay: '-2s' }}
            >
              <img
                src="/images/service/service-set-2.webp"
                alt="Developer working"
                className="h-full w-full object-cover"
                style={{ backgroundColor: '#cbd5e1' }}
              />
            </div>

            {/* Image 3 - UPDATED to never clip and not have CSS rounded borders */}
            <div 
              className="hero-float absolute bottom-[5%] right-[0%] z-30 w-[57%] transition-transform duration-500 ease-out hover:scale-105 hover:z-40"
              style={{ animationDelay: '-4s' }}
            >
              <img
                src="/images/service/service-set-3.webp"
                alt="Team strategy meeting"
                className="h-auto w-full object-contain"
              />
            </div>

            <div className="absolute right-[10%] top-[-4%] z-20 h-[82px] w-[82px] sm:right-[12%] sm:top-[-2%] sm:h-[100px] sm:w-[100px] md:h-[112px] md:w-[112px] lg:h-[120px] lg:w-[120px] 2xl:h-[144px] 2xl:w-[144px]">
              <div className="relative h-full w-full animate-[spin_12s_linear_infinite] rounded-full bg-white shadow-md">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <path id="circleTextPath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                  <text fontSize="10.5" fontWeight="bold" fill="#111827" letterSpacing="2.2">
                    <textPath href="#circleTextPath" startOffset="0%">
                      GROWINGEN • GROWINGEN • GROWINGEN •
                    </textPath>
                  </text>
                  <circle cx="50" cy="50" r="18" fill="#F45328" />
                  <path d="M 45 55 L 55 45 M 48 45 L 55 45 L 55 52" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Content Card */}
          <div className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:max-w-none lg:w-full">
            <div className="relative flex min-h-[300px] flex-col gap-5 rounded-tl-[24px] rounded-tr-[24px] rounded-bl-[24px] rounded-br-[58px] bg-white px-5 pb-20 pt-7 shadow-[0_20px_50px_rgba(15,23,42,0.08)] sm:min-h-[312px] sm:px-7 sm:pb-22 sm:pt-8 md:px-8 md:pt-9 lg:rounded-br-[70px] 2xl:min-h-[352px] 2xl:gap-5 2xl:px-10 2xl:pb-24 2xl:pt-10">
              
              <h3
                className="mb-4 text-[24px] font-bold leading-[1.2] tracking-[-0.02em]  sm:mb-5 sm:text-[28px] 2xl:text-[34px]"
                style={{ fontSize: 'clamp(24px, 1.2rem + 0.7vw, 34px)' }}
              >
                Why Brands <br /> Trust{' '}
                <span className="relative z-10 inline-block whitespace-nowrap">
                  <span className="relative z-10">Growingen</span>
                  
                  <svg
                    className="absolute -bottom-2 -left-3 -right-3 -top-1 z-0 h-[130%] w-[120%] text-[#F45328] 2xl:-bottom-3 2xl:-left-4 2xl:-right-4"
                    viewBox="0 0 100 40"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M 15 24 C 5 12 18 3 50 3 C 82 3 96 14 96 22 C 96 32 75 38 50 38 C 22 38 7 30 14 20"
                      stroke="currentColor"
                      strokeWidth="2"
                      vectorEffect="non-scaling-stroke"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="100"
                      className="animate-draw-ellipse-loop"
                    />
                  </svg>
                </span>
              </h3>

              <ul className="flex flex-col gap-3.5 2xl:gap-4">
                {[
                  'Strategy-first approach (not just execution)',
                  'AI + Tech + Marketing under one ecosystem',
                  'Focus on measurable business outcomes',
                  'Long-term partnership mindset',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FeatureBullet />
                    <span
                      className="whitespace-nowrap text-[14px] font-medium leading-[1.35] sm:text-[14.5px] 2xl:text-[17px] 2xl:leading-[1.4]"
                      style={{ fontSize: 'clamp(14px, 0.88rem + 0.2vw, 17px)' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="absolute -bottom-5 left-1/2 flex w-[calc(100%-24px)] max-w-full -translate-x-1/2 justify-center px-3 sm:w-full sm:px-0">
                <Link
                  to="/contact"
                  className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-[#F45328] px-6 py-[14px] text-center text-[13px] font-semibold tracking-[0.04em] text-white shadow-[0_8px_20px_rgba(244,83,40,0.3)] transition-transform hover:scale-105 active:scale-95 sm:w-auto sm:px-8 sm:text-[13px] d:text-[14px] lg:text-[15px] xl:min-w-[280px] xl:min-h-[48px] 2xl:min-h-[54px]  2xl:px-10 2xl:text-[17px]"
                >
                  <OrangeButtonLabel>Schedule A Strategy Call</OrangeButtonLabel>
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}