//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

const Vote = ({ action }) => (
  <span>
    <a href="">[+]</a>

    <a href="">[-]</a>
  </span>
);

Vote.propTypes = {};

export default Vote;
