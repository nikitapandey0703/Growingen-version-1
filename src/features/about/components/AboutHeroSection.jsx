import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import HeroYellowUnderlineText from '../../../components/common/HeroYellowUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

function AboutHeroVisual() {
  return (
    <div className="hero-visual-reveal relative mx-auto flex w-full max-w-[360px] items-center justify-center sm:max-w-[460px] md:max-w-[540px] xl:ml-auto xl:max-w-[500px] xl:justify-end 2xl:max-w-[620px]">
      <div className="hero-stage relative flex w-full flex-col gap-3 sm:gap-4">
        <div className="hero-stage__glow" aria-hidden="true" />
        <div className="hero-stage__sheen" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--primary" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--secondary" aria-hidden="true" />

        <div className="dashboard-hover relative z-10 w-full">
          <img
            src="/images/about/about-hero-img.svg"
            alt="Growingen about page hero visual"
            className="block h-auto w-full object-contain transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.04]"
          />
        </div>
      </div>
    </div>
  )
}

export default function AboutHeroSection() {
  return (
    <section className="hero-section relative overflow-hidden bg-transparent pt-8 sm:pt-12 lg:pt-2 xl:pt-0">
      <div className="hero-section__ambient hero-section__ambient--left" aria-hidden="true" />
      <div className="hero-section__ambient hero-section__ambient--right" aria-hidden="true" />

      <SectionWrapper className="relative section-spacing !px-4 sm:!px-6 md:!px-8 lg:!px-10 xl:!px-[clamp(32px,3vw,40px)] 2xl:!px-[clamp(40px,4.8vw,72px)]">
        
        {/* Grid layout with adjusted gap for wide screens to prevent visual collision */}
        <div className="grid w-full items-center gap-10 sm:gap-12 md:gap-14 lg:gap-12 xl:min-h-[calc(100vh-176px)] xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:gap-12 2xl:min-h-[calc(100vh-160px)] 2xl:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] 2xl:gap-20 min-[1800px]:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] min-[1800px]:gap-24">
          
          <div className="relative z-40 mx-auto flex w-full max-w-[34rem] flex-col items-center text-center sm:max-w-[40rem] md:max-w-[44rem] xl:ml-0 xl:max-w-[44rem] xl:items-start xl:text-left 2xl:max-w-full">

            {/* Hero Heading Container */}
            <div className="mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-3 2xl:mt-4">
              <h1
                className="w-full max-w-[15ch] font-bold leading-[1.06] tracking-[-0.04em] text-black sm:max-w-[16ch] md:max-w-[18ch] xl:max-w-full"
                style={{ fontSize: 'var(--fs-hero-title)' }}
              >
                <span className="block xl:whitespace-nowrap">
                  From Experience to Execution
                </span>

                <span className="mt-1 block xl:mt-1 xl:whitespace-nowrap">
                  Building a company{' '}
                  <HeroYellowUnderlineText
                    className="hero-highlight inline-block pb-1"
                    lineClassName="h-[0.22em] w-full left-[2%] -bottom-[6px] sm:-bottom-[8px] md:-bottom-[10px] lg:-bottom-[12px] xl:-bottom-[14px] 2xl:-bottom-[16px]"
                  >
                    <span className="moving-gradient xl:whitespace-nowrap">
                      That Delivers
                    </span>
                  </HeroYellowUnderlineText>
                </span>
              </h1>
            </div>

            {/* Description + CTA Chunk */}
            {/* UPDATED: mt-8 (32px) added here for consistent spacing across all devices */}
            <div className="mt-8 flex flex-col items-center xl:items-start">
              
              <p
                className="w-full max-w-[39ch] font-medium leading-[1.65] tracking-normal text-gray-800 sm:max-w-[46ch] md:max-w-[52ch] xl:max-w-[50ch] 2xl:max-w-[54ch]"
                style={{ fontSize: 'var(--fs-hero-subtitle)' }}
              >
                We don't just deliver services, we build growth systems where strategy,
                design, and technology work as one.
              </p>

              <div className="mt-7 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row xl:justify-start">
                <Link to="/contact" className="inline-flex justify-center">
                  <Button size="hero" className="justify-center">
                    Let&apos;s Build Together
                  </Button>
                </Link>
              </div>

            </div>

          </div>

          <AboutHeroVisual />
        </div>
      </SectionWrapper>
    </section>
  )
}