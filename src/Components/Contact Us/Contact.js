import React from "react";
import "./Contact.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import Navbar from "../Navbar/Navbar";
const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact_container mt-5">
        <div className="contactus_title">
          <h1>Contact Us</h1>
        </div>
        <div className="contact_content">
          <div class="contact_left-side">
            <div class="con_address con_details">
              <LocationOnIcon />
              <div class="contact_topic">Address</div>
              <div class="contact_text-one">Gujarat University Campus,</div>
              <div class="contact_text-two">Ahmedabad,380009</div>
            </div>
            <div class="con_phone con_details">
              <PhoneInTalkIcon />
              <div class="contact_topic">Phone</div>
              <div class="contact_text-one">+0098 9893 5647</div>
              <div class="contact_text-two">+0096 3434 5678</div>
            </div>
            <div class="con_email con_details">
              <MarkEmailUnreadIcon />
              <div class="contact_topic">Email</div>
              <div class="contact_text-one">prayatna@gmail.com</div>
              <div class="contact_text-two">prayatna.info@gmail.com</div>
            </div>
          </div>
          <div class="contact_right-side">
            <div class="topic-text">Let's catch up</div>
            <p>
              If you have any queries related this , you can send message, will
              pleasure to help you.
            </p>
            <form action="#">
              <div class="contact_input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div class="contact_input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div class="contact_input-box con_message-box">
                <textarea placeholder="Enter Message"></textarea>
              </div>
              <div class="contact_button">
                <input type="submit" value="Send Now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
