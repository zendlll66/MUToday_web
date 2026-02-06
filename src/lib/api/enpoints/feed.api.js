import gql from "../gql";

const FEED_QUERY = `
  query {
  feedPublicV2(input: { limit: 10, cursor: "2026-02-04T07:12:09.371Z", page: 4 }) {
    data {
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
    }
  }
}

`;

const FeedAPI = {
    getFeed: async (variables = {}) => {
        const input = {
            limit: variables.limit ?? 10,
            page: variables.page ?? 1,
        };
        if (variables.cursor) {
            input.cursor = variables.cursor;
        }
        return gql(FEED_QUERY, { input });
    },
};

export default FeedAPI;