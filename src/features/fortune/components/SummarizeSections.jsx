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

const SummarizeSections = () => {
  return (
    <section
      className="relative w-full bg-[#F4F3FF] h-fit border-t-[1px] border-white border-mu-text px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20"
      aria-label="รวมศาสตร์แห่งศรัทธา"
    >
      <motion.div
        className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 md:grid-cols-[1fr_1.1fr] lg:gap-16"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* ซ้าย: รูปมือถือ */}
        <motion.div
          className="relative  mt-20 md:mr-[-160px] lg:mr-[-200px] mb-20 flex justify-center lg:justify-end"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="relative w-full max-w-[380px] drop-shadow-xl sm:max-w-[440px] lg:max-w-[520px]">
            <Image
              src="/img/phone-fortune.svg"
              alt="แอปมูทูเดย์ - รายการศาสตร์แห่งศรัทธา"
              width={520}
              height={1040}
              className="w-full h-auto object-contain md:scale-180 max-w-[400px] scale-130"
            />
          </div>
        </motion.div>

        {/* ขวา: หัวข้อ + คำอธิบาย */}
        <motion.div
          className="flex flex-col text-center md:w-fit items-center  w-full lg:text-left"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="mb-4 text-2xl font-bold text-center  leading-tight tracking-tight text-mu-text sm:text-3xl md:text-4xl lg:mb-6 lg:text-4xl">
            รวมศาสตร์แห่งศรัทธา <br /> ครบ จบ ในที่เดียว
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-center text-mu-text/85 sm:text-base md:text-lg">
            เพื่อให้คุณเชื่อมต่อพลังที่ใช่ <br /> และใช้ชีวิตอย่างมั่นใจในทุกจังหวะ
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default SummarizeSections
