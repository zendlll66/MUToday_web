'use client'

import React from 'react'
import Image from 'next/image'


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
const SCALE_STEP = 0.05 // แต่ละชั้นห่างกลางเล็กลง 12%
const OVERLAP_RATIO = 0.15 // การ์ดซ้อนกันประมาณ 45%

const WallpaperSections = () => {
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
        <div
          className="daily-horoscope-clipped flex flex-col items-center justify-center bg-[#F4F3FF] py-12 px-4 sm:py-16 lg:flex-row lg:gap-12 lg:py-20 lg:px-8"
        >
          <div>
            {/* Header */}
            <header className="mb-8 text-center sm:mb-10">
              <h2 className="text-2xl font-bold text-[#5C4B9E] sm:text-3xl">
                วอลเปเปอร์มงคล
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#5C4B9E]/90 sm:text-base">
                วอลเปเปอร์มงคลเฉพาะบุคคล ออกแบบตามพลังดวงและคำทำนายของคุณ
                เพื่อเสริมพลังชีวิต โชคลาภ และความราบรื่นในทุกวัน
              </p>
            </header>
            <div className="flex justify-center overflow-x-auto overflow-y-visible pb-4 pt-2 scrollbar-hide">
              <div className="flex items-center justify-center gap-0 px-2 sm:px-4">
                {WALLPAPERS.map((wallpaper, index) => {
                  const distance = Math.abs(index - CENTER_INDEX)
                  const scale = 1 - distance * SCALE_STEP
                  const zIndex = WALLPAPERS.length - distance
                  const w = Math.round(BASE_W * scale)
                  const h = Math.round(BASE_H * scale)
                  const overlap = Math.round(w * OVERLAP_RATIO)
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
                          sizes="(max-width: 800px) 160px, 180px"
                          className="object-contain object-top"
                          loading={index >= CENTER_INDEX - 2 && index <= CENTER_INDEX + 2 ? 'eager' : 'lazy'}
                        />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WallpaperSections
