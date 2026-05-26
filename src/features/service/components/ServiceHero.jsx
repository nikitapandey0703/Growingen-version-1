import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import HeroYellowUnderlineText from '../../../components/common/HeroYellowUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

const secondaryHeroButtonClassName =
  'relative isolate inline-flex h-[48px] w-[214px] items-center justify-center overflow-hidden rounded-full border border-black/50 bg-transparent px-6 text-center text-[length:var(--fs-button)] font-medium !text-black transition-all duration-[500ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:scale-[1.02] hover:border-[#f65a2d] hover:!text-white hover:shadow-[0_0_20px_rgba(246,90,45,0.4)] active:scale-[0.99] sm:h-[52px] sm:w-[232px] sm:px-7 md:h-[54px] md:w-[244px] md:px-7 lg:h-[50px] lg:w-[232px] lg:px-7 xl:h-[52px] xl:w-[244px] xl:px-7 2xl:h-[58px] 2xl:w-[270px] 2xl:px-8 before:absolute before:inset-0 before:m-auto before:h-[50px] before:w-[50px] before:-z-10 before:rounded-full before:bg-[#f65a2d] before:scale-0 before:transition-all before:duration-[800ms] before:ease-[cubic-bezier(0.23,1,0.32,1)] hover:before:scale-[6]'

function ServiceVisual() {
  return (
    // UPDATED: Changed xl:mx-0 to xl:ml-auto to push the visual entirely to the right edge
    <div className="hero-visual-reveal relative mx-auto flex w-full max-w-[360px] items-center justify-center sm:max-w-[460px] md:max-w-[540px] xl:ml-auto xl:max-w-[500px] xl:justify-end 2xl:max-w-[620px]">
      <div className="hero-stage relative flex w-full flex-col gap-3 sm:gap-4">
        <div className="hero-stage__glow" aria-hidden="true" />
        <div className="hero-stage__sheen" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--primary" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--secondary" aria-hidden="true" />

        <div className="grid aspect-[1.95/1.08] w-full grid-cols-[minmax(0,1.24fr)_minmax(132px,0.76fr)] items-stretch gap-2.5 sm:aspect-[2/1.02] sm:grid-cols-[minmax(0,1.18fr)_minmax(156px,0.82fr)] sm:gap-4 lg:aspect-[2.08/1.08] lg:grid-cols-[minmax(0,1.12fr)_minmax(170px,0.88fr)] xl:aspect-[2.02/1.02]">
          <div className="dashboard-hover relative z-10 h-full w-full overflow-hidden">
            <div
              className="relative h-full w-full overflow-hidden"
              style={{
                clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 30%)',
              }}
            >
              <img
                src="/images/service/service-header-3.png"
                alt="Marketing analytics dashboard"
                className="absolute inset-[1.5%] h-[100%] w-[100%] object-contain object-center"
              />
            </div>
          </div>

          <div className="dashboard-hover relative z-10 flex h-full w-full flex-col items-start rounded-[14px] bg-[#f65a2d] p-2 text-white shadow-[0_24px_44px_rgba(246,90,45,0.24)] sm:p-3 lg:p-4">
            <h3 className="w-full text-left text-[1.85rem] font-bold leading-none tracking-[-0.04em] text-white sm:text-[2.2rem] lg:text-[2.75rem]">
              Branding
            </h3>

            <div className="mt-3 flex h-full w-full flex-1 items-center overflow-hidden rounded-[12px] bg-transparent sm:mt-4">
              <img
                className="h-full w-full object-contain object-left"
                src="/images/service/brand-identity.svg"
                alt="Brand identity illustration"
              />
            </div>
          </div>
        </div>

        <div className="dashboard-hover relative z-10 aspect-[2.08/0.88] w-full overflow-hidden rounded-xl shadow-[0_24px_44px_rgba(15,23,42,0.14)] sm:aspect-[2.15/0.9] sm:rounded-2xl lg:aspect-[2.12/0.88] xl:aspect-[2.14/0.92]">
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
    <section className="hero-section relative overflow-hidden bg-transparent pt-8 sm:pt-12 lg:pt-2 xl:pt-0">
      <div className="hero-section__ambient hero-section__ambient--left" aria-hidden="true" />
      <div className="hero-section__ambient hero-section__ambient--right" aria-hidden="true" />

      <SectionWrapper className="relative section-spacing !px-4 sm:!px-6 md:!px-8 lg:!px-10 xl:!px-[clamp(32px,3vw,40px)] 2xl:!px-[clamp(40px,4.8vw,72px)]">
        
        {/* UPDATED: Increased gap and modified grid proportions for 2xl and 3xl (min-[1800px]) to prevent collision */}
        <div className="grid w-full items-center gap-10 sm:gap-12 md:gap-14 lg:gap-12 xl:min-h-[calc(100vh-176px)] xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] xl:gap-12 2xl:min-h-[calc(100vh-160px)] 2xl:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] 2xl:gap-20 min-[1800px]:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] min-[1800px]:gap-24">
          
          {/* UPDATED: Changed 2xl max-w to "full" to allow the heading wrapper to stretch, stopping the text from visually breaking out of it */}
          <div className="relative z-40 mx-auto flex w-full max-w-[34rem] flex-col items-center text-center sm:max-w-[40rem] md:max-w-[44rem] xl:ml-0 xl:max-w-[44rem] xl:items-start xl:text-left 2xl:max-w-full">

            {/* Hero Heading Chunk */}
            <div className="mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-3 2xl:mt-4">
              <h1
                className="w-full max-w-[15ch] font-bold leading-[1.06] tracking-[-0.04em] text-black sm:max-w-[16ch] md:max-w-[18ch] xl:max-w-full"
                style={{ fontSize: 'var(--fs-hero-title)' }}
              >
                <span className="block xl:whitespace-nowrap">
                  Most Businesses Do Marketing
                </span>

                <span className="mt-1 block xl:mt-1 xl:whitespace-nowrap">
                  Very Few{' '}
                  <HeroYellowUnderlineText
                    className="hero-highlight inline-block pb-1"
                    lineClassName="h-[0.22em] w-full left-[0%] -bottom-[6px] sm:-bottom-[8px] md:-bottom-[10px] lg:-bottom-[12px] xl:-bottom-[14px] 2xl:-bottom-[16px]"
                  >
                    <span className="moving-gradient xl:whitespace-nowrap">
                      Build Brands.
                    </span>
                  </HeroYellowUnderlineText>
                </span>
              </h1>
            </div>

            {/* Description + CTA Chunk */}
            <div className="mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-3 2xl:mt-4 flex flex-col items-center xl:items-start">

              <p
                className="w-full max-w-[39ch] font-medium leading-[1.65] tracking-normal text-gray-800 sm:max-w-[46ch] md:max-w-[52ch] xl:max-w-[50ch] 2xl:max-w-[54ch]"
                style={{ fontSize: 'var(--fs-hero-subtitle)' }}
              >
                At Growingen Solutions Pvt. Ltd., we combine strategy, design, and
                technology to build brands that stand out, scale faster, and perform
                better.
              </p>

              <div className="mt-7 sm:mt-8 flex w-full flex-col items-center justify-center gap-4 sm:flex-row xl:justify-start">
                
                <Link to="/contact" className="inline-flex justify-center">
                  <Button size="hero" className="justify-center">
                    Start a Project
                  </Button>
                </Link>

                <Link
                  to="/portfolio#portfolio-carousel"
                  className={secondaryHeroButtonClassName}
                >
                  View Our Work
                </Link>

              </div>

            </div>

          </div>
          <ServiceVisual />
        </div>
      </SectionWrapper>
    </section>
  )
}
