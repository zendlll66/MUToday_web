import React, { Suspense } from 'react'
import ClubFeedSection from '@/features/clubs/components/ClubFeedSection'
import ClubSearchBar from '@/features/clubs/components/ClubSearchBar'

import { getCanonicalUrl } from '@/config/seo'

export const metadata = {
  title: 'คลับสายมู | Mutoday - ชุมชนสายมู',
  description:
    'ชุมชนสายมู แชร์โพสต์ ทำนาย ดวง ฮวงจุ้ย โหราศาสตร์ ทาโรต์ และความเชื่อ ค้นหาโพสต์จากชุมชน Mutoday',
  openGraph: {
    title: 'คลับสายมู | Mutoday - ชุมชนสายมู',
    description:
      'ชุมชนสายมู แชร์โพสต์ ทำนาย ดวง ฮวงจุ้ย โหราศาสตร์ ทาโรต์ และความเชื่อ',
    url: getCanonicalUrl('club'),
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'คลับสายมู | Mutoday' },
}

const page = () => {
  return (
    <div className='w-full max-w-[810px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 text-black min-h-screen bg-gray-50/50'>
      <h1 className='sr-only'>คลับสายมู ชุมชนโพสต์ทำนาย ดวง โหราศาสตร์ และความเชื่อ</h1>
      <Suspense fallback={null}>
        <div className='flex flex-col items-center justify-center mb-6'>
          <ClubSearchBar
            placeholder='search community posts'
            className='max-w-[810px]'
          />
        </div>
        <ClubFeedSection />
      </Suspense>
    </div>
  )
}

export default page