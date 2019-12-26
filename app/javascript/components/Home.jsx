import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Todo Manager</h1>
        <p className="lead">
          Make your study, work and life more organized.
        </p>
        <hr className="my-4" />
        <Link
          to="/tasks"
          className="btn btn-lg custom-button"
          role="button"
        >
          Start being organized
        </Link>
      </div>
    </div>
  </div>
);
