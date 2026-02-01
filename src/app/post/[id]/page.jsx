"use client"

import React, { useEffect, useMemo } from 'react'
import { useParams, useRouter } from 'next/navigation'
import PostHeader from '@/features/feed/components/PostHeader'
import PostMedia from '@/features/feed/components/PostMedia'
import PostContent from '@/features/feed/components/PostContent'
import PostActions from '@/features/feed/components/PostActions'

const MOCK_POSTS = [
    {
        id: 'bb17505a-9225-48a5-89d0-7ab15857b580',
        isOwner: false,
        typeImg: true,
        postDetail: '',
        createdAt: '1 นาทีที่แล้ว',
        countLike: '0',
        countComment: '0',
        hashTag: [],
        address: '',
        lat: '',
        lng: '',
        liked: false,
        images: [{ id: 'bc7c2b3a-ba97-4354-9698-93530eaac593', img: 'https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769064584236-425427696/original.jpg', thumbnail: 'https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769064584236-425427696/thumbnail.webp' }],
        backgroundImage: { img: '', textColor: '' },
        user: { id: 'a5727803-2304-4f1b-a885-28346e4942f1', displayName: 'พภพภ', imgProfile: 'https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp' },
    },
    {
        id: '150617a1-b65b-4fc0-9deb-c9df463e9b28',
        isOwner: false,
        typeImg: true,
        postDetail: 'พระทัมใจไม่ได้',
        createdAt: '2 นาทีที่แล้ว',
        countLike: '0',
        countComment: '0',
        hashTag: [],
        address: '',
        lat: '',
        lng: '',
        liked: false,
        images: [{ id: 'f1bb9fd8-26d0-42fd-a455-3cc5233dadaa', img: 'https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769064533622-715224131/original.jpg', thumbnail: 'https://pub-84690884fe94462e83399faa03011cbe.r2.dev/a5727803-2304-4f1b-a885-28346e4942f1/post/1769064533622-715224131/thumbnail.webp' }],
        backgroundImage: { img: '', textColor: '' },
        user: { id: 'a5727803-2304-4f1b-a885-28346e4942f1', displayName: 'พภพภ', imgProfile: 'https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_01.webp' },
    },
    {
        id: '2cbd8463-9046-474f-bf37-33cb01fde098',
        isOwner: false,
        typeImg: true,
        postDetail: '.\nเข้าวงการน้ำมันมะกอกวันแรก\n.\n.\n.\n#เริ่ม!!',
        createdAt: '1 ชั่วโมงที่แล้ว',
        countLike: '2',
        countComment: '6',
        hashTag: ['เริ่ม'],
        address: '',
        lat: '',
        lng: '',
        liked: false,
        images: [{ id: '7787f82d-bc2d-4635-938c-158471065a6e', img: 'https://pub-84690884fe94462e83399faa03011cbe.r2.dev/04ce89b2-67a7-448b-a5c3-dec2cf2e3e6e/post/1769060911442-777332441/original.jpg', thumbnail: 'https://pub-84690884fe94462e83399faa03011cbe.r2.dev/04ce89b2-67a7-448b-a5c3-dec2cf2e3e6e/post/1769060911442-777332441/thumbnail.webp' }],
        backgroundImage: { img: '', textColor: '' },
        user: { id: '04ce89b2-67a7-448b-a5c3-dec2cf2e3e6e', displayName: 'jackie', imgProfile: 'https://pub-84690884fe94462e83399faa03011cbe.r2.dev/04ce89b2-67a7-448b-a5c3-dec2cf2e3e6e/profile/avatar_1768325338309/original.jpg' },
    },
    {
        id: '5b5242d0-51dd-4899-af3e-6e3c42199b30',
        isOwner: false,
        typeImg: false,
        postDetail: 'saaa',
        createdAt: '20 ชั่วโมงที่แล้ว',
        countLike: '0',
        countComment: '0',
        hashTag: [],
        address: 'มหาวิทยาลัยศรีนครินทรวิโรฒ ประสานมิตร',
        lat: '13.7432833',
        lng: '100.5663036',
        liked: false,
        images: [],
        backgroundImage: { img: 'https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/commu/bgImg/white/bg_white01.webp', textColor: '#FFFFFF' },
        user: { id: '59f72d9d-f138-4c0b-b466-b6ba01a7f117', displayName: 'TUM ZOZL', imgProfile: 'https://trscgkhvrgonyogctiqb.supabase.co/storage/v1/object/public/mu-file/user/profileImg/Profile_sq_02.webp' },
    },
]

const PostDetailPage = () => {
    const params = useParams()
    const router = useRouter()
    const id = params?.id
    const post = useMemo(
        () => (id ? MOCK_POSTS.find((p) => p.id === id) : null),
        [id]
    )
    useEffect(() => {
        if (post) {
            const title = post.postDetail
                ? `${(post.postDetail || '').slice(0, 50)}${(post.postDetail || '').length > 50 ? '...' : ''} | Mutoday`
                : `โพสต์จาก ${post.user?.displayName || 'Mutoday'} | Mutoday`
            document.title = title
        }
    }, [post])

    if (!post) {
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
