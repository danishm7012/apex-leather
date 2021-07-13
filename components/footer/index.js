import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { FaTwitter, FaLinkedin, FaFacebook,FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        <Container fluid className="footer-module px-4">
          <Row>
            <Col md={3} sm={12}>
              <div className="contact-us">
                <h3>Contact Us</h3>
                <br />
                <p>
                  <span>UK Office:</span>
                  3rd Floor, 244 Edgware
                  <br />
                  Road, London W2 1DS, UK.
                  <br />
                  WhatsApp: +44 7391 758 721
                </p>
                <p>
                  <span>UAE Office:</span>
                  Park Lane Plaza, 12th Floor, Office No. 1213, Down Town, Dubai
                  UAE. P.O.
                  <br />
                  BOX 415253
                  <br />
                  Call: +971 58 1439463
                  <br />
                  WhatsApp: +971 54 5277366
                </p>
                <p>
                  <span>Pakistan Office:</span>
                  Office No.18, Naqi Arcade, 71-The Mall Road, Lahore, Pakistan.
                  <br />
                  Call: +92 423 2801559
                </p>
              </div>
            </Col>
            <Col md={3} sm={12}>
              <div className="quick-links">
                <h3>Quick Links</h3>
                <br />
                <ul>
                  <li>
                    <Link href="">Home</Link>
                  </li>
                  <li>
                    <Link href="">About Us</Link>
                  </li>
                  <li>
                    <Link href="">Blog</Link>
                  </li>
                  <li>
                    <Link href="">Shipping Policy</Link>
                  </li>
                  <li>
                    <Link href="">Contact</Link>
                  </li>
                </ul>

                <div className="social">
                  <ul>
                    <li className=" ">
                      <div className="social-icons facebook">
                        <Link href="/">
                          <FaFacebook className="icon" />
                        </Link>
                      </div>
                    </li>
                    <li className=" ">
                      <div className="social-icons twitter">
                        <Link href="/">
                          <FaTwitter className="icon" />
                        </Link>
                      </div>
                    </li>
                    <li className=" ">
                      <div className="social-icons linkedin">
                        <Link href="/">
                          <FaLinkedin className="icon" />
                        </Link>
                      </div>
                    </li>
                    <li className=" ">
                      <div className="social-icons instagram">
                        <Link href="/">
                          <FaInstagram className="icon" />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col md={3} sm={12}>
              <div className="quick-links">
                <h3>Our Categories</h3>
                <br />
                <ul>
                  <li>
                    <Link href="">Leather Tanning</Link>
                  </li>
                  <li>
                    <Link href="">Men Fashion</Link>
                  </li>
                  <li>
                    <Link href="">Women Fashion</Link>
                  </li>
                  <li>
                    <Link href="">Business Fashion</Link>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={3} sm={12}></Col>
          </Row>
        </Container>
      </footer>
      <div className="footer-bottom">
        <p className="mb-0">© Apex Leather All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
