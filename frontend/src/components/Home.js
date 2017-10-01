//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";
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

Home.propTypes = {};

export default Home;
