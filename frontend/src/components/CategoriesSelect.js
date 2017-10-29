//@flow
import React, { Component } from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { connect } from "react-redux";
import { fetchCategories } from "../actions";

class CategoriesSelect extends Component {
  componentWillMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories, value, all, onChange } = this.props;

    let alloption = "";
    if (all === "1") {
      alloption = <option value="all">All</option>;
    }

    const options = categories.map(category => (
      <option key={category.path} value={category.name}>
        {category.name}
      </option>
    ));

    return (
      <select
        id="inputCategory"
        className="form-control"
        value={value}
        onChange={onChange}
      >
        {alloption}
        {options}
      </select>
    );
  }
}

function mapStateToProps({ categories }) {
  const categoriesarray = Object.keys(categories).map(key => categories[key]);
  return { categories: categoriesarray };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesSelect);
