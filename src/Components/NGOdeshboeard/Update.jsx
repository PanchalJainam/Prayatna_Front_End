import React, { useEffect, useState } from "react";
import "./Update.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import axios from "axios";
const Update = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/regngos/64250e01aa915028977dd56f`)
      .then((res) => setData(res.data))
      .catch((e) => console.log(e));
  }, []);

  const handleUpdateForm = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5000/regngos/64250e01aa915028977dd56f`, data)
      .then((res) => alert("Data Update Successfully"))
      .catch((e) => console.log(e));
  };

  // const handleUpdateForm = (e) => {
  //   e.preventDefault();

  //   try {
  //     axios.put(`http://localhost:5000/regngos/64226c146859798f882e256d`, {
  //       data,
  //     });
  //     alert("User name updated successfully!");
  //   } catch (err) {
  //     alert("Error updating user name");
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="container-fluid main_update_container mt-3">
        <div className="up_first_container">
          <Link
            to="/myprofile"
            style={{ textDecoration: "none", color: "white" }}
          >
            <KeyboardBackspaceIcon
              style={{
                position: "relative",
                top: "-70px",
                left: "10px",
                fontSize: "30px",
              }}
            />
          </Link>
          <h3 className=" h3 Profile_update">Update Profile</h3>
        </div>
        <div className="info_container shadow">
          <form onSubmit={handleUpdateForm}>
            <div className="py-4 px-3 up-inp-container">
              <label for="basic-url" className="form-label">
                NGO Name
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  name="ngo_name"
                  value={data.ngo_name}
                  // value={data}
                  onChange={handleInputChange}
                  size={40}
                  placeholder="Enter NGO Name"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div className="mb-3 px-3">
              <label for="basic-url" className="form-label">
                Head Name
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  name="head_name"
                  value={data.head_name}
                  onChange={handleInputChange}
                  size={40}
                  placeholder="Enter HeadName"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div className="mb-3 px-3">
              <label for="basic-url" className="form-label">
                Address
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  name="address"
                  value={data.address}
                  onChange={handleInputChange}
                  size={40}
                  placeholder="Enter Address"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            <div className="mb-3 px-3">
              <label for="basic-url" className="form-label">
                Activities
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="basic-url"
                  name="activity"
                  value={data.activity}
                  onChange={handleInputChange}
                  size={40}
                  placeholder="Enter Activities"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            {/* <div className="mb-3 px-3">
                    <label for="basic-url" className="form-label">Email</label>
                    <div className="input-group">
                    <input type="text" className="form-control" id="basic-url" size={40} placeholder="Enter Email" aria-describedby="basic-addon3"/>
                    </div>
                </div> */}
            <div className="mb-3 px-3">
              <label for="basic-url" className="form-label">
                Contact
              </label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  name="contact_number"
                  value={data.contact_number}
                  onChange={handleInputChange}
                  id="basic-url"
                  size={40}
                  placeholder="Enter contact Number"
                  aria-describedby="basic-addon3"
                />
              </div>
            </div>
            {/* <div className="up_submit_btn_container">
                <button  type="button" className="btn up_submit_btn mt-2">Primary</button>
                </div> */}
            <div className="d-grid col-6 mx-auto py-2">
              <button className="up_submit_btn" type="submit">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
