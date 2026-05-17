"use client";

import { useState, useEffect } from "react";
import SectionWrapper from "../../../components/common/SectionWrapper";

export default function BrandBanner() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "Branding isn't an expense. It's the foundation of everything that follows.";

  useEffect(() => {
    let typingInterval;
    let loopTimeout;

    const startTypingCycle = () => {
      let currentIndex = 0;
      setDisplayedText(""); // Clear text for the new cycle

      typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayedText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          // Once typing is finished, clear the interval...
          clearInterval(typingInterval);
          // ...and wait exactly 2 seconds before restarting the cycle
          loopTimeout = setTimeout(startTypingCycle, 2000);
        }
      }, 40); // Typing speed
    };

    // Initial 2-second delay before the very first typing starts
    loopTimeout = setTimeout(startTypingCycle, 2000);

    // Cleanup to prevent memory leaks
    return () => {
      clearInterval(typingInterval);
      clearTimeout(loopTimeout);
    };
  }, []);

  return (
    <section className="relative flex w-full flex-col justify-center overflow-hidden bg-[linear-gradient(90deg,#2d2fd3_0%,#2576cf_48%,#13c6a7_100%)] py-12 lg:h-[360px] lg:py-0">
      <style>
        {`
          @keyframes drawEllipseLoop {
            0% { stroke-dashoffset: 100; }
            50% { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -100; }
          }

          .animate-draw-ellipse-loop {
            stroke-dasharray: 100;
            animation: drawEllipseLoop 3s linear infinite;
          }

          .brand-banner-copy,
          .brand-banner-copy h1,
          .brand-banner-copy p,
          .brand-banner-copy span {
            color: #ffffff !important;
          }

          .watermark-glop {
            mix-blend-mode: overlay;
          }
        `}
      </style>

      <SectionWrapper className="relative z-10 py-0">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
          <div className="brand-banner-copy max-w-[650px]" style={{ color: '#ffffff' }}>
            <h1
              className="text-[32px] font-bold leading-[1.18] tracking-tight text-white sm:text-[40px] lg:text-[50px]"
              style={{ color: '#ffffff' }}
            >
              Why Most{' '}
              <span
                className="relative inline-block whitespace-nowrap text-white"
                style={{ color: '#ffffff' }}
              >
                <span className="relative z-10 text-white" style={{ color: '#ffffff' }}>
                  Brands Fail
                </span>

                <svg
                  className="absolute -bottom-2 -left-4 -right-4 -top-1 z-0 h-[130%] w-[120%] text-[#FBBF24]"
                  viewBox="0 0 100 40"
                  preserveAspectRatio="none"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 15 24 C 5 12 18 3 50 3 C 82 3 96 14 96 22 C 96 32 75 38 50 38 C 22 38 7 30 14 20"
                    stroke="currentColor"
                    strokeWidth="2"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    pathLength="100"
                    className="animate-draw-ellipse-loop"
                  />
                </svg>
              </span>{' '}
              <span className="text-white" style={{ color: '#ffffff' }}>
                -
              </span>
              <br />
              <span className="text-white" style={{ color: '#ffffff' }}>
                And How We Fix It
              </span>
            </h1>

            <p
              className="mt-5 max-w-[55ch] text-[14px] font-normal leading-[1.65] text-white sm:text-[15px] lg:text-[16px]"
              style={{ color: '#ffffff' }}
            >
              Most businesses invest in marketing... but ignore branding.{' '}
              <br className="hidden sm:block" />
              They run ads, post content, build websites yet struggle to stand out.
            </p>

            <br />

            <p
              className="mt-6 max-w-[50ch] text-[15px] font-semibold leading-[1.55] text-white sm:text-[16px] lg:text-[17px] min-h-[3.5em]"
              style={{ color: '#ffffff' }}
            >
              {/* First 47 characters is the first line */}
              {displayedText.substring(0, 47)}
              
              {/* Insert the line break only when the typing reaches the second line */}
              {displayedText.length >= 47 && <br className="hidden sm:block" />}
              
              {/* The rest of the text */}
              {displayedText.substring(47)}

              {/* Blinking Cursor */}
              <span className="inline-block ml-[2px] animate-pulse">|</span>
            </p>
          </div>

          <div className="relative mx-auto flex w-full max-w-[480px] items-center justify-center lg:mx-0 lg:max-w-[520px] lg:justify-end lg:pr-6 xl:max-w-[580px] xl:pr-10">
            <div
              aria-hidden="true"
              className="watermark-glop pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 text-[140px] font-black tracking-[0.05em] text-transparent [-webkit-text-stroke:1.5px_rgba(255,255,255,0.4)] [text-shadow:0_0_40px_rgba(255,255,255,0.25)] lg:block xl:text-[220px]"
            >
              BRAND
            </div>
            <img
              src="/images/service/service-banner.webp"
              alt="Ant standing on an elephant to represent brand pressure and positioning"
              className="relative z-10 max-h-[280px] w-full object-contain drop-shadow-[0_24px_35px_rgba(15,23,42,0.25)] lg:max-h-[340px]"
            />
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
}
