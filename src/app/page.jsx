"use client"
import React, { useEffect, useState, useRef, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Banner from '@/components/ui/Banner'
import FeedAPI from '@/lib/api/enpoints/feed.api'
import GuestAPI from '@/lib/api/enpoints/guest.api'
import Token from '@/lib/api/axios/token'
import ClubContentClient from '@/features/clubs/components/ClubContentClient'

const HomePage = () => {
    const [feedData, setFeedData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [page, setPage] = useState(1)
    const loadMoreRef = useRef(null)
    const loadingMoreRef = useRef(false)
    const router = useRouter()
    
    const mockBannerData = {
        "status": 200,
        "success": true,
        "message": "Success",
        "data": [
            {
                "id": "1571366b-1f72-4277-9e8a-7c7413c2f916",
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/event/bannerBeforeBuy.webp",
                "link": "https://stg-ticket-mutoday-frontend.mutoday.com/events/690acc16e043308f3d17a24f?a=1&token=019c1a87-050f-7d1e-96eb-4463d4642737"
            },
            {
                "id": "9ef118e9-0ea9-4f1f-b5da-6f2d645ef52e",
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/event/bpBanner.webp",
                "link": ""
            },
            {
                "id": "6d7d99fa-9f07-41fa-aaaf-9b22a8ed26ce",
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/event/gundamBanner.jpg",
                "link": ""
            },
            {
                "id": "fd78e892-2728-4344-abab-6fb55968ed6e",
                "img": "https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/event/mhwBanner.jpg",
                "link": ""
            }
        ]
    }

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

        const fetchFeed = async () => {
            setLoading(true)
            try {
                await ensureGuestToken()
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

    return (
        <>
            <div className='w-full max-w-[810px] mx-auto mt-2'>
                <Banner banners={mockBannerData.data} />
            </div>
            <div className='w-full max-w-[300px] sm:max-w-[600px] md:max-w-[800px] min-w-[450px] mx-auto min-h-screen flex flex-col items-center py-4 cursor-pointer'>
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