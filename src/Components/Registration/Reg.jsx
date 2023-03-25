import React, { useState } from "react";
import "./Reg.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { toast } from "react-toastify";
import { Alert, Button, IconButton, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Reg = () => {
  const [regData, setRegData] = useState({
    ngo_name: "",
    head_name: "",
    email: "",
    address: "",
    activity: "",
    password: "",
    cpassword: "",
    contact_number: "",
    document: "",
  });
  const [isOtp, setIsOtp] = useState(false);
  const [otp, setOtp] = useState();
  const [message, setMessage] = useState({
    open: false,
    message: "",
    status: "",
  });
  const handleOtpInputChange = (e) => {
    setOtp(e.target.value);
  };
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    console.log({ otp });

    const res = await axios.post("/verify-otp", {
      email: regData.email,
      vOtp: otp,
    });
    console.log({ res });

    if (res.data.success) {
      setRegData({
        ngo_name: "",
        head_name: "",
        email: "",
        address: "",
        activity: "",
        password: "",
        cpassword: "",
        contact_number: "",
        document: "",
      });
      setOtp("");

      setMessage({
        open: true,
        message: "Otp verified",
        status: "success",
      });
    } else {
      setMessage({
        open: true,
        message: "Something went wrong...!",
        status: "error",
      });
    }
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "document") {
      setRegData((prev) => {
        return { ...prev, [name]: e.target.files[0] };
      });
    } else {
      setRegData((prev) => {
        return { ...prev, [name]: value };
      });
    }
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      for (let v in regData) {
        formData.append(v, regData[v]);
      }
      const res = await axios.post("/registration", formData);
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
  return (
    <>
      <div className="container-fluid reg-main_container p-3">
        <div className="container reg-sub_container p-3">
          <div className="container reg-sub_inp_container p-2 ">
            <h3 className="text-center mb-2" style={{ color: "white" }}>
              Registration
            </h3>
            {/* <hr className='hr_line'/> */}
            <div className="reg-input_field p-4 mt-3">
              <form
                className="reg-form-container"
                encType="multipart/form-data"
                onSubmit={handleFormSubmit}
              >
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    NGO Name
                  </label>
                  <input
                    type="text"
                    name="ngo_name"
                    onChange={handleInputChange}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter NGO Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Trusty Name
                  </label>
                  <input
                    type="text"
                    name="head_name"
                    onChange={handleInputChange}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter NGO Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    onChange={handleInputChange}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Trustee Name"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Address
                  </label>
                  <br />
                  <textarea
                    name="address"
                    id=""
                    onChange={handleInputChange}
                    className="form-control"
                    cols="58"
                    rows="3"
                  ></textarea>
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Activities
                  </label>
                  <input
                    type="text"
                    name="activity"
                    onChange={handleInputChange}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Activity"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Upload legal Document
                  </label>
                  <input
                    type="file"
                    name="document"
                    onChange={handleInputChange}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Contact Number
                  </label>
                  <input
                    type="text"
                    name="contact_number"
                    onChange={handleInputChange}
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Contact Number"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    name="password"
                    onChange={handleInputChange}
                    id="exampleFormControlInput1"
                    placeholder="Enter Password"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    name="cpassword"
                    onChange={handleInputChange}
                    id="exampleFormControlInput1"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="container reg-btn_access p-2 mt-3">
                  <button type="submit" className="reg-Reg_btn">
                    Register
                  </button>
                </div>
              </form>
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
            </div>
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
      </div>
    </>
  );
};

export default Reg;
