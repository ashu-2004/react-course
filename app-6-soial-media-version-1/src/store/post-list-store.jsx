import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  PostList: [],
  addPost: () => {},
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
        reactions: action.payload.reactions,
        tags: action.payload.tags,
      },
      ...currentPost,
    ];
  } else if (action.type === "DELETE_POST") {
    newPost = currentPost.filter(
      (item) => item.id != action.payload.deletePostId
    );
  }
  return newPost;
};

const PostListContextProvider = ({ children }) => {
  const [PostList, dispatchPost] = useReducer(postReducer, DEFAULT_POST);

  const addPost = (userId, postTitle, postContent, reactions, tag) => {
    // console.log(`${userId} ${postTitle} ${postContent} ${reactions} ${tag}`);
    const addAction = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postContent,
        userID: userId,
        reactions: reactions,
        tags: tag,
      },
    };
    dispatchPost(addAction);
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
    <PostListContext.Provider value={{ PostList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST = [
  {
    id: 1,
    title: "Vacation on Mahabaleshwar",
    body: "After long working frustration, I am on vacation for Mind Freshness",
    userID: "user_01",
    reactions: 2,
    tags: ["Vacation", "Enjoying", "Mumbai"],
  },
  {
    id: 2,
    title: "Passed in BE",
    body: "After long working frustration,I have passed BE which is unbeliveble experience for me.",
    userID: "user_10",
    reactions: 16,
    tags: ["BE_Passed", "Graduated"],
  },
];

export default PostListContextProvider;
