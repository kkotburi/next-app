import React from "react";

export const metadata = {
  title: "Post",
  description: "Test of Metadata",
};

const PostsLayout = ({ children }) => {
  return (
    <>
      <h1>PostsLayout</h1>
      <div>{children}</div>
    </>
  );
};

export default PostsLayout;
