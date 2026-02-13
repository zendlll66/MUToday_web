'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const FooterCard = ({ user, createdAt, isOwner, isFirstPost = false, postId, countLike, countComment }) => {
    const [imgError, setImgError] = useState(false)

    if (!user) {
        return null
    }

    const hasProfileImg = user.imgProfile && !imgError

    const handleLike = (e) => {
        e?.stopPropagation?.()
        // TODO: Implement like functionality
        console.log('Like post:', postId)
        window.location.href = 'https://mutoday.com/'
    }

    const handleComment = (e) => {
        e?.stopPropagation?.()
        // TODO: Implement comment functionality
        console.log('Comment on post:', postId)
        window.location.href = 'https://mutoday.com/'
    }




    return (
        <div className='flex items-center gap-2 sm:gap-3'>
            <div className='relative w-[30px] h-[30px] rounded-full overflow-hidden shrink-0'>
                {hasProfileImg ? (
                    <Image
                        src={user.imgProfile}
                        alt={user.displayName || 'User'}
                        fill
                        className='object-cover'
                        sizes='30px'
                        priority={isFirstPost}
                        onError={() => setImgError(true)}
                    />
                ) : (
                    <div className='absolute inset-0 rounded-full bg-gray-200 animate-shimmer' aria-hidden />
                )}
            </div>
            <div className='flex-1 flex row items-center justify-between min-w-0'>
                <div className='flex items-center gap-2'>
                    <h3 className='font-medium text-xs sm:text-sm truncate text-[#AAA]'>
                        {user.displayName || 'Unknown User'}
                    </h3>
                    {isOwner && (
                        <span className='text-xs text-mu-violet bg-mu-button px-2 py-0.5 rounded-full'>
                            คุณ
                        </span>
                    )}
                </div>


                <div className='flex items-center gap-4 '>
                    <button
                        onClick={handleLike}
                        className='flex items-center gap-[3px] text-[#AAA] transition-colors cursor-pointer'
                        aria-label='Like'
                    >
                        <motion.div
                            whileHover={{ scale: 1, y: -1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Image src={'/icons/favourite2.svg'} alt='favourite' width={24} height={24} className='w-4 h-4 opacity-50' />
                        </motion.div>
                        <span className='text-xs sm:text-sm font-medium'>
                            {countLike || '0'}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FooterCard