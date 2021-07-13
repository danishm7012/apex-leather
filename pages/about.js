import React from "react";
import Hero from "../components/hero";
import Meta from "../components/Meta";
import { Breadcrumb, Container } from "react-bootstrap";
import Link from "next/link";
import AboutUs from "../components/aboutUs/index";

const AboutPage = () => {
  return (
    <div>
      <Meta title="About Us" keywords="Apex Leather" />
      <Hero title="About US" current="About" />
      <Container>
        <AboutUs />
      </Container>
    </div>
  );
};

export default AboutPage;
