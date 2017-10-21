//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PointsAuthor from "./PointsAuthor";
import EditCommentBadge from "./EditCommentBadge";
import DeleteBadge from "./DeleteBadge";

const Comment = ({ commentId }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h6 className="card-title">
          This is my first comment &nbsp;
          <EditCommentBadge commentId={commentId} />
          &nbsp;
          <DeleteBadge commentId={commentId} />
        </h6>
        <PointsAuthor
          author="Jerome Mouneyrac"
          points="3"
          date="2 seconds ago"
        />
        <p className="card-text">This is the comment body.</p>
      </div>
    </div>
  );
};

export default Comment;
