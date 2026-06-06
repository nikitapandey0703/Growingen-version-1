import { ArrowRight } from 'lucide-react'
import { useEffect, useId, useMemo, useState } from 'react'

let particlesEnginePromise

const particleOptions = {
  key: 'star',
  name: 'Star',
  particles: {
    number: { value: 20, density: { enable: false } },
    color: {
      value: ['#7c3aed', '#bae6fd', '#a78bfa', '#93c5fd', '#0284c7', '#fafafa', '#38bdf8'],
    },
    shape: { type: 'star', options: { star: { sides: 4 } } },
    opacity: {
      value: { min: 0, max: 0.8 },
      animation: { enable: true, speed: 1.5, sync: false, destroy: 'min' },
    },
    size: { value: { min: 1, max: 4 } },
    rotate: {
      value: { min: 0, max: 360 },
      enable: true,
      direction: 'clockwise',
      animation: { enable: true, speed: 10, sync: false },
    },
    links: { enable: false },
    reduceDuplicates: true,
    move: {
      enable: true,
      speed: 2.5,
      direction: 'none',
      outModes: { default: 'destroy' },
      center: { x: 50, y: 50 },
    },
  },
  interactivity: { events: {} },
  smooth: true,
  fpsLimit: 120,
  background: { color: 'transparent', size: 'cover' },
  fullScreen: { enable: false },
  detectRetina: true,
  emitters: [
    {
      autoPlay: true,
      fill: true,
      life: { wait: true },
      rate: { quantity: 8, delay: 0.2 },
      position: { x: 50, y: 50 },
    },
  ],
}

const sizeClasses = {
  default: {
    button:
      'min-h-[44px] pl-5 pr-[56px] text-[13px] font-medium sm:min-h-[48px] sm:pl-6 sm:pr-[62px] sm:text-[14px] lg:min-h-[52px] lg:pl-7 lg:pr-[70px] lg:text-[17px]',
    iconWrap:
      'h-[44px] w-[44px] right-0 sm:h-[48px] sm:w-[48px] lg:h-[52px] lg:w-[52px] lg:-right-[1px]',
    icon: 17,
  },
  hero: {
    button:
      'h-[48px] w-[214px] pl-6 pr-[62px] text-[length:var(--fs-button)] font-medium sm:h-[52px] sm:w-[232px] sm:pl-7 sm:pr-[68px] md:h-[54px] md:w-[244px] md:pl-7 md:pr-[72px] lg:h-[50px] lg:w-[232px] lg:pl-7 lg:pr-[66px] xl:h-[52px] xl:w-[244px] xl:pr-[70px] 2xl:h-[58px] 2xl:w-[270px] 2xl:pl-8 2xl:pr-[78px]',
    iconWrap: 'h-[48px] w-[48px] right-0 sm:h-[52px] sm:w-[52px] md:h-[54px] md:w-[54px] lg:h-[50px] lg:w-[50px] xl:h-[52px] xl:w-[52px] 2xl:h-[58px] 2xl:w-[58px]',
    icon: 16,
  },
  sm: {
    button:
      'min-h-[32px] pl-3.5 pr-[40px] text-[11px] font-semibold sm:min-h-[34px] sm:pl-4 sm:pr-[44px] sm:text-[12px]',
    iconWrap: 'h-[32px] w-[32px] right-0 sm:h-[34px] sm:w-[34px]',
    icon: 11,
  },
}

export default function Button({
  children = 'Start the Journey',
  size = 'default',
  className = '',
  type = 'button',
  ...props
}) {
  const currentSize = sizeClasses[size] ?? sizeClasses.default
  const particleId = useId()
  const [ParticlesComponent, setParticlesComponent] = useState(null)
  const [particleState, setParticleState] = useState()
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering || ParticlesComponent) {
      return undefined
    }

    let cancelled = false

    particlesEnginePromise ??= Promise.all([
      import('@tsparticles/react'),
      import('tsparticles'),
    ]).then(async ([particlesModule, tsparticlesModule]) => {
      await particlesModule.initParticlesEngine(async (engine) => {
        await tsparticlesModule.loadFull(engine)
      })

      return particlesModule.default
    })

    particlesEnginePromise.then((Component) => {
      if (!cancelled) {
        setParticlesComponent(() => Component)
        setParticleState('loaded')
      }
    })

    return () => {
      cancelled = true
    }
  }, [ParticlesComponent, isHovering])

  const modifiedOptions = useMemo(() => {
    // Keep the particle engine dormant until hover so the CTA remains lightweight on smaller or low-power devices.
    return {
      ...particleOptions,
      emitters: particleOptions.emitters.map((emitter) => ({
        ...emitter,
        autoPlay: isHovering,
      })),
    }
  }, [isHovering])

  return (
    <div
      className={`group relative inline-flex w-fit items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {ParticlesComponent && particleState ? (
        <ParticlesComponent
          id={`${particleId}-particles`}
          className={`pointer-events-none absolute -inset-5 z-0 opacity-0 transition-opacity duration-300 sm:-inset-8 ${
            particleState === 'ready' ? 'group-hover:opacity-100' : ''
          }`}
          particlesLoaded={async () => {
            setParticleState('ready')
          }}
          options={modifiedOptions}
        />
      ) : null}

      <button
        type={type}
        className={[
          'cta-gradient-button relative z-10 inline-flex items-center justify-start rounded-full text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_24px_44px_rgba(53,101,244,0.3)] active:translate-y-0 active:scale-[0.99]',
          currentSize.button,
        ].join(' ')}
        {...props}
      >
        <span className="cta-gradient-button__glow" aria-hidden="true" />
        <span className="cta-gradient-button__sheen" aria-hidden="true" />

        <span className="relative z-[2] whitespace-nowrap transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
          {children}
        </span>

        <span
          className={[
            'absolute top-1/2 z-[3] inline-flex -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border border-white/14 bg-transparent text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.22),0_12px_22px_rgba(19,111,187,0.28)] backdrop-brightness-110 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:shadow-[inset_0_1px_1px_rgba(255,255,255,0.26),0_16px_28px_rgba(19,111,187,0.34)]',
            currentSize.iconWrap,
          ].join(' ')}
        >
          <span className="relative h-full w-full overflow-hidden">
            {/* Two icon slots preserve the button width while the hover arrow slides in. */}
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-full group-hover:opacity-0">
              <ArrowRight size={currentSize.icon} />
            </span>
            <span className="absolute inset-0 flex translate-x-[-100%] items-center justify-center opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0 group-hover:opacity-100">
              <ArrowRight size={currentSize.icon} />
            </span>
          </span>
        </span>
      </button>
    </div>
  )
}
