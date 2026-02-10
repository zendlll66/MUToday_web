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
  getCommentsByPostId: (postId, variables = {}) => {
    const safePostId = String(postId || '').replace(/"/g, '\\"')
    const query = `
      query {
        commentPublicByPostIdV2(input: { postId: "${safePostId}" }) {
          comments {
            ${COMMENT_FIELDS}
          }
          meta {
            ${META_FIELDS}
          }
        }
      }
    `
    return gql(query, variables)
  },

  getRepliesByCommentId: (commentId, variables = {}) => {
    const safeCommentId = String(commentId || '').replace(/"/g, '\\"')
    const query = `
      query {
        replyPublicByCommentIdV2(input: { commentIds: "${safeCommentId}" }) {
          comments {
            ${REPLY_FIELDS}
          }
          meta {
            ${META_FIELDS}
          }
        }
      }
    `
    return gql(query, variables)
  },
}

export default CommentsAPI
