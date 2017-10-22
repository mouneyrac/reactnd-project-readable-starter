//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import Vote from "./Vote";
import moment from "moment";

const PointsAuthor = ({ author, timestamp, points, itemtype, itemid }) => {
  return (
    <h6 className="card-subtitle mb-2 text-muted">
      <Vote /> {points} points - created by {author}{" "}
      {moment.unix(timestamp).fromNow()}
    </h6>
  );
};

export default PointsAuthor;
