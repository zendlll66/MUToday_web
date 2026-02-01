import PostHeader from './PostHeader'
import PostMedia from './PostMedia'
import PostContent from './PostContent'
import PostActions from './PostActions'

const PostCard = ({ data, handlePostDetail, isDetailPage = false }) => {
    if (!data) {
        return null
    }

    const handleCardClick = () => {
        if (handlePostDetail) {
            handlePostDetail(data.id)
        }
    }

    // สำหรับ detail page ให้ตั้ง isFirstPost เป็น true เพื่อ prioritize image loading
    const isFirstPost = isDetailPage ? true : data.isFirstPost

    const articleProps = isDetailPage
        ? {
              className: 'w-full bg-white overflow-hidden',
          }
        : {
              className: 'w-full bg-white overflow-hidden cursor-pointer',
              onClick: handleCardClick,
              role: 'button',
              tabIndex: 0,
              onKeyDown: (e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleCardClick()
                  }
              },
          }

    return (
        <article {...articleProps}>
            <div className='px-[12px]'>
                <PostHeader
                    user={data.user}
                    createdAt={data.createdAt}
                    isOwner={data.isOwner}
                    isFirstPost={isFirstPost}
                />
            </div>
            <PostMedia
                images={data.images}
                typeImg={data.typeImg}
                backgroundImage={data.backgroundImage}
                postDetail={data.postDetail}
                isFirstPost={isFirstPost}
            />

            <div className='px-[12px] lg:px-0' onClick={isDetailPage ? undefined : (e) => e.stopPropagation()}>
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
                    backgroundImage={data.backgroundImage}
                />
            </div>
        </article>
    )
}

export default PostCard