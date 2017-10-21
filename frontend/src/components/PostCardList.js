//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PostCard from "./PostCard";

const PostCardList = () => (
  <div className="">
    <PostCard postId="1" />
    <PostCard postId="2" />
  </div>
);

export default PostCardList;
