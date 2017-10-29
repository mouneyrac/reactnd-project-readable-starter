//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PostCard from "./PostCard";
import { connect } from "react-redux";

// const PostCardList = () => (
class PostCardList extends Component {
  render() {
    const postCards = this.props.posts.map(post => (
      <PostCard key={post.id} post={post} />
    ));
    return <div className="">{postCards}</div>;
  }
}

function mapStateToProps({ posts, sorting }) {
  const postsarray = Object.keys(posts).map(key => posts[key]);
  postsarray.sort(function(a, b) {
    if (!a || !b) {
      return 0;
    }
    if (sorting === "date") {
      return parseFloat(b.timestamp) - parseFloat(a.timestamp);
    } else {
      return parseFloat(b.voteScore) - parseFloat(a.voteScore);
    }
  });

  return {
    posts: postsarray.filter(post => post)
  };
}

export default connect(mapStateToProps)(PostCardList);
