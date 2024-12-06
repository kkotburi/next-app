import React from "react";

const DetailPage = (props) => {
  const { params } = props;
  const { postId } = params;

  return <div>DetailPage: {postId}</div>;
};

export default DetailPage;
