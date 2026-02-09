import gql from "../gql";

const POST_BY_ID_FIELDS = `
    id
    postDetail
    createdAt
    countLike
    countComment
    typeImg
    liked
    isOwner
    followed
    address
    lat
    lng
    hashTag
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
`;

const PostsAPI = {
    getPostsByPostId: (postId) => {
        const safePostId = String(postId || '').replace(/"/g, '\\"')
        const query = `
          query {
            feedPublicByIdV2(postId: "${safePostId}") {
              data {
                ${POST_BY_ID_FIELDS}
              }
            }
          }
        `
        return gql(query, {})
    },
};

export default PostsAPI;