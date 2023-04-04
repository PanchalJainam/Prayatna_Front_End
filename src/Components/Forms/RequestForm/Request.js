import React, { useState } from "react";
import "./Request.css";
import FormImage from "../../../Images/requestImage.jpg";
import { Link, useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";
import axios from "axios";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Form = () => {
  const [user, setUser] = useState({
    user_name: "",
    email: "",
    message: "",
    contact: "",
  });
  const [message, setMessage] = useState({
    open: false,
    message: "",
    status: "",
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

  const validation = () => {
    if (
      user.user_name === "" ||
      user.email === "" ||
      user.message === "" ||
      user.contact === ""
    ) {
      setMessage({
        open: true,
        message: "All Fields Are Must be Required",
        status: "error",
      });
    } else if (
      parseInt(user.contact.length) > 10 ||
      parseInt(user.contact.length) < 10
    ) {
      setMessage({
        open: true,
        message: "Number must be 10 digit",
        error: "error",
        status: "error",
      });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    validation();
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

  const handleClose = () => {
    setMessage({
      open: false,
      message: "",
    });
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

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
                maxLength={10}
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

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={message.open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={message.message}
        action={action}
      >
        <Alert
          onClose={handleClose}
          severity={message.status}
          sx={{ width: "100%" }}
        >
          {message.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Form;
