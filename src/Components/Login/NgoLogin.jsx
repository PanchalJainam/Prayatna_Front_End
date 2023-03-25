import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./NgoLogin.css";
import {
  Typography,
  CssBaseline,
  Box,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import Logo from "../../Images/1-removebg-preview.png";
import MailIcon from "@mui/icons-material/Mail";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import { Email } from "@mui/icons-material";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <CssBaseline />

      <div className="l-box-container">
        <Box
          sx={{
            width: "45vh",
            height: "75vh",
            backgroundColor: "rgba(255, 255, 255, 1)", //#d5f4e6

            borderRadius: "15px",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;",
            // boxShadow:
            // "3.1px 2.5px 5.4px rgba(0, 0, 0, 0.034),6.7px 5.5px 11.3px rgba(0, 0, 0, 0.054),12.7px 10.3px 21.5px rgba(0, 0, 0, 0.072),32px 26px 80px rgba(0, 0, 0, 0.1)",
            //  boxShadow:"0px 0px 3.6px rgba(0, 0, 0, 0.021),0px 0px 7.2px rgba(0, 0, 0, 0.037),0px 0px 11.3px rgba(0, 0, 0, 0.055),0px 0px 17px rgba(0, 0, 0, 0.079),0px 0px 28.3px rgba(0, 0, 0, 0.117),0px 0px 80px rgba(0, 0, 0, 0.2)",
          }}
        >
          <img
            src={Logo}
            className="rounded mx-auto d-block l-logo-img"
            alt="Praytan Logo"
          ></img>
          <Typography
            variant="h4"
            align="center"
            sx={{
              input: { color: "black" },
              color: "#1f1f1f",
              fontSize: "5vh",
              marginTop: "2vh",
              fontFamily: "Montserrat,sans-serif",
              fontWeight: "600",
            }}
          >
            Login
          </Typography>
          <form action="">
            <div className="l-form-field">
              <TextField
                id="input-with-icon-textfield"
                type={Email}
                label="Email"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MailIcon />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
                sx={{
                  width: "34vh",
                  color: "#fff",
                  fontFamily: "Poppins",
                }}
              />

              <TextField
                id="input-with-icon-textfield"
                label="Password"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  ),
                }}
                type="password"
                variant="standard"
                sx={{
                  width: "34vh",
                  color: "#fff",
                }}
              />
            </div>
            <div className="l-link-container">
              <Button
                variant="contained"
                endIcon={<LoginIcon />}
                sx={{
                  margin: "3vh",
                  width: "34vh",
                  borderRadius: "7px",
                  fontSize: "2vh",
                }}
              >
                <Link
                  className="l-login-btn"
                  to="/"
                  style={{ textDecoration: "none", color: "White" }}
                >
                  Login
                </Link>
              </Button>
              <Link className="l-forgot-password" to="/ngologin/forgot">
                Forgot Password?
              </Link>
            </div>
            <p className="l-signup">
              Don't have an account?<Link to="/registration">Sign Up</Link>
            </p>
          </form>
        </Box>
      </div>
    </>
  );
};

export default Login;
