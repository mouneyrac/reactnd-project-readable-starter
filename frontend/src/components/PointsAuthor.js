//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import Vote from "./Vote";

const PointsAuthor = ({ author, date, points }) => (
  <h6 className="card-subtitle mb-2 text-muted">
    <Vote /> {points} points - created by {author} {date}
  </h6>
);

export default PointsAuthor;
