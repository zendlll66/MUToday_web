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

const AscendantSections = () => {
  return (
    <section
      className="relative w-full  px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16  lg:px-12"
      aria-label="ลัคนาราศี"
    >
      <motion.div
        className=" mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ซ้าย: หัวข้อ + รูป (แสดงเมื่อ < lg) + คำอธิบาย */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-mu-text sm:mb-5 sm:text-3xl md:text-4xl lg:mb-6 lg:text-4xl">
            ลัคนาราศี
          </h2>
          {/* รูประหว่างหัวข้อกับข้อความ — แสดงเมื่อต่ำกว่า lg เท่านั้น */}
          <div className="relative mb-6 flex w-full items-center justify-center sm:mb-8 lg:mb-0 lg:hidden">
            <div className="relative aspect-square w-full max-w-[280px] drop-shadow-md sm:max-w-[320px] md:max-w-[380px]">
              <Image
                src="/img/ascendant.svg"
                alt="แผนภาพดวงลัคนาราศี"
                fill
                className="object-contain"
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, 380px"
              />
            </div>
          </div>
          <motion.div
            className="space-y-2 text-mu-text/90 sm:space-y-3 whitespace-nowrap"
            variants={staggerContainer}
          >
            <motion.p
              className="text-sm leading-relaxed sm:text-base md:text-lg"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              ผูกลัคนาตามตำราสุริยยาตร์อย่างแม่นยำ
            </motion.p>
            <motion.p
              className="text-sm leading-relaxed sm:text-base md:text-lg"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              ถอดรหัสพื้นดวงกำเนิด พร้อมทำนายอนาคต
            </motion.p>
            <motion.p
              className="text-sm leading-relaxed sm:text-base md:text-lg"
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              เพื่อให้คุณก้าวเดินได้อย่างมั่นใจในทุกจังหวะชีวิต
            </motion.p>
          </motion.div>
        </motion.div>

        {/* ขวา: แผนภาพดวง — แสดงเฉพาะ lg ขึ้นไป */}
        <motion.div
          className="relative hidden items-center justify-center lg:flex"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="relative aspect-square w-full max-w-[280px] drop-shadow-md sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
            <Image
              src="/img/ascendant.svg"
              alt="แผนภาพดวงลัคนาราศี"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 380px, 420px"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default AscendantSections
