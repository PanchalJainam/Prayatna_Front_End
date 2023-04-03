import React from "react";
import "./NgoCard.css";

const NgoCard = ({ ngo }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {ngo.map((curNgo) => {
            const { _id, ngo_name, activity, address } = curNgo;
            return (
              <div className="col-12 col-sm-6 col-lg-4 mt-1">
                <div className="card mb-3" key={_id}>
                  {/* <img className="ngo_img" src={pic} alt="Card" /> */}
                  <div className="card-body shadow">
                    <h4 className="card-title">{ngo_name}</h4>
                    <p className="card-text">{activity}</p>
                    <p className="card-text">{address}</p>
                    <a
                      href={`/search/request?ngo_id=${_id}`}
                      className="btn btn-primary "
                    >
                      Send Request
                    </a>
                    <a
                      href={`/search/report?ngo_id=${_id}`}
                      className="btn btn-primary m-1"
                    >
                      Fraud report
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

export default NgoCard;
