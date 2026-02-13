"use client"

import React from 'react'

/**
 * Skeleton placeholder matching MasonryCard layout:
 * - Image area (variable height)
 * - Optional 2-line text block
 */
const MasonryCardSkeleton = () => {
  return (
    <article className='w-full min-w-0 overflow-hidden rounded-lg sm:rounded-[20px] md:rounded-[24px]'>
      {/* Media block - matches card image area */}
      <div className='w-full aspect-4/5 min-h-[120px] rounded-lg sm:rounded-[20px] md:rounded-[24px] bg-gray-200 animate-shimmer' />
      {/* Content block - 2 lines like PostContent */}
      <div className='px-2 sm:px-4 md:px-6 mt-2 sm:mt-3 md:mt-4 space-y-2'>
        <div className='h-3 sm:h-4 w-full max-w-full rounded bg-gray-200 animate-shimmer' />
        <div className='h-3 sm:h-4 w-[80%] rounded bg-gray-200 animate-shimmer' />
      </div>
    </article>
  )
}

export default MasonryCardSkeleton
