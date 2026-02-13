"use client"
import React from 'react'
import MasonryCard from './MasonryCard'
import MasonryCardSkeleton from './MasonryCardSkeleton'

const SKELETON_COUNT = 6

const PostCardMasonry = ({ data, onPostClick, loading = false }) => {
  const posts = data?.data?.feedPublicV2?.data?.posts || data?.data?.searchPublicV2?.data?.posts || []

  if (loading) {
    const leftColumn = Array.from({ length: Math.ceil(SKELETON_COUNT / 2) }, (_, i) => i * 2)
    const rightColumn = Array.from({ length: Math.ceil(SKELETON_COUNT / 2) }, (_, i) => i * 2 + 1)
    return (
      <div className="w-full min-w-0 grid grid-cols-2 gap-1.5 sm:gap-4 md:gap-6">
        <div className="min-w-0 flex flex-col gap-1.5 sm:gap-4 md:gap-6">
          {leftColumn.map((i) => (
            <MasonryCardSkeleton key={`skeleton-left-${i}`} />
          ))}
        </div>
        <div className="min-w-0 flex flex-col gap-1.5 sm:gap-4 md:gap-6">
          {rightColumn.map((i) => (
            <MasonryCardSkeleton key={`skeleton-right-${i}`} />
          ))}
        </div>
      </div>
    )
  }

  // if (!posts || posts.length === 0) {
  //   return (
  //     <div className="w-full py-16 text-center text-gray-500">
  //       <p className="text-sm">ไม่พบข้อมูล</p>
  //     </div>
  //   )
  // }

  const leftColumn = posts.filter((_, i) => i % 2 === 0)
  const rightColumn = posts.filter((_, i) => i % 2 === 1)

  return (
    <div className="w-full min-w-0 grid grid-cols-2 gap-1.5 sm:gap-4 md:gap-6">
      <div className="min-w-0 flex flex-col gap-1.5 sm:gap-4 md:gap-6">
        {leftColumn.map((post, idx) => (
          <MasonryCard key={post.id} data={post} onPostClick={onPostClick} priority={idx === 0} />
        ))}
      </div>
      <div className="min-w-0 flex flex-col gap-1.5 sm:gap-4 md:gap-6">
        {rightColumn.map((post, idx) => (
          <MasonryCard key={post.id} data={post} onPostClick={onPostClick} priority={idx === 0} />
        ))}
      </div>
    </div>
  )
}

export default PostCardMasonry
