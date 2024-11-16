import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Message from "./Message";
import Spinner from "./Spinner";

function PostList() {
  const { PostList, loading } = useContext(PostListContext);
  
  return (
    <>
      {loading ? <Spinner /> : null}
      {!loading && PostList.length === 0 ? <Message /> : ""}
      {!loading && PostList.map((post) => <Post key={post} post={post} />)}
    </>
  );
}

export default PostList;
