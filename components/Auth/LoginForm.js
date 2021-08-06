import React, { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Link from "next/link";
import SocialLogin from "./SocialLogin";
import {
  HiOutlineUser,
  HiOutlineMail,
  HiOutlineLockClosed,
} from "react-icons/hi";
const LoginForm = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    let loginData = { email, password };
    console.log("sign up data", loginData);
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };

    // axios
    //   .post("https://digipremier.org/api/contact/add", loginData, config)
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
          <Col md={7} sm={12} xs={12} className="m-0 p-0 ">
            <div className="login-form text-center">
              <div>
                <h2>Sign In To Apex Leather</h2>
                <div className="social-logins">
                  <SocialLogin/>
                </div>

                <p>Or use your email Accounts</p>
                <div className="form">
                  <form onSubmit={submitHandler}>
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
