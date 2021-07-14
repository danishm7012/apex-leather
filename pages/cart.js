import React from "react";
import CartPage from "../components/cart";
import Hero from "../components/hero";
import Meta from "../components/Meta";

const cart = () => {
  return (
    <div>
      <Meta title="Cart" keywords="Apex Leather" />
      <Hero title="Cart" current="Cart" />
      <CartPage />
    </div>
  );
};

export default cart;
