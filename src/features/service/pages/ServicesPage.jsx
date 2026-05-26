
import ServiceHero from '../components/ServiceHero'
import BrandBanner from '../components/BrandBanner'
import ServiceCapabilitiesSection from '../components/ServiceCapabilitiesSection'
import PortfolioCTASection from '../../portfolio/components/PortfolioCTASection'
import PortfolioTestimonialSection from '../../portfolio/components/PortfolioTestimonialSection'
import HowWeWorkSection from '../components/HowWeWorkSection'
import ServiceBusinessFitSection from '../components/ServiceBusinessFitSection'
import WhatSetsUsApartSection from '../components/WhatSetsUsApartSection'


export function ServicesPage() {
  return (
    <main className="bg-transparent ">
      <ServiceHero />
      <BrandBanner />
      <ServiceCapabilitiesSection />
      <HowWeWorkSection/>
      <ServiceBusinessFitSection />
      
      <WhatSetsUsApartSection/>
      <PortfolioTestimonialSection />
      <PortfolioCTASection
        title={
          <span className="inline-flex flex-col items-center text-center">
            <span className="block whitespace-nowrap">Ready to Build Something</span>
            <span className="block whitespace-nowrap pb-2 sm:pb-3 md:pb-3 lg:pb-4 xl:pb-4">That Actually Works?</span>
          </span>
        }
        description=" Let’s create systems that don’t just look good — but deliver real results."
        primaryButtonLabel="Book a Consultation"
        primaryButtonTo="/contact"
        showSecondaryButton={false}
      />
       
      
    </main>
  )
}
