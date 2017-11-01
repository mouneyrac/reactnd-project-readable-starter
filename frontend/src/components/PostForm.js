//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import moment from "moment";
import PointsAuthor from "./PointsAuthor";
import CategoriesSelect from "./CategoriesSelect";
import { connect } from "react-redux";
import * as api from "../utils/api";
import { addPost, updatePost } from "../actions";

class PostForm extends Component {
  state = {
    thePost: {
      id: "",
      title: "",
      body: "",
      author: this.props.fullname,
      voteScore: 1,
      timestamp: moment().valueOf(),
      category: Object.keys(this.props.categories)[0],
      commentCount: 0
    }
  };

  componentDidUpdate() {
    // Adding a post: update the Post default category
    // when the categories have been retrieved.
    if (
      this.state.thePost.id === "" &&
      this.state.thePost.category === "loading"
    ) {
      this.updateThePost("category", Object.keys(this.props.categories)[0]);
    }

    if (this.state.thePost.id === "" && this.props.postId) {
      this.setState({ thePost: this.props.posts[this.props.postId] });
    }
  }

  updateThePost(field, value) {
    let newPost = Object.assign(this.state.thePost, {
      [field]: value
    });
    this.setState({ thePost: newPost });
  }

  save(thePost) {
    if (thePost.id === "") {
      const newid = moment().valueOf();
      let newPost = Object.assign(thePost, {
        id: `${newid}`
      });
      api.addPost(newPost);
      this.props.addPost(newPost);
    } else {
      api.updatePost(thePost);
      this.props.updatePost(thePost);
    }

    this.props.history.push("/");
  }

  render() {
    const pointsAuthor =
      this.state.thePost.id === "" ? (
        ""
      ) : (
        <PointsAuthor item={this.state.thePost} itemType="post" />
      );

    return (
      <div className="card">
        <div className="card-body">
          <div className="card-body-form-category">
            Category{" "}
            <CategoriesSelect
              value={this.state.thePost.category}
              onChange={event =>
                this.updateThePost("category", event.target.value)}
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
              onChange={event =>
                this.updateThePost("title", event.target.value)}
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
            onChange={event => this.updateThePost("body", event.target.value)}
          />

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => this.save(this.state.thePost)}
          >
            Save
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user, categories, posts }) {
  return {
    fullname: user.fullname,
    categories,
    posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPost: data => dispatch(addPost(data)),
    updatePost: data => dispatch(updatePost(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
