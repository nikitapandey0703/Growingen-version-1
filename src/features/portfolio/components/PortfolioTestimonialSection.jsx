import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

const testimonials = [
  {
    id: 1,
    name: 'Mevwari Kitchen',
    role: 'Founder, Mevwari Kitchen',
    text:
      "We approached Growingen to help us brand Mevwari Kitchen. They helped us from scratch, including designing our logo, promotional flyers, stickers, banners, and other branding materials. It was a great experience working with them.",
  },
  {
    id: 2,
    name: "Nivedita's Kitchen",
    role: "Founder, Nivedita's Kitchen",
    text:
      "I needed a menu card for my cloud kitchen ASAP. I spoke with Ankita on a call and met her for just 30 minutes, and she delivered the entire design within 24 hours. She listened carefully to my requirements and got everything right.",
  },
  {
    id: 3,
    name: "Nivedita's Kitchen",
    role: "Founder, Nivedita's Kitchen",
    text:
      "She's incredibly prompt, professional, and reliable. I highly recommend her for social media marketing and design work. A true one-stop solution for digital marketing. Thank you, Ankita!",
  }
]

function NavArrow({ direction, onClick, disabled }) {
  const isLeft = direction === 'left'
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={[
        'absolute top-1/2 z-30 flex h-[60px] w-[24px] sm:h-[100px] sm:w-[36px] lg:h-[110px] lg:w-[40px] -translate-y-1/2 items-center justify-center rounded-[20px] transition-all duration-300 ease-out outline-none bg-white lg:bg-transparent',
        'shadow-[0_0_15px_rgba(244,83,40,0.4)] border-[1px] border-[#F45328]/30',
        isLeft ? 'left-0 sm:left-4 lg:left-1 xl:-left-12' : 'right-0 sm:right-4 lg:right-1 xl:-right-12',
        disabled ? 'opacity-0 pointer-events-none' : 'opacity-100 hover:scale-[1.05] cursor-pointer'
      ].join(' ')}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="black" className="h-4 w-4 sm:h-7 sm:w-7 lg:h-10 lg:w-8">
        {isLeft ? <path d="M15.75 19.5L8.25 12l7.5-7.5" /> : <path d="M8.25 4.5l7.5 7.5-7.5 7.5" />}
      </svg>
    </button>
  )
}

function TestimonialCard({ item }) {
  return (
    <article className="group relative flex flex-none snap-center w-full lg:w-[calc(50%-18px)] transition-transform duration-300 ease-out">
      <div className="relative flex w-full flex-col">
        <svg
          viewBox="0 0 520 260"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible transition-all duration-300 pointer-events-none"
        >
          <path
            d="M20,1 H150 Q170,1 178,19 Q186,35 220,35 H300 Q334,35 342,19 Q350,1 370,1 H499 Q519,1 519,21 V239 Q519,259 499,259 H21 Q1,259 1,239 V21 Q1,1 20,1 Z"
            className="fill-transparent stroke-[rgba(0,0,0,0.2)] stroke-[1] transition-all duration-300 group-hover:fill-[#0a0a0a] group-hover:stroke-[#0a0a0a]"
          />
        </svg>

        <div className="relative z-10 flex flex-col items-center text-center px-5 pb-6 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16 transition-colors duration-300 group-hover:text-white">
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <div className="flex justify-center gap-0.5 text-[16px] text-[#FFC107] sm:text-[20px]">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="mx-auto max-w-[42ch] text-pretty font-medium leading-[1.4] transition-colors duration-300 group-hover:!text-white text-[13px] sm:text-[15px] lg:text-[16px] select-none">
              "{item.text}"
            </p>
          </div>

          <div className="mt-4 pt-2 flex items-center justify-center gap-3 sm:mt-6 sm:pt-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-[#A21C5C] to-[#F30799] text-[12px] font-semibold text-white sm:h-12 sm:w-12 sm:text-[14px]">
              {item.name[0]}
            </div>
            <div className="text-left">
              <p className="font-bold leading-tight text-[13px] sm:text-[15px] group-hover:!text-white">
                {item.name}
              </p>
              <p className="text-[11px] sm:text-[13px] font-medium opacity-80 group-hover:!text-white">
                {item.role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default function PortfolioTestimonialSection() {
  const scrollRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardsPerView, setCardsPerView] = useState(1)

  const numDots = Math.max(1, testimonials.length - cardsPerView + 1)

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth >= 1024 ? 2 : 1)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const node = scrollRef.current
    if (!node) return
    const handleScroll = () => {
      const cards = Array.from(node.children)
      const containerLeft = node.getBoundingClientRect().left
      let closestIndex = 0
      let closestOffset = Infinity
      cards.forEach((card, index) => {
        const offset = Math.abs(card.getBoundingClientRect().left - containerLeft)
        if (offset < closestOffset) {
          closestOffset = offset
          closestIndex = index
        }
      })
      setActiveIndex(Math.min(closestIndex, numDots - 1))
    }
    node.addEventListener('scroll', handleScroll, { passive: true })
    return () => node.removeEventListener('scroll', handleScroll)
  }, [numDots])

  const scrollToCard = (index) => {
    const target = scrollRef.current?.children?.[index]
    if (target && scrollRef.current) {
      scrollRef.current.scrollTo({ 
        left: target.offsetLeft - scrollRef.current.offsetLeft, 
        behavior: 'smooth' 
      })
    }
  }

  return (
    <SectionWrapper as="section" className="relative overflow-hidden bg-transparent section-spacing px-4">
      <div className="pointer-events-none absolute left-[10%] top-[20%] h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,rgba(255,151,113,0.12)_0%,transparent_70%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1120px]">
        <div className="mx-auto max-w-[600px] text-center">
          {/* RESET SIZING: Updated to match 32px - 50px scale with proper tracking */}
          <h2 className="font-semibold leading-[1.08] tracking-[-0.05em] text-[32px] sm:text-[40px] lg:text-[50px]">
            What Our{' '}
            <CurvedUnderlineText className="hero-highlight pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
              Client Said
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="relative mt-10 lg:mt-16">
          <NavArrow direction="left" onClick={() => scrollToCard(activeIndex - 1)} disabled={activeIndex === 0} />
          <NavArrow direction="right" onClick={() => scrollToCard(activeIndex + 1)} disabled={activeIndex === numDots - 1} />

          <div
            ref={scrollRef}
            className="flex items-center snap-x snap-mandatory gap-0 sm:gap-6 overflow-x-auto pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-9 select-none"
          >
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            {Array.from({ length: numDots }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToCard(index)}
                className={['featured-indicator', activeIndex === index ? 'featured-indicator-active' : ''].join(' ')}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}