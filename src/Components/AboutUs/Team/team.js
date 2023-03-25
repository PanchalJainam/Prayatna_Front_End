import React from "react";
import "./team.css";
import Jainam from "../../../Images/Jainam (1).jpg";
import Vaibhav from "../../../Images/vaibhav (1).jpg";
import Jinil from "../../../Images/Jinil.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";

const Team = () => {
  return (
    <section>
      <div className="row team_title">
        <h1>Our Team</h1>
        <p className="text">
          We are a group of dedicated people who are passionate about making the
          world a better place according to our own individual talents and
          capacity. We are also believe that helping people can be fun! Our
          Vision Is Rural Empowerment through Best Practices, Modern Technology
          and Values.
        </p>
      </div>
      <div className="row">
        {/* column 1 */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src={Jainam} alt="jainam" />
            </div>
            <h3>Jainam Panchal</h3>
            <p>Backend developer</p>
            <div className="icons">
              <a href="/">
                <GitHubIcon />
              </a>
              <a href="/">
                <InstagramIcon />
              </a>
              <a href="/">
                <WhatsAppIcon />
              </a>
              <a href="/">
                <FacebookIcon />
              </a>
              <a href="/">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
        {/* column 2 */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src={Jinil} alt="jainam" />
            </div>
            <h3>Jinil Mevada</h3>
            <p>Front end developer</p>
            <div className="icons">
              <a href="/">
                <GitHubIcon />
              </a>
              <a href="/">
                <InstagramIcon />
              </a>
              <a href="/">
                <WhatsAppIcon />
              </a>
              <a href="/">
                <FacebookIcon />
              </a>
              <a href="/">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
        {/* column 3 */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src={Vaibhav} alt="jainam" />
            </div>
            <h3>Vaibhav Devaliya</h3>
            <p>full-stack developer</p>
            <div className="icons">
              <a href="/">
                <GitHubIcon />
              </a>
              <a href="/">
                <InstagramIcon />
              </a>
              <a href="/">
                <WhatsAppIcon />
              </a>
              <a href="/">
                <FacebookIcon />
              </a>
              <a href="/">
                <EmailIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div
          style={{ height: "350px", position: "absolute", left: 0, zIndex: -1 }}
        >
          <img src={Demo} style={{ height: "100%" }} alt="logo" />
        </div>  */}
      {/* <div
          style={{
            height: "350px",
            position: "absolute",
            right: 0,
            zIndex: -1,
          }}
        >
          <img src={"demo1"} style={{ height: "100%" }} alt="logo" />
        </div> */}
    </section>
  );
};

export default Team;
