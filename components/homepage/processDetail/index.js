import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Process1 from "../../../assests/images/1-1.png";
import Process2 from "../../../assests/images/2-1.png";
import Process3 from "../../../assests/images/3-1.png";
import Process4 from "../../../assests/images/4-1.png";
import Image from "next/image";
const ProcessDetail = () => {
  return (
    <div>
      <div className="process-details my-5">
        <div className="head-title text-center">
          <h4>Our Process</h4>
          <h2>Detailed Instructions</h2>
        </div>
        <br />
        <br />
        <Container>
          <Row>
            <Col md={3} sm={6} xs={12}>
              <div className="process-card text-center p-3">
                <div className="img ">
                  <Image src={Process1} height={60} width={60} />
                </div>
                <div className="text">
                  <p>01. Technical Drawing</p>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className="process-card text-center p-3">
                <div className="img ">
                  <Image src={Process2} height={60} width={60} />
                </div>
                <div className="text">
                  <p>02. Pettern Making</p>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className="process-card text-center p-3">
                <div className="img ">
                  <Image src={Process3} height={60} width={60} />
                </div>
                <div className="text">
                  <p>03. Prototyping Sample</p>
                </div>
              </div>
            </Col>
            <Col md={3} sm={6} xs={12}>
              <div className="process-card text-center p-3">
                <div className="img ">
                  <Image src={Process4} height={60} width={60} />
                </div>
                <div className="text">
                  <p>04. Production</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProcessDetail;
