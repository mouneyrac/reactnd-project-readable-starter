//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    const { postId } = this.props;

    const comments = this.props.comments
      .filter(comment => comment.parentId === postId)
      .map(comment => <Comment key={comment.id} comment={comment} />);

    return (
      <div className="">
        {comments}
        <CommentForm parentId={postId} />
      </div>
    );
  }
}

function mapStateToProps({ comments }) {
  const commentsarray = Object.keys(comments).map(key => comments[key]);
  commentsarray.sort(function(a, b) {
    if (!a || !b) {
      return 0;
    }

    return parseFloat(a.timestamp) - parseFloat(b.timestamp);
  });

  return {
    comments: commentsarray.filter(comment => comment)
  };
}

export default connect(mapStateToProps)(CommentList);
