import React from "react";
import {Link,NavLink } from "react-router-dom";
const Navbar = (props) => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
              {props.title}
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link active" aria-current="page" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
              </ul>
              <div className="d-flex">
                <Link className="btn btn-primary mx-2 " to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-2 " to="/signup" role="button">Sign Up</Link>
              </div>
            </div>
          </div>
        </nav>
    </div>
  );
};

export default Navbar;
