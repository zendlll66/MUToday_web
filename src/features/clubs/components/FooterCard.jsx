import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

const FooterCard = ({ user, createdAt, isOwner, isFirstPost = false, postId, countLike, countComment }) => {
    if (!user) {
        return null
    }

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
        <div className='flex items-center gap-2 sm:gap-3 py-2 sm:py-3'>
            <div className='relative w-[30px] h-[30px] rounded-full overflow-hidden shrink-0'>
                <Image
                    src={user.imgProfile || '/default-avatar.png'}
                    alt={user.displayName || 'User'}
                    fill
                    className='object-cover'
                    sizes='30px'
                    priority={isFirstPost}
                />
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
                        className='flex items-center gap-1.5 text-[#AAA] transition-colors cursor-pointer'
                        aria-label='Like'
                    >
                        <motion.div
                            whileHover={{ scale: 1, y: -1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                            <Image src={'/icons/favourite.svg'} alt='favourite' width={16} height={18} className='w-4 h-[18px]' />
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