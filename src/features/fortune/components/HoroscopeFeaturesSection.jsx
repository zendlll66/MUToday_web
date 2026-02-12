'use client'

import React from 'react'
import Image from 'next/image'

const FEATURES = [
  { id: 1, label: 'พลังงานประจำวัน' },
  { id: 2, label: 'สีเสื้อมงคลเสริมพลัง' },
  { id: 3, label: 'การเคลื่อนย้ายของดวงดาว' },
  { id: 4, label: 'เลขมงคลประจำวัน' },
  { id: 5, label: 'กราฟชีวิตรายวัน' },
]

const HoroscopeFeaturesSection = () => {
  return (
    <section
      className="relative w-full bg-[#f0edff] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:px-12 lg:py-20"
      aria-label="ฟีเจอร์ดวงรายวัน"
    >
      <div className="container mx-auto max-w-2xl">
        <ul className="flex flex-col gap-4 sm:gap-5">
          {FEATURES.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-4 rounded-2xl bg-white/70 px-4 py-3 shadow-sm backdrop-blur-sm sm:gap-5 sm:px-5 sm:py-4"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/90 shadow-sm sm:h-12 sm:w-12"
                aria-hidden
              >
                <Image
                  src="/icons/icon-stars.svg"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 sm:h-7 sm:w-7"
                />
              </span>
              <span className="text-base font-medium text-mu-text sm:text-lg">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HoroscopeFeaturesSection
