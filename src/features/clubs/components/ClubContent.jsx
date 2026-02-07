import React from 'react'
import SearchBar from '@/components/ui/SearchBar'
import PostCardMasonry from './PostCardMasonry'

const ClubContent = ({ data }) => {
  return (
    <div className='w-full mx-auto '>
      <header className='mb-6 sm:mb-8'>
        {/* <h1 className='text-xl sm:text-2xl font-semibold text-gray-900 mb-4'>
          คลับสายมู
        </h1>
        <SearchBar
          placeholder='ค้นหาโพสต์ แฮชแท็ก หรือสมาชิก...'
          className='max-w-md'
        /> */}
      </header>
      <PostCardMasonry data={data} />
    </div>
  )
}

export default ClubContent