"use client"
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import PostContent from '@/features/feed/components/PostContent'
import FooterCard from './FooterCard'
import PostHeader from '@/features/feed/components/PostHeader'
import { formatHashtagsInText, highlightHashTags } from '@/lib/textHelpers'

const PLACEHOLDER_SINGLE = (
  <div className='w-full aspect-4/5 min-h-[200px] rounded-lg sm:rounded-[20px] md:rounded-[24px] animate-shimmer flex items-center justify-center bg-gray-100'>
    <span className='text-gray-400 text-sm'>ไม่มีรูป</span>
  </div>
)

const PLACEHOLDER_CELL = (
  <div className='w-full h-full flex items-center justify-center bg-gray-100'>
    <span className='text-gray-400 text-xs'>ไม่มีรูป</span>
  </div>
)

const MasonryCard = ({ data, onPostClick, priority = false }) => {
  const [singleImageError, setSingleImageError] = useState(false)
  const [failedGridIndices, setFailedGridIndices] = useState({})

  if (!data) {
    return null
  }

  const singleSrc = data.images?.[0]?.img || data.images?.[0]?.thumbnail
  useEffect(() => {
    setSingleImageError(false)
  }, [singleSrc])
  useEffect(() => {
    setFailedGridIndices({})
  }, [data?.id])

  // Format content with hashTag array highlighting
  const formatContentWithHashTags = (text, hashTag, textColor = '#000000') => {
    if (!text) return null

    // ถ้ามี hashTag array ให้ highlight คำเหล่านั้น
    if (hashTag && hashTag.length > 0) {
      return highlightHashTags(text, hashTag, textColor)
    }

    // ถ้าไม่มี hashTag array ใช้ textColor ที่ส่งมา (default #000000)
    return formatHashtagsInText(text, textColor)
  }


  const handleCardClick = () => {
    if (onPostClick) {
      onPostClick(data.id)
    }
  }

  return (
    <article
      className='w-full min-w-0 overflow-hidden transition-shadow duration-200 cursor-pointer'
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
        <div className='w-full min-w-0'>
          {data.images.length === 1 ? (
            (() => {
              const src = data.images[0].img || data.images[0].thumbnail
              if (!src || singleImageError) {
                return PLACEHOLDER_SINGLE
              }
              return (
                <div className='relative w-full min-w-0 aspect-4/5 rounded-lg sm:rounded-[20px] md:rounded-[24px] overflow-hidden bg-gray-100'>
                  <Image
                    src={src}
                    alt='Post image'
                    fill
                    sizes='(max-width: 640px) 50vw, (max-width: 768px) 50vw, 400px'
                    className='object-cover object-top'
                    loading={priority ? 'eager' : 'lazy'}
                    fetchPriority={priority ? 'high' : 'auto'}
                    onError={() => setSingleImageError(true)}
                  />
                </div>
              )
            })()
          ) : (
            <div className='grid grid-cols-2 gap-0.5 sm:gap-1 md:gap-2 min-w-0'>
              {data.images.slice(0, 4).map((image, index) => {
                const src = image.thumbnail || image.img
                const hasError = failedGridIndices[index]
                const showPlaceholder = !src || hasError
                return (
                <div
                  key={image.id || index}
                  className='relative min-w-0 bg-gray-100 aspect-square overflow-hidden'
                >
                  {showPlaceholder ? (
                    PLACEHOLDER_CELL
                  ) : (
                    <Image
                      src={src}
                      alt={`Post image ${index + 1}`}
                      fill
                      sizes='(max-width: 640px) 25vw, (max-width: 768px) 25vw, 200px'
                      className='object-cover'
                      loading={priority && index === 0 ? 'eager' : 'lazy'}
                      fetchPriority={priority && index === 0 ? 'high' : 'auto'}
                      onError={() => setFailedGridIndices((prev) => ({ ...prev, [index]: true }))}
                    />
                  )}
                  {index === 3 && data.images.length > 4 && (
                    <div className='absolute inset-0 bg-black/50 flex items-center justify-center pointer-events-none'>
                      <span className='text-white font-medium text-xs sm:text-sm'>
                        +{data.images.length - 4}
                      </span>
                    </div>
                  )}
                </div>
              )
              })}
            </div>
          )}
        </div>
      ) : data.backgroundImage?.img ? (
        <div
          className='w-full min-w-0 aspect-square rounded-lg sm:rounded-[20px] md:rounded-[24px] overflow-hidden relative bg-cover bg-center bg-no-repeat flex items-center justify-center p-2 sm:p-4 md:p-6'
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
              <p className='text-xs sm:text-sm md:text-base font-medium leading-relaxed line-clamp-4'>
              {formatContentWithHashTags(data.postDetail, data.hashTag, data.backgroundImage?.textColor || '#000000')}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className='w-full aspect-4/5 min-h-[200px] rounded-lg sm:rounded-[20px] md:rounded-[24px] animate-shimmer flex items-center justify-center'>
          <span className='text-gray-400 text-sm'>ไม่มีรูป</span>
        </div>
      )
      }

      {/* Actions and Content */}
      <div className='min-w-0 px-1.5 sm:px-4 md:px-6 lg:mt-[10px] mt-[5px] pb-2 sm:pb-3 md:pb-4'>
        <PostContent
          postDetail={data.postDetail}
          hashTag={data.hashTag}
          user={data.user}
          backgroundImage={{ textColor: '#000000' }}
          compact
          feed={true}
          className='lg:mb-[10px] mb-[5px]'
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
