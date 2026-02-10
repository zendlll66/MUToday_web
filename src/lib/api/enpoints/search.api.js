import gql from '../gql'

const SEARCH_POST_FIELDS = `
  id
  isOwner
  countLike
  countComment
  typeImg
  postDetail
  followed
  createdAt
  hashTag
  images {
    id
    img
    thumbnail
  }
  backgroundImage {
    textColor
    img
  }
  user {
    id
    displayName
    imgProfile
  }
`

const SEARCH_META_FIELDS = `
  limit
  nextCursor
  hasNextPage
`

const SearchAPI = {
  searchPublicV2: (input = {}) => {
    const limit = input.limit ?? 10
    const keyword = (input.keyword ?? '').replace(/"/g, '\\"')
    const clubId = (input.clubId ?? '').replace(/"/g, '\\"')
    const interest = (input.interest ?? '').replace(/"/g, '\\"')
    const cursor = (input.cursor ?? '').replace(/"/g, '\\"')

    const query = `
      query {
        searchPublicV2(input: {
          limit: ${limit},
          keyword: "${keyword}",
          clubId: "${clubId}",
          interest: "${interest}",
          cursor: "${cursor}"
        }) {
          data {
            posts {
              ${SEARCH_POST_FIELDS}
            }
            meta {
              ${SEARCH_META_FIELDS}
            }
          }
        }
      }
    `
    return gql(query, {})
  },
}

export default SearchAPI
