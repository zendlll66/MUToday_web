"use client"

import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useTopicStore from '@/store/topic.store'
import SearchAPI from '@/lib/api/enpoints/search.api'
import ClubContentClient from './ClubContentClient'

const ClubFeedClient = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const handlePostClick = (postId) => router.push(`/post/${postId}`)
  const selectedTopic = useTopicStore((s) => s.selectedTopic)
  const searchKeyword = searchParams.get('q') ?? ''
  const [feedData, setFeedData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true)
      try {
        const res = await SearchAPI.searchPublicV2({
          limit: 10,
          keyword: searchKeyword ?? '',
          clubId: '',
          interest: selectedTopic?.name ?? '',
        })
        setFeedData(res ?? null)
      } catch (err) {
        console.error('ClubFeedClient: searchPublicV2 failed', err)
        setFeedData(null)
      } finally {
        setLoading(false)
      }
    }
    fetchSearch()
  }, [selectedTopic?.id, selectedTopic?.name, searchKeyword])

  if (loading && !feedData) {
    return (
      <div className='w-full py-16 text-center text-gray-500'>
        <p className='text-sm'>กำลังโหลด...</p>
      </div>
    )
  }

  return <ClubContentClient data={feedData} onPostClick={handlePostClick} />
}

export default ClubFeedClient
