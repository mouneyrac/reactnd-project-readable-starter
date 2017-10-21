//@flow
import React from "react";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { Link } from "react-router-dom";

const HeroBanner = () => (
  <div className="jumbotron">
    <h1 className="display-3">Readable</h1>
    <p className="lead">
      This is a simple app to post stuff, comment in total freedom and respect
      each others (.i.e. there are no security checks).
    </p>

    <p className="lead">
      <Link className="btn btn-primary btn-lg" to="/add" role="button">
        Add Post
      </Link>
    </p>
  </div>
);

export default HeroBanner;
