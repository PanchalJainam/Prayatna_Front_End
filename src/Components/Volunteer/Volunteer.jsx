import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Help from "../../Images/volunteer_5.jpg";
import "./Volunteer.css";
const Volunteer = () => {
  const [choice, setChoice] = useState("");
  const [data, setData] = useState({
    fname: "jainam",
    lname: "",
    activity: "",
    email: "",
    contact_number: "",
    occupation: "",
    address: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <section className="h-100" style={{ backgroundColor: "#0b4078" }}>
        <form action="" method="post" className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-75">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  {/* <div className="col-xl-6 d-none d-xl-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample " className="img-fluid"
                style={{borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem"}} />
            </div> */}
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Become Volunteer !
                      </h3>

                      <form>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1m"
                                name="faname"
                                placeholder="First Name"
                                onChange={handleInputChange}
                                className="form-control form-control-lg"
                              />
                              {/* <label className="form-label" for="form3Example1m">First name</label> */}
                            </div>
                          </div>
                          <div className="col-md-6 mb-4">
                            <div className="form-outline">
                              <input
                                type="text"
                                id="form3Example1n"
                                name="lname"
                                onChange={handleInputChange}
                                placeholder="Last Name"
                                className="form-control form-control-lg"
                              />
                              {/* <label className="form-label" for="form3Example1n">Last name</label> */}
                            </div>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example8"
                            placeholder="Address"
                            name="address"
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                          />
                          {/* <label className="form-label" for="form3Example8">Address</label> */}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example9"
                            placeholder="Email"
                            name="email"
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                          />
                          {/* <label className="form-label" for="form3Example9">DOB</label> */}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example90"
                            placeholder="Contact Number"
                            name="contact_number"
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                          />
                          {/* <label className="form-label" for="form3Example90">Pincode</label> */}
                        </div>

                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example99"
                            placeholder="Any Social Activity ?"
                            name="activity"
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                          />
                          {/* <label className="form-label" for="form3Example99">Course</label> */}
                        </div>

                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                          <h6
                            className="mb-0 me-4"
                            style={{ fontSize: "20px" }}
                          >
                            Gender :
                          </h6>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              onChange={(e) => setChoice(e.target.value)}
                              id="femaleGender"
                              value="female"
                            />
                            <label
                              className="form-check-label mt-1 vol-gender vol-label_gender"
                              for="femaleGender"
                            >
                              Female
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0 me-4">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              onChange={(e) => setChoice(e.target.value)}
                              id="maleGender"
                              value="male"
                            />
                            <label
                              className="form-check-label mt-1 gender label_gender"
                              for="maleGender"
                            >
                              Male
                            </label>
                          </div>

                          <div className="form-check form-check-inline mb-0">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              onChange={(e) => setChoice(e.target.value)}
                              id="otherGender"
                              value="other"
                            />
                            <label
                              className="form-check-label mt-1 gender label_gender"
                              for="otherGender"
                            >
                              Other
                            </label>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="form3Example99"
                            placeholder="Occupation"
                            name="occupation"
                            onChange={handleInputChange}
                            className="form-control form-control-lg"
                          />
                          {/* <label className="form-label" for="form3Example99">Course</label> */}
                        </div>

                        <div className="d-flex justify-content-end pt-3">
                          <button
                            type="button"
                            className="btn btn-light btn-lg"
                            style={{ backgroundColor: "#edeff0" }}
                          >
                            Reset
                          </button>
                          <button
                            type="button"
                            className="btn btn-warning btn-lg ms-2"
                            style={{
                              backgroundColor: "#0b4078",
                              border: "none",
                              color: "white",
                            }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-xl-6 d-none d-xl-block volunteer_img">
                    <img
                      src={Help}
                      alt="Sample "
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                    <h5 className="mb-5 text-uppercase text-center">
                      {" "}
                      make a positive difference in the world
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>{" "}
    </>
  );
};

export default Volunteer;
