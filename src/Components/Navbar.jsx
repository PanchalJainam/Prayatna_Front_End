import React from "react";
import { Link } from "react-router-dom";
// import { Carousel } from "./Carousel";
// import Card from "./Card";
// import "../App.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Prayatna
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/registration"
                >
                  Signup
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/login">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link "
                  aria-current="page"
                  to="/contact"
                  tabindex="-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
            {/* <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
          </div>
        </div>
      </nav>
     
      {/* <Carousel /> */}
      {/* <Card />
      <Card />
      <Card /> */}
    </>
  );
};

export default Navbar;
