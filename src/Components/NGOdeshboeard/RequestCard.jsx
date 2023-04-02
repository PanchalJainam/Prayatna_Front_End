import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RequestCard.css";
import { useGlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import { Button } from "@mui/material";
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
      .put(`http://localhost:5000/request/${_id}`, {
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
      /
      {/* 
      <div className="Card-container container-fluid">
        <div className="No-request-container mt-3">
          <h4>Requests are not available</h4>
          {data?.map(() => {
            return <>hello</>;
          })}
        </div>
      </div> */}
      <div className="container">
        <div className="row">
          {data.map((curNgo) => {
            const { _id, user_name, user_id } = curNgo;
            return (
              <div className="col col-sm-6 col-lg-4">
                <div class="card mb-3" key={_id}>
                  {/* <img className="ngo_img" src={pic} alt="Card" /> */}
                  <div class="card-body">
                    <span
                      class="fa user_icon fa-user d-flex"
                      aria-hidden="true"
                    >
                      <h4 class="caerd-title d-flex">{user_name}</h4>
                    </span>
                    <p class="card-text"> {user_id}</p>
                    {/* <p class="card-text">{address}</p> */}
                    <Button
                      class="btn btn-primary"
                      onClick={() => accepted(_id)}
                    >
                      Accept Request
                    </Button>
                    <a href="/myprofile" class="btn btn-primary ms-1">
                      Decline Request
                    </a>
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
