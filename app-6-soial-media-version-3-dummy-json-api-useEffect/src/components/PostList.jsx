import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Message from "./Message";

function PostList() {
  const { PostList, addInitialPost } = useContext(PostListContext);
 
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => addInitialPost(obj.posts));
  },[]);

  // const [fetchPost, setFetchPost] = useState(false);

  // if (!fetchPost) {
  // fetch("https://dummyjson.com/posts")
  //   .then((res) => res.json())
  //   .then((obj) => addInitialPost(obj.posts));
  // setFetchPost(true);
  // }

  return (
    <>
      {PostList.length === 0 ? <Message /> : null}
      {PostList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;