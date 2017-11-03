import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/bootstrap.min.css";

const NotFoundPage = () => (
  <div className="container jumbotron">
    <h1>404 - Page Not Found</h1>
    <p>Sorry we could not find anything here.</p>
    <p>
      <Link to="/">Back to Home</Link>
    </p>
  </div>
);

export default NotFoundPage;
