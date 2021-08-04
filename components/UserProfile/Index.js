import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import UserInfo from "./UserInfo";
import UserOrder from "./UserOrder";
import ProfileImage from "../../assests/profile.jpg";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div>
      <div className="profile-hero-section">
        <div className="overlay py-5">
          <h2 className="text-center">User Profile</h2>
        </div>
      </div>
      <div className="profile-image text-center" style={{ marginTop: "-4rem" }}>
        <Image
          src={ProfileImage}
          width={150}
          height={150}
          alt="profile image"
          className="rounded-circle"
        />
        <h2>Jhon D-cusa</h2>
      </div>
      <Container className="my-5">
        <Row>
          <Col md={4} sm={12}>
            <UserInfo />
          </Col>
          <Col md={8} sm={12}>
            <UserOrder />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProfilePage;
