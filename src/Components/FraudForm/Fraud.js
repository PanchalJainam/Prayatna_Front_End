import React from "react";
import "./Fraud.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import FormImage from "../../../Images/requestImage.jpg";

const Fraud = () => {
  return (
    <>
      <div class="wrapper">
        <div class="inner">
          <div class="image-holder">
            <img
              src={
                "https://images.unsplash.com/photo-1607520389310-ded119a54145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVxdWVzdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              }
              alt=""
            />
          </div>
          <form action="">
            <h3 className="title">Fraud NGO </h3>
            <div className="form-row">
              <input type="email" class="form-control" placeholder="Ngo Name" />
            </div>
            <div class="form-row">
              <input
                type="address"
                class="form-control"
                placeholder="Address"
              />
            </div>
            <div class="form-row">
              <div class="form-holder">
                <select name="" id="" class="form-control">
                  <option value="" disabled selected>
                    Choose Your Activity
                  </option>
                  <option value="class 01">Education</option>
                  <option value="class 02">Food</option>
                  <option value="class 03">Scholarship</option>
                  <option value="class 03">Selter</option>
                  <option value="class 03">Old Age Home</option>
                  <option value="class 03">Animal</option>
                  <option value="class 03">Medical</option>
                  <option value="class 03">Other</option>
                </select>
              </div>
            </div>
            <textarea
              name=""
              id=""
              rows="3"
              cols="8"
              placeholder="Description"
              class="form-control"
              style={{ height: "130px" }}
            ></textarea>
            <div className="fraud-sub-btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Fraud;
