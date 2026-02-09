"use client"

import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import PostHeader from '@/features/feed/components/PostHeader'
import PostMedia from '@/features/feed/components/PostMedia'
import PostContent from '@/features/feed/components/PostContent'
import PostActions from '@/features/feed/components/PostActions'
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
            <div className='w-full max-w-[400px] min-w-[300px] mx-auto min-h-screen flex flex-col items-center justify-center py-8 px-4'>
                <p className='text-gray-600 text-center'>กำลังโหลด...</p>
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
                    />
                </div>
            </article>
        </div>
    )
}

export default PostDetailPage
