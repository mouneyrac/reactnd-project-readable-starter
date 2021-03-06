//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import moment from "moment";
import * as api from "../utils/api";
import { addComment, updateComment, updatePost } from "../actions";
import { connect } from "react-redux";

class CommentForm extends Component {
  state = {
    theComment: {
      id: "",
      body: "",
      author: this.props.fullname,
      voteScore: 1,
      timestamp: moment().valueOf(),
      parentId: this.props.parentId
    }
  };

  componentWillMount() {
    if (this.props.comment && this.props.comment.id !== "") {
      this.setState({ theComment: this.props.comment });
    }
  }

  updateTheComment(field, value) {
    let newComment = Object.assign(this.state.theComment, {
      [field]: value
    });
    this.setState({ theComment: newComment });
  }

  save(theComment) {
    if (theComment.id === "") {
      const newid = moment().valueOf();
      let newComment = Object.assign(theComment, {
        id: `${newid}`
      });

      api.addComment(newComment);
      this.props.addComment(newComment);

      // also update the post.
      let newPost = Object.assign(this.props.posts[theComment.parentId], {
        commentCount: this.props.posts[theComment.parentId].commentCount + 1
      });
      this.props.updatePost(newPost);
    } else {
      api.updateComment(theComment);
      this.props.updateComment(theComment);
      if (this.props.closeModal) {
        this.props.closeModal();
      }
    }
  }

  render() {
    const buttonTitle =
      this.state.theComment.id !== "" ? "Update comment" : "Add comment";

    return (
      <div className="card">
        <div className="card-body">
          <textarea
            rows="10"
            value={this.state.theComment.body}
            type="text"
            placeholder="Comment content"
            className="form-control inputfield"
            aria-label="body"
            onChange={event =>
              this.updateTheComment("body", event.target.value)}
          />

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.save(this.state.theComment)}
          >
            {buttonTitle}
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ comments, user, posts }) {
  return {
    fullname: user.fullname,
    comments,
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addComment: data => dispatch(addComment(data)),
    updateComment: data => dispatch(updateComment(data)),
    updatePost: data => dispatch(updatePost(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
