import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import About from "../../assests/images/about.jpg";
import Link from "next/link";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div className="about-us my-5">
        <br />
        <Container fluid>
          <Row className="px-3">
            <Col md={6} sm={12} xs={12}>
              <div className="about-text mt-5">
                <h4>About Us</h4>
                <h2>We Make What We Love</h2>
                <p>
                  Apex Leather comes with a demanding range of fashion needs. It
                  meets the client’s fashion requirements at its best consisting
                  of trendy accessories, shoes, and clothing. The specialty of
                  products is that they are handmade by the experts of leather.
                  Leather tanning facility is also provided by the company to
                  the clients. Leather bags of all kinds, jackets and business
                  fashion that includes wallets and file cases are also
                  available. Leather products for both, men and women are
                  available.
                </p>
                <br />
                <div className="btn-1 mb-3">
                  <Link href="">Read More</Link>
                </div>
                <br />
              </div>
            </Col>
            <Col md={6} sm={12} xs={12}>
              <div className="img">
                <Image src={About} alt="About Image" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default AboutUs;
