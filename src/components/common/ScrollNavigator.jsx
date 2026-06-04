import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'

const MotionButton = motion.button
const MotionSpan = motion.span

export default function ScrollNavigator() {
  const [isBottom, setIsBottom] = useState(false)
  const [visible, setVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const fullHeight = document.documentElement.scrollHeight
      const scrollableHeight = Math.max(fullHeight - windowHeight, 1)
      const progress = Math.min(scrollTop / scrollableHeight, 1)

      setVisible(scrollTop > 120)
      setScrollProgress(progress)
      setIsBottom(scrollTop + windowHeight >= fullHeight - 60)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    if (isBottom) {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    })
  }

  const progressDegrees = Math.max(scrollProgress * 360, 12)

  return (
    <MotionButton
      type="button"
      aria-label={isBottom ? 'Scroll to top' : 'Scroll to bottom'}
      onClick={handleClick}
      initial={false}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.82,
        y: visible ? 0 : 18,
      }}
      transition={{ duration: 0.36, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.06, y: -2 }}
      whileTap={{ scale: 0.96 }}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border border-white/55 bg-white/72 text-[#0f172a] shadow-[0_18px_38px_rgba(15,23,42,0.16)] backdrop-blur-xl sm:bottom-6 sm:right-6"
      style={{
        backgroundImage: `conic-gradient(from 220deg, rgba(244,83,40,0.95) 0deg, rgba(91,77,255,0.92) ${progressDegrees}deg, rgba(255,255,255,0.24) ${progressDegrees}deg, rgba(255,255,255,0.18) 360deg)`,
      }}
    >
      <span className="absolute inset-[2px] rounded-full bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(244,247,255,0.8)_100%)]" />
      <span className="pointer-events-none absolute inset-[7px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9),rgba(255,255,255,0.45)_42%,rgba(255,255,255,0.08)_72%)] opacity-90" />

      <MotionSpan
        key={isBottom ? 'up' : 'down'}
        initial={{ opacity: 0, y: 8, rotate: isBottom ? -10 : 10 }}
        animate={{ opacity: 1, y: 0, rotate: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#ffffff]/92 text-[#0f172a] shadow-[inset_0_1px_1px_rgba(255,255,255,0.8),0_8px_18px_rgba(15,23,42,0.12)]"
      >
        {isBottom ? <FiArrowUp size={20} /> : <FiArrowDown size={20} />}
      </MotionSpan>
    </MotionButton>
  )
}
