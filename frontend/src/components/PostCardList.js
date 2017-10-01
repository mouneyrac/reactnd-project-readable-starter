//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";

const PostCardList = () => (
  <div className="">
    <PostCard postId="1" />
    <PostCard postId="2" />
  </div>
);

PostCardList.propTypes = {};

export default PostCardList;
