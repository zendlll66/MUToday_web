import PostsAPI from '@/lib/api/enpoints/posts.api'

export async function generateMetadata({ params }) {
    const resolved = typeof params?.then === 'function' ? await params : params
    const id = resolved?.id ?? ''
    const baseMeta = {
        title: 'Mutoday',
        description: 'ดูโพสต์จากชุมชน Mutoday - โซเชียลชุมชนคนรักโหราศาสตร์ ดวง ทำนาย และความเชื่อ',
        openGraph: {
            title: 'Mutoday',
            description: 'ดูโพสต์จากชุมชน Mutoday',
        },
    }
    if (!id) return baseMeta
    try {
        const response = await PostsAPI.getPostsByPostId(id)
        const post = response?.data?.feedPublicByIdV2?.data
        if (post) {
            const title = post.postDetail
                ? `${(post.postDetail || '').slice(0, 50)}${(post.postDetail || '').length > 50 ? '...' : ''} | Mutoday`
                : `โพสต์จาก ${post.user?.displayName || 'Mutoday'} | Mutoday`
            const description = post.postDetail
                ? (post.postDetail || '').slice(0, 160)
                : `โพสต์จาก ${post.user?.displayName || 'Mutoday'} ในชุมชน Mutoday`
            return {
                title,
                description,
                openGraph: {
                    title,
                    description,
                    images: post.images?.[0]?.img ? [post.images[0].img] : undefined,
                },
            }
        }
    } catch {
        // fallback to base meta
    }
    return { ...baseMeta, title: 'โพสต์ | Mutoday' }
}

export default function PostDetailLayout({ children }) {
    return <>{children}</>
}
