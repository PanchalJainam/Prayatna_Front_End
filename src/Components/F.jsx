import React from "react";
import "./F.css";
import "bootstrap/dist/css/bootstrap.min.css";
import DoneIcon from "@mui/icons-material/Done";
import Logo from "./../Images/Prayatan.png";
import { NavLink } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const F = () => {
  return (
    <>
      <footer className="container-fluid footer-container">
        <div className="container first-container">
          <div className="first-container-content">
            <h1 className="text-center" style={{ marginTop: "17px" }}>
              Register Your NGO with Us
            </h1>
            <div className=" heading-content">
              <p className=" ">
                <DoneIcon />
                Free To Use
              </p>
              <p className=" ">
                <DoneIcon />
                Ease To Find
              </p>
              <p className="">
                <DoneIcon />
                Help To Others
              </p>
            </div>
            <button type="submit" className="text-center btn-register">
              Register NGO
            </button>
          </div>
        </div>
        <div className="second-container container-fluid">
          <div className="row m-3" style={{ width: "100%" }}>
            <div className="col-lg-3  col-md-6 col-sm-12 mission-container">
              <img
                src={Logo}
                alt="Logo Of prayatna"
                width="170px"
                className="mt-2"
              />
              <h3 className="mt-3">Our Mission</h3>
              <p className="mt-2">
                We provide direct communication between people and NGO,One of
                the better ways to help poor and needy people is to give than
                hand up and hand out.
              </p>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 quick-access">
              <h3>Quick Access</h3>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/home"
                activeClassName="link"
              >
                Home
              </NavLink>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/about"
                activeClassName="link"
              >
                About Us
              </NavLink>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/contact"
                activeClassName="link"
              >
                Contact Us
              </NavLink>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/search"
                activeClassName="link"
              >
                Search
              </NavLink>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "15px",
                }}
                to="/guide"
                activeClassName="link"
              >
                Guide
              </NavLink>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 activity-container">
              <h3>Activities</h3>
              <ul>
                <li>Education</li>
                <li>Selter</li>
                <li>Food</li>
                <li>Funding</li>
                <li>Hospital</li>
                <li>Etc...</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 follow-container">
              <h3>Follow Us</h3>
              <div>
                <InstagramIcon />
                <FacebookIcon />
                <LinkedInIcon />
                <TwitterIcon />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default F;
