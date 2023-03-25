import React from "react";
import "./Update.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Update = () => {
  return (
    <>
      <div className="container-fluid main_update_container mt-3">
        <div className="up_first_container">
          <h3 className=" h3 Profile_update">Update Profile</h3>
        </div>
        <div className="info_container shadow">
            {/* <form action="" method="post"> */}
                <div class="py-4 px-3 up-inp-container">
                    <label for="basic-url" class="form-label">NGO Name</label>
                    <div class="input-group">
                    <input type="text" class="form-control" id="basic-url" size={40} placeholder="Enter NGO Name" aria-describedby="basic-addon3"/>
                    </div>
                </div>
                <div className="mb-3 px-3">
                    <label for="basic-url" class="form-label">Head Name</label>
                    <div class="input-group">
                    <input type="text" class="form-control" id="basic-url" size={40} placeholder="Enter HeadName" aria-describedby="basic-addon3"/>
                    </div>
                </div>
                <div className="mb-3 px-3">
                    <label for="basic-url" class="form-label">Address</label>
                    <div class="input-group">
                    <input type="text" class="form-control" id="basic-url" size={40} placeholder="Enter Address" aria-describedby="basic-addon3"/>
                    </div>
                </div>
                <div className="mb-3 px-3">
                    <label for="basic-url" class="form-label">Activities</label>
                    <div class="input-group">
                    <input type="text" class="form-control" id="basic-url" size={40} placeholder="Enter Activities" aria-describedby="basic-addon3"/>
                    </div>
                </div>
                {/* <div className="mb-3 px-3">
                    <label for="basic-url" class="form-label">Email</label>
                    <div class="input-group">
                    <input type="text" class="form-control" id="basic-url" size={40} placeholder="Enter Email" aria-describedby="basic-addon3"/>
                    </div>
                </div> */}
                <div className="mb-3 px-3">
                    <label for="basic-url" class="form-label">Contact</label>
                    <div class="input-group">
                    <input type="text" class="form-control" id="basic-url" size={40} placeholder="Enter contact Number" aria-describedby="basic-addon3"/>
                    </div>
                </div>
                {/* <div className="up_submit_btn_container">
                <button  type="button" className="btn up_submit_btn mt-2">Primary</button>
                </div> */}
                <div class="d-grid col-6 mx-auto py-2">
                    <button class="up_submit_btn" type="button">Send</button>
                </div>
            {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default Update;
