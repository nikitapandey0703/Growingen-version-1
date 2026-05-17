import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'

export default function PortfolioLeaderSection() {
  return (
    <section className="section-spacing relative overflow-hidden bg-transparent">
      <div className="site-container pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,560px)_minmax(360px,1fr)] lg:gap-x-16 xl:grid-cols-[minmax(0,590px)_minmax(400px,1fr)]">
          <div className="mx-auto w-full max-w-[560px] text-center lg:mx-0 lg:text-left">
            <h2 className="text-[32px] font-semibold leading-[1.06] tracking-[-0.05em] text-[#111827] sm:text-[40px] lg:text-[50px]">
              <span className="block">From Invisible</span>
              <span className="mt-1 block">
                to Industry{" "}
                <CurvedUnderlineText className="hero-highlight pb-[0.16em]">
                  Leader
                </CurvedUnderlineText>
              </span>
            </h2>

            <div className="mx-auto mt-6 max-w-[50ch] space-y-5 text-[14px] font-medium leading-[1.72] text-gray-600 sm:text-[15px] lg:mx-0">
              <p>
                LuxLite Solutions had an exceptional product line but zero digital visibility.
                They came to Growingen with a challenge: break into the premium lighting
                market digitally and build a brand that commands premium pricing.
              </p>
                <br />
              <p>
                We developed a holistic strategy combining brand identity redesign,
                custom website development, SEO, social media management, and targeted
                paid campaigns, all unified under a single creative vision.
              </p>
            </div>
          </div>

          <div className="mx-auto flex w-full justify-center lg:mx-0 lg:justify-end">
            <div className="w-full max-w-[540px]">
              <div className="overflow-hidden rounded-[20px] border border-white/60 bg-white/35 p-2 shadow-[0_18px_44px_rgba(15,23,42,0.12)] backdrop-blur-[6px] sm:rounded-[24px] sm:p-[10px]">
                <div className="aspect-[16/11] overflow-hidden rounded-[16px] sm:rounded-[18px]">
                  <img
                    src="/images/portfolio/leder-section-image.svg"
                    alt="LuxLite team leader standing in front of a crowd"
                    className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.08]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
