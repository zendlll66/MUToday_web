import gql from "../gql";

const FEED_FIELDS = `
  posts {
    id
    isOwner
    typeImg
    postDetail
    createdAt
    countLike
    countComment
    hashTag
    address
    lat
    lng
    liked
    images {
      id
      img
      thumbnail
    }
    backgroundImage {
      img
      textColor
    }
    user {
      id
      displayName
      imgProfile
    }
  }
  meta {
    limit
    nextCursor
    hasNextPage
  }
`;

const FeedAPI = {
    getFeed: async (variables = {}) => {
        const limit = variables.limit ?? 10
        const page = variables.page ?? 1
        const cursor = variables.cursor ?? new Date().toISOString()

        const query = `
          query {
            feedPublicV2(input: { limit: ${limit}, cursor: "${cursor}", page: ${page} }) {
              data {
                ${FEED_FIELDS}
              }
            }
          }
        `
        return gql(query, {})
    },
};

export default FeedAPI;