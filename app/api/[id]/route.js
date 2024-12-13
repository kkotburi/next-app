import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = params;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const data = await response.json();

  return NextResponse.json(data);
};
