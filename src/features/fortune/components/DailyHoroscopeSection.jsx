import React from 'react'

/**
 * Section มีขอบเว้า (concave) ตรงกลางทั้งบนและล่าง
 * ใช้ SVG clipPath เพื่อให้ขอบบนโค้งลงตรงกลาง ขอบล่างโค้งขึ้นตรงกลาง
 */
const DailyHoroscopeSection = () => {
  return (
    <section className="relative w-full" aria-label="ทำนายวันนี้">
      {/* SVG clipPath: ขอบบนเว้าลงตรงกลาง, ขอบล่างเว้าขึ้นตรงกลาง */}
      <svg width={0} height={0} className="absolute" aria-hidden>
        <defs>
          <clipPath id="daily-horoscope-concave" clipPathUnits="objectBoundingBox">
            {/* top: เว้าลงตรงกลาง (y ใหญ่ขึ้นตรงกลาง) */}
            <path d="M 0 0 Q 0.5 0.2 1 0 L 1 1 Q 0.5 0.8 0 1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="flex flex-col items-center justify-center bg-white min-h-[80vh] py-16 px-4"
        style={{
          clipPath: 'url(#daily-horoscope-concave)',
          WebkitClipPath: 'url(#daily-horoscope-concave)',
        }}
      >
        <h2 className="text-2xl font-bold">ทำนายวันนี้</h2>
        <p className="text-sm text-gray-500">ทำนายวันนี้ของคุณ</p>
      </div>
    </section>
  )
}

export default DailyHoroscopeSection