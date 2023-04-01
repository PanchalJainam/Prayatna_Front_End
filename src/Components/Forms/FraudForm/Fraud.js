import React from "react";
import "./Fraud.css";
import FormImage from "../../../Images/requestImage.jpg";

const Fraud = () => {
  return (
    <>
      <div class="fraud_wrapper">
        <div class="fraud_inner">
          <div class="fraud_image-holder">
            <img src={FormImage} alt="" />
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
            <div class="fraud_form-row">
              <input
                type="address"
                className="fraud_form-control"
                placeholder="Address"
              />
            </div>
            <div class="fraud_form-row">
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
