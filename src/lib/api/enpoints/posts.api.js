import api from "../axios";

const PostsAPI = {
    getPosts: () => api.get("/posts"),
    getPostById: (id) => api.get(`/posts/${id}`),
    createPost: (post) => api.post("/posts", post),
};

export default PostsAPI;