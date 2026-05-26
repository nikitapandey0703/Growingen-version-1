import CTASection from "../components/CTASection"
import FeaturedSection from "../components/FeaturedSection"
import GrowthStoriesSection from "../components/GrowthStoriesSection"
import HeroSection from "../components/HeroSection"

import PortfolioScroll from "../components/PortfolioScroll"
import PromoBannerSection from "../components/PromoBannerSection"

import TopRatedSection from "../components/TopRatedSection"


export const HomePage = () => {
  return (
        <main>
           {/* Primary landing-page flow for the home screen. */}
          
           <HeroSection/>
           <FeaturedSection/>
          <PortfolioScroll/>
           <CTASection/>
           <GrowthStoriesSection/>
           {/* <TopRatedSection/>           */}
         
            <PromoBannerSection />
        
           
         </main>
  )
}
