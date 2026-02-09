"use client"
import React from 'react'
import PostContent from '@/features/feed/components/PostContent'
import FooterCard from './FooterCard'
import PostHeader from '@/features/feed/components/PostHeader'

const MasonryCard = ({ data, onPostClick }) => {
  if (!data) {
    return null
  }

  const handleCardClick = () => {
    if (onPostClick) {
      onPostClick(data.id)
    }
  }

  return (
    <article
      className='w-full overflow-hidden transition-shadow duration-200 cursor-pointer'
      onClick={handleCardClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleCardClick()
        }
      }}
      role='button'
      tabIndex={0}
    >
      {/* Header */}


      {/* Media Section - Optimized for Masonry */}
      {data.typeImg && data.images && data.images.length > 0 ? (
        <div className='w-full'>
          {data.images.length === 1 ? (
            <div className='relative w-full [container-type:inline-size]'>
              <img
                src={data.images[0].img || data.images[0].thumbnail}
                alt='Post image'
                className='w-full h-auto max-h-[125cqw] rounded-lg sm:rounded-[20px] object-cover object-top'
                loading='lazy'
              />
            </div>
          ) : (
            <div className='grid grid-cols-2 gap-0.5 sm:gap-1'>
              {data.images.slice(0, 4).map((image, index) => (
                <div
                  key={image.id || index}
                  className='relative bg-gray-100 aspect-square'
                >
                  <img
                    src={image.thumbnail || image.img}
                    alt={`Post image ${index + 1}`}
                    className='w-full h-full object-cover'
                    loading='lazy'
                  />
                  {index === 3 && data.images.length > 4 && (
                    <div className='absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none'>
                      <span className='text-white font-medium text-xs'>
                        +{data.images.length - 4}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ) : data.backgroundImage?.img ? (
        <div
          className='w-full aspect-square rounded-lg sm:rounded-[20px] overflow-hidden relative bg-cover bg-center bg-no-repeat flex items-center justify-center p-2 sm:p-4'
          style={{
            backgroundImage: `url(${data.backgroundImage.img})`,
          }}
        >
          {data.postDetail && (
            <div
              className='text-center max-w-full'
              style={{
                wordBreak: 'break-word',
                color: data.backgroundImage.textColor || '#000000',
              }}
            >
              <p className='text-xs sm:text-sm font-medium leading-relaxed line-clamp-4'>
                {data.postDetail}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className='w-full aspect-[4/5] min-h-[200px] rounded-lg sm:rounded-[20px] animate-shimmer flex items-center justify-center'>
          <span className='text-gray-400 text-sm'>ไม่มีรูป</span>
        </div>
      )
      }

      {/* Actions and Content */}
      <div className='px-2 sm:px-4 mt-2 sm:mt-3 pb-2 sm:pb-3'>
        <PostContent
          postDetail={data.postDetail}
          hashTag={data.hashTag}
          user={data.user}
          backgroundImage={data.backgroundImage}
          compact
          feed={true}
        />
        <FooterCard
          user={data.user}
          createdAt={data.createdAt}
          isOwner={data.isOwner}
          postId={data.id}
          countLike={data.countLike}
          countComment={data.countComment}
        />
      </div>

    </article>
  )
}

export default MasonryCard
