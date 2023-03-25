import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyActivity.css";

const MyActivity = () => {
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
              <p className="mt-3">address details</p>
            </div>
            <div className="col-lg-4 col-sm-4 col-12 text-center shadow act-col_activity">
              <h4>
                <span>Act</span>ivity
              </h4>
              <p className="mt-3">NGO activity</p>
            </div>
            <div className="col-lg-4 col-sm-4 col-12 text-center shadow act-col_contact">
              <h4>
                <span>Con</span>tact
              </h4>
              <p className="mt-3">contact details</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyActivity;
