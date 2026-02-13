'use client'

import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useIsMobile } from '@/hooks/use-mobile'

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const PURPLE = '130, 110, 210'
const SIZES = [500, 600, 700, 800, 900, 1000, 1100] // diameter แต่ละชั้น
const OPACITIES = [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.05] // วงใน → วงนอก

const ConcentricGlow = ({ className = '' }) => (
  <div
    className={`pointer-events-none absolute inset-0 flex items-center justify-center ${className}`}
    aria-hidden
  >
    {[...SIZES].reverse().map((size, i) => {
      const idx = SIZES.length - 1 - i
      return (
        <div
          key={idx}
          className="absolute rounded-full"
          style={{
            width: size,
            height: size,
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: `rgba(${PURPLE}, ${OPACITIES[idx]})`,
          }}
        />
      )
    })}
  </div>
)


const WALLPAPERS = [
  {
    id: 1,
    src: '/wallpaper/Wallpaper-01.png',
    alt: 'Serene spiritual elder with halo and staff, Mutoday auspicious wallpaper',
  },
  {
    id: 2,
    src: '/wallpaper/Wallpaper-02.png',
    alt: 'Warrior figure with beard and sword in mystic clouds against golden crescent moon, Mutoday spiritual art',
  },
  {
    id: 3,
    src: '/wallpaper/Wallpaper-03.png',
    alt: 'Guan Yu in golden armor with guan dao and dragon, Mutoday spiritual wallpaper',
  },
  {
    id: 4,
    src: '/wallpaper/Wallpaper-04.png',
    alt: 'Three revered figures in golden robes amidst celestial clouds, Mutoday auspicious art',
  },
  {
    id: 5,
    src: '/wallpaper/Wallpaper-05.png',
    alt: 'Wise elder reading book under full moon in red robes, Mutoday spiritual wallpaper',
  },
  {
    id: 6,
    src: '/wallpaper/Wallpaper-06.png',
    alt: 'Elder with golden halo and staff in traditional robes, Mutoday spiritual art',
  },
  {
    id: 7,
    src: '/wallpaper/Wallpaper-07.png',
    alt: 'Sun Wukong Monkey King in golden armor with staff leaping through clouds, Mutoday wallpaper',
  },
]

const CENTER_INDEX = 3 // 0-based, การ์ดที่ 4 อยู่กลาง
const BASE_W = 180
const BASE_H = 395
const ASPECT_RATIO = BASE_H / BASE_W // 395/180
const SCALE_STEP = 0.05 // แต่ละชั้นห่างกลางเล็กลง
const SCALE_STEP_MOBILE = 0.03 // จอเล็กลดน้อยลงให้พอดี
const OVERLAP_RATIO = 0.15
const OVERLAP_RATIO_MOBILE = 0.12 // จอเล็กซ้อนน้อยลง

// คำนวณความกว้างรวมของ 7 การ์ดจาก baseW (scale + overlap)
const getTotalWidthFactor = (scaleStep, overlapRatio) => {
  let total = 0
  for (let i = 0; i < WALLPAPERS.length; i++) {
    const distance = Math.abs(i - CENTER_INDEX)
    const scale = 1 - distance * scaleStep
    const w = scale
    total += i === 0 ? w : w * (1 - overlapRatio)
  }
  return total
}

const WIDTH_FACTOR_MOBILE = getTotalWidthFactor(SCALE_STEP_MOBILE, OVERLAP_RATIO_MOBILE)

const WallpaperSections = () => {
  const isMobile = useIsMobile()
  const containerRef = useRef(null)
  const [containerWidth, setContainerWidth] = useState(0)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver((entries) => {
      const { width } = entries[0]?.contentRect ?? {}
      if (typeof width === 'number') setContainerWidth(width)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // จอเล็ก: คำนวณ baseW ให้ครบ 7 ใบพอดีในจอ (ขอบสุดท้ายอยู่ในจอเสมอ)
  const availableWidth = containerWidth > 0 ? containerWidth - 16 : 360 // px-2 = 8*2
  const fluidBaseW = availableWidth / WIDTH_FACTOR_MOBILE

  const baseW = isMobile ? Math.min(fluidBaseW, BASE_W) : BASE_W
  const baseH = isMobile ? Math.round(baseW * ASPECT_RATIO) : BASE_H
  const scaleStep = isMobile ? SCALE_STEP_MOBILE : SCALE_STEP
  const overlapRatio = isMobile ? OVERLAP_RATIO_MOBILE : OVERLAP_RATIO
  return (
    <section className="relative w-full" aria-label="วอลเปเปอร์มงคล">
      {/* clipPath หลายระดับ: จอเล็กเว้าน้อย จอใหญ่เว้ามาก */}
      <svg width={0} height={0} className="absolute" aria-hidden>
        <defs>
          <clipPath id="daily-horoscope-concave-sm" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 Q 0.5 0.06 1 0 L 1 1 Q 0.5 0.94 0 1 Z" />
          </clipPath>
          <clipPath id="daily-horoscope-concave-md" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 Q 0.5 0.12 1 0 L 1 1 Q 0.5 0.88 0 1 Z" />
          </clipPath>
          <clipPath id="daily-horoscope-concave-lg" clipPathUnits="objectBoundingBox">
            <path d="M 0 0 Q 0.5 0.2 1 0 L 1 1 Q 0.5 0.8 0 1 Z" />
          </clipPath>
        </defs>
      </svg>
      <div className="absolute top-0 left-0 h-full w-full">
        <ConcentricGlow />
      </div>
      <div className="mx-auto">
        {/* แถบการ์ด: กลางใหญ่สุด ค่อยๆ เล็กลงซ้ายขวา กลางอยู่บนสุด (z-index สูงสุด) */}
        <motion.div
          className="daily-horoscope-clipped flex flex-col items-center justify-center bg-[#F4F3FF] py-12 px-4 sm:py-16 lg:flex-row lg:gap-12 lg:py-20 lg:px-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div>
            {/* Header */}
            <motion.header
              className="mb-8 text-center lg:mt-10 mt-5 sm:mb-10"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <h2 className="text-2xl font-bold text-[#5C4B9E] sm:text-3xl">
                วอลเปเปอร์มงคล
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#5C4B9E]/90 sm:text-base">
                วอลเปเปอร์มงคลเฉพาะบุคคล ออกแบบตามพลังดวงและคำทำนายของคุณ <br />
                เพื่อเสริมพลังชีวิต โชคลาภ และความราบรื่นในทุกวัน
              </p>
            </motion.header>
            <motion.div
              ref={containerRef}
              className="flex justify-center overflow-x-hidden overflow-y-visible pb-4 pt-2 sm:overflow-x-auto scrollbar-hide"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <div className="flex items-center justify-center gap-0 px-2 sm:px-4">
                {WALLPAPERS.map((wallpaper, index) => {
                  const distance = Math.abs(index - CENTER_INDEX)
                  const scale = 1 - distance * scaleStep
                  const zIndex = WALLPAPERS.length - distance
                  const w = Math.round(baseW * scale)
                  const h = Math.round(baseH * scale)
                  const overlap = Math.round(w * overlapRatio)
                  return (
                    <div
                      key={wallpaper.id}
                      className="relative shrink-0 transition-all duration-300 hover:z-20 hover:scale-105"
                      style={{
                        zIndex,
                        marginLeft: index === 0 ? 0 : -overlap,
                      }}
                    >
                      <div
                        className="relative"
                        style={{
                          width: w,
                          height: h,
                        }}
                      >
                        <Image
                          src={wallpaper.src}
                          alt={wallpaper.alt}
                          fill
                          sizes="(max-width: 640px) 100px, (max-width: 800px) 160px, 180px"
                          className="object-contain object-top"
                          loading={index >= CENTER_INDEX - 2 && index <= CENTER_INDEX + 2 ? 'eager' : 'lazy'}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}

export default WallpaperSections
