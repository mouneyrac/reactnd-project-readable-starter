//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";

const Comments = ({ postId, totalComments }) => {
  const postUrl = `/post/${postId}`;
  return (
    <Link className="card-link" to={postUrl}>
      Comments ({totalComments})
    </Link>
  );
};

export default Comments;
