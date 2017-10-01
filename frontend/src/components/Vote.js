//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

const Vote = ({ action }) => (
  <select id="inputState" className="form-control col-md-2">
    <option>Your Vote</option>
    <option>10</option>
    <option>9</option>
    <option>8</option>
    <option>7</option>
    <option>6</option>
    <option>5</option>
    <option>4</option>
    <option>3</option>
    <option>2</option>
    <option>1</option>
    <option>0</option>
  </select>
);

Vote.propTypes = {};

export default Vote;
