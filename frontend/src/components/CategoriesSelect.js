//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

const CategoriesSelect = ({ action, catdefault, all }) => {
  let alloption = "";
  if (all === "1") {
    alloption = <option value="all">All</option>;
  }

  return (
    <select id="inputCategory" className="form-control" value={catdefault}>
      {alloption}
      <option value="react">React</option>
      <option value="redux">Redux</option>
      <option value="udacity">Udacity</option>
    </select>
  );
};

CategoriesSelect.propTypes = {};

export default CategoriesSelect;
