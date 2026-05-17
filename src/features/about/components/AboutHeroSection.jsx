import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import SectionWrapper from '../../../components/common/SectionWrapper'

function AboutHeroVisual() {
  return (
    <div className="hero-visual-reveal relative mx-auto mt-10 flex w-full max-w-[580px] items-center justify-center lg:ml-auto lg:mr-0 lg:mt-0 lg:justify-end">
      <div className="hero-stage relative flex w-full max-w-[500px] items-center justify-center">
        <div className="hero-stage__glow" aria-hidden="true" />
        <div className="hero-stage__sheen" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--primary" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--secondary" aria-hidden="true" />

        <div className="dashboard-hover relative z-10 w-full max-w-[500px]">
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
    <section className="relative overflow-hidden bg-transparent">
      <SectionWrapper className="relative pt-8 sm:pt-10">
        <div className="grid items-center gap-12 lg:min-h-[calc(100vh-140px)] lg:grid-cols-[520px_minmax(360px,1fr)] lg:gap-8 lg:pt-0">
          <div className="relative z-40 mx-auto max-w-[520px] pt-2 text-center font-sans text-black lg:mx-0 lg:pt-0 lg:text-left">
           
            <h1 className="mt-4 w-full text-[30px] font-bold leading-[1.04] tracking-[-0.05em] text-black sm:text-[36px] lg:text-[54px]">
              <span className="block whitespace-nowrap">From Experience to Execution</span>
              <span className="mt-1 block whitespace-nowrap">
                Building a company{' '}
                <span className="hero-highlight relative inline-block pb-1 moving-gradient">
                  That Delivers
                  <span
                    aria-hidden="true"
                    className="hero-highlight__line absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80"
                  />
                </span>
              </span>
            </h1>

            <p className="hero-copy-reveal hero-copy-reveal--3 mx-auto mt-5 max-w-[45ch] text-[clamp(14px,1.26vw,17px)] font-medium leading-[1.75] tracking-normal text-gray-800 lg:mx-0">
              Years of hands-on experience across design, development, and digital marketing shaped a deep understanding of what truly works in business.

            </p>

            <div className="hero-copy-reveal hero-copy-reveal--4 mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link to="/contact" className="inline-flex">
                <Button size="hero">
                  Let&apos;s Build Together
                </Button>
              </Link>
            </div>
          </div>

          <AboutHeroVisual />
        </div>
      </SectionWrapper>
    </section>
  )
}
