//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import moment from "moment";
import PointsAuthor from "./PointsAuthor";
import CategoriesSelect from "./CategoriesSelect";
import { connect } from "react-redux";
import { addPost } from "../utils/api";

class PostForm extends Component {
  state = {
    thePost: {
      id: 0,
      title: "",
      body: "",
      author: this.props.fullname,
      points: 0,
      timestamp: moment(),
      category: Object.keys(this.props.categories)[0]
    }
  };

  componentDidUpdate() {
    // Adding a post: update the Post default category
    // when the categories have been retrieved.
    if (
      this.state.thePost.id === 0 &&
      this.state.thePost.category === "loading"
    ) {
      this.updatePost("category", Object.keys(this.props.categories)[0]);
    }
  }

  updatePost(field, value) {
    let newPost = Object.assign(this.state.thePost, {
      [field]: value
    });
    this.setState({ thePost: newPost });
  }

  save() {
    let newPost;
    if (this.state.thePost.id === 0) {
      newPost = Object.assign(this.state.thePost, {
        id: moment()
      });
    }
    addPost(newPost);
    this.props.history.push("/");
  }

  render() {
    const { postId } = this.props;

    let thePost;
    switch (postId) {
      case "1":
        thePost = {
          id: 1,
          title: "Post title",
          body: "Post content",
          author: "Jerome Mouneyrac",
          timestamp: 1506510573,
          points: 9.2,
          category: "redux"
        };
        this.setState({ thePost: thePost });
        break;
      case "2":
        thePost = {
          id: 2,
          title: "This is the Anonymous post",
          body: "This is the anonymous post body.",
          author: "Anonymous",
          timestamp: 1506500000,
          points: 2,
          totalComments: 1,
          category: "react"
        };
        this.setState({ thePost: thePost });
        break;
      default:
    }

    const pointsAuthor =
      this.state.thePost.id === 0 ? (
        ""
      ) : (
        <PointsAuthor
          author={this.state.thePost.author}
          timestamp={this.state.thePost.timestamp}
          points={this.state.thePost.points}
        />
      );

    return (
      <div className="card">
        <div className="card-body">
          <div className="card-body-form-category">
            Category{" "}
            <CategoriesSelect
              value={this.state.thePost.category}
              onChange={event =>
                this.updatePost("category", event.target.value)}
            />
          </div>
          <h4 className="card-title">
            <input
              autoFocus
              value={this.state.thePost.title}
              type="text"
              placeholder="Post title"
              className="form-control inputfield"
              aria-label="title"
              onChange={event => this.updatePost("title", event.target.value)}
            />
          </h4>

          {pointsAuthor}

          <textarea
            rows="10"
            value={this.state.thePost.body}
            type="text"
            placeholder="Post content"
            className="form-control inputfield"
            aria-label="body"
            onChange={event => this.updatePost("body", event.target.value)}
          />

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.save()}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user, categories }) {
  return {
    fullname: user.fullname,
    categories
  };
}

export default connect(mapStateToProps)(PostForm);
