import React from "react";
import MainBanner from "./mainBanner";
import LeatherTanning from "./leatherTanning";
import WomenFashion from "./womenFashion";
import MenFashion from "./menFashion";
import BusinessFashion from "./busniessFashion";
import AboutUs from "../aboutUs";
import ProcessDetail from "./processDetail";

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <LeatherTanning />
      <MenFashion />
      <WomenFashion />
      <BusinessFashion />
      <AboutUs />
      <ProcessDetail />
    </div>
  );
};

export default HomePage;
