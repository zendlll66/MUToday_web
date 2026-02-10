import gql from '../gql'

const COMMENT_FIELDS = `
  id
  isOwner
  comment
  countLike
  createdAt
  typeComment
  hashTag
  liked
  countReply
  user {
    id
    displayName
    imgProfile
  }
`

const REPLY_FIELDS = `
  id
  replyId
  comment
  isOwner
  countLike
  createdAt
  typeComment
  hashTag
  liked
  user {
    id
    displayName
    imgProfile
  }
`

const META_FIELDS = `
  limit
  nextCursor
  hasNextPage
`

const CommentsAPI = {
  getCommentsByPostId: (postId, { limit = 10, cursor = '' } = {}) => {
    const safePostId = String(postId || '').replace(/"/g, '\\"')
    const safeCursor = String(cursor || '').replace(/"/g, '\\"')
    const input = cursor
      ? `{ postId: "${safePostId}", limit: ${Number(limit) || 10}, cursor: "${safeCursor}" }`
      : `{ postId: "${safePostId}", limit: ${Number(limit) || 10} }`
    const query = `
      query {
        commentPublicByPostIdV2(input: ${input}) {
          comments {
            ${COMMENT_FIELDS}
          }
          meta {
            ${META_FIELDS}
          }
        }
      }
    `
    return gql(query)
  },

  getRepliesByCommentId: (commentId, { limit = 10, cursor = '' } = {}) => {
    const safeCommentId = String(commentId || '').replace(/"/g, '\\"')
    const safeCursor = String(cursor || '').replace(/"/g, '\\"')
    const input = cursor
      ? `{ commentId: "${safeCommentId}", limit: ${Number(limit) || 10}, cursor: "${safeCursor}" }`
      : `{ commentId: "${safeCommentId}", limit: ${Number(limit) || 10} }`
    const query = `
      query {
        replyPublicByCommentIdV2(input: ${input}) {
          comments {
            ${REPLY_FIELDS}
          }
          meta {
            ${META_FIELDS}
          }
        }
      }
    `
    return gql(query)
  },
}

export default CommentsAPI
