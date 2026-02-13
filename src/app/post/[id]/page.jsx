"use client"

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import PostHeader from '@/features/feed/components/PostHeader'
import PostMedia from '@/features/feed/components/PostMedia'
import PostContent from '@/features/feed/components/PostContent'
import PostActions from '@/features/feed/components/PostActions'
import PostComments from '@/features/feed/components/PostComments'
import PostsAPI from '@/lib/api/enpoints/posts.api'

const PostDetailPage = () => {
    const params = useParams()
    const router = useRouter()
    const id = params?.id
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (!id) {
            setLoading(false)
            return
        }
        const fetchPost = async () => {
            try {
                setLoading(true)
                const response = await PostsAPI.getPostsByPostId(id)
                const postData = response?.data?.feedPublicByIdV2?.data
                setPost(postData || null)
                setError(null)
            } catch (err) {
                setError(err)
                setPost(null)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [id])

    useEffect(() => {
        if (post) {
            const title = post.postDetail
                ? `${(post.postDetail || '').slice(0, 50)}${(post.postDetail || '').length > 50 ? '...' : ''} | Mutoday`
                : `โพสต์จาก ${post.user?.displayName || 'Mutoday'} | Mutoday`
            document.title = title
        }
    }, [post])

    if (loading) {
        return (
            <div className='w-full max-w-[400px] min-w-[300px] mx-auto min-h-screen flex flex-col items-center py-4'>
                <article className='w-full bg-white overflow-hidden animate-pulse'>
                    <div className='px-[12px] py-3'>
                        <div className='flex items-center gap-3'>
                            <div className='w-10 h-10 rounded-full bg-gray-200 shrink-0' />
                            <div className='flex-1 space-y-2'>
                                <div className='h-4 w-24 rounded bg-gray-200' />
                                <div className='h-3 w-16 rounded bg-gray-100' />
                            </div>
                        </div>
                    </div>
                    <div className='w-full aspect-4/5 min-h-[280px] bg-gray-200' />
                    <div className='px-[12px] py-3 flex items-center gap-4'>
                        <div className='h-6 w-12 rounded bg-gray-200' />
                        <div className='h-6 w-12 rounded bg-gray-200' />
                    </div>
                    <div className='px-[12px] pb-4 space-y-2'>
                        <div className='h-4 w-full rounded bg-gray-200' />
                        <div className='h-4 w-[85%] rounded bg-gray-200' />
                        <div className='h-4 w-[70%] rounded bg-gray-200' />
                    </div>
                </article>
                <div className='w-full mt-4 px-0 space-y-3'>
                    <div className='h-4 w-32 rounded bg-gray-200' />
                    <div className='flex gap-3'>
                        <div className='w-[30px] h-[30px] rounded-full bg-gray-200 shrink-0' />
                        <div className='flex-1 space-y-2'>
                            <div className='h-4 w-20 rounded bg-gray-200' />
                            <div className='h-3 w-full rounded bg-gray-100' />
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-[30px] h-[30px] rounded-full bg-gray-200 shrink-0' />
                        <div className='flex-1 space-y-2'>
                            <div className='h-4 w-24 rounded bg-gray-200' />
                            <div className='h-3 w-[90%] rounded bg-gray-100' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    if (error || !post) {
        return (
            <div className='w-full max-w-[400px] min-w-[300px] mx-auto min-h-screen flex flex-col items-center justify-center py-8 px-4'>
                <p className='text-gray-600 text-center mb-4'>ไม่พบโพสต์</p>
                <button
                    type='button'
                    onClick={() => router.push('/')}
                    className='text-mu-violet font-medium hover:underline'
                >
                    กลับหน้าหลัก
                </button>
            </div>
        )
    }

    return (
        <div className='w-full max-w-[400px] min-w-[300px] mx-auto min-h-screen flex flex-col items-center py-4'>
            <article className='w-full bg-white overflow-hidden'>
                <div className='px-[12px]'>
                    <PostHeader
                        user={post.user}
                        createdAt={post.createdAt}
                        isOwner={post.isOwner}
                        isFirstPost
                    />
                </div>
                <PostMedia
                    images={post.images}
                    typeImg={post.typeImg}
                    backgroundImage={post.backgroundImage}
                    postDetail={post.postDetail}
                    isFirstPost
                />
                <div className='px-[12px] lg:px-0'>
                    <PostActions
                        postId={post.id}
                        liked={post.liked}
                        countLike={post.countLike}
                        countComment={post.countComment}
                    />
                    <PostContent
                        postDetail={post.postDetail}
                        hashTag={post.hashTag}
                        user={post.user}
                        createdAt={post.createdAt}
                        backgroundImage={post.backgroundImage}
                        truncate={false}
                    />
                </div>
            </article>
            <PostComments postId={post.id} totalCount={post.countComment} className='mt-4' />
        </div>
    )
}

export default PostDetailPage
