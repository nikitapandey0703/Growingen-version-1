import { motion } from 'framer-motion'

const MotionImg = motion.img

export default function HeroYellowUnderlineText({
  children,
  className = '',
  lineClassName = '',
  delay = 0.08,
}) {
  return (
    <span className={`relative inline-block overflow-visible ${className}`.trim()}>
      <span className="relative z-10">{children}</span>
      <MotionImg
        aria-hidden="true"
        src="/images/hero/yellow-line.svg"
        alt=""
        initial={{ opacity: 0, scaleX: 0.08 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1], delay }}
        className={`curved-underline__line pointer-events-none absolute -bottom-[0.12em] left-[-11%] z-0 h-[0.42em] w-[122%] origin-left select-none object-contain ${lineClassName}`.trim()}
      />
    </span>
  )
}
