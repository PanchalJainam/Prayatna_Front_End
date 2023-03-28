import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mydata.css";
import MyActivity from "./MyActivity";
import RequestCard from "./RequestCard";
import { Link } from "react-router-dom";
// import Update from "./Update";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const Mydata = () => {
  const [data, setData] = useState([]);

  // const id = useParams("64226c146859798f882e256d");
  // console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/regngos/64226c146859798f882e256d`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Navbar />
      <div className="data-bg_blur container-fluid">
        <div className="container data-ngo_heading">
          <h4>{data.id}</h4>
          <h1
            className="h1 data-Ngo_name"
            value={data.ngo_name}
            onchange={(e) => setData(e.target.vlaue)}
          >
            {data.ngo_name}
          </h1>
          <div className="data-btn_two">
            <Link to="/myprofile/edit">
              <button className=" data-btn_edit">Edit Profile</button>
            </Link>
            <button className="data-btn_change">Change Password</button>
          </div>
        </div>
      </div>
      <RequestCard title="Pending Requests" />
      <MyActivity />
      {/* <Update/> */}
    </>
  );
};

export default Mydata;
