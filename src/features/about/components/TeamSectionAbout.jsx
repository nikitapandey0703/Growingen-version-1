import React from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

const teamMembers = [
  {
    id: 1,
    name: 'Ankita Varma',
    role: 'Founder & CEO',
    bio: "15+ Years In Digital Marketing. Visionary Leader Behind Growingen's Growth & Client Success Philosophy.",
    image: '/images/portfolio/leder-section-image.svg',
  },
  {
    id: 2,
    name: 'Ankita Varma',
    role: 'Founder & CEO',
    bio: "15+ Years In Digital Marketing. Visionary Leader Behind Growingen's Growth & Client Success Philosophy.",
    image: '/images/portfolio/leder-section-image.svg',
  },
  {
    id: 3,
    name: 'Ankita Varma',
    role: 'Founder & CEO',
    bio: "15+ Years In Digital Marketing. Visionary Leader Behind Growingen's Growth & Client Success Philosophy.",
    image: '/images/portfolio/leder-section-image.svg',
  },
]

function TeamCard({ member }) {
  return (
    <div className="group relative flex h-[370px] w-[285px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] cursor-pointer">
      
      {/* 
         Image Area: 
         Takes full height in the background. On hover, it slides up (-translate-y-6) 
         to compensate for the expanding white box at the bottom.
      */}
      <div className="absolute inset-0 h-full w-full transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
      </div>

      {/* 
         Content Area (The White Box): 
         Pinned to the bottom. Name and Role are ALWAYS visible.
         Bio expands upwards seamlessly on hover.
      */}
      <div className="absolute bottom-0 left-0 w-full bg-white px-6 py-6 text-center transition-all duration-500 ease-in-out">
        
        {/* Always visible */}
        <h3 className="text-[24px] font-bold text-[#111827] lg:text-[28px]">
          {member.name}
        </h3>
        <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.18em] text-gray-400">
          {member.role}
        </p>

        {/* 
           Bio Description: 
           Hidden initially (0fr). On hover, it expands to full height (1fr).
        */}
        <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-in-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
          <div className="overflow-hidden">
            {/* pt-4 pushes the text down slightly inside the expanding area */}
            <p className="pt-4 text-[13px] font-normal leading-[1.6] text-gray-600">
              {member.bio}
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default function TeamSectionAbout() {
  return (
    <SectionWrapper as="section" className="section-spacing relative bg-transparent pt-12 sm:pt-14 lg:pt-16 lg:pb-16">
      
      {/* Consistency: 1360px container */}
      <div className="relative">
        
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-[900px] text-center">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.28em] text-[#7a7f8e]">
            THE TEAM
          </p>
          <h2 className="text-[32px] font-bold leading-[1.08] tracking-[-0.04em] text-black sm:text-[40px] lg:text-[50px]">
            <span className="block whitespace-nowrap">Behind Growingen Is A Team Shaped By</span>
            <span className="mt-1 inline-block whitespace-nowrap">
              Real-World{' '}
              <CurvedUnderlineText className="growth-stories-title__accent pb-[0.16em]">
                Experience.
              </CurvedUnderlineText>
            </span>
          </h2>
        </div>

        {/* Centered Flex container for cards */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-8">
          {teamMembers.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
