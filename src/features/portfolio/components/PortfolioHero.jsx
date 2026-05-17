import React, { useEffect, useRef } from "react";

export default function PortfolioHero() {
  const bulbTiltRef = useRef(null);
  const frameRef = useRef(0);
  const targetMotionRef = useRef({ rotate: 0, y: 0, scale: 1 });
  const currentMotionRef = useRef({ rotate: 0, y: 0, scale: 1 });

  const highlightStyle = {
    background:
      "linear-gradient(90deg, #F5710D 0%, #F45328 25%, #2B1CC1 50%, #06BA9D 75%)",
    backgroundSize: "200% 100%",
    backgroundPosition: "0% 50%",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "gradientSlide 6s linear infinite",
  };

  const bulbGlowStyle = {
    background:
      "radial-gradient(circle at 50% 10%, rgba(255,221,111,0.7) 0%, rgba(255,202,88,0.5) 18%, rgba(255,175,52,0.28) 34%, rgba(255,149,30,0.12) 48%, transparent 65%)",
    animation: "portfolioGlowPulse 5.8s ease-in-out infinite",
  };

  const bulbEntryStyle = {
    animation: "portfolioBulbEntry 1.85s cubic-bezier(0.16, 1, 0.3, 1) 0.06s both",
    transformOrigin: "bottom center",
  };

  const bulbFloatStyle = {
    animation: "portfolioBulbFloat 9.4s cubic-bezier(0.42, 0, 0.2, 1) 1.95s infinite",
    transformOrigin: "bottom center",
  };

  const animateBulb = () => {
    const el = bulbTiltRef.current;
    if (!el) {
      frameRef.current = 0;
      return;
    }

    const current = currentMotionRef.current;
    const target = targetMotionRef.current;

    current.rotate += (target.rotate - current.rotate) * 0.09;
    current.y += (target.y - current.y) * 0.1;
    current.scale += (target.scale - current.scale) * 0.08;

    el.style.transform = `translate3d(0, ${current.y.toFixed(2)}px, 0) rotate(${current.rotate.toFixed(2)}deg) scale(${current.scale.toFixed(3)})`;

    const isSettled =
      Math.abs(target.rotate - current.rotate) < 0.02 &&
      Math.abs(target.y - current.y) < 0.02 &&
      Math.abs(target.scale - current.scale) < 0.003;

    if (isSettled) {
      current.rotate = target.rotate;
      current.y = target.y;
      current.scale = target.scale;
      el.style.transform = `translate3d(0, ${target.y.toFixed(2)}px, 0) rotate(${target.rotate.toFixed(2)}deg) scale(${target.scale.toFixed(3)})`;
      frameRef.current = 0;
      return;
    }

    frameRef.current = requestAnimationFrame(animateBulb);
  };

  const startBulbAnimation = () => {
    if (!frameRef.current) {
      frameRef.current = requestAnimationFrame(animateBulb);
    }
  };

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    targetMotionRef.current = {
      rotate: x * 7.5,
      y: y * -9,
      scale: 1.02,
    };

    startBulbAnimation();
  };

  const resetTransform = () => {
    targetMotionRef.current = { rotate: 0, y: 0, scale: 1 };
    startBulbAnimation();
  };

  useEffect(() => {
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <section className="group relative overflow-hidden bg-transparent">
      <style>{`
        @keyframes gradientSlide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes portfolioBulbEntry {
          0% {
            transform: translate3d(190px, 34px, 0) rotate(45deg) scale(0.88);
            opacity: 0;
          }
          62% {
            transform: translate3d(18px, -8px, 0) rotate(6deg) scale(1.01);
            opacity: 1;
          }
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }

        @keyframes portfolioBulbFloat {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          22% { transform: translate3d(3px, -5px, 0) rotate(0.28deg); }
          50% { transform: translate3d(0, -10px, 0) rotate(0deg); }
          78% { transform: translate3d(-3px, -6px, 0) rotate(-0.28deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }

        @keyframes portfolioGlowPulse {
          0% { opacity: 0.4; transform: scale(0.98); }
          50% { opacity: 0.72; transform: scale(1.14); }
          100% { opacity: 0.4; transform: scale(0.98); }
        }
      `}</style>

      <div className="site-container relative pt-8 sm:pt-10 lg:pb-16">
        <div className="grid items-center gap-12 lg:min-h-[calc(100vh-140px)] lg:grid-cols-[minmax(0,680px)_minmax(280px,1fr)] lg:gap-x-3 xl:grid-cols-[minmax(0,720px)_minmax(300px,1fr)] xl:gap-x-0">
          
          {/* LEFT CONTENT */}
          <div className="relative z-40 mx-auto w-full max-w-[470px] pt-2 text-center font-sans text-black lg:mx-0 lg:max-w-[700px] lg:pt-0 lg:text-left">
            <p className="text-[clamp(12px,1.26vw,17px)] font-medium uppercase tracking-[0.06em] text-gray-800">
              Portfolio / The Future Of Lighting
            </p>

            <h1 className="mt-4 w-full text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[40px] lg:text-[58px]">
              <span className="block sm:whitespace-nowrap">
                Lighting Up a Brand&apos;s
              </span>

              <span className="mt-1 block sm:whitespace-nowrap">
                Digital{" "}
                <span
                  className="hero-highlight relative inline-block pb-1"
                  style={highlightStyle}
                >
                  Future
                  <span
                    aria-hidden="true"
                    className="hero-highlight__line absolute -bottom-1 left-0 h-1.5 w-full rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 opacity-80"
                  />
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[49ch] text-[clamp(14px,1.26vw,17px)] font-medium leading-[1.7] text-gray-800 lg:mx-0">
              A complete brand overhaul and performance-driven digital marketing
              campaign that transformed a lighting company's online presence and
              drove measurable growth.
            </p>

            <div className="mt-12 flex w-full flex-wrap items-start justify-center gap-y-8 gap-x-4 sm:justify-start sm:gap-x-6 lg:mt-14 lg:gap-x-10">
              {[
                ["Client", "LuxeLite Solutions"],
                ["Industry", "Lighting & Interior Design"],
                ["Duration", "4 Months"],
                ["Year", "2024"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex flex-col text-left"
                >
                  <p className="mb-2 text-[6px] font-light uppercase tracking-[0.25em] text-gray-500">
                    {label}
                  </p>
                  <div className="whitespace-nowrap text-[16px] font-bold text-[#000000]">
                    {value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative mx-auto mt-12 flex w-full max-w-[585px] items-center justify-center lg:mt-0 lg:justify-end lg:pl-2 xl:max-w-[620px] xl:pl-4">
            <div
              className="relative flex aspect-[4/3] w-full max-w-[548px] items-center justify-center lg:translate-x-[14px] xl:translate-x-[26px]"
              onMouseMove={handleMouseMove}
              onMouseLeave={resetTransform}
            >
              {/* Glow */}
             <div
                className="absolute inset-x-[2%] top-[-12%] bottom-[20%] rounded-full blur-[70px]"
                style={bulbGlowStyle}
              />

              {/* Image */}
              <div
                className="relative z-10 flex h-full items-center justify-center [backface-visibility:hidden] [transform:translateZ(0)] [will-change:transform,opacity]"
                style={bulbEntryStyle}
              >
                <div
                  className="relative flex h-full items-center justify-center [backface-visibility:hidden] [transform:translateZ(0)] [will-change:transform]"
                  style={bulbFloatStyle}
                >
                 <div
                    ref={bulbTiltRef}
                    className="[transform:translate3d(0,8px,0)] [will-change:transform] transition-[filter] duration-500 ease-out"
                  >
                    <img
                      src="/images/portfolio/portfolio-hero.png"
                      alt="Lighting Concept"
                      className="relative z-10 block h-full w-auto object-contain [backface-visibility:hidden] transition-[transform,filter] duration-500 ease-out group-hover:scale-[1.035] group-hover:[filter:drop-shadow(0_-15px_30px_rgba(255,214,102,0.8))_drop-shadow(0_-25px_65px_rgba(255,181,56,0.65))_drop-shadow(0_-35px_90px_rgba(255,149,30,0.45))]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
