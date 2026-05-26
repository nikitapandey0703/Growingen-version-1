import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

export default function PortfolioLeaderSection() {
  return (
    <SectionWrapper
      as="section"
      className="section-spacing relative overflow-hidden bg-transparent "
    >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,560px)_minmax(360px,1fr)] lg:gap-x-16 xl:grid-cols-[minmax(0,590px)_minmax(400px,1fr)]">
          <div className="mx-auto w-full max-w-[560px] text-center lg:mx-0 lg:text-left">
            <h2 className="text-[32px] font-semibold leading-[1.06] tracking-[-0.05em]  sm:text-[40px] lg:text-[50px]">
              <span className="block">From Vision </span>
              <span className="mt-1 block">
                To Profitable{" "}
                <CurvedUnderlineText className="hero-highlight pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[6px] sm:-bottom-[8px] md:-bottom-[10px] lg:-bottom-[12px] xl:-bottom-[14px] ">
                  Growth
                </CurvedUnderlineText>
              </span>
            </h2>

            <div className="mx-auto mt-6 max-w-[50ch] space-y-5 text-[14px] font-medium leading-[1.72]  sm:text-[15px] lg-text-[16px] lg:mx-0">
              <p>
                Growingen started with a simple goal — building digital products and marketing systems that actually drive business growth, not just online presence. Within the first year, the company scaled through execution-focused development, performance marketing, and long-term client partnerships.
              </p>
                <br />
              <p>
                What began as a small vision quickly evolved into a profitable digital growth company delivering website development, application development, branding, and digital marketing solutions for modern businesses. Every project was built with one focus: creating measurable impact through strategy, design, and technology.

              </p>
            </div>
          </div>

          <div className="mx-auto flex w-full justify-center lg:mx-0 lg:justify-end">
            <div className="w-full max-w-[540px]">
              <div className="overflow-hidden rounded-[20px] border border-white/60 bg-white/35 p-2 shadow-[0_18px_44px_rgba(15,23,42,0.12)] backdrop-blur-[6px] sm:rounded-[24px] sm:p-[10px]">
                <div className="aspect-[16/11] overflow-hidden rounded-[16px] sm:rounded-[18px]">
                  <img
                    src="/images/portfolio/leder-section-image.webp"
                    alt="LuxLite team leader standing in front of a crowd"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
    </SectionWrapper>
  )
}
