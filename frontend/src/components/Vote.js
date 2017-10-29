//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { updatePost } from "../actions";
import { connect } from "react-redux";
import * as api from "../utils/api";

class Vote extends Component {
  updatePost(action) {
    const newScore =
      action === "plus"
        ? this.props.item.voteScore + 1
        : this.props.item.voteScore - 1;

    const updatedPost = Object.assign(this.props.item, {
      voteScore: newScore
    });
    console.log(updatedPost);
    api.updatePost(updatedPost);
    this.props.updatePost(updatedPost);
  }

  render() {
    console.log(this.props);
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
    updatePost: data => dispatch(updatePost(data))
  };
}

export default connect(null, mapDispatchToProps)(Vote);
