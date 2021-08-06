import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Logo from "../../../assests/images/logo.png";
import SearchBar from "../../seachbar";
import Link from "next/link";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingBag } from "react-icons/hi";
import SearchPage from "../searchPage";
import MobileNavbar from "../mobileNav";
const DeskopSearch = () => {
  return (
    <div className="mx-2 sm-mx-0">
      <Container fluid>
        <Row>
          <Col md={4} xs={6}>
            <Image src={Logo} alt="logo" />
          </Col>
          <Col md={5} className="search-bar-desk">
            <div className=" sm-d-none">
              <SearchBar />
            </div>
          </Col>
          <Col md={3} xs={6}>
            <ul className="desktop-cart">
              <li className="saerch">
                <SearchPage />
              </li>
              <li>
                <a className="shopping-cart header__summary snipcart-checkout snipcart-summary">
                  <HiOutlineShoppingBag />
                  <span className="badge  header__price snipcart-total-price">
                    0
                  </span>
                </a>
              </li>
              <li>
                <MobileNavbar />
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <div className="mobile-search mx-1">
        <SearchBar />
      </div>
    </div>
  );
};

export default DeskopSearch;
