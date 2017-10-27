//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import CategoriesSelect from "./CategoriesSelect";
import { setUserFullname, fetchPosts, setSorting } from "../actions";
import { connect } from "react-redux";

// TODO - DO NOT FORGET TO ADD BACK THE FILTERS (POINTS AND CATEGORY)

class SortFilterBar extends Component {
  changeCategory(category) {
    const { fetchPosts } = this.props;
    if (category === "all") {
      fetchPosts();
    } else {
      fetchPosts(category);
    }
  }

  changeSorting(sorting) {
    this.props.setSorting(sorting);
  }

  render() {
    const { setUserFullname, fullname, sorting } = this.props;
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
          <select
            id="inputState"
            className="form-control"
            value={sorting}
            onChange={event => this.changeSorting(event.target.value)}
          >
            <option key="points" value="points">
              Points
            </option>
            <option key="date" value="date">
              Date
            </option>
          </select>
        </div>
        <div className="form-group col-md-4">
          <label className="col-form-label">Filter by category</label>
          <CategoriesSelect
            all="1"
            catdefault="all"
            onChange={event => this.changeCategory(event.target.value)}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ user, sorting }) {
  return {
    fullname: user.fullname,
    sorting
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setUserFullname: data => dispatch(setUserFullname({ fullname: data })),
    fetchPosts: data => dispatch(fetchPosts(data)),
    setSorting: data => dispatch(setSorting(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SortFilterBar);
