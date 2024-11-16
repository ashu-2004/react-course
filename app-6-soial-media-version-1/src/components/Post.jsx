import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";

function Post({ post }) {

  const {deletePost}=useContext(PostListContext);

  return (
    <div className="card card-style" style={{ width: "30rem" }}>
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>deletePost(post.id)}>
          <MdDelete />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((postTag) => (
          <button type="button" className="btn btn-primary post-tags" key={postTag}>
            {postTag}
          </button>
        ))}
        <div className="alert-info reactions" role="alert">
          This post has been reacted by {post.reactions} people.
        </div>
      </div>
    </div>
  );
}

export default Post;
