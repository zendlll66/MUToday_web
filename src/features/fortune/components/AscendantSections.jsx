'use client'

import React from 'react'
import Image from 'next/image'

const AscendantSections = () => {
    return (
        <section
            className="relative w-full  px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16  lg:px-12"
            aria-label="ลัคนาราศี"
        >
            <div className=" mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                {/* ซ้าย: หัวข้อ + รูป (แสดงเมื่อ < lg) + คำอธิบาย */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left justify-center">
                    <h2 className="mb-4 text-2xl font-bold tracking-tight text-mu-text sm:mb-5 sm:text-3xl md:text-4xl lg:mb-6 lg:text-5xl">
                        ลัคนาราศี
                    </h2>
                    {/* รูประหว่างหัวข้อกับข้อความ — แสดงเมื่อต่ำกว่า lg เท่านั้น */}
                    <div className="relative mb-6 flex min-h-[260px] w-full items-center justify-center sm:min-h-[300px] sm:mb-8 md:min-h-[360px] lg:mb-0 lg:min-h-0 lg:hidden">
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
                    <div className="space-y-2 text-mu-text/90 sm:space-y-3">
                        <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                            ผูกลัคนาตามตำราสุริยยาตร์อย่างแม่นยำ
                        </p>
                        <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                            ถอดรหัสพื้นดวงกำเนิด พร้อมทำนายอนาคต
                        </p>
                        <p className="text-sm leading-relaxed sm:text-base md:text-lg">
                            เพื่อให้คุณก้าวเดินได้อย่างมั่นใจในทุกจังหวะชีวิต
                        </p>
                    </div>
                </div>

                {/* ขวา: แผนภาพดวง — แสดงเฉพาะ lg ขึ้นไป, ต่ำกว่า lg ซ่อน (ใช้รูประหว่างหัวข้อกับข้อความแทน) */}
                <div className="relative hidden min-h-[260px] items-center justify-center sm:min-h-[300px] md:min-h-[360px] lg:flex lg:min-h-[420px]">
                    <div className="relative aspect-square w-full max-w-[280px] drop-shadow-md sm:max-w-[320px] md:max-w-[380px] lg:max-w-[420px]">
                        <Image
                            src="/img/ascendant.svg"
                            alt="แผนภาพดวงลัคนาราศี"
                            fill
                            className="object-contain"
                            sizes="(max-width: 1024px) 380px, 420px"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AscendantSections
