import React from "react";
import "./feedback.css";
// import FeedbackImage from "../image/information.jpg"
const Feedbackform = () => {
  return (
    <>
      <div class="feedback_wrapper">
        <div class="feed_inner">
          <div class="feed_image-holder">
            <img
              src="https://i.pinimg.com/564x/2c/5b/fe/2c5bfe88c4a8387b2f8e1c68afe6f5bf.jpg"
              alt=""
            />
          </div>
          <form action="" className="feed_form">
            <h3 className="feed_title">Feedback Form</h3>
            <div className="feed_form-row">
              <input
                type="email"
                class="feed_form-control feed_input"
                placeholder="Email"
              />
            </div>

            <textarea
              name=""
              id=""
              rows="3"
              cols="8"
              placeholder="Message"
              class="feed_form-control"
              style={{ height: "130px" }}
            ></textarea>
            <br />
            <div className="feed_from-row">
              <h4 className="feed_title">Rateing</h4>
            </div>

            <div className="feed_form-row">
              <div className="rate">
                <input
                  type="radio"
                  id="star5"
                  name="rate"
                  value="5"
                  className="feed_input"
                />
                <label for="star5" title="text" className="feed_lbl">
                  5 stars
                </label>
                <input
                  type="radio"
                  id="star4"
                  name="rate"
                  value="4"
                  className="feed_input"
                />
                <label for="star4" title="text" className="feed_lbl">
                  4 stars
                </label>
                <input
                  type="radio"
                  id="star3"
                  name="rate"
                  value="3"
                  className="feed_input"
                />
                <label for="star3" title="text" className="feed_lbl">
                  3 stars
                </label>
                <input
                  type="radio"
                  id="star2"
                  name="rate"
                  value="2"
                  className="feed_input"
                />
                <label for="star2" title="text" className="feed_lbl">
                  2 stars
                </label>
                <input
                  type="radio"
                  id="star1"
                  name="rate"
                  value="1"
                  className="feed_input"
                />
                <label for="star1" title="text" className="feed_lbl">
                  1 star
                </label>
              </div>
            </div>

            <button className="feed_btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Feedbackform;
