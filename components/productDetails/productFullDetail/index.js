import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductImg from "../../../assests/images/leather-tanning-1.jpg";
import Image from "next/image";
import {
  FaEye,
  FaHeart,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaPinterestP,
  FaGooglePlusG,
} from "react-icons/fa";
import { ImCopy } from "react-icons/im";
import Link from "next/link";
const ProductFullDetail = () => {
  return (
    <div>
      <Container className="my-5 detail-page">
        <Row>
          <Col md={6} xs={12} className="mt-3">
            <div className="img text-center">
              <Image src={ProductImg} width={400} height={400} alt="Details Image" />
            </div>
          </Col>
          <Col md={6} xs={12} className="mt-3">
            <div className="text">
              <h2>LAMB SKIN NAPPA SOFT LEATHER FINEST QUALITY WHOLE SHEEP</h2>
              <br />
              <div className="add-to-cart d-flex">
                <div className="icon">
                  <Link href="">
                    <a>
                      <FaHeart />
                    </a>
                  </Link>
                </div>
                <div className="icon">
                  <Link href="">
                    <a>
                      <ImCopy />
                    </a>
                  </Link>
                </div>
              </div>
              <br />
              <div className="category">
                <p>
                  <strong>Category:</strong>
                  <Link href="">Aniline Leather</Link>,
                  <Link href="">Leather Tanning</Link>
                </p>
              </div>
              <br />
              <div className="social-icons">
                <ul className="">
                  <li>
                    <div className="product-social facebook">
                      <a href="https://en-gb.facebook.com/">
                        <FaFacebookF className="icons" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="product-social twitter">
                      <a href="https://www.twitter.com/">
                        <FaTwitter className="icons" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="product-social linkedin">
                      <a href="https://www.linkedin.com/">
                        <FaLinkedin className="icons" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="product-social pintrest">
                      <a href="https:/www.pinterest.com/">
                        <FaPinterestP className="icons" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="product-social google">
                      <a href="https://www.goole.com/">
                        <FaGooglePlusG className="icons" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductFullDetail;
