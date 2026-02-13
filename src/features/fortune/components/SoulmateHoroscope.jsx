'use client'

import React from 'react'
import Image from 'next/image'

const SoulmateHoroscope = () => {
  return (
    <section
      className="relative w-full px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20"
      aria-label="ดวงสมพงษ์"
    >
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center   md:grid-cols-[1fr_1.2fr] ">
        {/* ซ้าย: หัวข้อ + คำอธิบาย */}
        <div className="flex flex-col items-center text-center md:items-start lg:text-left">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-mu-text sm:mb-5 sm:text-3xl md:text-4xl lg:mb-6 lg:text-5xl">
            ดวงสมพงษ์
          </h2>
          <div className="space-y-2 text-mu-text/90 sm:space-y-3 whitespace-nowrap">
            <p className="text-sm leading-relaxed sm:text-base md:text-lg text-center md:text-left">
              วิเคราะห์ความเข้ากับระหว่างคุณและคู่ของคุณ
            </p>
            <p className="text-sm leading-relaxed sm:text-base md:text-lg text-center md:text-left">
              ผ่านการผูกลัคนาตามตำราสุริยยาตร์
            </p>
            <p className="text-sm leading-relaxed sm:text-base md:text-lg text-center md:text-left">
              เพื่อเผยพลังความสัมพันธ์ จุดเสริม และจุดที่ควรปรับสมดุล
            </p>
          </div>
        </div>

        {/* ขวา: แสดงรูป soulmate ชิดขวา (วง 90% + heart lock) */}
        <div className="relative flex md:items-center mt-20 md:mt-0 items-center  md:justify-end justify-center">
          <div className="relative flex items-center justify-center gap-4 sm:gap-6">
            {/* รูป soulmate — ขวามือ แสดงรูปแบบนี้ */}
            <div className="relative h-[180px] w-[240px] shrink-0 sm:h-[200px] sm:w-[280px] md:h-[220px] md:w-[320px]">
              <Image
                src="/img/soulmate.svg"
                alt="ดวงสมพงษ์ - หัวใจกับกุญแจ"
                fill
                className="object-contain object-right drop-shadow-md"
                sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SoulmateHoroscope
