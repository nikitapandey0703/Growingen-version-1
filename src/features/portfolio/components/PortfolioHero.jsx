import HeroYellowUnderlineText from '../../../components/common/HeroYellowUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

const heroMeta = [
  ['Client', 'Founder & Financial Advisory Team'],
  ['Industry', 'Financial Advisory & Wealth Management'],
  ['Duration', '2 Months'],
  ['Year', '2025'],
]

export default function PortfolioHero() {
  const highlightStyle = {
    background:
      'linear-gradient(90deg, #F5710D 0%, #F45328 25%, #2B1CC1 50%, #06BA9D 75%)',
    backgroundSize: '200% 100%',
    backgroundPosition: '0% 50%',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'gradientSlide 6s linear infinite',
  }

  const visualGlowStyle = {
    background:
      'radial-gradient(circle at 50% 18%, rgba(255,221,111,0.4) 0%, rgba(255,202,88,0.26) 22%, rgba(255,175,52,0.16) 38%, rgba(255,149,30,0.08) 52%, transparent 72%)',
  }

  return (
    <section className="group relative overflow-hidden bg-transparent">
      <style>{`
        @keyframes gradientSlide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <SectionWrapper className="relative pt-8 sm:pt-10 md:pt-12 lg:pt-10 xl:pt-8 2xl:pt-12">
        <div className="grid items-center gap-10 sm:gap-12 md:gap-16 lg:min-h-[calc(100vh-140px)] lg:grid-cols-[minmax(0,1.3fr)_minmax(260px,0.7fr)] lg:gap-x-10 xl:grid-cols-[minmax(0,1.35fr)_minmax(300px,0.65fr)] xl:gap-x-12 2xl:grid-cols-[minmax(0,1.4fr)_minmax(340px,0.6fr)] 2xl:gap-x-16">
          
          {/* Left Text Container */}
          <div className="relative z-40 mx-auto flex w-full max-w-[34rem] flex-col items-center text-center sm:max-w-[40rem] md:max-w-[48rem] lg:mx-0 lg:max-w-none lg:items-start lg:pr-8 lg:text-left xl:pr-12">

            {/* Eyebrow Label */}
            <p className="text-[8px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)] " style={{ fontSize: 'var(--fs-hero-subtitle)' }}>
              Financial Platform Revamp & Application Development
            </p>

            {/* Hero Heading Chunk */}
            <div className="mt-1 sm:mt-1 md:mt-2 lg:mt-2 xl:mt-3 2xl:mt-4">
              <h1 className="mx-auto w-full max-w-[16ch] text-center font-[var(--font-heading)] text-[length:var(--fs-hero-title)] font-bold leading-[1.04] tracking-[-0.05em] text-[var(--color-text)] [text-wrap:balance] sm:max-w-[17ch] md:max-w-[18ch] lg:mx-0 lg:max-w-[22ch] lg:text-left xl:max-w-[23ch] 2xl:max-w-[24ch]">
                <span className="block lg:hidden">
                  Transforming Finance
                </span>
                <span className="mt-1 block lg:hidden">
                  Through Seamless Digital
                </span>
                <span className="mt-1 block lg:hidden">
                  <HeroYellowUnderlineText
                    className="hero-highlight inline-block pb-[0.22em]"
                    lineClassName="h-[0.22em] w-full left-[2%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px]"
                  >
                    <span style={highlightStyle}>Experience</span>
                  </HeroYellowUnderlineText>
                </span>

                <span className="hidden lg:block lg:whitespace-nowrap">
                  Transforming Finance Through
                </span>
                <span className="mt-1 hidden lg:block lg:whitespace-nowrap">
                  Seamless Digital{' '}
                  <HeroYellowUnderlineText
                    className="hero-highlight inline-block pb-[0.22em]"
                    lineClassName="h-[0.22em] w-full left-[2%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]"
                  >
                    <span style={highlightStyle}>Experience</span>
                  </HeroYellowUnderlineText>
                </span>
              </h1>
            </div>

            {/* Description + Meta Chunk */}
            {/* UPDATED: mt-8 provides exactly 32px of spacing */}
            <div className="mt-8 flex flex-col">

              {/* Description */}
              <p className="mx-auto w-full max-w-[40ch] text-center text-[length:var(--fs-hero-subtitle)] font-medium leading-[1.7] text-[var(--color-text-muted)] sm:max-w-[48ch] md:max-w-[65ch] lg:mx-0 lg:max-w-[85ch] lg:text-left xl:max-w-[95ch]">
                A complete revamp of a financial advisory platform focused on
                modern UI/UX, frontend development, backend integration, and
                performance optimization to deliver a smoother and more scalable
                user experience.
              </p>

              {/* Meta Grid */}
              <div className="mt-10 grid w-full grid-cols-2 gap-x-4 gap-y-7 sm:mt-12 sm:gap-x-6 md:grid-cols-4 md:gap-x-8 lg:mt-14 lg:flex lg:flex-nowrap lg:items-start lg:justify-between lg:gap-5 xl:gap-8 2xl:gap-10">
                {heroMeta.map(([label, value]) => (
                  <div
                    key={label}
                    className="min-w-0 text-left md:text-center lg:text-left lg:flex-auto"
                  >
                    <p className="mb-2 text-[8px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[11px] 2xl:text-[12px]">
                      {label}
                    </p>

                    <div className="mx-auto max-w-[22ch] text-[length:var(--fs-card-body)] font-bold leading-[1.55] text-[var(--color-text)] lg:mx-0 lg:max-w-[22ch]">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative mx-auto flex w-full items-center justify-center lg:mx-0 lg:justify-end">
            <div className="relative flex aspect-[1.12/1] w-full max-w-[26rem] items-center justify-center sm:max-w-[32rem] md:max-w-[38rem] lg:max-w-[28rem] xl:max-w-[36rem] 2xl:max-w-[40rem]">
              <div
                className="absolute inset-x-[4%] top-[2%] bottom-[12%] rounded-full blur-[70px]"
                style={visualGlowStyle}
              />
              <div className="relative z-10 flex h-full w-full items-center justify-center">
                <img
                  src="/images/portfolio/Desktop-image.svg"
                  alt="Portfolio desktop showcase"
                  className="relative z-10 block h-auto w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
          
        </div>
      </SectionWrapper>
    </section>
  )
}
