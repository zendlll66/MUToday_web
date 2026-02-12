'use client'

import React from 'react'
import Image from 'next/image'

const SummarizeSections = () => {
  return (
    <section
      className="relative w-full bg-[#f0edff] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20"
      aria-label="รวมศาสตร์แห่งศรัทธา"
    >
      <div className="container mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* ซ้าย: รูปมือถือ */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[380px] drop-shadow-xl sm:max-w-[440px] lg:max-w-[520px]">
            <Image
              src="/img/phone-fortune.svg"
              alt="แอปมูทูเดย์ - รายการศาสตร์แห่งศรัทธา"
              width={520}
              height={1040}
              className="w-full h-auto object-contain lg:scale-180 scale-100"
            />
          </div>
        </div>

        {/* ขวา: หัวข้อ + คำอธิบาย */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <h2 className="mb-4 text-2xl font-bold text-center  leading-tight tracking-tight text-mu-text sm:text-3xl md:text-4xl lg:mb-6 lg:text-4xl">
            รวมศาสตร์แห่งศรัทธา ครบ จบ ในที่เดียว
          </h2>
          <p className="max-w-lg text-sm leading-relaxed text-center text-mu-text/85 sm:text-base md:text-lg">
            เพื่อให้คุณเชื่อมต่อพลังที่ใช่ และใช้ชีวิตอย่างมั่นใจในทุกจังหวะ
          </p>
        </div>
      </div>
    </section>
  )
}

export default SummarizeSections
