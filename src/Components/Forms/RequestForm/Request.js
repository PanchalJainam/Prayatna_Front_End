import React, { useState } from "react";
import "./Request.css";
import FormImage from "../../../Images/requestImage.jpg";

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
    alert("hello jinal");
    try {
      const res = await axios.post("/request", {
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
          <form onSubmit={handleFormSubmit} className="req_form">
            <h3 className="req_title">Send Your Need</h3>
            <div className="req_form-row">
              <input
                type="text"
                className="req_form-control"
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
            <div className="req_form-row">
              <input
                type="text"
                className="req_form-control"
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
              className="req_form-control"
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
