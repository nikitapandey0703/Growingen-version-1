import { Link } from 'react-router-dom'
import Button from '../../../components/common/Button'

const heroDashboards = [
  // Top Left (Behind Girl - pushed deeply backward)
  {
    src: '/images/hero/frame-1.webp',
    className:
      'absolute z-15 left-[12%] top-[20%] w-[clamp(110px,24vw,170px)] sm:left-[10%] sm:top-[15%] lg:left-[6%] lg:top-[12%]',
    floatClassName: 'hero-float',
  },
  // Bottom Left (In Front of Girl - near to her)
  {
    src: '/images/hero/frame-2.webp',
    className:
      'absolute z-30 bottom-[12%] left-[0%] w-[clamp(160px,40vw,280px)] sm:bottom-[8%] sm:left-[-5%] lg:bottom-[6%] lg:left-[-8%]',
    floatClassName: 'hero-float hero-float-delay-1',
  },
  // Top Right (Behind Girl - pushed deeply backward)
  {
    src: '/images/hero/frame-4.webp',
    className:
      'absolute z-15 right-[10%] top-[16%] w-[clamp(120px,26vw,190px)] sm:right-[8%] sm:top-[12%] lg:right-[4%] lg:top-[10%]',
    floatClassName: 'hero-float hero-float-delay-2',
  },
  // Bottom Right (In Front of Girl - near to her)
  {
    src: '/images/hero/Frame-5.webp',
    className:
      'absolute z-30 bottom-[14%] right-[2%] w-[clamp(170px,42vw,300px)] sm:bottom-[10%] sm:right-[-2%] lg:bottom-[-8%] lg:right-[-2%]',
    floatClassName: 'hero-float hero-float-delay-3',
  },
]

function HeroVisual() {
  return (
    <div className="hero-visual-reveal relative mx-auto mt-8 flex w-full max-w-[640px] items-center justify-center sm:mt-10 lg:-mt-6 lg:ml-auto lg:max-w-[680px] lg:justify-end xl:-mt-8">
      {/* The hero media uses a capped stage so the floating dashboards stay visible without overflowing on short screens. */}
      <div className="hero-stage relative flex aspect-[1/1.02] w-full max-w-[340px] items-center justify-center sm:aspect-[1.02/1] sm:max-w-[460px] lg:aspect-[4/3] lg:max-w-[620px]">
        <div className="hero-stage__glow" aria-hidden="true" />
        <div className="hero-stage__sheen" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--primary" aria-hidden="true" />
        <div className="hero-ambient-orb hero-ambient-orb--secondary" aria-hidden="true" />

        <img
          src="/images/hero/girl-main.webp"
          alt="Growingen hero illustration"
          className="pointer-events-none absolute z-20 h-full w-auto max-w-none object-contain scale-[0.95] sm:scale-[1.0] lg:scale-[1.05]"
        />

        {/* Dashboard cards scale with viewport width so the composition stays balanced from phones to large desktops. */}
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
    <section id="home" className="hero-section relative overflow-hidden bg-transparent section-spacing">
      <div className="hero-section__ambient hero-section__ambient--left" aria-hidden="true" />
      <div className="hero-section__ambient hero-section__ambient--right" aria-hidden="true" />

      <div className="site-container relative pt-8 sm:pt-10 lg:pt-12">
        <div className="grid items-center gap-10 lg:min-h-[calc(100vh-140px)] lg:grid-cols-[minmax(0,560px)_minmax(360px,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,600px)_minmax(420px,1fr)]">
          {/* Copy stays centered on compact screens, then locks to the left once the two-column layout has enough breathing room. */}
          <div className="relative z-40 mx-auto flex w-full max-w-[580px] flex-col items-center pt-2 text-center font-sans  lg:mx-0 lg:max-w-[600px] lg:items-start lg:pt-0 lg:text-left">
            <p className="hero-copy-reveal hero-copy-reveal--1 text-[clamp(11px,2.2vw,16px)] font-medium uppercase tracking-[0.14em] sm:tracking-[0.16em]">
              Welcome to Growingen Solutions
            </p>

            <h1 className="hero-copy-reveal hero-copy-reveal--2 mt-4 w-full max-w-[15ch] text-[clamp(2.15rem,8vw,3.6rem)] font-bold leading-[1.02] tracking-[-0.05em]  sm:max-w-[16ch] lg:max-w-[16.5ch]">
              <span className="block whitespace-nowrap">Elevate Your Digital</span>
              <span className="mt-2 block whitespace-nowrap sm:mt-1">
                Footprint with{' '}
                <span className="hero-highlight relative inline-block pb-1 moving-gradient">
                  Growingen
                  <span
                    aria-hidden="true"
                    className="hero-highlight__line absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80"
                  />
                </span>
              </span>
            </h1>

            <p className="hero-copy-reveal hero-copy-reveal--3 mx-auto mt-5 max-w-[34ch] text-[clamp(14px,2.5vw,17px)] font-medium leading-[1.68] tracking-normal  sm:max-w-[46ch] lg:mx-0 lg:max-w-[58ch]">
              <span className="block sm:inline">
              At Growingen Solutions, we help brands grow through SEO-driven marketing, paid ads, lead generation, custom websites, and innovative app solutions. 
              </span>
            </p>

            {/* The CTA keeps a centered position on touch devices, then aligns with the copy column on larger layouts. */}
            <div className="hero-copy-reveal hero-copy-reveal--4 mt-8 flex w-full flex-wrap items-center justify-center gap-2 lg:justify-start text-[17px] sm:text-[18px]">
              <Link to="/contact" className="inline-flex">
                <Button size="hero">Start the Journey</Button>
              </Link>
            </div>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
