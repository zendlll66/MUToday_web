'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const rand = (min, max) => Math.random() * (max - min) + min

const defaultCardImages = Array.from({ length: 8 }, () => '/img/card/front/0-THE-FOOL.png')

/** Single 3D card - Tailwind + Framer Motion (from style.css + CardStack.js) */
const Card3D = ({
  index,
  frontImage,
  backImage,
  rotateY,
  transitionDelay,
  duration,
  flipEasing,
  onMouseEnter,
  onMouseLeave,
  zIndex,
  isStackHovered,
  isThisCardHovered,
}) => {
  const dimOverlay = isStackHovered && !isThisCardHovered

  return (
    <motion.div
      className="relative w-[min(90vw,400px)] cursor-pointer select-none"
      style={{
        aspectRatio: '400 / 588',
        zIndex,
        marginLeft: index === 0 ? 0 : 'calc(-3 * var(--overlap, 70px))',
        perspective: '1200px',
      }}
      initial={false}
      animate={{
        filter: isThisCardHovered
          ? 'drop-shadow(0 16px 48px rgba(255,215,0,0.55))'
          : 'drop-shadow(0 8px 26px rgba(0,0,0,0.35))',
        zIndex: isThisCardHovered ? 10 : zIndex,
      }}
      transition={{ duration: 0.24, ease: 'easeOut' }}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
    >
      <motion.div
        className="absolute inset-0 rounded-2xl transform-gpu"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY }}
        transition={{
          duration,
          delay: transitionDelay,
          ease: flipEasing,
        }}
      >
        {/* Front face */}
        <div
          className="absolute inset-0 w-[90%] h-[98%] m-auto overflow-hidden rounded-[20px] grid place-items-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          <img
            src={frontImage}
            alt={`Card front ${index + 1}`}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain object-center block"
          />
          {/* Dim overlay when stack hovered & this card not hovered (from .card-face:after) */}
          <motion.div
            className="absolute inset-0 bg-black/35 pointer-events-none"
            initial={false}
            animate={{ opacity: dimOverlay ? 0.6 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
        {/* Back face */}
        <div
          className="absolute inset-0 w-[90%] h-[98%] m-auto overflow-hidden rounded-[20px] grid place-items-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={backImage}
            alt={`Card back ${index + 1}`}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain object-center block"
          />
          <motion.div
            className="absolute inset-0 bg-black/35 pointer-events-none"
            initial={false}
            animate={{ opacity: dimOverlay ? 0.6 : 0 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

/**
 * Card stack – converted from src/components/CardStack.js + style.css
 * Tailwind + JSX + Framer Motion
 */
export default function CardStack2({
  numCards = 8,
  duration = 1.2,
  stepDelay = 0.1,
  autoFlipInterval = 15000,
  cardImages = defaultCardImages,
  backImage = '/card/back.webp',
  cardOverlap = '70px',
  enableAutoFlip = true,
  enableHoverFlip = true,
  enableAutoFlipBack = true,
  autoFlipBackDelay = 2000,
  flipEasing = 'easeOut',
}) {
  const [rotations, setRotations] = useState(() => Array(numCards).fill(180))
  const [delays, setDelays] = useState(() => Array(numCards).fill(0))
  const [isFlipping, setIsFlipping] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [stackHovered, setStackHovered] = useState(false)
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null)
  const shouldFlipBackRef = useRef(false)
  const autoFlipTimerRef = useRef(null)
  const isFlippingRef = useRef(false)
  const flipBackRef = useRef(() => {})
  isFlippingRef.current = isFlipping

  const flipToFront = useCallback(() => {
    setIsFlipping(true)
    shouldFlipBackRef.current = false
    const newDelays = Array(numCards)
      .fill(0)
      .map((_, i) => (numCards - 1 - i) * stepDelay)
    setDelays(newDelays)
    setRotations(Array(numCards).fill(0))
    const totalMs = (duration + numCards * stepDelay) * 1000
    setTimeout(() => {
      setIsFlipping(false)
      if (shouldFlipBackRef.current) flipBackRef.current()
      else setIsFlipped(true)
    }, totalMs)
  }, [numCards, duration, stepDelay])

  const flipBack = useCallback(() => {
    setIsFlipping(true)
    const newDelays = Array(numCards)
      .fill(0)
      .map((_, i) => i * stepDelay)
    setDelays(newDelays)
    setRotations(Array(numCards).fill(180))
    const totalMs = (duration + numCards * stepDelay) * 1000
    setTimeout(() => {
      setIsFlipping(false)
      setIsFlipped(false)
      shouldFlipBackRef.current = false
    }, totalMs)
  }, [numCards, duration, stepDelay])

  flipBackRef.current = flipBack

  const flipCardToFront = useCallback((cardIndex) => {
    setDelays((d) => {
      const next = [...d]
      next[cardIndex] = 0
      return next
    })
    setRotations((r) => {
      const next = [...r]
      next[cardIndex] = 0
      return next
    })
  }, [])

  const flipCardToBack = useCallback((cardIndex) => {
    setDelays((d) => {
      const next = [...d]
      next[cardIndex] = 0
      return next
    })
    setRotations((r) => {
      const next = [...r]
      next[cardIndex] = 180
      return next
    })
  }, [])

  const handleCardMouseEnter = useCallback(
    (cardIndex) => {
      setStackHovered(true)
      setHoveredCardIndex(cardIndex)
      if (enableAutoFlip && autoFlipTimerRef.current) {
        clearInterval(autoFlipTimerRef.current)
        autoFlipTimerRef.current = null
      }
      flipCardToFront(cardIndex)
    },
    [enableAutoFlip, flipCardToFront]
  )

  const handleCardMouseLeave = useCallback(
    (cardIndex) => {
      setHoveredCardIndex((prev) => (prev === cardIndex ? null : prev))
      flipCardToBack(cardIndex)
      if (enableAutoFlip) {
        setTimeout(() => startAutoFlip(), duration * 1000)
      }
    },
    [enableAutoFlip, flipCardToBack, duration]
  )

  const handleStackMouseEnter = useCallback(() => {
    setStackHovered(true)
    if (!enableHoverFlip) return
    if (isFlipping || isFlipped) return
    if (enableAutoFlip && autoFlipTimerRef.current) {
      clearInterval(autoFlipTimerRef.current)
      autoFlipTimerRef.current = null
    }
    flipToFront()
  }, [enableHoverFlip, isFlipping, isFlipped, enableAutoFlip, flipToFront])

  const handleStackMouseLeave = useCallback(() => {
    setStackHovered(false)
    setHoveredCardIndex(null)
    if (!enableHoverFlip) return
    if (isFlipping) {
      shouldFlipBackRef.current = true
      return
    }
    if (!isFlipped) return
    flipBack()
    if (enableAutoFlip) {
      setTimeout(
        () => startAutoFlip(),
        (duration + numCards * stepDelay) * 1000
      )
    }
  }, [enableHoverFlip, isFlipping, isFlipped, flipBack, enableAutoFlip, duration, numCards, stepDelay])

  const autoFlip = useCallback(() => {
    if (isFlipping) return
    setIsFlipping(true)
    shouldFlipBackRef.current = false
    const newDelays = Array(numCards)
      .fill(0)
      .map((_, i) => (numCards - 1 - i) * stepDelay)
    setDelays(newDelays)
    setRotations(Array(numCards).fill(0))
    const totalMs = (duration + numCards * stepDelay) * 1000
    setTimeout(() => {
      setIsFlipping(false)
      setIsFlipped(true)
      if (enableAutoFlipBack) {
        setTimeout(() => {
          if (!isFlippingRef.current) flipBackRef.current()
        }, autoFlipBackDelay)
      }
    }, totalMs)
  }, [numCards, duration, stepDelay, enableAutoFlipBack, autoFlipBackDelay])

  const startAutoFlip = useCallback(() => {
    if (!enableAutoFlip) return
    if (autoFlipTimerRef.current) clearInterval(autoFlipTimerRef.current)
    autoFlipTimerRef.current = setInterval(autoFlip, autoFlipInterval)
  }, [enableAutoFlip, autoFlip, autoFlipInterval])

  useEffect(() => {
    if (enableAutoFlip) startAutoFlip()
    return () => {
      if (autoFlipTimerRef.current) clearInterval(autoFlipTimerRef.current)
    }
  }, [enableAutoFlip, startAutoFlip])

  const images = useMemo(
    () =>
      [...cardImages].concat(
        Array(Math.max(0, numCards - cardImages.length)).fill(
          cardImages[0] || '/img/card/front/0-THE-FOOL.png'
        )
      ),
    [cardImages, numCards]
  )

  const overlapPx = typeof cardOverlap === 'string' ? cardOverlap : `${cardOverlap}px`

  return (
    <div className="flex justify-center items-center w-full overflow-hidden">
      <div
        className="flex items-center justify-center py-4 mx-auto origin-center scale-[0.3] md:scale-[0.4] lg:scale-[0.6]"
        style={{ ['--overlap']: overlapPx }}
        onMouseEnter={handleStackMouseEnter}
        onMouseLeave={handleStackMouseLeave}
      >
        {Array.from({ length: numCards }, (_, i) => (
          <Card3D
            key={i}
            index={i}
            frontImage={images[i]}
            backImage={backImage}
            rotateY={rotations[i]}
            transitionDelay={delays[i]}
            duration={duration}
            flipEasing={flipEasing}
            onMouseEnter={enableHoverFlip ? handleCardMouseEnter : () => {}}
            onMouseLeave={enableHoverFlip ? handleCardMouseLeave : () => {}}
            zIndex={i + 2}
            isStackHovered={stackHovered}
            isThisCardHovered={hoveredCardIndex === i}
          />
        ))}
      </div>
    </div>
  )
}
