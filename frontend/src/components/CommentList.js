//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

import Comment from "./Comment";
import CommentForm from "./CommentForm";

const CommentList = ({ postId }) => {
  let comments = (
    <div>
      <Comment commentId="3" />
    </div>
  );

  switch (postId) {
    case "1":
      comments = (
        <div>
          <Comment commentId="1" />
          <Comment commentId="2" />
        </div>
      );
      break;
    default:
  }

  return (
    <div className="">
      {comments}
      <CommentForm />
    </div>
  );
};

export default CommentList;
