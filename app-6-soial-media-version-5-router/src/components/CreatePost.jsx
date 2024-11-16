import React, { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

function CreatePost() {
  const { addPost } = useContext(PostListContext);

  const userIdEL = useRef();
  const postTitleEL = useRef();
  const postContentEL = useRef();
  const likeEL = useRef();
  const dislikeEL = useRef();
  const tagsEL = useRef();

  const handleOnChange = (event) => {
    event.preventDefault();
    const userId = userIdEL.current.value;
    const postTitle = postTitleEL.current.value;
    const postContent = postContentEL.current.value;
    const like = likeEL.current.value;
    const dislike = dislikeEL.current.value;
    const tag = tagsEL.current.value.match(/\b\w+\b/g);

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: postTitle,
        body: postContent,
        reactions: {
          likes: like,
          dislikes: dislike,
        },
        userId: userId,
        tags: tag,
      }),
    })
      .then((res) => res.json())
      .then((post) => addPost(post));

    userIdEL.current.value = "";
    postTitleEL.current.value = "";
    postContentEL.current.value = "";
    likeEL.current.value = "";
    dislikeEL.current.value = "";
    tagsEL.current.value = "";
  };

  return (
    <>
      <center>
        <form
          className="form-control1"
          onSubmit={(event) => handleOnChange(event)}
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label post-label">
              Your User Id
            </label>
            <input
              type="text"
              ref={userIdEL}
              className="form-control"
              id="userId"
              placeholder="Enter your User Id"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="title" className="form-label post-label">
              Post Title
            </label>
            <input
              type="text"
              ref={postTitleEL}
              className="form-control"
              id="title"
              placeholder="Enter your Post Title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="posttitle" className="form-label post-label">
              Post Content
            </label>
            <textarea
              type="text"
              ref={postContentEL}
              className="form-control"
              id="title"
              rows="3"
              placeholder="Tell me more about it"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="posttitle" className="form-label post-label">
              Number of Reactions
            </label>
            <div className="row">
              <div className="col">
                <label htmlFor="posttitle" className="form-label post-label">
                  likes
                </label>
                <input
                  type="text"
                  ref={likeEL}
                  className="form-control"
                  id="title"
                  placeholder="likes"
                />
              </div>
              <div className="col">
                <label htmlFor="posttitle" className="form-label post-label">
                  Dislikes
                </label>
                <input
                  type="text"
                  ref={dislikeEL}
                  className="form-control"
                  id="title"
                  placeholder="Dislikes"
                />
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="posttitle" className="form-label post-label">
              Enter your Hashtags here
            </label>
            <input
              type="text"
              ref={tagsEL}
              className="form-control"
              id="title"
              placeholder="Please Enter tags using space"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Post
          </button>
        </form>
      </center>
    </>
  );
}

export default CreatePost;
