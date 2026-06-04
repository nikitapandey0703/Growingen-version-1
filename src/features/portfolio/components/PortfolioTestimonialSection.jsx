import { useEffect, useRef, useState } from 'react'
import CurvedUnderlineText from '../../../components/common/CurvedUnderlineText'
import SectionWrapper from '../../../components/common/SectionWrapper'

/**
 * Testimonial data array.
 */
const testimonials = [
{
  id: 1,
  name: 'Mevwari Kitchen',
  role: 'Founder, Mevwari Kitchen',
  text:
    "We approached Growingen to help us brand Mevwari Kitchen. They helped us from scratch, including designing our logo, promotional flyers, stickers, banners, and other branding materials. It was a great experience working with them. One thing that really stood out was the founder's professionalism and willingness to go the extra mile to help clients achieve their business goals. I would highly recommend their services to any business looking to build and grow its brand.",
},
 {
  id: 2,
  name: "Nivedita's Kitchen",
  role: "Founder, Nivedita's Kitchen",
  text:
    "I needed a menu card for my cloud kitchen ASAP. I spoke with Ankita on a call and met her for just 30 minutes, and she delivered the entire design within 24 hours. She listened carefully to my requirements and got everything right. The design was exactly what I wanted. She's incredibly prompt, professional, and reliable. I highly recommend her for social media marketing and design work. A true one-stop solution for digital marketing. Thank you, Ankita!",
},
{
  id: 3,
  name: "Nivedita's Kitchen",
  role: "Founder, Nivedita's Kitchen",
  text:
    "I needed a menu card for my cloud kitchen ASAP. I spoke with Ankita on a call and met her for just 30 minutes, and she delivered the entire design within 24 hours. She listened carefully to my requirements and got everything right. The design was exactly what I wanted. She's incredibly prompt, professional, and reliable. I highly recommend her for social media marketing and design work. A true one-stop solution for digital marketing. Thank you, Ankita!",
}
]






/**
 * Individual Testimonial Card Component.
 */
function TestimonialCard({ item }) {
  return (
    <article
      className={[
        'group relative flex flex-col flex-none snap-start',
        // Mobile/Tablet: 1 card full width. Desktop (lg): 2 cards per view
        'w-full lg:w-[calc(50%-18px)]',
        'transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:-translate-y-1',
      ].join(' ')}
    >
      <div className="relative flex h-full min-h-[260px] w-full flex-col sm:min-h-[280px]">
        
        {/* Custom SVG Background Shape - Automatically stretches */}
        <svg
          viewBox="0 0 520 260"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible transition-all duration-300 pointer-events-none"
          aria-hidden="true"
        >
          <path
            d="M20,1 H150 Q170,1 178,19 Q186,35 220,35 H300 Q334,35 342,19 Q350,1 370,1 H499 Q519,1 519,21 V239 Q519,259 499,259 H21 Q1,259 1,239 V21 Q1,1 20,1 Z"
            className="fill-transparent stroke-[rgba(0,0,0,0.5)] stroke-[0.8] transition-all duration-300 group-hover:fill-[#0a0a0a] group-hover:stroke-[#0a0a0a]"
          />
        </svg>

        {/* Inner Content Container */}
        <div
          className={[
            'relative z-10 flex h-full flex-col items-center text-center',
            'px-6 pb-5 pt-8 sm:px-8 sm:pb-6 sm:pt-9 lg:px-10 lg:pb-7 lg:pt-10',
            'transition-colors duration-300 group-hover:text-white',
          ].join(' ')}
        >
          <div className="flex flex-col pt-4 items-center gap-1.5 sm:gap-2">
            {/* Rating Stars */}
            <div className="flex justify-center gap-0.5 text-[17px] text-[#FFC107] sm:text-[18px] lg:text-[20px]">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
            </div>

            {/* Review Text */}
            <p className="mx-auto max-w-[46ch]  text-pretty  font-medium leading-[1.35] transition-colors duration-300 group-hover:!text-white text-[length:var(--fs-card-body)] select-none">
              "{item.text}"
            </p>
          </div>

          {/* Profile Section */}
          <div className="mt-3 flex items-center justify-center gap-2.5 sm:mt-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-b from-[#A21C5C] to-[#F30799] text-[length:var(--fs-button)] font-semibold text-white shadow-sm sm:h-11 sm:w-11 lg:h-12 lg:w-12">
              {item.name[0]}
            </div>

            <div className="text-left select-none">
              <p className=" font-semibold leading-tight transition-colors duration-300 group-hover:!text-white text-[length:var(--fs-nav-cta)]">
                {item.name}
              </p>
              <p className="mt-0.5  font-medium leading-tight transition-colors duration-300 group-hover:!text-white text-[length:var(--fs-nav-link)] opacity-90">
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

  // Drag state refs
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  // Calculate dynamic dots
  const numDots = Math.max(1, testimonials.length - cardsPerView + 1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(2)
      } else {
        setCardsPerView(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const node = scrollRef.current
    if (!node) return undefined

    // Update dots gracefully as the container scrolls (natively or via JS)
    const handleScroll = () => {
      const cards = Array.from(node.children)
      if (!cards.length) return

      const containerLeft = node.getBoundingClientRect().left
      let closestIndex = 0
      let closestOffset = Number.POSITIVE_INFINITY

      cards.forEach((card, index) => {
        const offset = Math.abs(card.getBoundingClientRect().left - containerLeft)
        if (offset < closestOffset) {
          closestOffset = offset
          closestIndex = index
        }
      })

      setActiveIndex(Math.min(closestIndex, numDots - 1))
    }

    const timeoutId = setTimeout(() => {
      handleScroll()
      node.addEventListener('scroll', handleScroll, { passive: true })
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      node.removeEventListener('scroll', handleScroll)
    }
  }, [numDots])

  const scrollToCard = (index) => {
    const node = scrollRef.current
    const target = node?.children?.[index]

    if (!node || !target) return

    node.scrollTo({
      left: target.offsetLeft - node.offsetLeft,
      behavior: 'smooth',
    })
  }

  // --- SMOOTH DRAG LOGIC HANDLERS ---
  const handleMouseDown = (e) => {
    isDragging.current = true
    if (scrollRef.current) {
      // Disable CSS snapping and smooth behavior during the physical drag so the card sticks 1:1 to the mouse
      scrollRef.current.style.setProperty('scroll-snap-type', 'none', 'important')
      scrollRef.current.style.setProperty('scroll-behavior', 'auto', 'important')
      startX.current = e.pageX - scrollRef.current.offsetLeft
      scrollLeft.current = scrollRef.current.scrollLeft
    }
  }

  const handleMouseMove = (e) => {
    if (!isDragging.current || !scrollRef.current) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX.current) * 1.2 // 1.2 multiplier adjusts drag sensitivity slightly
    scrollRef.current.scrollLeft = scrollLeft.current - walk
  }

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current || !scrollRef.current) return
    isDragging.current = false
    
    const node = scrollRef.current

    // 1. Find which card we dragged closest to
    const cards = Array.from(node.children)
    const containerLeft = node.getBoundingClientRect().left
    let closestIndex = 0
    let closestOffset = Number.POSITIVE_INFINITY

    cards.forEach((card, index) => {
      const offset = Math.abs(card.getBoundingClientRect().left - containerLeft)
      if (offset < closestOffset) {
        closestOffset = offset
        closestIndex = index
      }
    })

    // 2. Ensure we don't index out of bounds
    const finalIndex = Math.min(closestIndex, numDots - 1)

    // 3. Turn ON smooth scroll behavior and effortlessly slide to the closest card
    node.style.setProperty('scroll-behavior', 'smooth', 'important')
    node.scrollTo({
      left: cards[finalIndex].offsetLeft - node.offsetLeft,
      behavior: 'smooth'
    })

    // 4. Restore original snap styling after the smooth glide finishes
    setTimeout(() => {
      if (!isDragging.current && scrollRef.current) {
        scrollRef.current.style.removeProperty('scroll-snap-type')
        scrollRef.current.style.removeProperty('scroll-behavior')
      }
    }, 450)
  }

  return (
    <SectionWrapper as="section" className="relative overflow-hidden bg-transparent section-spacing">
      
      {/* Decorative Background Glows */}
      <div className="pointer-events-none absolute left-[10%] top-[24%] h-[220px] w-[220px] rounded-full bg-[radial-gradient(circle,rgba(255,151,113,0.22)_0%,rgba(255,151,113,0.08)_44%,rgba(255,151,113,0)_74%)] blur-3xl" />
      <div className="pointer-events-none absolute bottom-[10%] right-[8%] h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(104,141,255,0.2)_0%,rgba(104,141,255,0.08)_42%,rgba(104,141,255,0)_74%)] blur-3xl" />

      <div className="relative mx-auto max-w-[1120px]">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-[560px] text-center">
          <h2 className="font-semibold leading-[1.08] tracking-[-0.05em] text-[length:var(--fs-section-title)]">
            What Our{' '}
            <CurvedUnderlineText className="hero-highlight pb-[0.16em]" lineClassName="h-[0.22em] w-full left-[0%] -bottom-[8px] sm:-bottom-[10px] md:-bottom-[12px] lg:-bottom-[14px] xl:-bottom-[16px] 2xl:-bottom-[18px]">
              Client Said
            </CurvedUnderlineText>
          </h2>
        </div>

        <div className="relative mt-8 sm:mt-10 lg:mt-12">
          
          {/* Scrollable Container configured for Mouse Drag + Mobile Touch Swipe */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            // `select-none` prevents text highlighting when dragging
            className="flex items-stretch snap-x snap-mandatory gap-6 overflow-x-auto px-1 pb-6 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:gap-9 cursor-grab active:cursor-grabbing select-none"
          >
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                item={item}
              />
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {Array.from({ length: numDots }).map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Scroll to testimonial page ${index + 1}`}
                onClick={() => scrollToCard(index)}
                className={[
                  'featured-indicator',
                  activeIndex === index ? 'featured-indicator-active' : '',
                ].join(' ')}
              />
            ))}
          </div>

        </div>
      </div>
    </SectionWrapper>
  )
}
