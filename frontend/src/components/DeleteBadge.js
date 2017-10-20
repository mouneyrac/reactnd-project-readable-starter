//@flow
import React from "react";
import PropTypes from "prop-types";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";

const DeleteBadge = ({ postId }) => {
  const deletelink = `/`;
  return (
    <Link className="" to={deletelink}>
      <span className="badge badge-pill badge-danger">delete</span>
    </Link>
  );
};

DeleteBadge.propTypes = {};

export default DeleteBadge;
