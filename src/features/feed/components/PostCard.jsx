import PostHeader from './PostHeader'
import PostMedia from './PostMedia'
import PostContent from './PostContent'
import PostActions from './PostActions'

const PostCard = ({ data }) => {
    if (!data) {
        return null
    }

    return (
        <article className='w-full lg:px-none max-w-[500px] bg-white rounded-lg  overflow-hidden'>
            <div className='px-[12px] lg:px-0'>
                <PostHeader
                    user={data.user}
                    createdAt={data.createdAt}
                    isOwner={data.isOwner}
                    isFirstPost={data.isFirstPost}
                />
            </div>
            <PostMedia
                images={data.images}
                typeImg={data.typeImg}
                backgroundImage={data.backgroundImage}
                postDetail={data.postDetail}
                isFirstPost={data.isFirstPost}
            />

            <div className='px-[12px] lg:px-0'>
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
            </div>
        </article>
    )
}

export default PostCard