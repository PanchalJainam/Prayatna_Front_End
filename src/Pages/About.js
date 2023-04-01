import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/AboutUs/Hero/HeroSection";
import Team from "../Components/AboutUs/Team/team";
import Info from "../Components/AboutUs/Information/Info";
import Work from "../Components/AboutUs/Works/WorksInfo";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <Info />
      <Team />
    </>
  );
};

export default About;
