//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import CategoriesSelect from "./CategoriesSelect";
import { setUserFullname } from "../actions";
import { connect } from "react-redux";

// TODO - DO NOT FORGET TO ADD BACK THE FILTERS (POINTS AND CATEGORY)

class SortFilterBar extends Component {
  render() {
    const { setUserFullname, fullname } = this.props;
    return (
      <div className="form-row">
        <div className="form-group col-md-6">
          <label className="col-form-label">Your name</label>
          <input
            type="text"
            className="form-control"
            id="inputCity"
            value={fullname}
            onChange={data => setUserFullname(data.target.value)}
          />
        </div>
        <div className="form-group col-md-2">
          <label className="col-form-label">Sort by</label>
          <select id="inputState" className="form-control">
            <option>Points</option>
            <option>Date</option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label className="col-form-label">Filter by category</label>
          <CategoriesSelect all="1" catdefault="all" />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    fullname: user.fullname
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUserFullname: data => dispatch(setUserFullname({ fullname: data }))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortFilterBar);
