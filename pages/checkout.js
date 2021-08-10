import React from "react";
import Hero from "../components/hero";
import Meta from "../components/Meta";
import CheckoutPage from "../components/checkout";

const checkout = () => {
  return (
    <div>
      <Meta title="Checkout" keywords="Apex Leather" />
      <Hero title="Checkout" current="checkout" />
      {/* <CheckoutPage /> */}
    </div>
  );
};

export default checkout;
