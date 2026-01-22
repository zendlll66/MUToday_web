"use client"
import React from 'react'
import { formatHashtagsInText, highlightHashTags } from '@/lib/textHelpers'

const PostContent = ({ postDetail, hashTag, user, createdAt, backgroundImage }) => {
    if (!postDetail && (!hashTag || hashTag.length === 0)) {
        return null
    }

    // ใช้ textColor จาก backgroundImage ถ้ามี
    const textColor = backgroundImage?.textColor || '#000000'



    // Format content with hashTag array highlighting
    const formatContentWithHashTags = (text) => {
        if (!text) return null

        // ถ้ามี hashTag array ให้ highlight คำเหล่านั้น
        if (hashTag && hashTag.length > 0) {
            return highlightHashTags(text, hashTag, textColor)
        }

        // ถ้าไม่มี hashTag array ให้ highlight แค่ #hashtag
        return formatHashtagsInText(text, textColor)
    }

    return (
        <div className=' space-y-2' style={{ color: textColor }}>
            <div className='flex flex-row gap-2'>
                {user?.displayName && (
                    <div className='font-semibold text-sm mb-1' style={{ color: textColor }}>
                        {user.displayName}
                    </div>
                )}
                {postDetail && (
                    <div className='text-sm leading-relaxed' style={{ color: textColor }}>
                        {formatContentWithHashTags(postDetail)}
                    </div>
                )}
            </div>

            

            <p className='text-[12px] font-medium mt-0.5' style={{ color: textColor }}>
                {createdAt || 'ไม่ทราบเวลา'}
            </p>
        </div>
    )
}

export default PostContent