import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Link from "next/link";
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";

const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    let contactData = { name, email, password };
    console.log("sign up data", contactData);
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // axios
    //   .post("https://digipremier.org/api/contact/add", contactData, config)
    //   .then((res) => {
    //     setErrors({});
    //     alert(res.data.success);
    //     setSuccess(res.data.success);
    //   })
    //   .catch((err) => {
    //     setSuccess(false);
    //     setErrors(err.response.data);
    //   });
  };

  return (
    <div>
      <Container
        fluid
        className=" m-0 p-0"
        style={{ width: "100%", height: "100vh" }}
      >
        <Row className="m-0 p-0">
          <Col md={5} sm={12} xs={12} className="m-0 p-0 ">
            <div className="login-text">
              <div className="">
                <h2>WelCome Back!</h2>
                <p>
                  To keep connected with us please <br /> login with your
                  personal info
                </p>
                <Link href="/login">
                  <a className="btn btn-1">Sign In</a>
                </Link>
              </div>
            </div>
          </Col>

          <Col md={7} sm={12} xs={12} className="m-0 p-0 ">
            <div className="login-form text-center">
              <div>
                <h2>Create Account</h2>
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
                  <form onSubmit={submitHandler}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <HiOutlineUser className="icons" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <HiOutlineMail className="icons" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="password"
                        placeholder="Passwords"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <HiOutlineLockClosed className="icons" />
                    </Form.Group>

                    <br />
                    <div className="sign-up-btn">
                      <button type="submit" className="btn btn-1">
                        SIGN UP
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUpForm;
