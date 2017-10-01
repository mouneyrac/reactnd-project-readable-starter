//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";

const EditBadge = ({ postId }) => {
  const editlink = `/edit/${postId}`;
  return (
    <Link className="" to={editlink}>
      <span className="badge badge-pill badge-primary">edit</span>
    </Link>
  );
};

EditBadge.propTypes = {};

export default EditBadge;
