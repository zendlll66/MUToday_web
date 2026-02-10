"use client"

import { useSearchParams } from 'next/navigation'
import ClubFeedClient from './ClubFeedClient'
import TopicList from './TopicList'

const ClubFeedSection = () => {
  const searchParams = useSearchParams()
  const hasSearch = !!((searchParams.get('q') ?? '').trim())

  return (
    <>
      {!hasSearch && <TopicList />}
      <ClubFeedClient />
    </>
  )
}

export default ClubFeedSection
