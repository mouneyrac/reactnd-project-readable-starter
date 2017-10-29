//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PointsAuthor from "./PointsAuthor";
import EditCommentBadge from "./EditCommentBadge";
import DeleteBadge from "./DeleteBadge";

const Comment = ({ comment }) => {
  return (
    <div className="card">
      <div className="card-body">
        <PointsAuthor item={comment} itemType="comment" />
        <p className="card-text">{comment.body}</p>
        <h6 className="card-title">
          <EditCommentBadge comment={comment} />
          &nbsp;
          <DeleteBadge commentId={comment.id} parentId={comment.parentId} />
        </h6>
      </div>
    </div>
  );
};

export default Comment;
