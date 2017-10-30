//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PostCardList from "./PostCardList";
import HeroBanner from "./HeroBanner";
import SortFilterBar from "./SortFilterBar";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class Home extends Component<Props> {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div className="container">
        <HeroBanner />

        <SortFilterBar history={this.props.history} match={this.props.match} />

        <PostCardList />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  };
}

export default connect(null, mapDispatchToProps)(Home);
