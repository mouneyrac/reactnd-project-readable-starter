//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import moment from "moment";

const CommentForm = ({ postId }) => {
  let fakeComment = {
    title: "",
    body: "",
    author: "Anonymous",
    points: 0,
    date: "now"
  };
  fakeComment.info = ``;
  if (postId) {
    fakeComment = {
      title: "Comment title",
      body: "Comment content",
      author: "Jerome Mouneyrac",
      date: moment.unix(1506510573).fromNow(),
      points: 9.2
    };
    fakeComment.info = `Created by ${fakeComment.author} ${fakeComment.date}`;
  }

  return (
    <div className="card">
      <div className="card-body">
        <input
          autoFocus
          value={fakeComment.title}
          type="text"
          placeholder="Comment title"
          className="form-control inputfield"
          aria-label="title"
        />

        <textarea
          rows="10"
          value={fakeComment.body}
          type="text"
          placeholder="Comment content"
          className="form-control inputfield"
          aria-label="body"
        />

        <button type="button" className="btn btn-primary">
          Add comment
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
