//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import CommentList from "./CommentList";
import Vote from "./Vote";
import EditBadge from "./EditBadge";
import DeleteBadge from "./DeleteBadge";
import PointsAuthor from "./PointsAuthor";
import moment from "moment";

const PostCard = ({ postId, showComments }) => {
  const postLink = `/post/${postId}`;
  let fakePost;
  switch (postId) {
    case "1":
      fakePost = {
        title: "This is my first post",
        body: "This is the post body.",
        author: "Jerome Mouneyrac",
        date: moment.unix(1506510573).fromNow(),
        points: 9,
        totalComments: 2,
        category: "redux"
      };
      break;
    case "2":
      fakePost = {
        title: "This is the Anonymous post",
        body: "This is the anonymous post body.",
        author: "Anonymous",
        date: moment.unix(1506500000).fromNow(),
        points: 2,
        totalComments: 1,
        category: "react"
      };
      break;
    default:
  }

  let theComments = (
    <Comments postId={postId} totalComments={fakePost.totalComments} />
  );
  if (showComments) {
    theComments = <CommentList postId={postId} />;
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">
          <Link className="" to={postLink}>
            {fakePost.title}
          </Link>
          &nbsp;
          <EditBadge postId={postId} />
          &nbsp;
          <DeleteBadge postId={postId} />
          <span className="card-subtitle mb-2 text-muted">
            &nbsp;({fakePost.category})
          </span>
        </h4>

        <PointsAuthor
          author={fakePost.author}
          date={fakePost.date}
          points={fakePost.points}
          category={fakePost.category}
        />
        <p className="card-text">{fakePost.body}</p>

        <p> {theComments} </p>
      </div>
    </div>
  );
};

PostCard.propTypes = {};

export default PostCard;
