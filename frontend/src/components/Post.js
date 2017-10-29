//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PostCard from "./PostCard";
import Crumbtrail from "./Crumbtrail";
import { connect } from "react-redux";

// const Post = ({ match }) => {
class Post extends Component {
  render() {
    const { match, posts } = this.props;
    let postId;
    if (match.params.postId) {
      postId = match.params.postId;
    }

    const post = posts[postId];

    const postCard = posts[postId] ? (
      <PostCard postId={postId} showComments="1" post={post} />
    ) : (
      <div className="container" />
    );

    return (
      <div className="container">
        <Crumbtrail pageTitle="View post" />

        {postCard}
      </div>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    posts
  };
}

export default connect(mapStateToProps)(Post);
