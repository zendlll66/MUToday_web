import Image from 'next/image'
import React from 'react'
import { Image as ImageIcon } from 'lucide-react'

const PostMedia = ({ images, typeImg, backgroundImage, postDetail, isFirstPost = false }) => {
  // ถ้า typeImg เป็น true แสดง images
  if (typeImg && images && images.length > 0) {
    return (
      <div className='w-full'>
        {images.length === 1 ? (
          <div className='relative w-full bg-gray-100'>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[0].img || images[0].thumbnail}
              alt='Post image'
              className='w-full h-auto block'
              loading={isFirstPost ? 'eager' : 'lazy'}
            />
          </div>
        ) : (
          <div className='grid grid-cols-2 gap-1'>
            {images.slice(0, 4).map((image, index) => (
              <div
                key={image.id || index}
                className='relative aspect-square bg-gray-100'
              >
                <Image
                  src={image.thumbnail || image.img}
                  alt={`Post image ${index + 1}`}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 50vw, 250px'
                  priority={isFirstPost && index === 0}
                />
                {index === 3 && images.length > 4 && (
                  <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
                    <span className='text-white font-medium'>
                      +{images.length - 4}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  // ถ้า typeImg เป็น false แสดง backgroundImage พร้อม text overlay
  if (!typeImg && backgroundImage?.img) {
    const textColor = backgroundImage.textColor || '#000000'

    return (
      <div
        className='w-full aspect-square relative bg-cover bg-center bg-no-repeat flex items-center justify-center p-6'
        style={{
          backgroundImage: `url(${backgroundImage.img})`,
        
        }}
      >
        {postDetail && (
          <div
            className='text-center max-w-full'
            style={{
              wordBreak: 'break-word',
              color: textColor,
             
            }}
          >
            <p className='text-lg font-medium leading-relaxed line-clamp-4'>
              {postDetail}
            </p>
          </div>
        )}
      </div>
    )
  }

  // ไม่มี media - แสดง skeleton สำหรับหน้าโพสต์เดี่ยว
  return (
    <div className='w-full aspect-4/5 min-h-[200px] rounded-lg sm:rounded-xl flex flex-col items-center justify-center gap-2 bg-gray-100 animate-shimmer'>
      <ImageIcon className='w-12 h-12 text-gray-400' strokeWidth={1.5} aria-hidden />
    </div>
  )
}

export default PostMedia