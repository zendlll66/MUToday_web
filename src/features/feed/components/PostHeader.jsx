'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const PostHeader = ({ user, createdAt, isOwner, isFirstPost = false }) => {
  const [imgError, setImgError] = useState(false)

  if (!user) {
    return null
  }

  const hasProfileImg = user.imgProfile && !imgError

  return (
    <div className='flex items-center gap-3  py-3'>
      <div className='relative w-10 h-10 rounded-full overflow-hidden shrink-0'>
        {hasProfileImg ? (
          <Image
            src={user.imgProfile}
            alt={user.displayName || 'User'}
            fill
            className='object-cover'
            sizes='40px'
            priority={isFirstPost}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className='absolute inset-0 rounded-full bg-gray-200 animate-shimmer' aria-hidden />
        )}
      </div>
      <div className='flex-1 min-w-0'>
        <div className='flex items-center gap-2'>
          <h3 className='font-medium text-sm truncate text-black'>
            {user.displayName || 'Unknown User'}
          </h3>
          {isOwner && (
            <span className='text-xs text-mu-violet bg-mu-button px-2 py-0.5 rounded-full'>
              คุณ
            </span>
          )}
        </div>
        {/* <p className='text-xs text-gray-500 mt-0.5'>
          {createdAt || 'ไม่ทราบเวลา'}
        </p> */}
      </div>
    </div>
  )
}

export default PostHeader