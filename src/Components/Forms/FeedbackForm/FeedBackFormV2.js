import React, { useEffect, useState } from "react";
import "./feedback.css";
import { Rating } from "@mui/material";
import FeedbackImage from "../../../Images/FeedbackImage.jpg";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useGlobalContext } from "../../../context/GlobalContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Feedbackform = () => {
  const [value, setValue] = React.useState(0); // for rating

  const [data, setData] = useState({
    emailfeedback: "",
    message: "",
  });

  // const [user, setUser] = useState();
  const { state, setState } = useGlobalContext();

  useEffect(() => {
    if (state?.userData?._id) {
      axios
        .get(`http://localhost:5000/reguser/${state.userData._id}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((e) => console.log(e));
    }
  }, [state]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post("/feedback", { ...data, rating: value });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="feedback_wrapper">
        <div className="feed_inner">
          <div className="feed_image-holder">
            <img src={FeedbackImage} alt="" />
          </div>
          <form className="feed_form" onSubmit={handleFormSubmit}>
            <h3 className="feed_title">Feedback Form</h3>
            <div className="feed_form-row">
              <input
                name="emailfeedback"
                type="email"
                className="feed_form-control feed_input"
                placeholder="Email"
                value={data?.email}
                onChange={handleInputChange}
              />
            </div>

            <textarea
              name="message"
              rows="3"
              cols="8"
              placeholder="Message"
              className="feed_form-control"
              value={data?.message}
              style={{ height: "130px" }}
              onChange={handleInputChange}
            ></textarea>
            <br />
            <div className="feed_from-row">
              <h4 className="feed_title">Rateing</h4>
            </div>

            <div className="feed_from-row">
              <div className="rate_control">
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="feed_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedbackform;
