import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Link from "next/link";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";
const LoginForm = () => {
  return (
    <div>
      <Container
        fluid
        className=" m-0 p-0"
        style={{ width: "100%", height: "100vh" }}
      >
        <Row className="m-0 p-0">
          <Col md={7} sm={12} xs={12} className="m-0 p-0 ">
            <div className="login-form text-center">
              <div>
                <h2>Sign In To Apex Leather</h2>
                <div className="social-logins">
                  <ul>
                    <li>
                      <button className="btn btn-1">
                        <FaFacebookF />
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-1">
                        <FaGooglePlusG />
                      </button>
                    </li>
                    <li>
                      <button className="btn btn-1">
                        <FaLinkedinIn />
                      </button>
                    </li>
                  </ul>
                </div>

                <p>Or use your email Accounts</p>
                <div className="form">
                  <form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email" />
                      <HiOutlineMail className="icons" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control type="password" placeholder="Passwords" />
                      <HiOutlineLockClosed className="icons" />
                    </Form.Group>
                    <Link href="">
                      <a>Forgot your Password?</a>
                    </Link>
                    <br />
                    <div className="sign-up-btn">
                      <button type="submit" className="btn btn-1">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
          <Col md={5} sm={12} xs={12} className="m-0 p-0 ">
            <div className="login-text">
              <div className="">
                <h2>Hello, Friends!</h2>
                <p>
                  Enter Your Personal Details And <br /> Start your Journey with
                  Us
                </p>
                <Link href="/signup">
                  <a className="btn btn-1">Sign Up</a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginForm;
