// @flow

import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/add" component={EditPost} />
          <Route path="/edit/:postId" component={EditPost} />
          <Route path="/post/:postId" component={Post} />
          <Route path="/:categoryId" component={Home} />
        </Switch>
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
