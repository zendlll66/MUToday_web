'use client'

import { useEffect, useRef } from 'react'
import { CardStack } from '@/components/CardStack'
import '@/components/style.css'

const cardImages = [
  '/card/0.webp',
  '/card/1.webp',
  '/card/2.webp',
  '/card/3.webp',
  '/card/4.webp',
  '/card/6.webp',
  '/card/19.webp',
  '/card/21.webp',
  '/card/18.webp',
  '/card/20.webp',
  '/card/7.webp',
  '/card/8.webp',
  '/card/9.webp',
  '/card/17.webp',
]

const Card = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cardStack = new CardStack(container, {
      numCards: 14,
      duration: 1.2,
      stepDelay: 0.1,
      autoFlipInterval: 5000,
      hoverMode: 'spread',
      cardImages,
      backImage: '/card/back.webp',
      floatDuration: { min: 3.5, max: 5.5 },
      floatDelay: { min: 0, max: 0.8 },
      floatY: { min: 4, max: 10 },
      floatTilt: { min: 0.3, max: 1 },
      cardWidth: 'min(90vw, 400px)',
      cardAspectRatio: '400 / 588',
      cardBorderRadius: '16px',
      cardOverlap: '250px',
      enableAutoFlip: true,
      enableHoverFlip: true,
      enableFloatAnimation: true,
      enableGlossEffect: false,
      enableHoverScale: true,
      hoverScaleAmount: 1.1,
      hoverScaleDuration: 0.2,
      flipEasing: 'ease-out',
      floatEasing: 'ease-in-out',
      enableSparkBorder: false,
    })

    return () => {
      if (cardStack && typeof cardStack.destroy === 'function') {
        cardStack.destroy()
      }
    }
  }, [])

  return (
    <>
      {/* Header */}
      <header className="text-center ">
        <h2 className="text-2xl font-bold text-[#5C4B9E] sm:text-3xl">
          ไพ่ทาโรต์
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#5C4B9E]/90 sm:text-base">
          ศาตร์แห่งการทำนายที่มีความเป็นมากว่า 600 ปี นำสัญลักษณ์ดั้งเดิมมาปรับโฉมใหม่
          ผสมผสานเทคโนโลยีเอไอ อ่านความเชื่อมโยงของหน้าไพ่ พร้อมให้คุณตั้งคำถามได้ทุกเรื่องในชีวิต
        </p>
      </header>
      <div ref={containerRef} className=" mt-[-100px] w-full" />
    </>
  )



}

export default Card

/* --- อันเดิม (React CardStack + CardStack2) comment ไว้ ---
'use client'

import { CardStack } from '@/features/fortune/components/CardStack'
import CardStack2 from '@/features/fortune/components/CardStack2'

const cardImages = [
    '/card/0.webp',
    '/card/1.webp',
    '/card/2.webp',
    '/card/3.webp',
    '/card/4.webp',
    '/card/6.webp',
    '/card/19.webp',
    '/card/21.webp',
    '/card/18.webp',
    '/card/20.webp',
    '/card/7.webp',
    '/card/8.webp',
    '/card/9.webp',
    '/card/17.webp',
]

const Card = () => (
    <div>
        <CardStack
            numCards={14}
            duration={1.2}
            stepDelay={0.1}
            autoFlipInterval={5000}
            hoverMode="spread"
            autoFlipBackDelay={500}
            enableAutoFlipBack
            cardImages={cardImages}
            backImage="/card/back.webp"
            floatDuration={{ min: 3.5, max: 5.5 }}
            floatDelay={{ min: 0, max: 0.8 }}
            floatY={{ min: 4, max: 10 }}
            floatTilt={{ min: 0.3, max: 1 }}
            cardWidth="min(90vw, 400px)"
            cardAspectRatio="400 / 588"
            cardBorderRadius="16px"
            cardOverlap="95px"
            cardScale={0.6}
            enableAutoFlip
            enableHoverFlip
            enableFloatAnimation
            enableGlossEffect
            enableHoverScale
            hoverScaleAmount={1.1}
            hoverScaleDuration={0.2}
            flipEasing="easeOut"
            floatEasing="easeInOut"
        />
        <CardStack2
            numCards={14}
            duration={1.2}
            stepDelay={0.1}
            autoFlipInterval={50000}
            hoverMode="spread"
            autoFlipBackDelay={500}
            enableAutoFlipBack
            cardImages={cardImages}
            backImage="/card/back.webp"
        />
    </div>
)
export default Card
*/
