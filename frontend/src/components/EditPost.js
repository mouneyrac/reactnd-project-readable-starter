//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import Crumbtrail from "./Crumbtrail";
import PostForm from "./PostForm";

const EditPost = ({ match, history }) => {
  let pageTitle = "Add";
  if (match.params.postId) {
    pageTitle = "Edit";
  }
  return (
    <div className="container">
      <Crumbtrail pageTitle={pageTitle} />

      <PostForm history={history} postId={match.params.postId} />
    </div>
  );
};

export default EditPost;
