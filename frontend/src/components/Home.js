//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import PostCardList from "./PostCardList";
import HeroBanner from "./HeroBanner";
import SortFilterBar from "./SortFilterBar";

const Home = () => (
  <div className="container">
    <HeroBanner />

    <SortFilterBar />

    <PostCardList />
  </div>
);

export default Home;
