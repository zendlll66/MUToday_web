'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import AstroAnimations from './AstroAnimations'

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
}

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.sevensolutions.mutoday&pli=1'
const APP_STORE_URL = 'https://apps.apple.com/th/app/mutoday-astrology/id6475958471'
const WEB_URL = 'https://mutoday.com'

const getStoreUrlByDevice = () => {
  if (typeof window === 'undefined') return WEB_URL
  const userAgent = navigator.userAgent || navigator.vendor || (window.opera ?? '')
  if (/android/i.test(userAgent)) return GOOGLE_PLAY_URL
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) return APP_STORE_URL
  return WEB_URL
}

export const HeroSections = () => {
  const handleDownload = (e) => {
    e.preventDefault()
    window.location.href = getStoreUrlByDevice()
  }

  return (
    <section className="relative grid  w-full grid-cols-1 items-center gap-8  px-4 py-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:px-8 lg:py-14">
      {/* Left: Branding + CTA */}
      <motion.div
        className="flex flex-col items-center lg:items-start justify-center px-0 lg:px-4"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="mb-6 flex items-center gap-2"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src="/icons/logo03.svg"
            alt="MUToday"
            width={120}
            height={120}
            className="h-full w-full"
          />
        </motion.div>

        <motion.h1
          className="mb-7 font-medium tracking-tight text-mu-blue text-7xl"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          มูทูเดย์
        </motion.h1>
        <motion.p
          className="mb-1 text-3xl font-medium text-mu-blue"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          ชุมชนของคนสายมู
        </motion.p>
        <motion.p
          className="mb-2 text-md text-mu-blue"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          ดาวน์โหลดแอปพลิเคชันมูทูเดย์ได้แล้ววันนี้
        </motion.p>

        <motion.div
          className="flex flex-row mt-2 items-center justify-center gap-3"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <a
            href={APP_STORE_URL}
            onClick={handleDownload}
            className="relative inline-flex h-11 min-w-[170px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#4727C7] px-6 py-4 text-white whitespace-nowrap shadow-[1px_1px_1px_0_rgba(255,255,255,0.4)_inset,-1px_-1px_1px_0_rgba(255,255,255,0.25)_inset,-1px_-1px_1px_0_rgba(178,178,178,0.4)_inset,1px_1px_4px_0_rgba(255,255,255,0.6)_inset] transition hover:opacity-95"
            aria-label="ดาวน์โหลดจาก App Store"
          >
            {/* Overlay จาก overlay-btn.svg */}
            <span className="pointer-events-none absolute inset-0 opacity-40 rounded-full overflow-hidden" aria-hidden>
              <Image
                src="/img/overlay-btn4.svg"
                alt=""
                fill
                className="object-cover object-center"
              />
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M21.3734 16.6805C20.8559 17.8298 20.6065 18.3436 19.9409 19.358C19.009 20.7755 17.6946 22.5455 16.0709 22.5567C14.6253 22.5698 14.2521 21.6136 12.289 21.6305C10.3278 21.6398 9.91901 22.5755 8.47151 22.5605C6.84589 22.5455 5.60276 20.9517 4.67089 19.5361C2.06464 15.5667 1.78901 10.913 3.39964 8.43797C4.53964 6.68297 6.34151 5.65172 8.03464 5.65172C9.75964 5.65172 10.8434 6.59859 12.2684 6.59859C13.6521 6.59859 14.494 5.64984 16.489 5.64984C17.9965 5.64984 19.5903 6.47109 20.7303 7.88859C17.0028 9.93234 17.6084 15.2555 21.3734 16.6805ZM14.974 4.06547C15.6996 3.13359 16.2509 1.81922 16.0503 0.480469C14.8671 0.561094 13.4834 1.31672 12.6753 2.29547C11.9421 3.18797 11.3346 4.51172 11.5709 5.79234C12.8628 5.83359 14.1996 5.06297 14.974 4.06547Z" fill="white" />
            </svg>
            <span className="relative z-10 font-semibold">App Store</span>
          </a>

          <a
            href={GOOGLE_PLAY_URL}
            onClick={handleDownload}
            className="relative inline-flex h-11 min-w-[170px] items-center justify-center gap-2.5 overflow-hidden rounded-full bg-[#4727C7] px-6 py-4 text-white whitespace-nowrap shadow-[1px_1px_1px_0_rgba(255,255,255,0.4)_inset,-1px_-1px_1px_0_rgba(255,255,255,0.25)_inset,-1px_-1px_1px_0_rgba(178,178,178,0.4)_inset,1px_1px_4px_0_rgba(255,255,255,0.6)_inset] transition hover:opacity-95"
            aria-label="ดาวน์โหลดจาก Google Play"
          >
            {/* Overlay จาก overlay-btn.svg */}
            <span className="pointer-events-none absolute inset-0 opacity-40 rounded-full overflow-hidden" aria-hidden>
              <Image
                src="/img/overlay-btn4.svg"
                alt=""
                fill
                className="object-cover object-center"
              />
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10 shrink-0">
              <path d="M3.42039 0.959961L13.8154 11.28L16.6654 8.42996L4.06539 1.15496C3.85539 1.03309 3.63039 0.965586 3.42039 0.959961ZM2.55039 1.43996C2.45664 1.60684 2.40039 1.80371 2.40039 2.02496V22.08C2.40039 22.2412 2.43414 22.3856 2.49039 22.515L13.1254 11.955L2.55039 1.43996ZM17.5354 8.92496L14.4904 11.955L17.5354 14.97L21.2554 12.84C21.7841 12.5343 21.8591 12.1462 21.8554 11.94C21.8498 11.5987 21.6341 11.28 21.2704 11.085C20.9535 10.9143 18.6004 9.54371 17.5354 8.92496ZM13.8154 12.63L3.33039 23.025C3.50477 23.0156 3.69414 22.9781 3.87039 22.875C4.28102 22.6368 12.5854 17.835 12.5854 17.835L16.6804 15.48L13.8154 12.63Z" fill="white" />
            </svg>
            <span className="relative z-10 font-semibold">Google Play</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Right: Astro chart / animation */}
      <div className="relative flex items-center justify-center min-h-[300px] lg:min-h-[480px]">
        <AstroAnimations />
      </div>
    </section>
  )
}
