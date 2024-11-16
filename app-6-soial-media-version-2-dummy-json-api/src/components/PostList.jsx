import React, { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Message from "./Message";

function PostList() {
  const { PostList, addInitialPost } = useContext(PostListContext);

  const handleServerPost = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => addInitialPost(obj.posts));
  };

  return (
    <>
      {PostList.length === 0 ? (
        <Message handleNewPost={handleServerPost} />
      ) : null}
      {PostList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default PostList;