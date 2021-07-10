import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../../productCard";
import LeatherImg from "../../../assests/images/leather-tanning-1.jpg";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
const LeatherTanning = () => {
  return (
    <div>
      <Container className="my-5">
        <div className="head-title">
          <h2>Leather Tanning</h2>
          <hr />
          <span className="float-right view-all mb-5">
            <Link href="">
              <a>
                View All
                <BsArrowRight />
              </a>
            </Link>
          </span>
          <br />
        </div>
        <Row>
          <Col md={3}>
            <ProductCard
              BgImg={LeatherImg}
              ProductTitle="LAMB SKIN NAPPA SOFT LEATHER FINEST QUALITY WHOLE SHEEP"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LeatherTanning;
