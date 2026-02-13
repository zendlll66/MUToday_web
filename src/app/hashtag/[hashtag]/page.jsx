"use client"

import React from 'react'
import { useParams } from 'next/navigation'
import ClubFeedClient from '@/features/clubs/components/ClubFeedClient'

const page = () => {
  const { hashtag } = useParams()
  const decodedHashtag = hashtag ? decodeURIComponent(hashtag) : ''
  const keyword = decodedHashtag.startsWith('#') ? decodedHashtag : `#${decodedHashtag}`

  return (
    <div className='w-full max-w-[810px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 text-black min-h-screen bg-gray-50/50'>
      <h1 className='text-[26px] font-bold text-gray-800 mb-6'>{keyword}</h1>
      <ClubFeedClient keywordOverride={keyword} />
    </div>
  )
}

export default page