import { createContext, useEffect, useReducer, useState } from "react";

export const PostListContext = createContext({
  PostList: [],
  loading:[],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const postReducer = (currentPost, action) => {  

  let newPost = currentPost;
  if (action.type === "ADD_POST") {
    newPost = [action.payload, ...currentPost];
  } else if (action.type === "ADD_INITIAL_POST") {
    newPost = action.payload.posts;
  } else if (action.type === "DELETE_POST") {
    newPost = currentPost.filter(
      (item) => item.id != action.payload.deletePostId
    );
  }
  return newPost;
};

const PostListContextProvider = ({ children }) => {
  const [PostList, dispatchPost] = useReducer(postReducer, []);
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
  const addPost = (post) => {
    // console.log(`${userId} ${postTitle} ${postContent} ${like} ${dislike} ${tag}`);
    const addAction = {
      type: "ADD_POST",
      payload: post,
    };
    dispatchPost(addAction);
  };

  const addInitialPost = (posts) => {
    const addInitialAction = {
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    };
    dispatchPost(addInitialAction);
  };

  const deletePost = (deletePostId) => {
    // console.log("Post I want to delete is: ",deletePostId);
    // let newArr = PostList.filter((item) => PostList.item != deletePostId);
    const deleteAction = {
      type: "DELETE_POST",
      payload: {
        deletePostId,
      },
    };
    dispatchPost(deleteAction);
  };

  return (
    <PostListContext.Provider
      value={{ PostList,loading, addPost, addInitialPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListContextProvider;
