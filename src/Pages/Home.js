import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousal/Carousel.jsx";
import Steps from "../Components/Steps/Steps";
import Footer from "../Components/Footer/Footer.jsx";
// import NgoLogin from "../Components/Login/NgoLogin";
import NgoApi from "../Components/Fetch-Api/NgoApi";

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
      <NgoApi />
      <Footer />
      {/* <NgoLogin/> */}
      {/* </div> */}
    </>
  );
};

export default Home;
