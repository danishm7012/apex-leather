import React from "react";
import Link from "next/link";
import { FaInfoCircle } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Input from "../elements/input";

const checkoutForm = () => {
  return (
    <div className="checkout-form">
      <Container>
        <div className="p-3 coupon">
          <p className="mb-0 c">
            <FaInfoCircle className="icon" />
            Have you coupon?
            <Link href="">Click here to enter your code</Link>
          </p>
        </div>
        <br />
        <form action="">
          <Row>
            <Col md={7} xs={12} sm={12}>
              <div className="billing-details">
                <h2>Billing details</h2>
                <hr />
                <br />
                <Row>
                  <Col md={6} sm={12}>
                    <Input
                      Label="First Name"
                      type="text"
                      name="fname"
                      required="*"
                    />
                  </Col>
                  <Col md={6} sm={12}>
                    <Input
                      Label="Last Name"
                      type="text"
                      name="lname"
                      required="*"
                    />
                  </Col>
                </Row>
                <Input
                  Label="Company Name (Optional)"
                  type="text"
                  name="companyname"
                />
                <Input
                  Label="Country / Region "
                  type="text"
                  name="companyname"
                  required="*"
                />
                <Input
                  Label="Street address"
                  type="text"
                  name="street1"
                  placeholder="House number and street name"
                  required="*"
                />
                <Input
                  type="text"
                  name="street2"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                />
                <Input
                  Label="Town / City"
                  required="*"
                  type="text"
                  name="city"
                />
                <Input Label="County (optional)" type="text" name="city-2" />
                <Input
                  Label="Postcode "
                  required="*"
                  type="text"
                  name="passcode"
                />
                <Input Label="Phone " required="*" type="text" name="phone" />
                <Input
                  Label="Email address "
                  required="*"
                  type="email"
                  name="email"
                />
                <h2>Additional information</h2>
                <hr />
                <label htmlFor="">Order notes (optional)</label>
                <textarea
                  name=""
                  id=""
                  rows="3"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  className="form-control"
                ></textarea>
              </div>
            </Col>
            <Col md={5} xs={12} sm={12}>
              <div className="order-details p-5">
                <h2>Your Order</h2>
                <hr />
                <div className="d-flex-1">
                  <p>Product</p>
                  <p className="number">Subtotal</p>
                </div>
                <div className="d-flex-1">
                  <p>Affordable Fashionable Men Leather Jacket</p>
                  <p className="number">£82.00</p>
                </div>
                <div className="d-flex-1">
                  <p>Subtotal</p>
                  <p className="number">£82.00</p>
                </div>
                <div className="d-flex-1">
                  <p>Total</p>
                  <p className="number">£82.00</p>
                </div>
                <br />
                <div className="restriction p-3">
                  <div className="icon">
                    <FaInfoCircle />
                  </div>

                  <p>
                    Sorry, it seems that there are no available payment methods
                    for your state. Please contact us if you require assistance
                    or wish to make alternate arrangements.
                  </p>
                </div>
                <br />
                <p>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
                <br />
                <button className="btn btn-1 w-100">Place Order</button>
              </div>
            </Col>
          </Row>
        </form>
      </Container>
    </div>
  );
};

export default checkoutForm;
