import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Steps from "./Steps/Steps";
import F from "../Components/F";
import NgoLogin from "../Components/NgoLogin";

const Home = () => {
  return (
    <>
      {/* <div className="container-fluid"> */}
      {/* <h5>Prayatna</h5> */}
      <Navbar />
      <Carousel />
      <div className="mt-3">
        <h3 className="text-center">Guidance Page</h3>
      </div>
      <Steps />
      <F/>
      <NgoLogin/>
      {/* </div> */}
    </>
  );
};

export default Home;
