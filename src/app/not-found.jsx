import Link from 'next/link'
import CircularGradientBg from '@/components/ui/CircularGradientBg'

export const metadata = {
  title: 'ไม่พบหน้า - 404 | Mutoday',
  description: 'หน้าที่คุณค้นหาไม่มีอยู่ หรือย้ายไปแล้ว มูทูเดย์ - คลับสายมู คอมมูนิตี้โพสต์ทำนาย ดวง โหราศาสตร์',
  robots: { index: false, follow: true },
}

const NotFoundPage = () => {
  return (
    <div className="relative min-h-[80vh] flex flex-col items-center justify-center">
      <CircularGradientBg
        className="absolute top-0 left-[-20%] right-0 h-[500px] z-0"
        position="top"
      />
      <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center">
        <p className="text-6xl sm:text-8xl font-light text-[#8A6CFF]/30 tabular-nums">
          404
        </p>
        <h1 className="mt-4 text-xl sm:text-2xl font-medium text-black">
          ไม่พบหน้าที่คุณต้องการ
        </h1>
        <p className="mt-2 text-sm text-gray-500 max-w-sm">
          หน้านี้อาจถูกลบ ย้าย หรือไม่มีอยู่แล้ว ลองกลับไปหน้าแรกหรือค้นหาอีกครั้ง
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-[#8A6CFF] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
        >
          กลับหน้าแรก
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
