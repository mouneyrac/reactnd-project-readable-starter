//@flow
import React from "react";
import PropTypes from "prop-types";
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

Comments.propTypes = {};

export default Comments;
