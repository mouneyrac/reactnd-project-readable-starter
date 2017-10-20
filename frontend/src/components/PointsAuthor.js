//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import Vote from "./Vote";

const PointsAuthor = ({ author, date, points }) => (
  <h6 className="card-subtitle mb-2 text-muted">
    <Vote /> {points} points - created by {author} {date}
  </h6>
);

PointsAuthor.propTypes = {};

export default PointsAuthor;
