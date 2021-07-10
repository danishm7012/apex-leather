import React from "react";
import MainBanner from "./mainBanner";
import LeatherTanning from "./leatherTanning";
import AboutUs from "../aboutUs";
import ProcessDetail from "./processDetail";

const HomePage = () => {
  return (
    <div>
      <MainBanner />
      <LeatherTanning />
      <AboutUs />
      <ProcessDetail />
    </div>
  );
};

export default HomePage;
