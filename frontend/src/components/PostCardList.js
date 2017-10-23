//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PostCard from "./PostCard";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

// const PostCardList = () => (
class PostCardList extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    console.log(this.props.posts);
    const postCards = this.props.posts.map(post => (
      <PostCard key={post.id} {...post} />
    ));
    return <div className="">{postCards}</div>;
  }
}

function mapStateToProps({ posts }) {
  const postsarray = Object.keys(posts).map(key => posts[key]);

  return {
    posts: postsarray
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostCardList);
