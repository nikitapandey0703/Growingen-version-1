import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText';

const portfolioScrollImages = {
  topLeft: "/images/portfolio/recent-project-skincare-product.webp",
  topCenter: "/images/portfolio/recent-project-social-campaign.webp",
  topRight: "/images/portfolio/recent-project-tech-brochure.webp",
  bottomLeft: "/images/portfolio/recent-project-dashboard-ui.webp",
  bottomCenter: "/images/portfolio/recent-project-digital-it.webp",
  bottomRight: "/images/portfolio/recent-project-herbal-tea-landing.webp",
};

export default function PortfolioScroll() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth out the scroll progress to prevent jagged, breaking animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  // TIMELINE:
  // 0 -> 0.4 : Animate IN (Zoom and Spread)
  // 0.4 -> 0.6 : Pause/Hold the zoomed state
  // 0.6 -> 1.0 : Animate OUT (Back to original position)
  const scrollTimeline = [0, 0.4, 0.6, 1];

  // 1. MAIN ZOOM: 1 se 2 par jayega
  const mainScale = useTransform(smoothProgress, scrollTimeline, [1, 2, 2, 1]);

  // 2. PARALLAX SPREAD & RETURN:
  // (Spread values reduced so they stay slightly visible on edges during the hold state)
  
  // Top Left Card
  const xTopLeft = useTransform(smoothProgress, scrollTimeline, ["0%", "-10%", "-10%", "0%"]);
  const yTopLeft = useTransform(smoothProgress, scrollTimeline, ["0%", "-20%", "-20%", "0%"]);
  const rotateTopLeft = useTransform(smoothProgress, scrollTimeline, [0, -10, -10, 0]);

  // Top Mid Card
  const yTopMid = useTransform(smoothProgress, scrollTimeline, ["0%", "-30%", "-30%", "0%"]);
  const rotateTopMid = useTransform(smoothProgress, scrollTimeline, [0, 5, 5, 0]);

  // Top Right Card
  const xTopRight = useTransform(smoothProgress, scrollTimeline, ["0%", "10%", "10%", "0%"]);
  const yTopRight = useTransform(smoothProgress, scrollTimeline, ["0%", "-20%", "-20%", "0%"]);
  const rotateTopRight = useTransform(smoothProgress, scrollTimeline, [0, 10, 10, 0]);

  // Bottom Left Card
  const xBotLeft = useTransform(smoothProgress, scrollTimeline, ["0%", "-10%", "-10%", "0%"]);
  const yBotLeft = useTransform(smoothProgress, scrollTimeline, ["0%", "20%", "20%", "0%"]);
  const rotateBotLeft = useTransform(smoothProgress, scrollTimeline, [0, -8, -8, 0]);

  // Bottom Mid Card
  const yBotMid = useTransform(smoothProgress, scrollTimeline, ["0%", "30%", "30%", "0%"]);
  const rotateBotMid = useTransform(smoothProgress, scrollTimeline, [0, -4, -4, 0]);

  // Bottom Right Card
  const xBotRight = useTransform(smoothProgress, scrollTimeline, ["0%", "10%", "10%", "0%"]);
  const yBotRight = useTransform(smoothProgress, scrollTimeline, ["0%", "20%", "20%", "0%"]);
  const rotateBotRight = useTransform(smoothProgress, scrollTimeline, [0, 8, 8, 0]);

  return (
    <>
      {/* ======================= MOBILE / TABLET VIEW ======================= */}
      <section className="site-container w-full pb-16 pt-6 sm:pt-8 lg:hidden">
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em]  sm:text-[40px] lg:text-[50px]">
            Our Recent Projects
            <br />
            For{" "}
            <CurvedUnderlineText className="hero-highlight pb-[0.16em]">
              Clients
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="mx-auto mt-8 grid max-w-[860px] gap-4 sm:gap-5 md:grid-cols-2">
          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md md:row-span-2">
            <img src={portfolioScrollImages.topLeft} className="h-full w-full object-cover" alt="Recent project showcase 1" />
          </div>

          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md">
            <img src={portfolioScrollImages.topCenter} className="h-full w-full object-cover" alt="Recent project showcase 2" />
          </div>

          <div className="rounded-[8px] border border-gray-400 bg-transparent px-6 py-6">
            <h3 className="text-[clamp(16px,3vw,26px)] font-semibold  text-center leading-[1.25]">
              " Your Growth, Our Success "
            </h3>

            <div className="mt-5 flex items-center justify-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#F47A14] sm:h-14 sm:w-14">
                <img src="/images/portfolio/mini-illustration.png" alt="avatar" className="h-full w-full object-contain" />
              </div>

              <div className="flex flex-col leading-tight text-left">
                <span className="text-[15px] font-semibold text-black sm:text-[17px]">
                  Ankita Verma
                </span>
                <span className="mt-[2px] text-[11px] text-gray-600 sm:text-[12px]">
                  CEO & CO-FOUNDER
                </span>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md">
            <img src={portfolioScrollImages.topRight} className="h-full w-full object-cover" alt="Recent project showcase 3" />
          </div>

          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md">
            <img src={portfolioScrollImages.bottomCenter} className="h-full w-full object-cover" alt="Recent project showcase 5" />
          </div>

          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md">
            <img src={portfolioScrollImages.bottomRight} className="h-full w-full object-cover" alt="Recent project showcase 6" />
          </div>

          <div className="overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md md:col-span-2">
            <img src={portfolioScrollImages.bottomLeft} className="h-full w-full object-cover" alt="Recent project showcase 4" />
          </div>
        </div>
      </section>

      {/* ======================= DESKTOP VIEW ======================= */}
      <div className="hidden w-full text-center pt-4 pb-10 lg:block">
        <h2 className="text-[32px] font-semibold leading-[1.08] tracking-[-0.04em]  sm:text-[40px] lg:text-[50px]">
          Our Recent Projects
          <br />
          For{" "}
          <CurvedUnderlineText className="hero-highlight pb-[0.16em]">
            Clients
          </CurvedUnderlineText>
        </h2>
      </div>

      <section ref={containerRef} className="relative hidden w-full h-[460vh] bg-transparent lg:block">
        
        {/* 'overflow-hidden' roks it from creating horizontal scrolls */}
        <div className="hidden sticky top-0 h-screen w-full items-center justify-center overflow-hidden lg:flex">
          
          <motion.div 
            style={{ scale: mainScale }} 
            className="relative w-full max-w-[1400px] aspect-[1.6/1] origin-center"
          >
            
            {/* LIGHTING - Top Left */}
            <motion.div 
              style={{ x: xTopLeft, y: yTopLeft, rotate: rotateTopLeft }}
              className="absolute top-[12.5%] left-[9%] w-[23.5%] aspect-[1/1.05] bg-gray-200 rounded-[10px] shadow-md border border-gray-300 overflow-hidden"
            >
              <img src={portfolioScrollImages.topLeft} className="w-full h-full object-cover" alt="Recent project showcase 1" />
            </motion.div>

            {/* SOFTWARE - Top Center */}
            <motion.div 
              style={{ y: yTopMid, rotate: rotateTopMid }}
              className="absolute top-[5%] left-[36.8%] w-[37.5%] aspect-[16/7.5] bg-gray-200 rounded-[10px] shadow-md border border-gray-300 overflow-hidden"
            >
              <img src={portfolioScrollImages.topCenter} className="w-full h-full object-cover" alt="Recent project showcase 2" />
            </motion.div>

            {/* CENTER CARD (Stays put throughout) */}
            <div className="absolute top-[38%] left-[36%] w-[28%] aspect-[1.9/1] rounded-[8px] border border-gray-400 flex flex-col items-center justify-center px-6 py-6 z-20 bg-transparent">
              <h3 className="text-[clamp(16px,1.7vw,30px)] font-semibold  text-center leading-[1.25] mb-6">
                “ Your Growth, Our Success ”
              </h3>
              <div className="flex items-center gap-3 pt-4">
                <div className="w-[clamp(56px,4.5vw,72px)] h-[clamp(56px,4.5vw,72px)] rounded-full bg-[#F47A14] flex items-center justify-center overflow-hidden">      
                  <img src="/images/portfolio/mini-illustration.png" alt="avatar" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[clamp(14px,1.2vw,20px)] font-semibold ">Ankita Verma</span>
                  <span className="text-[clamp(10px,0.8vw,14px)] text-gray-600 mt-[2px]">CEO & CO-FOUNDER</span>
                </div>
              </div>
            </div>

            {/* SKINCARE - Top Right */}
            <motion.div 
              style={{ x: xTopRight, y: yTopRight, rotate: rotateTopRight }}
              className="absolute top-[35.5%] left-[68.8%] w-[22.5%] aspect-[1.4/1] bg-gray-200 rounded-[10px] shadow-md border border-gray-300 overflow-hidden"
            >
              <img src={portfolioScrollImages.topRight} className="w-full h-full object-cover" alt="Recent project showcase 3" />
            </motion.div>

            {/* SKIN 1 - Bottom Left */}
            <motion.div 
              style={{ x: xBotLeft, y: yBotLeft, rotate: rotateBotLeft }}
              className="absolute top-[64.5%] left-[11%] w-[29.5%] aspect-[21/9] bg-gray-200 rounded-[10px] shadow-md border border-gray-300 overflow-hidden"
            >
              <img src={portfolioScrollImages.bottomLeft} className="w-full h-full object-cover" alt="Recent project showcase 4" />
            </motion.div>

            {/* SPEAKER - Bottom Center */}
            <motion.div 
              style={{ y: yBotMid, rotate: rotateBotMid }}
              className="absolute top-[65.5%] left-[45%] w-[20.5%] aspect-[1.5/1] bg-gray-200 rounded-[10px] shadow-md border border-gray-300 overflow-hidden"
            >
              <img src={portfolioScrollImages.bottomCenter} className="w-full h-full object-cover" alt="Recent project showcase 5" />
            </motion.div>

            {/* GRINDING - Bottom Right */}
            <motion.div 
              style={{ x: xBotRight, y: yBotRight, rotate: rotateBotRight }}
              className="absolute top-[67.5%] left-[69%] w-[18.5%] aspect-[1.8/1] bg-gray-200 rounded-[10px] shadow-md border border-gray-300 overflow-hidden z-10"
            >
              <img src={portfolioScrollImages.bottomRight} className="w-full h-full object-cover" alt="Recent project showcase 6" />
            </motion.div>

          </motion.div>
        </div>
      </section>
    </>
  );
}
