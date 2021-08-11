import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../productCard";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import { MenFashionData } from "../../../data/productData";
import Link from "next/link";

const MenFashion = ({ Product }) => {
  // console.log("Men Products", MenProducts);
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
          {Product.slice(1, 8).map((Data) => {
            return (
              <div className="p-2" key={Data.id}>
                <ProductCard
                  BgImg={Data.image[0].url}
                  ProductTitle={Data.title}
                  newPrice={Data.price}
                  Slug={Data.slug}
                  ID={Data.id}
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

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://apex-leather.herokuapp.com/categories/man-fashion`
//   );
//   const MenProduct = await res.json();
//   console.log("Men Products in response", MenProduct);
//   const MenProducts = MenProduct.products;

//   return {
//     props: { MenProducts },
//   };
// };

export default MenFashion;
