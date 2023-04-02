import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyActivity.css";
import { useGlobalContext } from "../../context/GlobalContext";
import axios from "axios";

const MyActivity = () => {
  const [data, setData] = useState([]);

  const { state, setState } = useGlobalContext();

  useEffect(() => {
    if (state?.userData?._id) {
      axios
        .get(`http://localhost:5000/regngos/${state.userData._id}`)
        .then((res) => setData(res.data))
        .catch((e) => console.log(e));
    }
  }, [state]);
  return (
    <>
      <div className="container-fluid mt-5">
        <h2 className="text-center">Details</h2>
        <div className="container-fluid mt-5">
          <div className="row avtivity-container">
            <div className="col-lg-4 col-sm-4 col-12 text-center shadow act-col_add">
              <h4>
                <span>Add</span>ress
              </h4>
              <p className="mt-3">{data.address}</p>
            </div>
            <div className="col-lg-4 col-sm-4 col-12 text-center shadow act-col_activity">
              <h4>
                <span>Act</span>ivity
              </h4>
              <p className="mt-3">{data.activity}</p>
            </div>
            <div className="col-lg-4 col-sm-4 col-12 text-center shadow act-col_contact">
              <h4>
                <span>Con</span>tact
              </h4>
              <p className="mt-3">{data.contact_number}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyActivity;
