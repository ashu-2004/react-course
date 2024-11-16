import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import Message from "./Message";
import Spinner from "./Spinner";

function PostList() {
  const { PostList, addInitialPost } = useContext(PostListContext);
  const [loading, setLoadding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setLoadding(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((obj) => {
        addInitialPost(obj.posts);
        setLoadding(false);
      });
    return () => {
      console.log("Process killed...");
      controller.abort();
    };
  }, []);

  return (
    <>
      {loading ? <Spinner /> : null}
      {!loading && PostList.length === 0 ? <Message /> : ""}
      {!loading && PostList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
