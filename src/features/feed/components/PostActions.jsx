import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'


const PostActions = ({ postId, liked, countLike, countComment }) => {
    const handleLike = () => {
        // TODO: Implement like functionality
        console.log('Like post:', postId)
         window.location.href = 'https://mutoday.com/'
        
    }

    const handleComment = () => {
        // TODO: Implement comment functionality
        console.log('Comment on post:', postId)
         window.location.href = 'https://mutoday.com/'
    }

    const handleShare = () => {
        // TODO: Implement share functionality
        console.log('Share post:', postId)
         window.location.href = 'https://mutoday.com/'
    }

    return (
        <div className='py-[17px]'>
            <div className='flex items-center gap-4 '>
                <button
                    onClick={handleLike}
                    className='flex items-center gap-1.5 text-black transition-colors cursor-pointer'
                    aria-label='Like'
                >
                    <motion.div
                        whileHover={{ scale: 1, y: -1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Image src={'/icons/favourite2.svg'} alt='favourite' width={24} height={25} />
                    </motion.div>
                    <span className='text-sm font-medium'>
                        {countLike || '0'}
                    </span>
                </button>

                <button
                    onClick={handleComment}
                    className='flex items-center gap-1.5 text-black transition-colors cursor-pointer'
                    aria-label='Comment'
                >
                    <motion.div
                        whileHover={{ scale: 1, y: -1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <Image src={'/icons/chat.svg'} alt='comment' width={24} height={24} />
                    </motion.div>
                    <span className='text-sm font-medium'>
                        {countComment || '0'}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default PostActions