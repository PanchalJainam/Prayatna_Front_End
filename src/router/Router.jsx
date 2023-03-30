import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.js";
import About from "../Pages/About";
// import Signup from "../Pages/Signup";
import SignIn from "../Pages/SignIn";
// import SignIn from "../Pages/SignIn";
// import Card from "../Components/Card.jsx";
import Search from "../Components/Search/Search.jsx";
import NgoLogin from "../Components/Login/NgoLogin";
import Mydata from "../Components/NGOdeshboeard/Mydata.jsx";
import Update from "../Components/NGOdeshboeard/Update.jsx";
// import volunteer from "../Components/Volunteer";
import Volunteer from "../Components/Volunteer/Volunteer";
// import Reg from "../Components/Registration/Reg.jsx";
import Toggle from "../Components/Toggle/Toggle.js";

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
          {/* <Route path="/login">
            <Route index element={<SignIn />} />
          </Route> */}
          <Route path="/login">
            <Route index element={<NgoLogin />} />
          </Route>
          <Route path="/volunteer">
            <Route index element={<Volunteer />} />
          </Route>
          <Route path="/myprofile">
            <Route index element={<Mydata />} />
          </Route>
          <Route path="/myprofile/edit">
            <Route index element={<Update />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
