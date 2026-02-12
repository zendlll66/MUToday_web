'use client'

import React from 'react'
import Image from 'next/image'
import AstroAnimations from './AstroAnimations'

export const HeroSections = () => {
  return (
    <section className="relative grid min-h-[70vh] w-full grid-cols-1 items-center gap-8  px-4 py-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:px-8 lg:py-14">
      {/* Left: Branding + CTA */}
      <div className="flex flex-col items-center lg:items-start justify-center px-0 lg:px-4">
        <div className="mb-6 flex items-center gap-2">
          <Image
            src="/icons/logo03.svg"
            alt="MUToday"
            width={120}
            height={120}
            className="h-full w-full"
          />
        </div>

        <h1 className="mb-7 font-medium tracking-tight text-mu-blue text-7xl">
          มูทูเดย์
        </h1>
        <p className="mb-1 text-3xl font-medium text-mu-blue">
          ชุมชนของคนสายมู
        </p>
        <p className="mb-2 text-md text-mu-blue">
          ดาวน์โหลดแอปพลิเคชันมูทูเดย์ได้แล้ววันนี้
        </p>

        <div className="flex flex-row mt-2 items-center justify-center gap-3">
          <a
            href="#"
            className="inline-block transition "
            aria-label="ดาวน์โหลดจาก App Store"
          >
            <Image
              src="/icons/app-store.png"
              alt="ดาวน์โหลดจาก App Store"
              width={160}
              height={52}
              className="h-12 w-auto object-contain sm:h-10 md:h-12 lg:h-14"
            />
          </a>
          <a
            href="#"
            className="inline-block transition  hover:opacity-100"
            aria-label="ดาวน์โหลดจาก Google Play"
          >
            <Image
              src="/icons/google-play.png"
              alt="ดาวน์โหลดจาก Google Play"
              width={120}
              height={52}
              className="h-12 w-auto object-contain sm:h-10 md:h-12 lg:h-14"
            />
          </a>
        </div>
      </div>

      {/* Right: Astro chart / animation */}
      <div className="relative flex min-h-[320px] items-center justify-center lg:min-h-[480px]">
        <AstroAnimations />
      </div>
    </section>
  )
}
