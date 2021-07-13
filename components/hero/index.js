import React from "react";
import { Breadcrumb, Container } from "react-bootstrap";
import Link from "next/link";
import AboutUs from "../aboutUs/index";

const Hero = ({
  title,
  BreadName1,
  BreadName2,
  BreadName3,
  current,
  page1Link,
  page2Link,
  page3Link,
}) => {
  return (
    <div>
      <div className="hero-section text-center">
        <h2>{title}</h2>
        <div className="text-center  mx-auto">
          <Breadcrumb className="">
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            {/* <Breadcrumb.Item href={page1Link}>{BreadName1}</Breadcrumb.Item>
            <Breadcrumb.Item href={page2Link}>{BreadName2}</Breadcrumb.Item>
            <Breadcrumb.Item href={page3Link}>{BreadName3}</Breadcrumb.Item> */}
            <Breadcrumb.Item active>{current}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
      <br />
    </div>
  );
};

export default Hero;
