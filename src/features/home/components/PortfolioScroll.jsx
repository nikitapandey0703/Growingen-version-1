import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText';

const MotionDiv = motion.div;

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
        <div className="mx-auto max-w-[760px] lg:max-w-[960px] xl:max-w-[1100px] 2xl:max-w-full px-4 text-center">
          <h2 
            className="text-[32px] font-semibold leading-[1.1] tracking-[-0.05em]"
            style={{ fontSize: 'var(--fs-section-title)' }}
          >
            Our Recent{' '}
            <CurvedUnderlineText 
              className="hero-highlight pb-[0.16em]" 
              lineClassName="h-[0.22em] w-full left-[2%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]"
            >
              Projects
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
                <span className="text-[17px] font-semibold text-black sm:text-[19px]">
                 With Growingen Team
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
      <div className="hidden mx-auto max-w-[760px] lg:max-w-[960px] xl:max-w-[1100px] 2xl:max-w-full px-4 text-center pt-4 pb-10 lg:block">
        <h2 
          className="text-[32px] font-semibold leading-[1.1] tracking-[-0.05em] pb-2"
          style={{ fontSize: 'var(--fs-section-title)' }}
        >
          Our Recent{' '}
          <CurvedUnderlineText 
            className="hero-highlight pb-[0.16em]" 
            lineClassName="h-[0.22em] w-full left-[1%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]"
          >
            Projects
          </CurvedUnderlineText>
        </h2>
      </div>

      <section ref={containerRef} className="relative hidden w-full h-[460vh] bg-transparent lg:block 2xl:h-[430vh] 3xl:h-[400vh]">
        
        {/* 'overflow-hidden' roks it from creating horizontal scrolls */}
        <div className="hidden sticky top-0 h-screen w-full items-center justify-center overflow-hidden lg:flex">
          
          <MotionDiv 
            style={{ scale: mainScale }} 
            className="relative w-full max-w-[1400px] aspect-[1.6/1] origin-center 2xl:max-w-[1540px] 2xl:aspect-[1.57/1] 3xl:max-w-[1680px] 3xl:aspect-[1.54/1]"
          >
            
            {/* LIGHTING - Top Left */}
            <MotionDiv 
              style={{ x: xTopLeft, y: yTopLeft, rotate: rotateTopLeft }}
              className="absolute top-[20%] left-[9%] w-[23.5%] aspect-[1/1.05] overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md 2xl:left-[8.4%] 2xl:w-[24.2%] 2xl:rounded-[12px] 3xl:left-[8.1%] 3xl:w-[24.8%] 3xl:rounded-[14px]"
            >
              <img src={portfolioScrollImages.topLeft} className="w-full h-full object-cover" alt="Recent project showcase 1" />
            </MotionDiv>

            {/* SOFTWARE - Top Center */}
            <MotionDiv 
              style={{ y: yTopMid, rotate: rotateTopMid }}
              className="absolute top-[13%] left-[36.8%] w-[37.5%] aspect-[16/7] overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md 2xl:left-[35.7%] 2xl:w-[38.8%] 2xl:rounded-[12px] 3xl:left-[35.3%] 3xl:w-[39.6%] 3xl:rounded-[14px]"
            >
              <img src={portfolioScrollImages.topCenter} className="w-full h-full object-cover" alt="Recent project showcase 2" />
            </MotionDiv>

            {/* CENTER CARD (Stays put throughout) */}
            <div className="absolute top-[41%] left-[36%] z-20 flex w-[28%] aspect-[1.9/1] flex-col items-center justify-center rounded-[8px] border border-gray-400 bg-transparent px-6 py-6 2xl:left-[35.1%] 2xl:w-[29.4%] 2xl:rounded-[10px] 2xl:px-7 2xl:py-7 3xl:left-[34.8%] 3xl:w-[30.2%] 3xl:rounded-[12px] 3xl:px-8 3xl:py-8">
              <h3 className="mb-6 text-[clamp(16px,1.7vw,30px)] font-semibold text-center leading-[1.25] 2xl:mb-7 2xl:text-[clamp(18px,1.55vw,32px)] 3xl:mb-8 3xl:text-[clamp(20px,1.5vw,34px)]">
                “ Your Growth, Our Success ”
              </h3>
              <div className="flex items-center gap-3 pt-4 2xl:gap-4 2xl:pt-5 3xl:pt-6">
                <div className="flex h-[clamp(56px,4.5vw,72px)] w-[clamp(56px,4.5vw,72px)] items-center justify-center overflow-hidden rounded-full bg-[#F47A14] 2xl:h-[clamp(64px,4.2vw,82px)] 2xl:w-[clamp(64px,4.2vw,82px)] 3xl:h-[clamp(70px,4vw,88px)] 3xl:w-[clamp(70px,4vw,88px)]">      
                  <img src="/images/portfolio/mini-illustration.png" alt="avatar" className="w-full h-full object-contain" />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-[clamp(14px,1.2vw,24px)] font-semibold 2xl:text-[clamp(16px,1.1vw,26px)] 3xl:text-[clamp(18px,1vw,28px)]">                  With Growingen Team
</span>
                 
                </div>
              </div>
            </div>

            {/* SKINCARE - Top Right */}
            <MotionDiv 
              style={{ x: xTopRight, y: yTopRight, rotate: rotateTopRight }}
              className="absolute top-[42%] left-[68.8%] w-[22.5%] aspect-[3.5/1.8] overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md 2xl:left-[69.2%] 2xl:w-[23.1%] 2xl:rounded-[12px] 3xl:left-[69.6%] 3xl:w-[23.6%] 3xl:rounded-[14px]"
            >
              <img src={portfolioScrollImages.topRight} className="w-full h-full object-cover" alt="Recent project showcase 3" />
            </MotionDiv>

            {/* SKIN 1 - Bottom Left */}
            <MotionDiv 
              style={{ x: xBotLeft, y: yBotLeft, rotate: rotateBotLeft }}
              className="absolute top-[68.5%] left-[11%] w-[29.5%] aspect-[23/9] overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md 2xl:left-[10.4%] 2xl:w-[30.4%] 2xl:rounded-[12px] 3xl:left-[10%] 3xl:w-[31%] 3xl:rounded-[14px]"
            >
              <img src={portfolioScrollImages.bottomLeft} className="w-full h-full object-cover" alt="Recent project showcase 4" />
            </MotionDiv>

            {/* SPEAKER - Bottom Center */}
            <MotionDiv 
              style={{ y: yBotMid, rotate: rotateBotMid }}
              className="absolute top-[66.5%] left-[45%] w-[20.5%] aspect-[1.8/1.2] overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md 2xl:w-[21.2%] 2xl:rounded-[12px] 3xl:left-[44.8%] 3xl:w-[21.7%] 3xl:rounded-[14px]"
            >
              <img src={portfolioScrollImages.bottomCenter} className="w-full h-full object-cover" alt="Recent project showcase 5" />
            </MotionDiv>

            {/* GRINDING - Bottom Right */}
            <MotionDiv 
              style={{ x: xBotRight, y: yBotRight, rotate: rotateBotRight }}
              className="absolute top-[64.5%] left-[69%] z-10 w-[18.5%] aspect-[2/1] overflow-hidden rounded-[10px] border border-gray-300 bg-gray-200 shadow-md 2xl:left-[69.8%] 2xl:w-[19.2%] 2xl:rounded-[12px] 3xl:left-[70.1%] 3xl:w-[19.6%] 3xl:rounded-[14px]"
            >
              <img src={portfolioScrollImages.bottomRight} className="w-full h-full object-cover" alt="Recent project showcase 6" />
            </MotionDiv>

          </MotionDiv>
        </div>
      </section>
    </>
  );
}
