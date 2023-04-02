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
// import volunteer from "../Components/Volunteer";
import Fraud from "../Components/Forms/FraudForm/Fraud.js";
import Volunteer from "../Components/Volunteer/Volunteer";

import Toggle from "../Components/Toggle/Toggle.js";
import Req from "../Components/Forms/RequestForm/Request.js";
import FeedbackForm from "../Components/Forms/FeedbackForm/FeedBackFormV2.js";

export const Router = () => {
  return (
    <>
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
          <Route path="/volunteer">
            <Route index element={<Volunteer />} />
          </Route>
          <Route path="/search/report">
            <Route index element={<Fraud />} />
          </Route>
          <Route path="/myprofile">
            <Route index element={<Mydata />} />
          </Route>
          <Route path="/myprofile/edit">
            <Route index element={<Update />} />
          </Route>
          <Route path="/contact">
            <Route index element={<Contact />} />
          </Route>
          <Route path="/search/request">
            <Route index element={<Req />} />
          </Route>
          <Route path="/feedback">
            <Route index element={<FeedbackForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
