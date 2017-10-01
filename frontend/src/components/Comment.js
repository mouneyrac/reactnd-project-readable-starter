//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

const Comment = ({ commentId }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">This is my first comment</h6>

        <p className="card-text">This is the comment body.</p>
      </div>
    </div>
  );
};

Comment.propTypes = {};

export default Comment;
