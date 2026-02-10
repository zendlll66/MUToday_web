
import React from 'react'
import ClubFeedClient from '@/features/clubs/components/ClubFeedClient'
import ClubSearchBar from '@/features/clubs/components/ClubSearchBar'
import TopicList from '@/features/clubs/components/TopicList'

export const metadata = {
  title: 'คลับสายมู | Mutoday - ชุมชนสายมู',
  description: 'ชุมชนสายมู แชร์โพสต์ ทำนาย ดวง ฮวงจุ้ย และความเชื่อ',
}

const page = () => {
  return (
    <div className='w-full max-w-[810px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 text-black min-h-screen bg-gray-50/50'>
      <div className='flex flex-col items-center justify-center mb-6'>
        <h1 className='text-xl sm:text-2xl font-semibold text-gray-900 mb-4'>
          คลับสายมู
        </h1>
        <ClubSearchBar
          placeholder='ค้นหาโพสต์ แฮชแท็ก หรือสมาชิก...'
          className='max-w-[810px]'
        />
      </div>  
      <TopicList />
      <ClubFeedClient />
    </div>     
  )
}

export default page