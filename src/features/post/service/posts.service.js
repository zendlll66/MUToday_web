import PostsAPI from "@/lib/api/enpoints/posts.api";

const PostsService = {
    getPosts: async () => {
        const response = await PostsAPI.getPosts();
        return response.data;
    },
    getPostById: async (id) => {
        const response = await PostsAPI.getPostById(id);
        return response.data;
    },
    createPost: async (post) => {
        const response = await PostsAPI.createPost(post);
        return response.data;
    },
}

export default PostsService;