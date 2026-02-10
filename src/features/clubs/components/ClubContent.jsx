import React from 'react'
import PostCardMasonry from './PostCardMasonry'

const ClubContent = ({ data, onPostClick, loading = false }) => {
  return (
    <div className='w-full mx-auto'>
      <PostCardMasonry data={data} onPostClick={onPostClick} loading={loading} />
    </div>
  )
}

export default ClubContent