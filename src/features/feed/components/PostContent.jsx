"use client"
import React from 'react'
import { formatHashtagsInText, highlightHashTags } from '@/lib/textHelpers'

const PostContent = ({ postDetail, hashTag, user, createdAt, backgroundImage, compact, feed = false, truncate = true, className = '' }) => {
    if (!postDetail && (!hashTag || hashTag.length === 0)) {
        return null
    }

    // ใช้ textColor จาก backgroundImage ถ้ามี ไม่มี hashtag ใช้สีดำเป็นค่าเริ่มต้น
    const textColor = backgroundImage?.textColor || '#000000'



    // Format content with hashTag array highlighting
    const formatContentWithHashTags = (text) => {
        if (!text) return null

        // ถ้ามี hashTag array ให้ highlight คำเหล่านั้น
        if (hashTag && hashTag.length > 0) {
            return highlightHashTags(text, hashTag, '#000000')
        }

        // ถ้าไม่มี hashTag array ใช้สีดำเป็นค่าเริ่มต้น
        return formatHashtagsInText(text, '#000000')
    }

    return (
        <div className={` space-y-2 ${className}`}>
            <div
                className={`leading-[140%] tracking-normal break-words whitespace-pre-wrap ${truncate ? 'line-clamp-2' : ''} ${compact ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm'}`}
                style={{ fontFamily: 'MiSansMU, sans-serif' }}
                title={truncate ? postDetail : undefined}
            >
                {user?.displayName && !feed && (
                    <span className='font-semibold shrink-0'>{user.displayName}</span>
                )}
                {user?.displayName && !feed && postDetail && '\u00A0'}
                {postDetail && (
                    <span className='font-medium inline'>{formatContentWithHashTags(postDetail)}</span>
                )}
            </div>


            {createdAt && (
                <p className='text-[12px] font-medium mt-0.5' >
                    {createdAt}
                </p>
            )}

        </div>
    )
}

export default PostContent