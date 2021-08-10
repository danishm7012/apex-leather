import React from "react";
import TopHeader from "./topheader";
import DeskopSearch from "./desktopSearch";
import MainNavbar from "./mainNavbar";
import Head from "next/head";

const Header = () => {
  return (
    <div>
      
      <TopHeader />
      <DeskopSearch />
      <MainNavbar />
    </div>
  );
};

export default Header;
