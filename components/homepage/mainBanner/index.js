import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { MainSlider } from "../../../data/carsuls";
import Link from "next/link";

const MainBanner = () => {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col md={8} xs={12} className="p-0 m-0">
            <div className="main-slider">
              <Carousel>
                {MainSlider.map((Data) => {
                  console.log("Slider Data", Data);
                  return (
                    <Carousel.Item
                      className="slider-content"
                      style={{
                        backgroundImage: `url(${Data.slide.type.src})`,
                      }}
                    >
                      <div className="banner-text text-center my-2">
                        <h2>{Data.title}</h2>
                      </div>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </div>
          </Col>
          <Col md={4} xs={12} className="p-0 m-0">
            <Link href="">
              <div className="branded-image">
                <div className="overlay">
                  <div className="img-text">
                    <h2>
                      Men <br />
                      Fashion
                    </h2>
                    <a className="btn btn-1">View Products</a>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="">
              <div className="branded-image-women">
                <div className="overlay">
                  <div className="img-text">
                    <h2>
                      Women <br />
                      Fashion
                    </h2>
                    <a className="btn btn-1">View Products</a>
                  </div>
                </div>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainBanner;
