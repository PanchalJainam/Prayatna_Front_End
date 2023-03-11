import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../Steps/Steps.css";
import step from "../../Images/pic_8.png";
import video from "../Steps/Login.mp4";
const Steps = () => {
  return (
    <>
      <div className="container-fluid main-container">
        <div className="row mt-3 mb-3">
          {/* <div className="col-2 col-sm-12 step-container ">
            <img src={step} className="img-fluid" alt="..." />
          </div> */}
          <div className="col col-4 col-lg-6 col-sm-12 col-md-6 steps-container "></div>
          <div className="col col-lg-6 col-sm-12 col-md-6 video-container ">
            <video
              autoPlay
              loop
              style={{ width: "100%" }}
              muted
              poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Steps;
