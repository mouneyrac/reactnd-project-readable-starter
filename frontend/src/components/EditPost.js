//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import Crumbtrail from "./Crumbtrail";
import PostForm from "./PostForm";

const EditPost = ({ match }) => {
  let pageTitle = "Add";
  if (match.params.postId) {
    pageTitle = "Edit";
  }
  return (
    <div className="container">
      <Crumbtrail pageTitle={pageTitle} />

      <PostForm postId={match.params.postId} />
    </div>
  );
};

EditPost.propTypes = {};

export default EditPost;
