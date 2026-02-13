import React from 'react'
import { getCanonicalUrl } from '@/config/seo'

export const metadata = {
  title: 'ข้อกำหนดและเงื่อนไขการให้บริการ | Mutoday',
  description:
    'ข้อกำหนดและเงื่อนไขการให้บริการ Mutoday คลับสายมู ชุมชนโหราศาสตร์ ดวง ทำนาย',
  openGraph: {
    title: 'ข้อกำหนดและเงื่อนไข | Mutoday',
    url: getCanonicalUrl('terms'),
    type: 'website',
  },
  robots: { index: true, follow: true },
}

const page = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold text-black mb-4">
        ข้อกำหนดและเงื่อนไขการให้บริการ
      </h1>
      <p className="text-gray-600">Terms of Service – เนื้อหาหน้าข้อกำหนดสามารถเพิ่มเติมได้ที่นี่</p>
    </div>
  )
}

export default page