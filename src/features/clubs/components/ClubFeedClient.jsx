"use client"

import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import useTopicStore from '@/store/topic.store'
import SearchAPI from '@/lib/api/enpoints/search.api'
import ClubContentClient from './ClubContentClient'
import MasonryCardSkeleton from './MasonryCardSkeleton'

const ClubFeedClient = ({ keywordOverride }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const handlePostClick = (postId) => router.push(`/post/${postId}`)
  const selectedTopic = useTopicStore((s) => s.selectedTopic)
  const searchKeyword = (keywordOverride ?? (searchParams.get('q') ?? '').trim()).trim()
  const isSearchMode = searchKeyword.length > 0
  const [feedData, setFeedData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const loadMoreRef = useRef(null)
  const loadingMoreRef = useRef(false)

  const loadMore = useCallback(async () => {
    const meta = feedData?.data?.searchPublicV2?.data?.meta
    const hasNextPage = meta?.hasNextPage
    const nextCursor = meta?.nextCursor
    if (!hasNextPage || loadingMoreRef.current) return

    loadingMoreRef.current = true
    setLoadingMore(true)
    try {
      const res = await SearchAPI.searchPublicV2({
        limit: 10,
        keyword: searchKeyword,
        clubId: '',
        interest: isSearchMode ? '' : (selectedTopic?.name ?? ''),
        cursor: nextCursor ?? '',
      })
      const newPosts = res?.data?.searchPublicV2?.data?.posts ?? []
      const newMeta = res?.data?.searchPublicV2?.data?.meta
      const prevPosts = feedData?.data?.searchPublicV2?.data?.posts ?? []
      const prevIds = new Set(prevPosts.map((p) => p.id))
      const uniqueNewPosts = newPosts.filter((p) => !prevIds.has(p.id))

      setFeedData({
        data: {
          searchPublicV2: {
            data: {
              posts: [...prevPosts, ...uniqueNewPosts],
              meta: newMeta,
            },
          },
        },
      })
    } catch (err) {
      console.error('ClubFeedClient: load more failed', err)
    } finally {
      loadingMoreRef.current = false
      setLoadingMore(false)
    }
  }, [feedData, selectedTopic?.name, searchKeyword, isSearchMode])

  useEffect(() => {
    const fetchSearch = async () => {
      setLoading(true)
      try {
        const res = await SearchAPI.searchPublicV2({
          limit: 10,
          keyword: searchKeyword,
          clubId: '',
          interest: isSearchMode ? '' : (selectedTopic?.name ?? ''),
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

  useEffect(() => {
    const hasNext = feedData?.data?.searchPublicV2?.data?.meta?.hasNextPage
    if (!hasNext) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry?.isIntersecting) loadMore()
      },
      { rootMargin: '200px', threshold: 0 }
    )
    const el = loadMoreRef.current
    if (el) observer.observe(el)
    return () => (el ? observer.unobserve(el) : undefined)
  }, [loadMore, feedData?.data?.searchPublicV2?.data?.meta?.hasNextPage])

  const hasNextPage = feedData?.data?.searchPublicV2?.data?.meta?.hasNextPage
  const isInitialLoading = loading && !feedData

  return (
    <>
      <ClubContentClient
        data={feedData}
        onPostClick={handlePostClick}
        loading={isInitialLoading}
      />
      {hasNextPage && (
        <div ref={loadMoreRef} className='w-full'>
          {loadingMore ? (
            <div className='grid grid-cols-2 gap-2 sm:gap-4 md:gap-6'>
              <div className='flex flex-col gap-2 sm:gap-4 md:gap-6'>
                <MasonryCardSkeleton />
                <MasonryCardSkeleton />
              </div>
              <div className='flex flex-col gap-2 sm:gap-4 md:gap-6'>
                <MasonryCardSkeleton />
                <MasonryCardSkeleton />
              </div>
            </div>
          ) : (
            <div className='py-4' aria-hidden />
          )}
        </div>
      )}
    </>
  )
}

export default ClubFeedClient
