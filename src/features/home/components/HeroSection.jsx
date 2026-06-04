import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'
import HeroYellowUnderlineText from '../../../components/common/HeroYellowUnderlineText'

const heroDashboards = [
  {
    src: '/images/hero/frame-1.webp',
    className:
      'absolute z-10 left-[8%] top-[14%] w-[clamp(96px,22vw,138px)] sm:left-[8%] sm:top-[12%] sm:w-[clamp(112px,21vw,156px)] md:left-[7%] md:top-[11%] md:w-[clamp(120px,19vw,166px)] lg:left-[7%] lg:top-[11%] lg:w-[clamp(122px,13vw,164px)] xl:left-[6%] xl:top-[10%] xl:w-[clamp(132px,13vw,186px)] 2xl:left-[5%] 2xl:top-[9%] 2xl:w-[210px]',
    floatClassName: 'hero-float',
  },
  {
    src: '/images/hero/frame-2.webp',
    className:
      'absolute z-30 bottom-[2%] left-[-4%] w-[clamp(128px,34vw,208px)] sm:bottom-[0%] sm:left-[-5%] sm:w-[clamp(148px,33vw,228px)] md:bottom-[0%] md:left-[-5%] md:w-[clamp(166px,31vw,248px)] lg:bottom-[0%] lg:left-[-5%] lg:w-[clamp(178px,20vw,248px)] xl:bottom-[-10%] xl:left-[-10%] xl:w-[clamp(192px,20vw,285px)] 2xl:bottom-[-18%] 2xl:left-[-10%] 2xl:w-[320px]',
    floatClassName: 'hero-float hero-float-delay-1',
  },
  {
    src: '/images/hero/frame-4.webp',
    className:
      'absolute z-15 right-[8%] top-[11%] w-[clamp(102px,23vw,142px)] sm:right-[8%] sm:top-[9%] sm:w-[clamp(118px,22vw,162px)] md:right-[7%] md:top-[9%] md:w-[clamp(126px,20vw,172px)] lg:right-[7%] lg:top-[10%] lg:w-[clamp(130px,13vw,174px)] xl:right-[5%] xl:top-[9%] xl:w-[clamp(142px,13vw,194px)] 2xl:right-[-8%] 2xl:top-[8%] 2xl:w-[218px]',
    floatClassName: 'hero-float hero-float-delay-2',
  },
  {
    src: '/images/hero/Frame-5.webp',
    className:
      'absolute z-30 bottom-[2%] right-[-4%] w-[clamp(136px,35vw,214px)] sm:bottom-[0%] sm:right-[-5%] sm:w-[clamp(156px,34vw,236px)] md:bottom-[0%] md:right-[-5%] md:w-[clamp(174px,31vw,256px)] lg:bottom-[4%] lg:right-[0%] lg:w-[clamp(182px,20vw,252px)] xl:bottom-[-10%] xl:right-[-10%] xl:w-[clamp(198px,20vw,288px)] 2xl:bottom-[-18%] 2xl:right-[-14%] 2xl:w-[330px]',
    floatClassName: 'hero-float hero-float-delay-3',
  },
]

function HeroVisual() {
  return (
    <div className="hero-visual-reveal relative mx-auto mt-6 flex w-full max-w-[360px] items-center justify-center sm:mt-8 sm:max-w-[460px] md:mt-10 md:max-w-[540px] lg:-mt-4 lg:ml-auto lg:max-w-[600px] lg:justify-end xl:-mt-5 xl:max-w-[660px] 2xl:-mt-4 2xl:max-w-[800px]">
      <div className="hero-stage relative flex aspect-[1/1.04] w-full max-w-[340px] items-center justify-center overflow-visible sm:aspect-[1.02/1] sm:max-w-[440px] md:aspect-[1.04/1] md:max-w-[500px] lg:aspect-[4/3.15] lg:max-w-[570px] xl:aspect-[4/3] xl:max-w-[630px] 2xl:max-w-[780px]">
        <div className="hero-stage__glow" aria-hidden="true" />
        <div className="hero-stage__sheen" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--primary" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--secondary" aria-hidden="true" />

        <img
          src="/images/hero/girl-main.webp"
          alt="Growingen hero illustration"
          className="pointer-events-none absolute z-20 h-[94%] w-auto max-w-none object-contain scale-[0.93] sm:h-[96%] sm:scale-[0.97] md:h-[98%] md:scale-100 lg:h-full lg:scale-[1.02] xl:scale-[1.05] 2xl:scale-[1.09]"
        />

        {heroDashboards.map((dashboard) => (
          <div key={dashboard.src} className={dashboard.className}>
            <img
              src={dashboard.src}
              alt=""
              aria-hidden="true"
              className={`${dashboard.floatClassName} dashboard-hover block w-full`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section id="home" className="hero-section relative overflow-hidden bg-transparent section-spacing pt-4 pb-10 sm:pt-6 sm:pb-12 md:pt-8 md:pb-14 lg:pt-3 lg:pb-10 xl:pt-2 xl:pb-10 2xl:pt-6 2xl:pb-14">
      <div className="hero-section__ambient hero-section__ambient--left" aria-hidden="true" />
      <div className="hero-section__ambient hero-section__ambient--right" aria-hidden="true" />

      <div className="site-container relative">
        <div className="grid items-center gap-8 sm:gap-10 md:gap-12 lg:min-h-[calc(100vh-220px)] lg:grid-cols-[minmax(0,1.18fr)_minmax(420px,0.92fr)] lg:gap-8 xl:min-h-[calc(100vh-210px)] xl:grid-cols-[minmax(0,1.22fr)_minmax(470px,0.9fr)] xl:gap-10 2xl:min-h-[calc(100vh-190px)] 2xl:grid-cols-[minmax(0,1.24fr)_minmax(540px,0.9fr)] 2xl:gap-14">
          <div className="relative z-40 mx-auto flex w-full max-w-[580px] flex-col items-center text-center font-sans sm:max-w-[620px] md:max-w-[680px] lg:mx-0 lg:max-w-[680px] lg:items-start lg:text-left xl:max-w-[760px] 2xl:max-w-[860px]">     
            <p
              className="hero-copy-reveal hero-copy-reveal--1 font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em] md:tracking-[0.18em] 2xl:tracking-[0.2em]"
              style={{ fontSize: 'var(--fs-hero-subtitle)' }}
            >
              Welcome to Growingen Solutions
            </p>
            <div className="mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-3 2xl:mt-4">
              <h1
                className="hero-copy-reveal hero-copy-reveal--2 w-full max-w-[15ch] font-bold leading-[1.04] tracking-[-0.05em] sm:max-w-[15.5ch] md:max-w-[16ch] md:leading-[1.02] lg:max-w-full lg:leading-[0.98]"
                style={{ fontSize: 'var(--fs-hero-title)' }}
              >
                <span className="block whitespace-nowrap md:whitespace-normal lg:whitespace-nowrap">
                  Elevate Your Digital
                </span> 

                <span className="mt-2 block sm:mt-1 md:mt-2 lg:mt-1 lg:whitespace-nowrap">
                  Footprint with{' '}
                  <HeroYellowUnderlineText
                    className="hero-highlight inline-block pb-[0.22em]"
                    lineClassName="h-[0.22em] w-full left-[2%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]"
                  >
                    <span className="moving-gradient">Growingen</span>
                  </HeroYellowUnderlineText>
                </span>
              </h1>
            </div>
            
            {/* UPDATED: mt-8 provides exactly 32px of spacing */}
            <div className="hero-copy-reveal hero-copy-reveal--3 mt-8 flex flex-col items-center lg:items-start">
              <p
                className="max-w-[34ch] font-medium leading-[1.68] tracking-normal sm:max-w-[42ch] md:max-w-[48ch] lg:max-w-[52ch] xl:max-w-[56ch] 2xl:max-w-[58ch]"
                style={{ fontSize: 'var(--fs-hero-subtitle)' }}
              >
                At Growingen Solutions, we help brands grow through SEO-driven
                marketing, paid ads, lead generation, custom websites, and innovative
                app solutions.
              </p>

              <div className="mt-5 sm:mt-6">
                <Link to="/contact" className="inline-flex">
                  <Button size="hero">Start the Journey</Button>
                </Link>
              </div>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}