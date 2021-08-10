import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductImg from "../../../assests/images/leather-tanning-1.jpg";
import Image from "next/image";
import Zoom from "react-img-zoom";
import { BiDollar } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
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
const ProductFullDetail = ({ product }) => {
  console.log("one Products", product);
  return (
    <div>
      <Container className="my-5 detail-page">
        <Row>
          <Col md={6} xs={12} className="mt-3">
            <div className="img text-center">
              <Image
                src={product.image[0].url}
                width={400}
                height={400}
                alt="Details Image"
              />
              {/* <Zoom img={ProductImg} zoomScale={3} width={300} height={300} /> */}
            </div>
          </Col>
          <Col md={6} xs={12} className="mt-3">
            <div className="text">
              <h2>{product.title}</h2>
              <p>{product.detail}</p>
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
                  <Link href="">{product.categories[0].name}</Link>,
                  <Link href="">{product.categories[0].title}</Link>
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

              <h3>
                <span className="mr-3 new-price">
                  <BiDollar />
                  {product.price}
                </span>
              </h3>
              <div className="detail-add">
                <button
                  className="snipcart-add-item add-to-cart"
                  data-item-id={product.id}
                  data-item-price={product.price}
                  data-item-url="/paintings/starry-night"
                  // data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                  data-item-image={product.image[0].url}
                  data-item-name={product.title}
                >
                  <AiOutlineShoppingCart className="icons" />
                  Add to cart
                </button>
                {/* <button onClick="" className="add-to-cart">
                  <AiOutlineShoppingCart className="icons" />
                  Add To cart
                </button> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductFullDetail;
