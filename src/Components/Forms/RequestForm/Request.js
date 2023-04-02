import React, { useState } from "react";
import "./Request.css";
import FormImage from "../../../Images/requestImage.jpg";
import axios from "axios";
import { useGlobalContext } from "../../../context/GlobalContext";
import { useParams, useSearchParams } from "react-router-dom";

const Form = () => {
  const [user, setUser] = useState({
    user_name: "",
    email: "",
    message: "",
    contact: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const ngo_id = searchParams.get("ngo_id");

  const { state } = useGlobalContext();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/report", {
        ...user,
        user_id: state.userData._id,
        ngo_id,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div class="req_wrapper">
        <div class="req_inner">
          <div class="req_image-holder">
            <img src={FormImage} alt="" />
          </div>
          <form onSubmit={handleFormSubmit} className="req_form">
            <h3 className="req_title">Send Your Need</h3>
            <div className="req_form-row">
              <input
                type="text"
                class="req_form-control"
                placeholder="Enter Your Name"
                name="user_name"
                onChange={handleInputChange}
              />
            </div>
            <div className="req_form-row">
              <input
                type="email"
                class="req_form-control"
                name="email"
                placeholder="Enter Your Email"
                onChange={handleInputChange}
              />
            </div>
            <div class="req_form-row">
              <input
                type="text"
                class="req_form-control"
                placeholder="Mobile No"
                name="contact"
                onChange={handleInputChange}
              />
            </div>
            <textarea
              name="message"
              id=""
              rows="3"
              cols="8"
              placeholder="Your Need"
              class="req_form-control"
              style={{ height: "130px" }}
              onChange={handleInputChange}
            ></textarea>
            <button type="submit" className="req_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
