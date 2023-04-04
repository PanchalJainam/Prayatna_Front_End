import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../../context/GlobalContext";

const Historydata = () => {
  const [data, setData] = useState([]);
  const { state, setState } = useGlobalContext();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/historydata/${state.userData._id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [state]);
  return (
    <>
      <div className="container mt-3">
        <h3>History Data Item List</h3>
        <div className="row">
          {data.map((curUser) => {
            const { _id, user_name, time, message, status } = curUser;
            return (
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="card mb-3" key={_id}>
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
                      <b>Date :</b>
                      {time}
                    </p>
                    <p className="card-text">
                      <b>Need : </b> {message}
                    </p>
                    <p className="card-text">
                      <b>Status : </b> {status}
                    </p>
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

export default Historydata;
