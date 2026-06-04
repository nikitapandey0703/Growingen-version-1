import { useCallback, useLayoutEffect, useRef } from 'react'
import Lenis from 'lenis'

export function ScrollStackItem({ children, itemClassName = '' }) {
  return (
    <div
      className={`scroll-stack-card relative my-6 w-full origin-top overflow-hidden rounded-[32px] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.12)] will-change-transform sm:my-8 sm:rounded-[40px] sm:p-6 lg:p-8 ${itemClassName}`.trim()}
      style={{
        backfaceVisibility: 'hidden',
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  )
}

export default function ScrollStack({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete,
}) {
  const scrollerRef = useRef(null)
  const stackCompletedRef = useRef(false)
  const animationFrameRef = useRef(null)
  const lenisRef = useRef(null)
  const cardsRef = useRef([])
  const cardOffsetsRef = useRef([])
  const lastTransformsRef = useRef(new Map())
  const isUpdatingRef = useRef(false)

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0
    if (scrollTop > end) return 1
    return (scrollTop - start) / (end - start)
  }, [])

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight
    }

    return parseFloat(value)
  }, [])

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
      }
    }

    const scroller = scrollerRef.current

    return {
      scrollTop: scroller.scrollTop,
      containerHeight: scroller.clientHeight,
    }
  }, [useWindowScroll])

  const getElementOffset = useCallback(
    (element, fallbackIndex = -1) => {
      if (fallbackIndex >= 0 && cardOffsetsRef.current[fallbackIndex] != null) {
        return cardOffsetsRef.current[fallbackIndex]
      }

      if (useWindowScroll) {
        const rect = element.getBoundingClientRect()
        return rect.top + window.scrollY
      }

      return element.offsetTop
    },
    [useWindowScroll]
  )

  const updateCardTransforms = useCallback(() => {
    if (!cardsRef.current.length || isUpdatingRef.current) return

    isUpdatingRef.current = true

    const { scrollTop, containerHeight } = getScrollData()
    const stackPositionPx = parsePercentage(stackPosition, containerHeight)
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight)

    const endElement = useWindowScroll
      ? document.querySelector('.scroll-stack-end')
      : scrollerRef.current?.querySelector('.scroll-stack-end')

    const endElementTop = endElement ? getElementOffset(endElement) : 0

    cardsRef.current.forEach((card, index) => {
      if (!card) return

      const cardTop = getElementOffset(card, index)
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * index
      const triggerEnd = cardTop - scaleEndPositionPx
      const pinStart = cardTop - stackPositionPx - itemStackDistance * index
      const pinEnd = endElementTop - containerHeight / 2

      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd)
      const targetScale = baseScale + index * itemScale
      const scale = 1 - scaleProgress * (1 - targetScale)
      const rotation = rotationAmount ? index * rotationAmount * scaleProgress : 0

      let blur = 0

      if (blurAmount) {
        let topCardIndex = 0

        for (let cardIndex = 0; cardIndex < cardsRef.current.length; cardIndex += 1) {
          const currentCardTop = getElementOffset(cardsRef.current[cardIndex], cardIndex)
          const currentTriggerStart =
            currentCardTop - stackPositionPx - itemStackDistance * cardIndex

          if (scrollTop >= currentTriggerStart) {
            topCardIndex = cardIndex
          }
        }

        if (index < topCardIndex) {
          blur = Math.max(0, (topCardIndex - index) * blurAmount)
        }
      }

      let translateY = 0
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd

      if (isPinned) {
        translateY =
          scrollTop - cardTop + stackPositionPx + itemStackDistance * index
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * index
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100,
      }

      const lastTransform = lastTransformsRef.current.get(index)
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.1 ||
        Math.abs(lastTransform.blur - newTransform.blur) > 0.1

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`
        card.style.filter =
          newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : ''

        lastTransformsRef.current.set(index, newTransform)
      }

      if (index === cardsRef.current.length - 1) {
        const lastCardInView = scrollTop >= pinStart && scrollTop <= pinEnd

        if (lastCardInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true
          onStackComplete?.()
        } else if (!lastCardInView && stackCompletedRef.current) {
          stackCompletedRef.current = false
        }
      }
    })

    isUpdatingRef.current = false
  }, [
    baseScale,
    blurAmount,
    calculateProgress,
    getElementOffset,
    getScrollData,
    itemScale,
    itemStackDistance,
    onStackComplete,
    parsePercentage,
    rotationAmount,
    scaleEndPosition,
    stackPosition,
    useWindowScroll,
  ])

  const handleScroll = useCallback(() => {
    updateCardTransforms()
  }, [updateCardTransforms])

  const measureCardOffsets = useCallback(() => {
    cardOffsetsRef.current = cardsRef.current.map((card) => {
      if (!card) return 0

      const previousTransform = card.style.transform
      const previousFilter = card.style.filter

      card.style.transform = 'none'
      card.style.filter = 'none'

      const offset = useWindowScroll
        ? card.getBoundingClientRect().top + window.scrollY
        : card.offsetTop

      card.style.transform = previousTransform
      card.style.filter = previousFilter

      return offset
    })
  }, [useWindowScroll])

  const setupLenis = useCallback(() => {
    const lenisOptions = {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
      infinite: false,
      wheelMultiplier: 1,
      lerp: 0.1,
      syncTouch: true,
      syncTouchLerp: 0.075,
    }

    const lenis = useWindowScroll
      ? new Lenis(lenisOptions)
      : new Lenis({
          ...lenisOptions,
          wrapper: scrollerRef.current,
          content: scrollerRef.current?.querySelector('.scroll-stack-inner'),
        })

    lenis.on('scroll', handleScroll)

    const raf = (time) => {
      lenis.raf(time)
      animationFrameRef.current = requestAnimationFrame(raf)
    }

    animationFrameRef.current = requestAnimationFrame(raf)
    lenisRef.current = lenis
  }, [handleScroll, useWindowScroll])

  useLayoutEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return undefined

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    )

    cardsRef.current = cards

    cards.forEach((card, index) => {
      if (index < cards.length - 1) {
        card.style.marginBottom = `${itemDistance}px`
      }

      card.style.willChange = 'transform, filter'
      card.style.transformOrigin = 'top center'
      card.style.backfaceVisibility = 'hidden'
      card.style.transform = 'translateZ(0)'
      card.style.webkitTransform = 'translateZ(0)'
      card.style.perspective = '1000px'
      card.style.webkitPerspective = '1000px'
    })

    measureCardOffsets()
    setupLenis()
    updateCardTransforms()

    const handleResize = () => {
      measureCardOffsets()
      updateCardTransforms()
    }

    window.addEventListener('resize', handleResize)
    const lastTransforms = lastTransformsRef.current

    return () => {
      window.removeEventListener('resize', handleResize)

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      if (lenisRef.current) {
        lenisRef.current.destroy()
      }

      stackCompletedRef.current = false
      cardsRef.current = []
      cardOffsetsRef.current = []
      lastTransforms.clear()
      isUpdatingRef.current = false
    }
  }, [
    itemDistance,
    measureCardOffsets,
    setupLenis,
    updateCardTransforms,
    useWindowScroll,
  ])

  const containerStyles = useWindowScroll
    ? {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
      }
    : {
        overscrollBehavior: 'contain',
        WebkitOverflowScrolling: 'touch',
        scrollBehavior: 'smooth',
        WebkitTransform: 'translateZ(0)',
        transform: 'translateZ(0)',
        willChange: 'scroll-position',
      }

  const containerClassName = useWindowScroll
    ? `relative w-full ${className}`.trim()
    : `relative h-full w-full overflow-y-auto overflow-x-visible ${className}`.trim()

  return (
    <div className={containerClassName} ref={scrollerRef} style={containerStyles}>
      <div className="scroll-stack-inner min-h-screen overflow-x-clip px-4 pb-[18rem] sm:px-6 sm:pb-[20rem] lg:px-8 lg:pb-[16rem]">
        {children}
        <div className="scroll-stack-end h-px w-full" />
      </div>
    </div>
  )
}
