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

const PostCard = props => {
  const {
    showComments,
    commentCount,
    id,
    title,
    body,
    voteScore,
    category,
    author,
    timestamp
  } = props;
  const postLink = `/post/${id}`;

  let theComments = <Comments postId={id} commentCount={commentCount} />;
  if (showComments) {
    theComments = <CommentList postId={id} />;
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
          <DeleteBadge postId={id} />
          <span className="card-subtitle mb-2 text-muted">
            &nbsp;({category})
          </span>
        </h4>

        <PointsAuthor
          author={author}
          timestamp={timestamp}
          points={voteScore}
          category={category}
        />
        <p className="card-text">{body}</p>

        <p> {theComments} </p>
      </div>
    </div>
  );
};

export default PostCard;
