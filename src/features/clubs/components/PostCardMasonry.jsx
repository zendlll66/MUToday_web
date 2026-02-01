"use client"
import React from 'react'
import { Masonry } from 'masonic'
import MasonryCard from './MasonryCard'

const PostCardMasonry = ({ data }) => {
  // Extract posts from data structure
  const posts = data?.data?.search?.data?.posts || []

  if (!posts || posts.length === 0) {
    return (
      <div className="w-full py-8 text-center text-gray-500">
        ไม่พบข้อมูล
      </div>
    )
  }

  // Render function for Masonry
  const renderCard = ({ index, data: post, width }) => {
    return (
      <div style={{ width }} className="mb-4">
        <MasonryCard data={post} />
      </div>
    )
  }

  return (
    <div className=" mt-6 px-4">
      <Masonry
        items={posts}
        render={renderCard}
        columnGutter={16}
        columnWidth={180}
        minColumnWidth={250}
        maxColumnWidth={400}
      />
    </div>
  )
}

export default PostCardMasonry
