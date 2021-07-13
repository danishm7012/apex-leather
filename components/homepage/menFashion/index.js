import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../productCard";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { MenFashionData } from "../../../data/productData";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MenFashion = () => {
  console.log("Men Data", MenFashionData);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
        },
      },
      
    ],
  };
  return (
    <div>
      <Container className="my-5">
        <div className="head-title">
          <h2>Men Fashion</h2>
          <hr />
          <br />
        </div>
        <Slider {...settings}>
          {MenFashionData.map((Data) => {
            return (
              <div className="p-2" key={Data.id}>
                <ProductCard
                  BgImg={Data.img.type}
                  ProductTitle={Data.productTitle}
                />
              </div>
            );
          })}
        </Slider>

        <br />
        <div className="head-title mt-4">
          <span className="float-right view-all mb-5">
            <Link href="">
              <a>
                View All
                <BsArrowRight />
              </a>
            </Link>
          </span>
        </div>
        <br />
      </Container>
    </div>
  );
};

export default MenFashion;
