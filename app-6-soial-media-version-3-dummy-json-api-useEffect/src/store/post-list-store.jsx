import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  PostList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const postReducer = (currentPost, action) => {
  let newPost = currentPost;
  if (action.type === "ADD_POST") {
    newPost = [
      {
        id: action.payload.id,
        title: action.payload.title,
        body: action.payload.body,
        userID: action.payload.userId,
        reactions: {
          likes: action.payload.reactions.likes,
          dislikes: action.payload.reactions.dislikes,
        },
        tags: action.payload.tags,
      },
      ...currentPost,
    ];
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

  const addPost = (userId, postTitle, postContent, like, dislike, tag) => {
    // console.log(`${userId} ${postTitle} ${postContent} ${like} ${dislike} ${tag}`);
    const addAction = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        userID: userId,
        reactions: {
          likes: like,
          dislikes: dislike,
        },
        tags: tag,
      },
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
      value={{ PostList, addPost, addInitialPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListContextProvider;
