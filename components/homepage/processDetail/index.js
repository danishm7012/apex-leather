import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import { ProcessData } from "../../../data/process";
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
            {ProcessData.map((Data) => {
              return (
                <Col md={3} sm={6} xs={12} key={Data.id}>
                  <div className="process-card text-center p-3">
                    <div className="img ">
                      <Image
                        src={Data.img.type}
                        height={60}
                        width={60}
                        alt="Process Detail Image"
                      />
                    </div>
                    <div className="text">
                      <p>{Data.title}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ProcessDetail;
