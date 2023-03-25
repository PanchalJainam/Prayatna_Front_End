import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/AboutUs/Hero/HeroSection";
import Team from "../Components/AboutUs/Team/team";
import Info from "../Components/AboutUs/Information/Info";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Info/>
      <Team/>
    </>
  );
};

export default About;
