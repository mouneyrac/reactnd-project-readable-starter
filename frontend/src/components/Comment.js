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
          item={{
            author: "EDIT ME Jerome Mouneyrac",
            voteScore: "3",
            timestamp: "144433288874"
          }}
          itemType="comment"
        />
        <p className="card-text">This is the comment body.</p>
      </div>
    </div>
  );
};

export default Comment;
