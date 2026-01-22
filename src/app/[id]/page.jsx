// "use client";
// import { useParams } from "next/navigation";
// import PostsService from "../../features/post/service/posts.service";
// import { useEffect, useState } from "react";

// const PostDetailPage = () => {
//     const { id } = useParams();
//     const [post, setPost] = useState(null);
//     useEffect(() => {
//         const fetchPost = async () => {
//             const res = await PostsService.getPostById(id);
//             setPost(res);
//         }
//         fetchPost();
//     }, [id]);
//     return (
//         <div className="container mx-auto px-4 py-8">
//             <div className=" gap-6">

//                 <h1 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">{post ? post.title : "Loading..."}</h1>
//                 <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">{post ? post.body : "Loading..."}</p>

//             </div>
//         </div>

//     )
// }

// export default PostDetailPage


import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page