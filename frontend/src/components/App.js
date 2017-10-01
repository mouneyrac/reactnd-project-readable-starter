// @flow

import React, { Component } from "react";
import logo from "../images/logo.svg";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Route } from "react-router-dom";
import Home from "./Home";
import EditPost from "./EditPost";
import Post from "./Post";

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <Home />} />
        <Route path="/add" component={EditPost} />
        <Route path="/edit/:postId" component={EditPost} />
        <Route path="/post/:postId" component={Post} />
      </div>
    );
  }
}

export default App;
