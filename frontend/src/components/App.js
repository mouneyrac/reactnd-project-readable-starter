// @flow

import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import EditPost from "./EditPost";
import Post from "./Post";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import { withRouter } from "react-router-dom";

type Props = {};

class App extends Component<Props> {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Home />} />
        <Route path="/add" render={props => <EditPost {...props} />} />
        <Route path="/edit/:postId" component={EditPost} />
        <Route path="/post/:postId" component={Post} />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default withRouter(connect(null, mapDispatchToProps)(App));
