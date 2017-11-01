//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PostCard from "./PostCard";
import Crumbtrail from "./Crumbtrail";
import { connect } from "react-redux";
import { fetchPostComments } from "../actions";

// const Post = ({ match }) => {
class Post extends Component {
  componentDidMount() {
    const { match } = this.props;
    if (match.params.postId) {
      this.props.fetchPostComments(match.params.postId);
    }
  }

  render() {
    const { match, posts, history } = this.props;
    let postId;
    if (match.params.postId) {
      postId = match.params.postId;
    }

    const post = posts[postId];

    const postCard = posts[postId] ? (
      <PostCard
        postId={postId}
        showComments="1"
        post={post}
        history={history}
      />
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

function mapDispatchToProps(dispatch) {
  return {
    fetchPostComments: data => dispatch(fetchPostComments(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);
