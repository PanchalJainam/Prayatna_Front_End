import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Mydata.css";
import MyActivity from "./MyActivity";
import RequestCard from "./RequestCard";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";

const Mydata = () => {
  const [data, setData] = useState([]);

  // const id = useParams("64226c146859798f882e256d");
  // console.log(id);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/regngos/64250e01aa915028977dd56f`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Navbar />
      <div className="data-bg_blur container-fluid">
        <div className="container data-ngo_heading">
          {/* <h4>{data.id}</h4> */}
          <h1
            className="h1 data-Ngo_name"
            value={data.ngo_name}
            onChange={(e) => setData(e.target.value)}
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
    </>
  );
};

export default Mydata;
