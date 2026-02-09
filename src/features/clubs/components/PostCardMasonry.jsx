"use client"
import React from 'react'
import MasonryCard from './MasonryCard'

const PostCardMasonry = ({ data, onPostClick }) => {
  // const posts = data?.data?.search?.data?.posts || []

  const posts = data?.data?.feedPublicV2?.data?.posts || []
  if (!posts || posts.length === 0) {
    return (
      <div className="w-full py-16 text-center text-gray-500">
        <p className="text-sm">ไม่พบข้อมูล</p>
      </div>
    )
  }

  const leftColumn = posts.filter((_, i) => i % 2 === 0)
  const rightColumn = posts.filter((_, i) => i % 2 === 1)

  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6">
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        {leftColumn.map((post) => (
          <MasonryCard key={post.id} data={post} onPostClick={onPostClick} />
        ))}
      </div>
      <div className="flex flex-col gap-2 sm:gap-4 md:gap-6">
        {rightColumn.map((post) => (
          <MasonryCard key={post.id} data={post} onPostClick={onPostClick} />
        ))}
      </div>
    </div>
  )
}

export default PostCardMasonry
