import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RequestCard.css";
import { useGlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { Button } from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import { Link } from "react-router-dom";
const RequestCard = (props) => {
  const [data, setData] = useState([]);
  const { state, setState } = useGlobalContext();

  const setRequestData = () => {
    if (state?.userData?._id) {
      axios
        .get(`http://localhost:5000/request-all/${state.userData._id}`)
        .then((res) => setData(res.data))
        .catch((e) => console.log(e));
    }
  };

  useEffect(() => {
    setRequestData();
  }, [state]);

  const accepted = (_id) => {
    axios
      .put(`http://localhost:5000/request-accept/${_id}`, {
        email: state.userData.email,
      })
      .then((res) => setRequestData())
      .catch((e) => console.log(e));
  };

  const rejected = (_id) => {
    axios
      .put(`http://localhost:5000/request-rejected/${_id}`, {
        email: state.userData.email,
      })
      .then((res) => setRequestData())
      .catch((e) => console.log(e));
  };
  return (
    <>
      <div className="container-fluid mt-3">
        <h2 className="text-center">{props.title}</h2>
      </div>

      {/* 
      <div className="Card-container container-fluid">
        <div className="No-request-container mt-3">
          <h4>Requests are not available</h4>
          {data?.map(() => {
            return <>hello</>;
          })}
        </div>
      </div> */}
      <div className="pre_history_req">
        <Link to="/historydata">
          <Button
            variant="contained"
            sx={{
              marginTop: "10px",
              marginBottom: "20px",
              textDecoration: "none",
            }}
            startIcon={<HistoryIcon />}
          >
            History
          </Button>
        </Link>
        {/* <p>{`${state.userData._id}`}</p> */}
      </div>
      <div className="container">
        <div className="row">
          {data.map((curNgo) => {
            const { _id, user_name, status, time, message } = curNgo;
            return (
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="card mb-3" key={_id}>
                  {/* <img className="ngo_img" src={pic} alt="Card" /> */}
                  <div className="card-body">
                    <span
                      className="fa user_icon fa-user d-flex"
                      aria-hidden="true"
                    >
                      <h4 className="card-title d-flex reqcard_title">
                        {user_name}
                      </h4>
                    </span>
                    <p className="card-text">
                      <b>Date:</b> {time}
                    </p>
                    <p className="card-text">
                      <b>Status:</b> {status}
                    </p>
                    <p className="card-text">
                      <b>Need:</b> {message}
                    </p>
                    {/* <p className="card-text">{address}</p> */}
                    <button
                      className="btn btn-primary"
                      onClick={() => accepted(_id)}
                    >
                      Accept Request
                    </button>
                    <button
                      className="btn btn-primary ms-1 btn-danger"
                      onClick={() => rejected(_id)}
                    >
                      Decline Request
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RequestCard;
