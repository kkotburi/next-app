import React from "react";

export async function generateMetadata({ params, searchParams }, parent) {
  // read route params
  const id = params.postId;

  // fetch data
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return {
    title: post.title,
  };
}

const DetailPage = (props) => {
  const { params } = props;
  const { postId } = params;

  return <div>DetailPage: {postId}</div>;
};

export default DetailPage;
