//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PostCard from "./PostCard";
import Crumbtrail from "./Crumbtrail";

const Post = ({ match }) => {
  let postId;
  if (match.params.postId) {
    postId = match.params.postId;
  }
  return (
    <div className="container">
      <Crumbtrail pageTitle="View post" />

      <PostCard postId={postId} showComments="1" />
    </div>
  );
};

Post.propTypes = {};

export default Post;
