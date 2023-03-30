import React, { useState } from "react";
import axios from "axios";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import "./Userpage.css";
// import { DataArrayTwoTone } from "@mui/icons-material";

const Userpage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    user_name: "",
    email: "",
    password: "",
    contact_number: "",
  });

  const [message, setMessage] = useState({
    open: false,
    message: "",
    status: "",
  });

  const [otp, setOtp] = useState();
  const [isOtp, setIsOtp] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log({ user });
      const res = await axios.post("/user-registration", user);
      console.log({ res });
      setMessage({
        open: true,
        message: "User registered successfully.",
        status: "success",
      });
      setIsOtp(true);
    } catch (err) {
      if (err.response?.data?.error) {
        setMessage({
          open: true,
          message: err.response.data.error,
          status: "error",
        });
      }
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

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    console.log({ otp });

    const res = await axios.post("/verify-otp", {
      email: user.email,
      vOtp: otp,
    });
    console.log({ res });

    if (res.data.success) {
      setUser({
        user_name: "",
        email: "",
        contact_number: "",
        password: "",
      });
      setOtp("");

      setMessage({
        open: true,
        message: "Otp verified",
        status: "success",
      });
      navigate("/login");
    } else {
      setMessage({
        open: true,
        message: "Something went wrong...!",
        status: "error",
      });
    }
  };

  const handleOtpInputChange = (e) => {
    setOtp(e.target.value);
  };

  return (
    <>
      <div className="container">
      <div className="use-input_field p-4 m-3 ">
        {/* <h3 className="text-center mt-4">Registration Form</h3> */}
        <form
          autoComplete="off"
          encType="multipart/form-data"
          onSubmit={handleFormSubmit}
          className="user_form"
        >
          <div class="form-group mt-3">
            <label for="exampleInput" style={{color:"white"}}>Name</label>
            <input
              type="text"
              name="user_name"
              onChange={handleInputChange}
              class="form-control"
              id="exampleInput"
              aria-describedby="emailHelp"
              placeholder="Enter Your Name"
            />
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputEmail1" style={{color:"white"}}>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleInputChange}
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputPassword1" style={{color:"white"}}>Contact Number</label>
            <input
              type="text"
              name="contact_number"
              onChange={handleInputChange}
              class="form-control"
              id="exampleInput2"
              placeholder="Enter Contact Number"
              maxLength={10}
            />
          </div>
          <div class="form-group mt-3">
            <label for="exampleInputPassword1" style={{color:"white"}}>Password</label>
            <input
              type="password"
              name="password"
              onChange={handleInputChange}
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          {/* <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              onChange={handleInputChange}
              class="form-control"
              id="exampleInputCPassword1"
              placeholder="Confirm Password"
            />
          </div> */}

          <div className="container reg-btn_access p-2 mt-3">
            <button type="submit" className="reg-Reg_btn">
              Register
            </button>
          </div>
        </form>
        </div>
        {isOtp ? (
          <form onSubmit={handleOtpSubmit}>
            <input
              type="text"
              class="form-control"
              name="otp"
              onChange={handleOtpInputChange}
              id="exampleFormControlInput1"
              placeholder="Enter OTP"
            />
            <div className="container reg-btn_access p-2 mt-3">
              <button type="submit" className="reg-Reg_btn">
                Verify
              </button>
            </div>
          </form>
        ) : null}

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
      </div>
    </>
  );
};

export default Userpage;
