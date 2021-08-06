import React from "react";
import TopHeader from "./topheader";
import DeskopSearch from "./desktopSearch";
import MainNavbar from "./mainNavbar";
import Head from "next/head";

const Header = () => {
  return (
    <div>
      <Head>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
        <script
          src="https://cdn.snipcart.com/scripts/2.0/snipcart.js"
          data-api-key="MjExNzMwMDUtODJiZC00OWEzLWI5ZjEtMjhhMzA1ZTdkZmEyNjM3NjM4MjgxNjkzMzk3NDQx"
          id="snipcart"
        ></script>
        <link
          href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
          rel="stylesheet"
          type="text/css"
        />
      </Head>
      <TopHeader />
      <DeskopSearch />
      <MainNavbar />
    </div>
  );
};

export default Header;
