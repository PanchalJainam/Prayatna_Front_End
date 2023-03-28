import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Carousel from "../Components/Carousal/Carousel.jsx";
import Steps from "../Components/Steps/Steps";
import Footer from "../Components/Footer/Footer.jsx";
// import NgoLogin from "../Components/Login/NgoLogin";
import Activity from "../Components/Activity/Activity";
import SliderCard from "../Components/CardsUpdate/SliderCard";
const Home = () => {
  return (
    <>
      {/* <div className="container-fluid"> */}
      {/* <h5>Prayatna</h5> */}
      <Navbar />
      <Carousel />
      <Steps />
      <SliderCard/>
      <Activity/>
      <Footer />
      {/* <NgoLogin/> */}
      {/* </div> */}
    </>
  );
};

export default Home;
