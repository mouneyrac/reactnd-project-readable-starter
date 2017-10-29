//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import Vote from "./Vote";
import moment from "moment";

const PointsAuthor = ({ itemType, item }) => {
  return (
    <h6 className="card-subtitle mb-2 text-muted">
      <Vote {...{ itemType, item }} /> {item.voteScore} points - created by{" "}
      {item.author} {moment(item.timestamp).fromNow()}
    </h6>
  );
};

export default PointsAuthor;
