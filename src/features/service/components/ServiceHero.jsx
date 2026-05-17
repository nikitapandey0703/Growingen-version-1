import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import SectionWrapper from '../../../components/common/SectionWrapper'

function ServiceVisual() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const end = 230
    const duration = 2000 
    const increment = end / (duration / 16)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [])

  return (
    /*
      Keep the visual group within a controlled desktop width so the collage
      stays balanced against the text column at larger breakpoints.
    */
    <div className="relative mx-auto mt-12 flex w-full max-w-[620px] items-center justify-center lg:ml-auto lg:mr-0 lg:mt-0 lg:max-w-[620px] lg:justify-end lg:translate-x-0">
      <div className="hero-stage relative grid w-full max-w-[530px] gap-3 sm:gap-4">
        <div className="hero-stage__glow" aria-hidden="true" />
        <div className="hero-stage__sheen" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--primary" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--secondary" aria-hidden="true" />

        <div className="grid grid-cols-[1.1fr_1fr] items-stretch gap-3 sm:gap-4">
          <div className="dashboard-hover relative z-10 min-h-[214px] sm:min-h-[232px]">
            <div 
               className="h-full w-full overflow-hidden"
               style={{
                 clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30%)"
               }}
            >
              <img
                src="/images/service/service-header-3.png"
                alt="Marketing analytics dashboard"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="dashboard-hover relative z-10 flex min-h-[214px] flex-col justify-between rounded-[14px] bg-[#f65a2d] p-5 text-white shadow-[0_24px_44px_rgba(246,90,45,0.24)] sm:min-h-[232px] sm:p-6">
            <div>
              <h3 className="text-[2.35rem] font-bold leading-none tracking-[-0.04em] text-white sm:text-[2.75rem]">
                {count}+
              </h3>
              <p className="mt-4 pt-4 max-w-[12ch] text-[12px] font-light leading-[1.35] text-white sm:text-[14px]">
                Creating powerful brands that achieve stronger digital growth
              </p>
            </div>
          </div>
        </div>

        <div className="dashboard-hover relative z-10 min-h-[156px] overflow-hidden rounded-[18px] shadow-[0_24px_44px_rgba(15,23,42,0.14)] sm:min-h-[180px]">
          <img
            src="/images/service/service-header-2.webp"
            alt="Growingen team collaborating"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default function ServiceHero() {
  return (
    <section className="hero-section relative overflow-hidden bg-transparent">
      <div className="hero-section__ambient hero-section__ambient--left" aria-hidden="true" />
      <div className="hero-section__ambient hero-section__ambient--right" aria-hidden="true" />

      <SectionWrapper className="relative pt-8 sm:pt-10">
        <div className="grid items-center gap-12 lg:min-h-[calc(100vh-140px)] lg:grid-cols-[470px_minmax(400px,1fr)] lg:gap-8 lg:pt-0">
          <div className="relative z-40 mx-auto max-w-[470px] pt-2 text-center font-sans text-black lg:mx-0 lg:max-w-[520px] lg:pt-0 lg:text-left">
            <h1 className="w-full text-[30px] font-bold leading-[1.04] tracking-[-0.05em] text-black sm:text-[36px] lg:text-[54px]">
              <span className="block whitespace-nowrap">Most Businesses Do Marketing</span>
              <span className="mt-1 block whitespace-nowrap">
                Very Few {' '}
                <span className="hero-highlight relative inline-block pb-1 moving-gradient">
                  Build Brands.
                  <span
                    aria-hidden="true"
                    className="hero-highlight__line absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80"
                  />
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[49ch] text-[clamp(14px,1.26vw,17px)] font-medium leading-[1.7] tracking-normal text-gray-800 lg:mx-0 lg:max-w-[48ch]">
              At Growingen Solutions Pvt. Ltd., we combine strategy, design, and technology to build brands that stand out, scale faster, and perform better. 
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link to="/contact" className="inline-flex">
                <Button size="hero">
                  Start a Project
                </Button>
              </Link>

              {/* SLIGHTLY SLOWER Animated Button */}
              <Link
                to="/portfolio"
                className="relative isolate overflow-hidden inline-flex h-[46px] w-[180px] items-center justify-center rounded-full border border-black/50 bg-transparent px-7 text-[clamp(14px,1.26vw,17px)] font-medium text-black transition-all duration-[500ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:border-[#f65a2d] hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(246,90,45,0.4)] active:scale-100 before:absolute before:inset-0 before:m-auto before:h-[50px] before:w-[50px] before:-z-10 before:rounded-full before:bg-[#f65a2d] before:scale-0 before:transition-all before:duration-[800ms] before:ease-[cubic-bezier(0.23,1,0.32,1)] hover:before:scale-[6]"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <ServiceVisual />
        </div>
      </SectionWrapper>
    </section>
  )
}
