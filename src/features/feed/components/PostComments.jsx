'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { Heart, ChevronDown } from 'lucide-react'
import CommentsAPI from '@/lib/api/enpoints/comments.api'

const CommentItem = ({
  comment,
  isReply = false,
  onLoadReplies,
  replies,
  repliesLoading,
  repliesMeta,
  onLoadMoreReplies,
}) => {
  const [repliesExpanded, setRepliesExpanded] = useState(false)
  const countReply = Number(comment.countReply) || 0
  const hasReplies = countReply > 0
  const replyList = replies?.[comment.id]?.comments || []
  const replyMeta = replies?.[comment.id]?.meta
  const hasMoreReplies = replyMeta?.hasNextPage
  const isLoadingReplies = !!repliesLoading?.[comment.id]

  const handleToggleReplies = useCallback(() => {
    if (!repliesExpanded && hasReplies && replyList.length === 0 && onLoadReplies) {
      onLoadReplies(comment.id)
    }
    setRepliesExpanded((prev) => !prev)
  }, [repliesExpanded, hasReplies, replyList.length, comment.id, onLoadReplies])

  return (
    <div className={isReply ? 'pl-6 mt-3' : 'py-3'}>
      <div className="flex gap-3">
        <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0">
          <Image
            src={comment.user?.imgProfile || '/icons/logo01.svg'}
            alt={comment.user?.displayName || ''}
            width={32}
            height={32}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-medium text-sm text-black">
              {comment.user?.displayName || 'ผู้ใช้'}
            </span>
            <span className="text-xs text-gray-400">{comment.createdAt || ''}</span>
          </div>
          <p className="text-sm text-black mt-0.5 break-words whitespace-pre-wrap">
            {comment.comment || ''}
          </p>
          <div className="flex items-center justify-between gap-2 mt-1">
            <button
              type="button"
              className="text-xs text-gray-400 hover:text-gray-600"
              onClick={() => {}}
            >
              ตอบกลับ
            </button>
            <div className="flex items-center gap-1 text-gray-400">
              <Heart className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span className="text-xs">{comment.countLike ?? '0'}</span>
            </div>
          </div>

          {hasReplies && (
            <div className="mt-2 border-l border-gray-200 pl-3">
              <button
                type="button"
                onClick={handleToggleReplies}
                className="text-xs text-gray-400 hover:text-gray-600"
              >
                {repliesExpanded
                  ? replyList.length > 0
                    ? `ซ่อนข้อความตอบกลับ ${countReply} รายการ`
                    : isLoadingReplies
                      ? 'กำลังโหลด...'
                      : `ดูข้อความตอบกลับ ${countReply} รายการ`
                  : `ดูข้อความตอบกลับ ${countReply} รายการ`}
              </button>
              {repliesExpanded && replyList.length > 0 && (
                <div className="mt-2 space-y-0">
                  {replyList.map((reply) => (
                    <CommentItem
                      key={reply.id}
                      comment={reply}
                      isReply
                    />
                  ))}
                  {hasMoreReplies && (
                    <button
                      type="button"
                      onClick={() => onLoadMoreReplies?.(comment.id, replyMeta?.nextCursor)}
                      className="text-xs text-gray-500 mt-2 hover:underline"
                    >
                      ดูตอบกลับเพิ่มเติม
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function PostComments({ postId, totalCount: initialTotalCount, className = '' }) {
  const [comments, setComments] = useState([])
  const [meta, setMeta] = useState(null)
  const [loading, setLoading] = useState(true)
  const [loadingMore, setLoadingMore] = useState(false)
  const [replies, setReplies] = useState({})
  const [repliesLoading, setRepliesLoading] = useState({})
  const [repliesMeta, setRepliesMeta] = useState({})

  const totalCount = initialTotalCount ?? comments.length

  const fetchComments = useCallback(async (cursor = '') => {
    if (!postId) return
    const isLoadMore = !!cursor
    if (isLoadMore) setLoadingMore(true)
    else setLoading(true)
    try {
      const res = await CommentsAPI.getCommentsByPostId(postId, {
        limit: 10,
        cursor: cursor || undefined,
      })
      const data = res?.data?.commentPublicByPostIdV2
      const list = data?.comments || []
      const nextMeta = data?.meta
      if (isLoadMore) {
        setComments((prev) => [...prev, ...list])
      } else {
        setComments(list)
      }
      setMeta(nextMeta || null)
    } catch (err) {
      console.error('PostComments: fetch comments failed', err)
    } finally {
      if (isLoadMore) setLoadingMore(false)
      else setLoading(false)
    }
  }, [postId])

  useEffect(() => {
    fetchComments()
  }, [fetchComments])

  const requestedRepliesRef = React.useRef(new Set())

  const loadReplies = useCallback(async (commentId) => {
    if (!commentId) return
    if (requestedRepliesRef.current.has(commentId)) return
    requestedRepliesRef.current.add(commentId)
    setRepliesLoading((prev) => ({ ...prev, [commentId]: true }))
    try {
      const res = await CommentsAPI.getRepliesByCommentId(commentId, { limit: 10 })
      const data = res?.data?.replyPublicByCommentIdV2 ?? res?.replyPublicByCommentIdV2
      const list = data?.comments ?? []
      const nextMeta = data?.meta ?? null
      setReplies((prev) => ({
        ...prev,
        [commentId]: {
          comments: list,
          meta: nextMeta,
        },
      }))
      setRepliesMeta((prev) => ({
        ...prev,
        [commentId]: nextMeta,
      }))
    } catch (err) {
      console.error('PostComments: fetch replies failed', err)
      requestedRepliesRef.current.delete(commentId)
      setReplies((prev) => ({ ...prev, [commentId]: { comments: [], meta: null } }))
    } finally {
      setRepliesLoading((prev) => ({ ...prev, [commentId]: false }))
    }
  }, [])

  const loadMoreReplies = useCallback(async (commentId, cursor) => {
    if (!commentId || !cursor) return
    try {
      const res = await CommentsAPI.getRepliesByCommentId(commentId, { limit: 10, cursor })
      const data = res?.data?.replyPublicByCommentIdV2 ?? res?.replyPublicByCommentIdV2
      const newList = data?.comments ?? []
      const nextMeta = data?.meta
      setReplies((prev) => ({
        ...prev,
        [commentId]: {
          comments: [...(prev[commentId]?.comments || []), ...newList],
          meta: nextMeta || null,
        },
      }))
      setRepliesMeta((prev) => ({ ...prev, [commentId]: nextMeta || null }))
    } catch (err) {
      console.error('PostComments: load more replies failed', err)
    }
  }, [])

  const hasNextPage = meta?.hasNextPage
  const handleLoadMoreComments = () => {
    if (hasNextPage && meta?.nextCursor && !loadingMore) {
      fetchComments(meta.nextCursor)
    }
  }

  if (loading && comments.length === 0) {
    return (
      <section className="px-4 py-4 border-t border-gray-100">
        <p className="text-sm text-gray-500">กำลังโหลดความคิดเห็น...</p>
      </section>
    )
  }

  return (
    <section className={` w-full ${className}`}>
      <h3 className="text-xs sm:text-sm font-medium text-[#777777] mb-2">
        {totalCount} ความคิดเห็น
      </h3>

      <div className="">
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onLoadReplies={loadReplies}
            replies={replies}
            repliesLoading={repliesLoading}
            repliesMeta={repliesMeta}
            onLoadMoreReplies={loadMoreReplies}
          />
        ))}
      </div>

      {hasNextPage && (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={handleLoadMoreComments}
            disabled={loadingMore}
            className="flex items-center gap-1 text-sm font-medium text-black hover:opacity-80 disabled:opacity-50"
          >
            ดูความคิดเห็นเพิ่มเติม
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      )}
    </section>
  )
}
