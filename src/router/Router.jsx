import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.js";
import About from "../Pages/About";
import Contact from "../Components/Contact Us/Contact";
// import Signup from "../Pages/Signup";
// import SignIn from "../Pages/SignIn";
// import SignIn from "../Pages/SignIn";
// import Card from "../Components/Card.jsx";
import Search from "../Components/Search/Search.jsx";
import NgoLogin from "../Components/Login/NgoLogin";
import Mydata from "../Components/NGOdeshboeard/Mydata.jsx";
import Update from "../Components/NGOdeshboeard/Update.jsx";
import Fraud from "../Components/Forms/FraudForm/Fraud.js";
import Volunteer from "../Components/Volunteer/Volunteer";
import Changepwd from "../Components/Forms/ChangePasswordForm/Change.jsx";
import Toggle from "../Components/Toggle/Toggle.js";
import Req from "../Components/Forms/RequestForm/Request.js";
import FeedbackForm from "../Components/Forms/FeedbackForm/Feedbackform.js";

export const Router = () => {
  const { state, setState } = useGlobalContext();
  function checkLogin() {
    if (state.userData && state.userData._id) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      {/* {checkLogin()} */}
      <BrowserRouter>
        {/* <Navbar /> */}
        {/* <Form /> */}
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/about">
            <Route index element={<About />} />
          </Route>
          <Route path="/search">
            <Route index element={<Search />} />
          </Route>
          <Route path="/registration">
            <Route index element={<Toggle />} />
          </Route>
          <Route path="/login">
            <Route index element={<NgoLogin />} />
          </Route>
          {/* <Route path="/volunteer">
            <Route
              index
              element={checkLogin() ? <Volunteer /> : <NgoLogin />}
            />
          </Route> */}
          <Route path="/volunteer">
            <Route index element={<Volunteer />} />
          </Route>
          <Route path="/search/report">
            <Route index element={checkLogin() ? <Fraud /> : <NgoLogin />} />
          </Route>
          <Route path="/volunteerdata">
            <Route index element={<Volunteerapi />} />
          </Route>
          <Route path="/myprofile">
            <Route index element={checkLogin() ? <Mydata /> : <NgoLogin />} />
          </Route>
          <Route path="/myprofile/edit">
            <Route index element={checkLogin() ? <Update /> : <NgoLogin />} />
          </Route>
          <Route path="/myprofile/changepassword">
            <Route
              index
              element={checkLogin() ? <Changepwd /> : <NgoLogin />}
            />
          </Route>
          <Route path="/contact">
            <Route index element={<Contact />} />
          </Route>
          <Route path="/historydata">
            <Route index element={<Historydata />} />
          </Route>
          <Route path="/search/request">
            <Route index element={checkLogin() ? <Req /> : <NgoLogin />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
