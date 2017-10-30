//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import CategoriesSelect from "./CategoriesSelect";
import { setUserFullname, fetchPosts, setSorting } from "../actions";
import { connect } from "react-redux";

class SortFilterBar extends Component {
  changeCategory(category) {
    const { fetchPosts } = this.props;
    if (category === "all") {
      fetchPosts();
      this.props.history.push(`/`);
    } else {
      fetchPosts(category);
      this.props.history.push(`/${category}`);
    }
  }

  changeSorting(sorting) {
    this.props.setSorting(sorting);
  }

  render() {
    const { setUserFullname, fullname, sorting } = this.props;

    let category = "all";
    if (this.props.match.params.categoryId) {
      category = this.props.match.params.categoryId;
    }

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
            value={category}
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
