import React from "react";

export const metadata = {
  title: "Detail Page",
  description: "Test of Metadata",
};

const DetailPage = (props) => {
  const { params } = props;
  const { postId } = params;

  return <div>DetailPage: {postId}</div>;
};

export default DetailPage;
