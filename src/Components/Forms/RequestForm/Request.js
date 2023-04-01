import React from "react";
import "./Request.css";
import FormImage from "../../../Images/requestImage.jpg";

const Form = () => {
  return (
    <>
      <div class="req_wrapper">
        <div class="req_inner">
          <div class="req_image-holder">
            <img src={FormImage} alt="" />
          </div>
          <form action="" className="req_form">
            <h3 className="req_title">Send Your Need</h3>
            <div className="req_form-row">
              <input
                type="text"
                class="req_form-control"
                placeholder="Enter Your Name"
              />
            </div>
            <div class="req_form-row">
              <input
                type="text"
                class="req_form-control"
                placeholder="Mobile No"
              />
            </div>
            <textarea
              name=""
              id=""
              rows="3"
              cols="8"
              placeholder="Your Need"
              class="req_form-control"
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
