import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

export default function PortfolioLeaderSection() {
  return (
    <SectionWrapper
      as="section"
      className="section-spacing relative overflow-hidden bg-transparent"
    >
      <div className="grid items-center gap-10 sm:gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-x-16 xl:gap-x-20 2xl:gap-x-32">
        
        {/* Text Content Column */}
        <div className="mx-auto w-full max-w-[620px] text-center lg:mx-0 lg:text-left">
          <h2 className="font-semibold tracking-[-0.05em] [text-wrap:balance] text-[32px] leading-[1.1] sm:text-[40px] md:text-[42px] lg:text-[46px] lg:leading-[1.05] xl:text-[50px] 2xl:text-[60px]">
            <span className="block">From Vision </span>
            <span className="mt-1 block">
              To Profitable{" "}
              <CurvedUnderlineText 
                className="hero-highlight pb-[0.12em]" 
                lineClassName="h-[0.20em] w-full left-[0%] -bottom-[6px] sm:-bottom-[8px] md:-bottom-[10px] lg:-bottom-[12px] xl:-bottom-[14px] 2xl:-bottom-[18px]"
              >
                Growth
              </CurvedUnderlineText>
            </span>
          </h2>

          <div className="mx-auto mt-8 flex flex-col gap-y-5 font-medium leading-[1.6] text-black/80 sm:gap-y-6 lg:mx-0 lg:max-w-[54ch] text-[14px] md:text-[15px] 2xl:text-[17px] 2xl:leading-[1.7]">
            <p className="[text-wrap:pretty]">
              Growingen started with a simple goal — building digital products and marketing systems that actually drive business growth, not just online presence. Within the first year, the company scaled through execution-focused development, performance marketing, and long-term client partnerships.
            </p>
            <p className="[text-wrap:pretty]">
              What began as a small vision quickly evolved into a profitable digital growth company delivering website development, application development, branding, and digital marketing solutions for modern businesses. Every project was built with one focus: creating measurable impact through strategy, design, and technology.
            </p>
          </div>
        </div>

        {/* Image Column */}
        <div className="mx-auto flex w-full justify-center lg:mx-0 lg:justify-end">
          <div className="group relative w-full max-w-[540px] 2xl:max-w-[680px]">
            {/* Decorative background glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#f45328]/10 to-transparent blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
            
            <div className="relative overflow-hidden rounded-[20px] border border-white/60 bg-white/35 p-2 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur-[6px] sm:rounded-[28px] sm:p-3 2xl:p-4">
              <div className="aspect-[16/11] overflow-hidden rounded-[14px] sm:rounded-[20px]">
                <img
                  src="/images/portfolio/leder-section-image.webp"
                  alt="Growingen team leader"
                  className="h-full w-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}