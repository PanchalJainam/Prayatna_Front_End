import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Change.css";
const showPassword=()=>{
    var x = document.getElementById("cur_pass");
var y = document.getElementById("new_pass");
var z = document.getElementById("con_pass");
if (x.type === "password") {
x.type = "text";
} else {
x.type = "password";
}
if (y.type === "password") {
y.type = "text";
} else {
y.type = "password";
}
if (z.type === "password") {
z.type = "text";
} else {
z.type = "password";
}
}

const Change = () => {

  return (
    <>
      <div className="container mt-3">
        <div className="change_inner p-4">
          <h2 className="text-center mt-2 h2">Change Password</h2>
          <div className="change_form_field mt-5 p-3 shadow">
            <form>
              <div className="mb-3 ">
                <label for="cur_pass" className="form-label">
                  Current Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="cur_pass"
                  placeholder=""
                />
              </div>
              <hr className="m-3"/>
              <div className="mb-3">
                <label for="new_pass" className="form-label">
                  New Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="new_pass"
                  placeholder=""
                />
              </div>
              <div className="mb-3">
                <label for="con_pass" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="con_pass"
                  placeholder=""
                />
              </div>
              <div >
              <input type="checkbox" style={{marginRight:"5px"}} onClick={showPassword}/>  show password
              </div>
              <div className="mb-3 change_btn_con mt-5">
                <button type="submit" className="change_sub">Change</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Change;
