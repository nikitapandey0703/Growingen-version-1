import React from 'react'

const gaugeTicks = [[130, 253, 124, 242],[168, 195, 160, 187],[225, 152, 220, 142],[280, 118, 280, 107],[335, 152, 340, 142],[392, 195, 400, 187],
  [430, 253, 436, 242],
]

const gaugeSegments =[
  { d: 'M 130 260 A 150 150 0 0 1 205 127', stroke: '#ef4444' },
  { d: 'M 205 127 A 150 150 0 0 1 280 110', stroke: '#f59e0b' },
  { d: 'M 280 110 A 150 150 0 0 1 355 127', stroke: '#c7d82f' },
  { d: 'M 355 127 A 150 150 0 0 1 430 260', stroke: '#22c55e' },
]

function GaugeCard() {
  return (
    <div className="relative w-full max-w-[280px] rounded-[22px] bg-white px-4 py-[1px] shadow-[0_18px_34px_rgba(15,23,42,0.14)] sm:max-w-[304px] sm:px-5 sm:py-[2px] lg:max-w-[332px] lg:px-6">
      {/* Red Dot top left */}
      <div className="absolute left-4 top-[10px] h-3.5 w-3.5 rounded-full border-[1.5px] border-[#ef4444] sm:left-5 lg:left-6" />

      <svg
        viewBox="0 0 560 320"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible mt-4"
      >
        <defs>
          <clipPath id="seo-score-arc-clip">
            <rect x="0" y="0" width="560" height="270" />
          </clipPath>
        </defs>

        <path
          d="M 130 260 A 150 150 0 0 1 430 260"
          fill="none"
          stroke="#ececec"
          strokeWidth="24"
          strokeLinecap="round"
          clipPath="url(#seo-score-arc-clip)"
        />

        {gaugeSegments.map((segment) => (
          <path
            key={segment.d}
            d={segment.d}
            fill="none"
            stroke={segment.stroke}
            strokeWidth="24"
            strokeLinecap="round"
            clipPath="url(#seo-score-arc-clip)"
          />
        ))}

        {gaugeTicks.map(([x1, y1, x2, y2]) => (
          <line
            key={`${x1}-${y1}-${x2}-${y2}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#c8c8c8"
            strokeWidth="1.5"
          />
        ))}

        <g className="top-rated-gauge__needle">
          <line
            x1="280"
            y1="260"
            x2="280"
            y2="128"
            stroke="#1f2937"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </g>

        <circle cx="280" cy="260" r="12" fill="#1f2937" />
        <circle cx="280" cy="260" r="6" fill="#fff" />

        <text x="280" y="94" textAnchor="middle" fontSize="18" fontWeight="600" fill="#111827">
          Your SEO Score
        </text>
        <text x="280" y="160" textAnchor="middle" fontSize="18" fontWeight="700" fill="#111827">
          88
        </text>
        <text x="280" y="182" textAnchor="middle" fontSize="12" fontWeight="600" fill="#6b7280">
          out of 100
        </text>
        <text x="128" y="290" textAnchor="middle" fontSize="13" fontWeight="600" fill="#9ca3af">
          POOR
        </text>
        <text x="432" y="290" textAnchor="middle" fontSize="13" fontWeight="600" fill="#9ca3af">
          GOOD
        </text>
      </svg>
    </div>
  )
}

export default function TopRatedSection() {
  return (
    <section className="section-spacing relative mt-8">
      <div className="site-container">
        <div className="mx-auto max-w-[1030px]">
        
        {/* Main Div Styling remains Static & Unchanged as requested */}
        <div className="relative overflow-hidden rounded-[18px] px-5 py-5 sm:px-6 sm:py-6 lg:min-h-[288px] lg:px-8 lg:py-8">
          
          <img
            src="/images/products/Subtract_footer.svg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="relative flex flex-col gap-4 lg:min-h-[220px] lg:pr-[340px] xl:pr-[396px]">
            <div className="text-white">
              <h2 className="max-w-[20ch] text-[32px] font-[600] leading-[1.14] tracking-[-0.04em] !text-white sm:text-[40px] lg:text-[50px]">
                Know Your Website SEO Score By Email
              </h2>

              <div className="relative mt-6 max-w-[640px]">
                <div className="relative grid gap-2 rounded-[18px] border border-white/20 bg-white/8 px-3 py-2 backdrop-blur-[4px] sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] sm:items-center sm:gap-3 sm:rounded-full sm:px-4 sm:py-2.5">
                  
                  {/* Rotating Border Animation */}
                  <div 
                    className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[18px] sm:rounded-full"
                    style={{
                      padding: '1.5px', 
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  >
                    <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2">
                      <div 
                        className="h-full w-full animate-[spin_2.4s_linear_infinite] will-change-transform"
                        style={{
                          background: 'conic-gradient(from 0deg at 50% 50%, transparent 65%, rgba(255,255,255,0.35) 82%, white 100%)'
                        }}
                      />
                    </div>
                  </div>
                  
                  <input
                    type="text"
                    placeholder="Your Website URL"
                    className="relative z-10 h-9 min-w-0 bg-transparent px-3 text-[14px] text-white placeholder:text-white/68 outline-none"
                  />
                  
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="relative z-10 h-9 min-w-0 bg-transparent px-3 text-[14px] text-white placeholder:text-white/68 outline-none"
                  />
                  
                  <button
                    type="button"
                    className="relative z-10 inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-white px-6 text-[14px] font-medium text-[#5b34d6] shadow-[0_10px_22px_rgba(15,23,42,0.16)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(15,23,42,0.2)]"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

           
<div className="relative flex justify-center px-6 pb-10 sm:pb-12 lg:absolute lg:-top-11 lg:-right-8 lg:p-0 z-20">
  <GaugeCard />
</div>
            
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}
