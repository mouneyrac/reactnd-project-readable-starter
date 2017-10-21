//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import moment from "moment";
import PointsAuthor from "./PointsAuthor";
import CategoriesSelect from "./CategoriesSelect";

const PostForm = ({ postId }) => {
  let fakePost = {
    title: "",
    body: "",
    author: "Anonymous",
    points: 0,
    date: "now"
  };

  switch (postId) {
    case "1":
      fakePost = {
        title: "Post title",
        body: "Post content",
        author: "Jerome Mouneyrac",
        date: moment.unix(1506510573).fromNow(),
        points: 9.2,
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

  return (
    <div className="card">
      <div className="card-body">
        <div className="card-body-form-category">
          Category <CategoriesSelect catdefault={fakePost.category} />
        </div>
        <h4 className="card-title">
          <input
            autoFocus
            value={fakePost.title}
            type="text"
            placeholder="Post title"
            className="form-control inputfield"
            aria-label="title"
          />
        </h4>

        <PointsAuthor
          author={fakePost.author}
          date={fakePost.date}
          points={fakePost.points}
        />

        <textarea
          rows="10"
          value={fakePost.body}
          type="text"
          placeholder="Post content"
          className="form-control inputfield"
          aria-label="body"
        />

        <button type="button" className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
};

export default PostForm;
