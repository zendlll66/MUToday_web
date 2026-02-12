'use client'

import React, { useMemo } from 'react'

const STAR_COLORS = ['#ffffff', '#a8d4ff', '#ffd4a8', '#e8e0ff']
const STAR_COUNT = 90

const starClipPath =
  'polygon(50% 0%, 61% 35%, 100% 50%, 61% 65%, 50% 100%, 39% 65%, 0% 50%, 39% 35%)'

const seed = 12345
const mulberry32 = (a) => () => {
  let t = (a += 0x6d2b79f5)
  t = Math.imul(t ^ (t >>> 15), t | 1)
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296
}

export const StarOverlay = ({ className = '' }) => {
  const stars = useMemo(() => {
    const rng = mulberry32(seed)
    return Array.from({ length: STAR_COUNT }, (_, i) => ({
      id: i,
      left: rng() * 100,
      top: rng() * 100,
      size: 1.5 + rng() * 10,
      color: STAR_COLORS[Math.floor(rng() * STAR_COLORS.length)],
      opacity: 0.4 + rng() * 0.6,
    }))
  }, [])

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {stars.map(({ id, left, top, size, color, opacity }) => (
        <div
          key={id}
          className="absolute"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: `${size}px`,
            height: `${size}px`,
            clipPath: starClipPath,
            backgroundColor: color,
            opacity,
          }}
        />
      ))}
    </div>
  )
}
