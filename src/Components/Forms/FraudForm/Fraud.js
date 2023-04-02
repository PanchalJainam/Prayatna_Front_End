import React from "react";
import "./Fraud.css";
import FormImage from "../../../Images/requestImage.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "react-router-dom";
const Fraud = () => {
  return (
    <>
      <div className="fraud_wrapper">
        <div className="fraud_inner">
          <Link to="/search">
            <KeyboardBackspaceIcon
              style={{
                position: "relative",
                left: "20px",
                top: "20px",
                fontSize: "30px",
                color: "black",
              }}
            />
          </Link>
          <div className="fraud_image-holder">
            <img src={FormImage} alt="" className="fraud_img" />
          </div>
          <form action="" className="fraud_form">
            <h3 className="fraud_title">Fraud NGO </h3>
            <div className="fraud_form-row">
              <input
                type="text"
                className="fraud_form-control"
                placeholder="Enter a Name"
              />
            </div>
            <div className="fraud_form-row">
              <input
                type="address"
                className="fraud_form-control"
                placeholder="Address"
              />
            </div>
            <div className="fraud_form-row">
              <input
                type="text"
                className="fraud_form-control"
                placeholder="Ngo activity"
              />
            </div>

            <textarea
              name=""
              id=""
              rows="3"
              cols="8"
              placeholder="Description"
              className="fraud_form-control"
              style={{ height: "130px" }}
            ></textarea>

            <button className="fraud_button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Fraud;
