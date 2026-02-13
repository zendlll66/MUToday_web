"use client"
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Banner from '@/components/ui/Banner'
import EventBannerAPI from '@/lib/api/enpoints/event-banner.api'
import FeedAPI from '@/lib/api/enpoints/feed.api'
import GuestAPI from '@/lib/api/enpoints/guest.api'
import Token from '@/lib/api/axios/token'
import ClubContentClient from '@/features/clubs/components/ClubContentClient'

const HomePage = () => {
    const [feedData, setFeedData] = useState(null)
    const [bannerData, setBannerData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [page, setPage] = useState(1)
    const loadMoreRef = useRef(null)
    const loadingMoreRef = useRef(false)
    const router = useRouter()

    const handlePostDetail = (postId) => {
        router.push(`/post/${postId}`)
    }

    const loadMore = useCallback(async () => {
        const meta = feedData?.data?.feedPublicV2?.data?.meta
        const hasNextPage = meta?.hasNextPage
        const nextCursor = meta?.nextCursor
        if (!hasNextPage || loadingMoreRef.current) return

        loadingMoreRef.current = true
        setLoadingMore(true)
        try {
            const nextPage = page + 1
            const response = await FeedAPI.getFeed({
                page: nextPage,
                cursor: nextCursor || new Date().toISOString(),
            })
            const newPosts = response?.data?.feedPublicV2?.data?.posts || []
            const newMeta = response?.data?.feedPublicV2?.data?.meta
            const prevPosts = feedData?.data?.feedPublicV2?.data?.posts || []
            const prevIds = new Set(prevPosts.map((p) => p.id))
            const uniqueNewPosts = newPosts.filter((p) => !prevIds.has(p.id))

            setFeedData({
                data: {
                    feedPublicV2: {
                        data: {
                            posts: [...prevPosts, ...uniqueNewPosts],
                            meta: newMeta,
                        },
                    },
                },
            })
            setPage(nextPage)
        } catch (error) {
            console.error("Feed load more error:", error)
        } finally {
            loadingMoreRef.current = false
            setLoadingMore(false)
        }
    }, [feedData, page])

    useEffect(() => {
        const ensureGuestToken = async () => {
            if (Token.get()) return
            try {
                const response = await GuestAPI.getGuest()
                const { token } = response?.data?.data || {}
                if (token) Token.set(token)
            } catch (error) {
                console.error('Guest token failed:', error)
            }
        }

        const fetchBanners = async () => {
            try {
                const res = await EventBannerAPI.getBanners()
                const list = res?.data?.data
                setBannerData(Array.isArray(list) ? list : [])
            } catch {
                setBannerData([])
            }
        }

        const fetchFeed = async () => {
            setLoading(true)
            try {
                await ensureGuestToken()
                fetchBanners()
                const response = await FeedAPI.getFeed()
                setFeedData(response || null)
            } catch (error) {
                const err = error?.response
                    ? {
                        status: error.response.status,
                        data: error.response.data,
                        url: error.config?.url,
                        method: error.config?.method,
                    }
                    : Array.isArray(error)
                        ? { gqlErrors: error }
                        : { message: error?.message, code: error?.code }
                console.error("Feed API error:", err)
            } finally {
                setLoading(false)
            }
        }
        fetchFeed()
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                if (entry?.isIntersecting) {
                    loadMore()
                }
            },
            { rootMargin: '200px', threshold: 0 }
        )
        const el = loadMoreRef.current
        if (el) observer.observe(el)
        return () => (el ? observer.unobserve(el) : undefined)
    }, [loadMore])

    const hasBanners = Array.isArray(bannerData) && bannerData.length > 0

    return (
        <>
            {hasBanners && (
                <div className='w-full min-w-0 max-w-[810px] mx-auto mt-2 px-4 sm:px-6'>
                    <Banner banners={bannerData} />
                </div>
            )}
            <div className='w-full min-w-0 max-w-[810px] sm:max-w-[600px] md:max-w-[800px] mx-auto min-h-screen flex flex-col items-center py-4 px-4 sm:px-6 cursor-pointer'>
                <ClubContentClient data={feedData} onPostClick={handlePostDetail} loading={loading && !feedData} />
                {feedData?.data?.feedPublicV2?.data?.meta?.hasNextPage && (
                    <div ref={loadMoreRef} className='w-full py-4 flex justify-center'>
                        {loadingMore && <p className='text-gray-500 text-sm'>กำลังโหลด...</p>}
                    </div>
                )}
            </div>
        </>
    )
}

export default HomePage