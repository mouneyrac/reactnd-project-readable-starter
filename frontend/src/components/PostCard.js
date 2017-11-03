//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import CommentList from "./CommentList";
import EditBadge from "./EditBadge";
import DeleteBadge from "./DeleteBadge";
import PointsAuthor from "./PointsAuthor";

const PostCard = ({ post, showComments, history }) => {
  const { id, title, body, category, commentCount } = post;
  const postLink = `/post/${id}`;

  let theComments = <Comments postId={id} commentCount={commentCount} />;
  if (showComments) {
    theComments = (
      <span>
        <br />
        <br />
        <h6>Comments ({commentCount}):</h6> <CommentList postId={id} />
      </span>
    );
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <Link className="" to={postLink}>
            {title}
          </Link>
          &nbsp;
          <EditBadge postId={id} />
          &nbsp;
          <DeleteBadge postId={id} history={history} />
          <span className="card-subtitle mb-2 text-muted">
            &nbsp;({category})
          </span>
        </h4>

        <PointsAuthor item={post} itemType="post" />
        <span className="card-text">{body}</span>

        <span> {theComments} </span>
      </div>
    </div>
  );
};

export default PostCard;
