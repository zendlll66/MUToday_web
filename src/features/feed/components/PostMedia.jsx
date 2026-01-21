import Image from 'next/image'
import React from 'react'

const PostMedia = ({ images, typeImg, backgroundImage, postDetail }) => {
  // ถ้า typeImg เป็น true แสดง images
  if (typeImg && images && images.length > 0) {
    return (
      <div className='w-full'>
        {images.length === 1 ? (
          <div className='relative w-full aspect-square bg-gray-100'>
            <Image
              src={images[0].img || images[0].thumbnail}
              alt='Post image'
              fill
              className='object-cover  aspect-square'
              sizes='100vw'
              priority={false}
              loading='lazy'
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
                  sizes='50vw'
                  priority={false}
                  loading='lazy'
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
    // ตรวจสอบว่าสีข้อความควรเป็นสีอ่อนหรือเข้ม
    const isLightBg = textColor === '#FFFFFF' || textColor === '#ffffff'

    return (
      <div
        className='w-full aspect-square relative bg-cover bg-center bg-no-repeat flex items-center justify-center p-6'
        style={{
          backgroundImage: `url(${backgroundImage.img})`,
          backgroundColor: textColor,
        }}
      >
        {postDetail && (
          <div
            className={`text-center max-w-full ${
              isLightBg ? 'text-gray-900' : 'text-white'
            }`}
            style={{
              wordBreak: 'break-word',
              color: isLightBg ? '#1f2937' : '#ffffff',
              textShadow: isLightBg
                ? '0 1px 2px rgba(255,255,255,0.8)'
                : '0 1px 3px rgba(0,0,0,0.5)',
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

  // ไม่มี media
  return null
}

export default PostMedia