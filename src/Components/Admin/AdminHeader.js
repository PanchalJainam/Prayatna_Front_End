import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/Prayatan.png";
const AdminHeader = () => {
  return (
    <>
      <nav className="admin_header">
        <div className="admin_left">
          <div className="admin-logo">
            <Link className="admin_logo">
              <img
                src={logo}
                alt=""
                style={{ height: "75px", width: "150px" }}
              />
            </Link>
          </div>
          <div className="toggle_bar">
            <input
              type="checkbox"
              name="admin_MenuToggle"
              id="admin_MenuToggle"
              className="admin_MenuToggle"
            />
            <label for="admin_MenuToggle" className="admin_toggle__icon">
              <span className="line line1"></span>
              <span className="line line3"></span>
              <span className="line line2"></span>
            </label>
          </div>
        </div>
        <div className="admin_right">
          <h3>Admin</h3>
        </div>
      </nav>
    </>
  );
};

export default AdminHeader;
