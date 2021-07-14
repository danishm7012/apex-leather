import React from "react";
import { Container, Row, Col, InputGroup, FormControl } from "react-bootstrap";
import { IoIosClose } from "react-icons/io";
import Leather from "../../assests/images/leather-tanning-1.jpg";
import Image from "next/image";
import Link from "next/link";

const cartComponent = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col md={8} sm={12} xs={12}>
            <div className="cart-table">
              <table className="table .responsive">
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <button className="btn btn-1">
                        <IoIosClose />
                      </button>
                    </td>
                    <td>
                      <Image src={Leather} width={70} height={70} />
                    </td>

                    <td className="title">
                      Affordable Fashionable Men Leather Jacket
                    </td>
                    <td>£82.00</td>
                    <td>1</td>
                    <td>£82.00</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="apply-coupon">
              <Row>
                <Col md={6} xs={12} sm={12}>
                  <form action="">
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Coupon code"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Text
                        className="btn btn-1"
                        type="submit"
                        id="basic-addon2"
                      >
                        Apply coupon
                      </InputGroup.Text>
                    </InputGroup>
                  </form>
                </Col>
                <Col md={6} xs={12} sm={12}>
                  <div className="text-right">
                    <button className="btn btn-2">Clear Cart</button>
                    <button className="btn btn-2">Update Cart</button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col md={4} sm={12} xs={12} className="ml-0 pl-0">
            <div className="checkout-part">
              <div className="checkout-card p-5">
                <div className="d-flex-1">
                  <h3>Cart totals</h3>
                  <p className="mb-0"></p>
                </div>
                <br />
                <div className="d-flex-1">
                  <h3>Subtotal</h3>
                  <p className="mb-0">£82.00</p>
                </div>
                <hr />
                <div className="d-flex-1">
                  <h3>Total</h3>
                  <p className="mb-0">£82.00</p>
                </div>
                <div className="checkout-btn mx-auto text-center mt-4">
                  <Link href="/checkout" className="w-100">
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default cartComponent;
