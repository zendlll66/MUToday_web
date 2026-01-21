import PostHeader from './PostHeader'
import PostMedia from './PostMedia'
import PostContent from './PostContent'
import PostActions from './PostActions'

const PostCard = ({ data }) => {
    if (!data) {
        return null
    }

    return (
        <article className='w-full max-w-[500px] bg-white rounded-lg  overflow-hidden'>
            <PostHeader
                user={data.user}
                createdAt={data.createdAt}
                isOwner={data.isOwner}
            />
            <PostMedia
                images={data.images}
                typeImg={data.typeImg}
                backgroundImage={data.backgroundImage}
                postDetail={data.postDetail}
            />

            <PostActions
                postId={data.id}
                liked={data.liked}
                countLike={data.countLike}
                countComment={data.countComment}
            />

            <PostContent
                postDetail={data.postDetail}
                hashTag={data.hashTag}
                user={data.user}
                createdAt={data.createdAt}
            />
        </article>
    )
}

export default PostCard