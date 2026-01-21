import React from 'react'

const PostContent = ({ postDetail, hashTag, user, createdAt }) => {
    if (!postDetail && (!hashTag || hashTag.length === 0)) {
        return null
    }

    // แปลง hashtags ใน postDetail เป็น links หรือ highlight
    const formatContent = (text) => {
        if (!text) return null

        // แยกข้อความที่มี # และไม่มี #
        const parts = text.split(/(#\w+)/g)

        return (
            <div className='whitespace-pre-wrap'>
                {parts.map((part, index) => {
                    if (part.startsWith('#')) {
                        return (
                            <span
                                key={index}
                                className='text-mu-violet font-medium cursor-pointer hover:underline'
                            >
                                {part}
                            </span>
                        )
                    }
                    return <span key={index}>{part}</span>
                })}
            </div>
        )
    }

    return (
        <div className=' py-3 space-y-2  text-black'>
            <div className='flex flex-row gap-2'>
                {user?.displayName && (
                    <div className='font-semibold text-sm text-black mb-1'>
                        {user.displayName}
                    </div>
                )}
                {postDetail && (
                    <div className='text-sm leading-relaxed'>
                        {formatContent(postDetail)}
                    </div>
                )}
            </div>

            {hashTag && hashTag.length > 0 && (
                <div className='flex flex-wrap gap-1.5 pt-1'>
                    {hashTag.slice(0, 10).map((tag, index) => (
                        <span
                            key={index}
                            className='inline-block text-xs text-mu-violet bg-mu-button px-2 py-1 rounded-full cursor-pointer hover:bg-opacity-80 transition-colors'
                        >
                            #{tag}
                        </span>
                    ))}
                    {hashTag.length > 10 && (
                        <span className='text-xs text-gray-500'>
                            +{hashTag.length - 10} เพิ่มเติม
                        </span>
                    )}
                </div>
            )}

            <p className='text-[12px] font-medium text-[#AAAAAA] mt-0.5'>
                {createdAt || 'ไม่ทราบเวลา'}
            </p>
        </div>
    )
}

export default PostContent