import React from "react";
import Hero from "../components/hero";
import Meta from "../components/Meta";
import ContactUS from "../components/contactUs";

const contactUs = () => {
  return (
    <div>
      <Meta title="Contact US" keywords="Apex Leather" />
      <Hero title="Contact Us" current="Contact Us" />
      <div className="contact-us-style">
        <ContactUS />
      </div>
    </div>
  );
};

export default contactUs;
