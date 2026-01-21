import React from 'react'
import Image from 'next/image'


const PostActions = ({ postId, liked, countLike, countComment }) => {
    const handleLike = () => {
        // TODO: Implement like functionality
        console.log('Like post:', postId)
    }

    const handleComment = () => {
        // TODO: Implement comment functionality
        console.log('Comment on post:', postId)
    }

    const handleShare = () => {
        // TODO: Implement share functionality
        console.log('Share post:', postId)
    }

    return (
        <div className='py-[17px]'>
            <div className='flex items-center gap-4 '>
                {/* <button
          onClick={handleLike}
          className={`flex items-center gap-1.5 transition-colors ${
            liked
              ? 'text-mu-red hover:text-mu-red/80'
              : 'text-gray-600 hover:text-mu-red'
          }`}
          aria-label='Like'
        >
         <Image src={'/icons/favourite.svg'} alt='favourite' width={24} height={24} />
          <span className='text-sm font-medium'>
            {countLike || '0'}
          </span>
        </button> */}

                <button
                    onClick={handleLike}
                    className='flex items-center gap-1.5 text-gray-600  transition-colors'
                    aria-label='Like'
                >
                    <Image src={'/icons/favourite.svg'} alt='favourite' width={24} height={24} />
                    <span className='text-sm font-medium'>
                        {countLike || '0'}
                    </span>
                </button>

                <button
                    onClick={handleComment}
                    className='flex items-center gap-1.5 text-gray-600  transition-colors'
                    aria-label='Comment'
                >
                    <Image src={'/icons/chat.svg'} alt='comment' width={24} height={24} />
                    <span className='text-sm font-medium'>
                        {countComment || '0'}
                    </span>
                </button>
            </div>
        </div>
    )
}

export default PostActions