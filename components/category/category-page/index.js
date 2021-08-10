import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import { BsFillGridFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";
import { MenFashionData } from "../../../data/productData";
import ProductCard from "../../productCard";
const CategoryDynamic = () => {
  return (
    <div>
      <div className="my-5 product-category">
        <Container fluid>
          <Row>
            <Col md={6} xs={12}>
              <p>
                Showing 1–15 of 92 results{" "}
                <span className="ml-3 number-span">
                  Show:
                  <Link href="">15</Link>
                  <Link href="">20</Link>
                  <Link href="">25</Link>
                </span>
              </p>
            </Col>
            <Col md={6} xs={12} className="text-right">
              <p>
                <button className="btn btn-1">
                  <BsFillGridFill />
                </button>
                <button className="btn btn-1">
                  <AiOutlineBars />
                </button>
                <span className="sort-span">
                  Sort by <FaAngleDown className="ml-1" />
                  <ul className="sort-list">
                    <li>
                      <Link href="">Default sorting</Link>
                    </li>
                    <li>
                      <Link href="">Sort by popularity</Link>
                    </li>
                    <li>
                      <Link href="">Sort by average rating</Link>
                    </li>
                    <li>
                      <Link href="">Sort by latest</Link>
                    </li>
                    <li>
                      <Link href="">Sort by price: low to high</Link>
                    </li>
                    <li>
                      <Link href="">Sort by price: high to low</Link>
                    </li>
                  </ul>
                </span>
              </p>
            </Col>
          </Row>
          <br />
          <Row>
            {MenFashionData.map((Data) => {
              return (
                <Col md={3} sm={6} xs={12} key={Data.id}>
                  <ProductCard
                    BgImg={Data.img.type}
                    ProductTitle={Data.productTitle}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default CategoryDynamic;
