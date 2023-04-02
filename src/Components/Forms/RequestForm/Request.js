import React from "react";
import "./Request.css";
import FormImage from "../../../Images/requestImage.jpg";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Form = () => {
  return (
    <>
      <div className="req_wrapper">
        <div className="req_inner">
          <Link to="/search">
            <KeyboardBackspaceIcon
              style={{
                position: "relative",
                left: "20px",
                top: "-15px",
                fontSize: "30px",
                color: "black",
              }}
            />
          </Link>
          <div className="req_image-holder">
            <img src={FormImage} alt="" />
          </div>
          <form action="" className="req_form">
            <h3 className="req_title">Send Your Need</h3>
            <div className="req_form-row">
              <input
                type="text"
                className="req_form-control"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="req_form-row">
              <input
                type="text"
                className="req_form-control"
                placeholder="Mobile No"
              />
            </div>
            <textarea
              name=""
              id=""
              rows="3"
              cols="8"
              placeholder="Your Need"
              className="req_form-control"
              style={{ height: "130px" }}
            ></textarea>
            <button className="req_btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
