//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

const PostInfo = ({ author, date, points }) => (
  <h6 className="card-subtitle mb-2 text-muted">
    {points} points - created by {author} {date}
  </h6>
);

PostInfo.propTypes = {};

export default PostInfo;
