//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PostCardList from "./PostCardList";
import HeroBanner from "./HeroBanner";
import SortFilterBar from "./SortFilterBar";

const Home = props => {
  return (
    <div className="container">
      <HeroBanner />

      <SortFilterBar history={props.history} match={props.match} />

      <PostCardList />
    </div>
  );
};

export default Home;
