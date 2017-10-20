//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";
import PostCard from "./PostCard";
import CategoriesSelect from "./CategoriesSelect";

const SortFilterBar = () => (
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputCity" className="col-form-label">
        Your name
      </label>
      <input
        type="text"
        className="form-control"
        id="inputCity"
        value="Anonymous"
      />
    </div>
    <div className="form-group col-md-2">
      <label for="inputState" className="col-form-label">
        Sort by
      </label>
      <select id="inputState" className="form-control">
        <option>Points</option>
        <option>Date</option>
      </select>
    </div>
    <div className="form-group col-md-4">
      <label for="inputCategory" className="col-form-label">
        Filter by category
      </label>
      <CategoriesSelect all="1" catdefault="all" />
    </div>
  </div>
);

SortFilterBar.propTypes = {};

export default SortFilterBar;
