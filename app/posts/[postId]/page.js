"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

// export async function generateMetadata({ params, searchParams }, parent) {
//   // read route params
//   const id = params.postId;

//   // fetch data
//   const post = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${id}`
//   ).then((res) => res.json());

//   return {
//     title: post.title,
//   };
// }

// const DetailPage = (props) => {
//   const { params } = props;
//   const { postId } = params;

//   const router = useRouter();

//   return (
//     <div>
//       <Link href="/">Home</Link>
//       <div onClick={() => router.push("/")}>Home</div>
//       <div>DetailPage: {postId}</div>
//     </div>
//   );
// };

// export default DetailPage;

// Data Fetching
// 1. Server Side Rendering
// 2. Static Site Generation
// 3. Incrementral Static Generation

const getPost = async (postId) => {
  const response = await fetch(`http://localhost:4000/posts/${postId}`);
  const data = await response.json();

  return data;
};

const DetailPost = async (props) => {
  const { params } = props;
  const { postId } = params;
  const post = await getPost(postId);

  return (
    <div>
      DetailPost:
      {post.id}
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default DetailPost;
