'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

/** วงกลมซ้อน 7 ชั้น เป็น div สีซ้อนกัน: วงกลาง 500px, ถัดไป +100px (ปรับ opacity ได้) */
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

const FEATURES = [
  { id: 1, label: 'พลังงานประจำวัน' },
  { id: 2, label: 'สีเสื้อมงคลเสริมพลัง' },
  { id: 3, label: 'การเคลื่อนย้ายของดวงดาว' },
  { id: 4, label: 'เลขมงคลประจำวัน' },
  { id: 5, label: 'กราฟชีวิตรายวัน' },
]

/**
 * Section มีขอบเว้า (concave) ตรงกลางทั้งบนและล่าง
 * ใช้ SVG clipPath เพื่อให้ขอบบนโค้งลงตรงกลาง ขอบล่างโค้งขึ้นตรงกลาง
 * เลย์เอาต์: ซ้าย = รูปแอป + ข้อความ, ขวา = รายการฟีเจอร์ (อยู่ข้างรูป)
 */
const DailyHoroscopeSection = () => {
  return (
    <section className="relative w-full" aria-label="ทำนายวันนี้">
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
      <motion.div
        className="daily-horoscope-clipped flex flex-col drop-shadow-lg shadow-2xs items-center justify-center bg-[#F4F3FF] py-12 px-4 sm:py-16 lg:flex-row lg:gap-12 lg:py-20 lg:px-8"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* ซ้าย: รูปแอป */}
        <motion.div
          className="flex flex-col items-center lg:flex-1 lg:items-end lg:justify-center"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src="/img/app.svg"
            alt="แอปทำนายวันนี้"
            width={524}
            height={580}
            className="w-full max-w-[280px] py-8 sm:max-w-[320px] lg:max-w-[360px]"
          />
        </motion.div>

        {/* ขวา: หัวข้อ + รายการฟีเจอร์ (อยู่ข้างรูป) */}
        <motion.div
          className="mt-8 mb-8 w-full mx-auto justify-center items-center lg:items-start max-w-md lg:mt-8 lg:flex-1 md:pb-20 lg:max-w-none"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mb-2 text-2xl font-bold text-mu-text sm:text-3xl text-center lg:text-left">ดวงรายวัน</h2>
          <p className="mb-6   text-sm text-mu-text/80 sm:mb-8 sm:text-base text-center lg:mx-0 lg:text-left max-w-[230px] mx-auto">
            อัปเดตพลังดวงในแต่ละวัน เพื่อให้คุณใช้ชีวิตได้ตรงจังหวะที่สุด
          </p>
          <motion.ul
            className="flex flex-col gap-2 justify-center w-fit items-start lg:items-start mx-auto lg:mx-0"
            variants={staggerContainer}
          >
            {FEATURES.map((item) => (
              <motion.li
                key={item.id}
                className="flex items-center gap-4 justify-center"
                variants={fadeUp}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <span
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm sm:h-11 sm:w-11"
                  aria-hidden
                >
                  <Image
                    src="/icons/icon-stars.svg"
                    alt=""
                    width={24}
                    height={24}
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </span>
                <span className="text-sm font-medium text-mu-text sm:text-base">
                  {item.label}
                </span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default DailyHoroscopeSection