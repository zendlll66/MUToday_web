'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const rand = (min, max) => Math.random() * (max - min) + min

const defaultCardImages = Array.from({ length: 8 }, () => '/img/card/front/0-THE-FOOL.png')

const STARS_COUNT = 45

const Card3D = ({
  index,
  frontImage,
  backImage,
  rotateY,
  transitionDelay,
  duration,
  flipEasing,
  enableFloat,
  floatY,
  floatTilt,
  floatDuration,
  floatDelay,
  floatEasing,
  enableGloss,
  onMouseEnter,
  onMouseLeave,
  zIndex,
  marginLeft,
  cardWidth,
  cardAspectRatio,
  cardBorderRadius,
  scale = 1,
  offsetX = 0,
  offsetY = 0,
  hoverScaleDuration = 0.2,
  isCardHovered = false,
}) => {
  const floatTransition = useMemo(
    () => ({
      y: { duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: floatEasing },
      rotateZ: { duration: floatDuration, delay: floatDelay, repeat: Infinity, ease: floatEasing },
    }),
    [floatDuration, floatDelay, floatEasing]
  )

  const animateProps = {
    scale,
    y: enableFloat ? [0, -floatY, 0] : offsetY,
    ...(enableFloat ? { rotateZ: [-floatTilt, floatTilt, -floatTilt] } : {}),
    filter: isCardHovered
      ? 'drop-shadow(0 16px 48px rgba(255,215,0,0.55))'
      : 'drop-shadow(0 8px 26px rgba(0,0,0,0.35))',
  }

  const transitionProps = enableFloat
    ? {
        ...floatTransition,
        scale: { duration: hoverScaleDuration, ease: 'easeOut' },
        filter: { duration: 0.24, ease: 'easeOut' },
      }
    : {
        scale: { duration: hoverScaleDuration, ease: 'easeOut' },
        y: { duration: offsetY !== 0 ? 0.3 : hoverScaleDuration, ease: 'easeOut' },
        filter: { duration: 0.24, ease: 'easeOut' },
      }

  return (
    <motion.div
      className="relative cursor-pointer select-none"
      style={{
        width: cardWidth,
        aspectRatio: cardAspectRatio,
        borderRadius: cardBorderRadius,
        zIndex,
        marginLeft,
        perspective: '1200px',
      }}
      animate={{ x: offsetX }}
      transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={() => onMouseLeave(index)}
    >
      <motion.div
        className="absolute inset-0"
        animate={animateProps}
        transition={transitionProps}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl transform-gpu"
          style={{
            transformStyle: 'preserve-3d',
            borderRadius: cardBorderRadius,
          }}
          animate={{ rotateY }}
          transition={{
            duration,
            delay: transitionDelay,
            ease: flipEasing,
          }}
        >
          <div
            className="absolute inset-0 w-[90%] h-[98%] m-auto overflow-hidden rounded-2xl grid place-items-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: cardBorderRadius,
          }}
        >
          <img
            src={frontImage}
            alt={`Card front ${index + 1}`}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain object-center block"
          />
          {enableGloss && (
            <div
              className="absolute inset-0 pointer-events-none mix-blend-screen"
              style={{
                background: `linear-gradient(
                  135deg,
                  rgba(255,255,255,0) 0%,
                  rgba(255,255,255,0.18) 8%,
                  rgba(255,255,255,0.55) 12%,
                  rgba(255,255,255,0) 26%
                )`,
              }}
            />
          )}
          <div className="absolute inset-0 pointer-events-none iridescent-overlay" />
          <div className="card-stars absolute inset-0 pointer-events-none overflow-hidden">
            {Array.from({ length: STARS_COUNT }, (_, i) => (
              <div key={i} className="star" />
            ))}
          </div>
        </div>
        <div
          className="absolute inset-0 w-[90%] h-[98%] m-auto overflow-hidden rounded-2xl grid place-items-center"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: cardBorderRadius,
            transform: 'rotateY(180deg)',
          }}
        >
          <img
            src={backImage}
            alt={`Card back ${index + 1}`}
            draggable={false}
            className="absolute inset-0 w-full h-full object-contain object-center block"
          />
        </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export const CardStack = ({
  numCards = 8,
  duration = 1.2,
  stepDelay = 0.1,
  autoFlipInterval = 15000,
  cardImages = defaultCardImages,
  backImage = '/card/back.webp',
  floatDuration = { min: 3.5, max: 5.5 },
  floatDelay = { min: 0, max: 0.8 },
  floatY = { min: 4, max: 10 },
  floatTilt = { min: 0.3, max: 1 },
  cardWidth = 'min(90vw, 400px)',
  cardAspectRatio = '400 / 588',
  cardBorderRadius = '16px',
  cardOverlap = '70px',
  cardScale = 0.5,
  enableAutoFlip = true,
  enableHoverFlip = true,
  enableFloatAnimation = true,
  autoFlipBackDelay = 2000,
  enableGlossEffect = true,
  hoverMode = 'triple',
  enableAutoFlipBack = true,
  enableHoverScale = true,
  hoverScaleAmount = 1.1,
  hoverScaleDuration = 0.2,
  flipEasing = 'easeOut',
  floatEasing = 'easeInOut',
}) => {
  const [rotations, setRotations] = useState(() => Array(numCards).fill(180))
  const [delays, setDelays] = useState(() => Array(numCards).fill(0))
  const [isFlipping, setIsFlipping] = useState(false)
  const [isFlipped, setIsFlipped] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [scaledIndices, setScaledIndices] = useState([])
  const [spreadHoverIndex, setSpreadHoverIndex] = useState(null)
  const shouldFlipBackRef = useRef(false)
  const autoFlipTimerRef = useRef(null)
  const hoverTimeoutIdRef = useRef(null)
  const isFlippingRef = useRef(false)
  const isHoveringRef = useRef(false)
  const flipBackRef = useRef(() => {})
  const startAutoFlipRef = useRef(() => {})
  isFlippingRef.current = isFlipping
  isHoveringRef.current = isHovering

  const floatParams = useMemo(
    () =>
      Array.from({ length: numCards }, () => ({
        floatY: rand(floatY.min, floatY.max),
        floatTilt: rand(floatTilt.min, floatTilt.max),
        floatDuration: rand(floatDuration.min, floatDuration.max),
        floatDelay: rand(floatDelay.min, floatDelay.max),
      })),
    [numCards, floatY, floatTilt, floatDuration, floatDelay]
  )

  const getTripleCards = useCallback(
    (cardIndex) => {
      const cards = []
      if (cardIndex > 0) cards.push(cardIndex - 1)
      cards.push(cardIndex)
      if (cardIndex < numCards - 1) cards.push(cardIndex + 1)
      return cards
    },
    [numCards]
  )

  const resetCardPositions = useCallback(() => {
    setSpreadHoverIndex(null)
    setScaledIndices([])
  }, [])

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

  const flipTripleToFront = useCallback(
    (cardIndex) => {
      const indices = getTripleCards(cardIndex)
      setDelays((d) => {
        const next = [...d]
        indices.forEach((i) => (next[i] = 0))
        return next
      })
      setRotations((r) => {
        const next = [...r]
        indices.forEach((i) => (next[i] = 0))
        return next
      })
    },
    [getTripleCards, numCards]
  )

  const flipTripleToBack = useCallback(
    (cardIndex) => {
      const indices = getTripleCards(cardIndex)
      setDelays((d) => {
        const next = [...d]
        indices.forEach((i) => (next[i] = 0))
        return next
      })
      setRotations((r) => {
        const next = [...r]
        indices.forEach((i) => (next[i] = 180))
        return next
      })
    },
    [getTripleCards]
  )

  const scheduleStartAutoFlip = useCallback(() => {
    if (hoverTimeoutIdRef.current) clearTimeout(hoverTimeoutIdRef.current)
    hoverTimeoutIdRef.current = setTimeout(() => {
      if (!isHoveringRef.current) startAutoFlipRef.current()
      hoverTimeoutIdRef.current = null
    }, 500)
  }, [])

  const autoFlip = useCallback(() => {
    if (isFlipping) return
    resetCardPositions()
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
  }, [numCards, duration, stepDelay, enableAutoFlipBack, autoFlipBackDelay, resetCardPositions])

  const startAutoFlip = useCallback(() => {
    if (!enableAutoFlip) return
    if (isHoveringRef.current) return
    if (autoFlipTimerRef.current) clearInterval(autoFlipTimerRef.current)
    autoFlipTimerRef.current = setInterval(autoFlip, autoFlipInterval)
  }, [enableAutoFlip, autoFlip, autoFlipInterval])

  useEffect(() => {
    flipBackRef.current = flipBack
    startAutoFlipRef.current = startAutoFlip
  }, [flipBack, startAutoFlip])

  const handleCardMouseEnter = useCallback(
    (cardIndex) => {
      setIsHovering(true)
      if (hoverTimeoutIdRef.current) {
        clearTimeout(hoverTimeoutIdRef.current)
        hoverTimeoutIdRef.current = null
      }
      if (enableAutoFlip && autoFlipTimerRef.current) {
        clearInterval(autoFlipTimerRef.current)
        autoFlipTimerRef.current = null
      }
      if (enableHoverScale) {
        if (hoverMode === 'individual') setScaledIndices([cardIndex])
        else if (hoverMode === 'triple') setScaledIndices(getTripleCards(cardIndex))
        else if (hoverMode === 'group') setScaledIndices(Array.from({ length: numCards }, (_, i) => i))
        else if (hoverMode === 'spread') setSpreadHoverIndex(cardIndex)
      }
      if (hoverMode === 'individual') flipCardToFront(cardIndex)
      else if (hoverMode === 'triple') flipTripleToFront(cardIndex)
      else if (hoverMode === 'group' && !isFlipping && !isFlipped) flipToFront()
      else if (hoverMode === 'spread') flipCardToFront(cardIndex)
    },
    [
      enableAutoFlip,
      enableHoverScale,
      hoverMode,
      getTripleCards,
      numCards,
      flipCardToFront,
      flipTripleToFront,
      flipToFront,
      isFlipping,
      isFlipped,
    ]
  )

  const handleCardMouseLeave = useCallback(
    (cardIndex) => {
      setIsHovering(false)
      if (enableHoverScale) {
        setScaledIndices([])
        if (hoverMode === 'spread') setSpreadHoverIndex(null)
      }
      if (hoverMode === 'individual') flipCardToBack(cardIndex)
      else if (hoverMode === 'triple') flipTripleToBack(cardIndex)
      else if (hoverMode === 'spread') {
        flipCardToBack(cardIndex)
        resetCardPositions()
      }
      if (enableAutoFlip && hoverMode !== 'group') {
        scheduleStartAutoFlip()
      }
    },
    [
      enableHoverScale,
      hoverMode,
      flipCardToBack,
      flipTripleToBack,
      resetCardPositions,
      enableAutoFlip,
      scheduleStartAutoFlip,
    ]
  )

  const handleStackMouseEnter = useCallback(() => {
    if (!enableHoverFlip || hoverMode !== 'group') return
    if (isFlipping || isFlipped) return
    setIsHovering(true)
    if (hoverTimeoutIdRef.current) {
      clearTimeout(hoverTimeoutIdRef.current)
      hoverTimeoutIdRef.current = null
    }
    if (enableAutoFlip && autoFlipTimerRef.current) {
      clearInterval(autoFlipTimerRef.current)
      autoFlipTimerRef.current = null
    }
    if (enableHoverScale) setScaledIndices(Array.from({ length: numCards }, (_, i) => i))
    flipToFront()
  }, [enableHoverFlip, hoverMode, isFlipping, isFlipped, enableAutoFlip, enableHoverScale, numCards, flipToFront])

  const handleStackMouseLeave = useCallback(() => {
    if (!enableHoverFlip || hoverMode !== 'group') return
    setIsHovering(false)
    if (enableHoverScale) setScaledIndices([])
    if (isFlipping) {
      shouldFlipBackRef.current = true
      return
    }
    if (!isFlipped) return
    flipBack()
    if (enableAutoFlip) {
      hoverTimeoutIdRef.current = setTimeout(() => {
        if (!isHoveringRef.current) startAutoFlipRef.current()
        hoverTimeoutIdRef.current = null
      }, (duration + numCards * stepDelay) * 1000)
    }
  }, [enableHoverFlip, hoverMode, isFlipping, isFlipped, flipBack, enableAutoFlip, duration, numCards, stepDelay])

  useEffect(() => {
    if (enableAutoFlip) startAutoFlip()
    return () => {
      if (autoFlipTimerRef.current) clearInterval(autoFlipTimerRef.current)
      if (hoverTimeoutIdRef.current) clearTimeout(hoverTimeoutIdRef.current)
    }
  }, [enableAutoFlip, startAutoFlip])

  const images = useMemo(
    () =>
      [...cardImages].concat(
        Array(Math.max(0, numCards - cardImages.length)).fill(cardImages[0] || '/img/card/front/0-THE-FOOL.png')
      ),
    [cardImages, numCards]
  )

  const overlapPx = typeof cardOverlap === 'string' ? cardOverlap : `${cardOverlap}px`

  const getCardTransform = useCallback(
    (i) => {
      if (hoverMode === 'spread' && spreadHoverIndex !== null) {
        if (i === spreadHoverIndex) return { scale: 1.1, offsetX: 40, offsetY: -10, zIndex: numCards + 10 }
        const distance = i < spreadHoverIndex ? -150 : 150
        return { scale: 0.94, offsetX: distance, offsetY: 0, zIndex: i + 2 }
      }
      const scaled = enableHoverScale && scaledIndices.includes(i)
      return {
        scale: scaled ? hoverScaleAmount : 1,
        offsetX: scaled ? -36 : 0,
        offsetY: 0,
        zIndex: scaled ? numCards + 10 : i + 2,
      }
    },
    [hoverMode, spreadHoverIndex, numCards, enableHoverScale, scaledIndices, hoverScaleAmount]
  )

  return (
    <div className="relative flex justify-center items-center min-h-[50vh] w-full py-4 overflow-hidden pl-12">
      <div
        className="relative z-[2] flex items-center justify-center py-4 mx-auto origin-center -ml-12"
        style={{
          transform: `scale(${cardScale})`,
          ['--overlap']: overlapPx,
        }}
        onMouseEnter={hoverMode === 'group' ? handleStackMouseEnter : undefined}
        onMouseLeave={hoverMode === 'group' ? handleStackMouseLeave : undefined}
      >
        {Array.from({ length: numCards }, (_, i) => {
          const t = getCardTransform(i)
          const floatYVal = enableFloatAnimation ? floatParams[i].floatY : 0
          return (
            <Card3D
              key={i}
              index={i}
              frontImage={images[i]}
              backImage={backImage}
              rotateY={rotations[i]}
              transitionDelay={delays[i]}
              duration={duration}
              flipEasing={flipEasing}
              enableFloat={enableFloatAnimation && spreadHoverIndex === null}
              floatY={floatYVal}
              floatTilt={floatParams[i].floatTilt}
              floatDuration={floatParams[i].floatDuration}
              floatDelay={floatParams[i].floatDelay}
              floatEasing={floatEasing}
              enableGloss={enableGlossEffect}
              onMouseEnter={enableHoverFlip ? handleCardMouseEnter : () => {}}
              onMouseLeave={enableHoverFlip ? handleCardMouseLeave : () => {}}
              zIndex={t.zIndex}
              marginLeft={i === 0 ? 0 : 'calc(-3 * var(--overlap, 70px))'}
              cardWidth={cardWidth}
              cardAspectRatio={cardAspectRatio}
              cardBorderRadius={cardBorderRadius}
              scale={t.scale}
              offsetX={t.offsetX}
              offsetY={t.offsetY}
              hoverScaleDuration={hoverScaleDuration}
              isCardHovered={scaledIndices.includes(i) || (hoverMode === 'spread' && spreadHoverIndex === i)}
            />
          )
        })}
      </div>
    </div>
  )
}
