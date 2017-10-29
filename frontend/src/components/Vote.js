//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { updatePost, updateComment } from "../actions";
import { connect } from "react-redux";
import * as api from "../utils/api";

class Vote extends Component {
  updatePost(action) {
    const newScore =
      action === "plus"
        ? this.props.item.voteScore + 1
        : this.props.item.voteScore - 1;

    const updatedItem = Object.assign(this.props.item, {
      voteScore: newScore
    });
    if (this.props.itemType === "post") {
      api.updatePost(updatedItem);
      this.props.updatePost(updatedItem);
    } else if (this.props.itemType === "comment") {
      api.updateComment(updatedItem);
      this.props.updateComment(updatedItem);
    }
  }

  render() {
    return (
      <span>
        <a className="votebutton" onClick={() => this.updatePost("plus")}>
          [+]
        </a>

        <a className="votebutton" onClick={() => this.updatePost("minus")}>
          [-]
        </a>
      </span>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updatePost: data => dispatch(updatePost(data)),
    updateComment: data => dispatch(updateComment(data))
  };
}

export default connect(null, mapDispatchToProps)(Vote);
