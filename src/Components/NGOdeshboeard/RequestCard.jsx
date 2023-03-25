import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./RequestCard.css";
const RequestCard = (props) => {
  return (
    <>
      <div className="container-fluid mt-3">
        <h2 className="text-center">{props.title}</h2>
      </div>
      <div className="Card-container container-fluid">
        <div className="No-request-container mt-3">
            <h4>Requests are not available</h4>
        </div>
      </div>
    </>
  );
};

export default RequestCard;
