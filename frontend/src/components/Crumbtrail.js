//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";

const Crumbtrail = ({ pageTitle }) => (
  <ol className="breadcrumb">
    <li className="breadcrumb-item">
      <Link to="/">Home</Link>
    </li>
    <li className="breadcrumb-item active">{pageTitle}</li>
  </ol>
);

export default Crumbtrail;
