import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mydata.css";
import MyActivity from "./MyActivity";
import RequestCard from "./RequestCard";
import {Link} from "react-router-dom";
// import Update from "./Update";
import Navbar from "../Navbar/Navbar";
// import bgimg from "../../images/pexels-pedro-figueras-681467.jpg";
const Mydata = () => {
  return (
    <>
    <Navbar/>
      <div className="data-bg_blur container-fluid">
        <div className="container data-ngo_heading">
          <h1 className="h1 data-Ngo_name">NGO Name</h1>
          <div className="data-btn_two" >
          <Link to="/myprofile/edit"><button className=" data-btn_edit">Edit Profile</button></Link>
          <button className="data-btn_change">Change Password</button>
          </div>
        </div>
      </div> 
      <RequestCard title="Pending Requests"/>
       <MyActivity/>
     {/* <Update/> */}
    </>
  );
};

export default Mydata;
