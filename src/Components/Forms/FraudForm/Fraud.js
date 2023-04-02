import React, { useEffect, useState } from "react";
import "./Fraud.css";
import FormImage from "../../../Images/requestImage.jpg";
import { useSearchParams } from "react-router-dom";
import { useGlobalContext } from "../../../context/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";

const Fraud = () => {
  // const [user, setUser] = useState({
  //   ngo_name: "",
  //   email: "",
  //   message: "",
  //   activity: "",
  // });

  const [data, setData] = useState({
    ngo_name: "",
    email: "",
    message: "",
    activity: "",
  });

  const [searchParams, setSearchParams] = useSearchParams();
  const ngo_id = searchParams.get("ngo_id");

  const { state } = useGlobalContext();
  console.log({ state });

  useEffect(() => {
    if (state?.userData?._id) {
      axios
        .get(`http://localhost:5000/regngos/${state.userData._id}`)
        .then((res) => {
          console.log({ res });
          setData(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [state]);

  console.log({ data });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/report", {
        user_id: state.userData._id,
        ngo_id,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="fraud_wrapper">
        <div className="fraud_inner">
          <Link to="/search">
            <KeyboardBackspaceIcon
              style={{
                position: "relative",
                left: "20px",
                top: "20px",
                fontSize: "30px",
                color: "black",
              }}
            />
          </Link>
          <div className="fraud_image-holder">
            <img src={FormImage} alt="" className="fraud_img" />
          </div>
          <form onSubmit={handleFormSubmit} className="fraud_form">
            <h3 className="fraud_title">Fraud NGO </h3>
            <div className="fraud_form-row">
              <input
                name="ngo_name"
                type="text"
                className="fraud_form-control"
                placeholder="Enter a Name"
                value={data?.ngo_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="fraud_form-row">
              <input
                name="email"
                type="email"
                className="fraud_form-control"
                placeholder="Enter Email"
                value={data?.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="fraud_form-row">
              <input
                name="address"
                type="address"
                className="fraud_form-control"
                placeholder="Address"
                onChange={handleInputChange}
              />
            </div>
            <div class="fraud_form-row">
              <input
                name="activity"
                type="text"
                className="fraud_form-control"
                placeholder="Ngo activity"
                onChange={handleInputChange}
              />
            </div>

            <textarea
              name="message"
              id=""
              rows="3"
              cols="8"
              placeholder="Description"
              className="fraud_form-control"
              style={{ height: "130px" }}
              onChange={handleInputChange}
            ></textarea>

            <button className="fraud_button">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Fraud;
