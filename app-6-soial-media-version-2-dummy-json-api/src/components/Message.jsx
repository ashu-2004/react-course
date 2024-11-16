import React from "react";

function Message({handleNewPost}) {
  return (
    <>
      <center>
        <h4 className="heading">There is no post.</h4>
        <button type="button" className="btn btn-primary" onClick={handleNewPost}>
          Get Posts From Server
        </button>
      </center>
    </>
  );
}

export default Message;
