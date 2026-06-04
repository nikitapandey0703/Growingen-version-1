import React from "react";
import { Link } from "react-router-dom";
import OrangeButtonLabel from "../../../components/common/OrangeButtonLabel";
import SectionWrapper from "../../../components/common/SectionWrapper";

const defaultTitle = (
  <>
    Ready to Write <br />
    Your Success Story?
  </>
);

export default function PortfolioCTASection({
  title = defaultTitle,
  description = "Let's build something remarkable together.",
  primaryButtonLabel = "Start Your Project",
  secondaryButtonLabel = "View All Project",
  showSecondaryButton = true,
  primaryButtonClassName = "",
  primaryButtonTo,
  secondaryButtonTargetId,
}) {
  const actionButtonClassName =
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-center font-medium shadow-[0_12px_24px_rgba(244,83,40,0.22)] transition-all duration-300 sm:min-h-[52px] sm:px-7 md:px-8";
  const scrollToSecondaryTarget = () => {
    if (!secondaryButtonTargetId) {
      return
    }

    document.getElementById(secondaryButtonTargetId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <SectionWrapper as="section" className="relative bg-transparent section-spacing">
      <style>{`
        @keyframes portfolioCtaGlowDrift {
          0% {
            transform: translate3d(-4%, 0, 0) scale(1);
            opacity: 0.34;
          }
          50% {
            transform: translate3d(4%, -2%, 0) scale(1.04);
            opacity: 0.52;
          }
          100% {
            transform: translate3d(-4%, 0, 0) scale(1);
            opacity: 0.34;
          }
        }

        @keyframes portfolioCtaContentRise {
          0% {
            opacity: 0;
            transform: translate3d(0, 18px, 0);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>

      <div className="section-content">
        <div className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[32px]">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src="/images/portfolio/CTA_Video.webm" type="video/webm" />
          </video>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/30"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.05)_28%,rgba(255,255,255,0)_62%)]"
            style={{ animation: "portfolioCtaGlowDrift 8s ease-in-out infinite" }}
          />

          <div
            className="relative z-10 flex flex-col items-center justify-center px-5 py-10 text-center sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-14 lg:py-18 xl:px-16 xl:py-20 2xl:px-20 2xl:py-24"
            style={{ animation: "portfolioCtaContentRise 700ms cubic-bezier(0.22,1,0.36,1) both" }}
          >
            <h2
              className="max-w-[18ch] text-balance !text-white pb-2 sm:pb-3 md:pb-4 lg:pb-5 xl:pb-6 2xl:pb-7"
              style={{
                fontSize: "var(--fs-section-title)",
                lineHeight: 1.12,
                letterSpacing: "-0.04em",
                fontWeight: 600,
              }}
            >
              {title}
            </h2>

            <p
              className="mt-3 max-w-[34ch] text-balance !text-white/80 sm:mt-4"
              style={{
                fontSize: "var(--fs-section-subtitle)",
                lineHeight: 1.6,
              }}
            >
              {description}
            </p>

            <div className="mt-7 flex w-full max-w-[560px] flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              {primaryButtonTo ? (
                <Link
                  to={primaryButtonTo}
                  className={[
                    `${actionButtonClassName} w-full bg-[#F45328] text-white hover:scale-[1.04] hover:shadow-[0_16px_28px_rgba(244,83,40,0.3)] sm:w-auto sm:min-w-[176px]`,
                    primaryButtonClassName,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ fontSize: "var(--fs-button)" }}
                >
                  <OrangeButtonLabel>{primaryButtonLabel}</OrangeButtonLabel>
                </Link>
              ) : (
                <button
                  className={[
                    `${actionButtonClassName} w-full bg-[#F45328] text-white hover:scale-[1.04] hover:shadow-[0_16px_28px_rgba(244,83,40,0.3)] sm:w-auto sm:min-w-[176px]`,
                    primaryButtonClassName,
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  style={{ fontSize: "var(--fs-button)" }}
                >
                  <OrangeButtonLabel>{primaryButtonLabel}</OrangeButtonLabel>
                </button>
              )}

              {showSecondaryButton ? (
                <button
                  type="button"
                  onClick={scrollToSecondaryTarget}
                  className={`${actionButtonClassName} w-full border border-white/35 bg-black/10 text-white backdrop-blur-[2px] hover:scale-[1.04] hover:bg-white/8 sm:w-auto sm:min-w-[176px]`}
                  style={{ fontSize: "var(--fs-button)" }}
                >
                  {secondaryButtonLabel}
                </button>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
