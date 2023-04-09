import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useSearchParams } from "react-router-dom";

export const UserRequest = () => {
  const [data, setData] = useState([]);
  const { state, setState } = useGlobalContext();

  const [searchParams, setSearchParams] = useSearchParams();
  const user_id = searchParams.get("user_id");
  console.log({ searchParams });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user-request/${state.userData._id}`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, [state]);

  console.log(state);

  return (
    <>
      <div>UserRequest</div>
      {data.map((curUser) => {
        const { _id, user_name, status } = curUser;
        return (
          <div className="col-12 col-sm-6 col-lg-4 mt-1">
            <div className="card sh_ngo_card shadow mb-3" key={_id}>
              {/* <img className="ngo_img" src={pic} alt="Card" /> */}
              <div className="card-body sh_ngo_body shadow">
                <h4 className="card-title">{user_name}</h4>
                {/* <h4 className="card-title">{_id}</h4> */}
                <p className="card-text">{status}</p>
                {/* <p className="card-text">{address}</p> */}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
