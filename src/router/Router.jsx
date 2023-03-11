import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.js";
import About from "../Pages/About";
import Signup from "../Pages/Signup";
import SignIn from "../Pages/SignIn";
import Card from "../Components/Card.jsx";

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
          <Route path="/registration">
            <Route index element={<Signup />} />
          </Route>
          <Route path="/login">
            <Route index element={<SignIn />} />
          </Route>
          <Route path="/Ngo">
            <Route index element={<Card />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
