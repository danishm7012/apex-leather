import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { AiOutlineAlignLeft } from "react-icons/ai";
import Link from "next/link";
import { Accordion, Card, Button } from "react-bootstrap";
import MenFashion from "./menFashion";
import WomenFashion from "./womenFashion";
import BusinessFashion from "./businessFashion";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  return (
    <div>
      <div className="mobile-navbar">
        <button className="mobile-togal" onClick={onOpenModal}>
          <AiOutlineAlignLeft />
        </button>
        <Modal
          open={open}
          onClose={onCloseModal}
          classNames={{
            overlay: "customOverlay",
            modal: "customModal",
          }}
          style={{
            width: "100%",
            background: "#222222",
          }}
        >
          <div className="mobile-modal p-3">
            <div className="mobile-navbar-style">
              <ul>
                <li className="active">
                  <Link href="">Home</Link>
                </li>
              </ul>
              <Accordion>
                <Card className="p-0">
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      // variant="link"
                      eventKey="0"
                      className="text-left w-100 "
                    >
                      <Link href="">
                        <a>
                          Leather Tunning
                          <span className="float-right">
                            <FaAngleDown />
                          </span>
                        </a>
                      </Link>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <ul>
                        <li>
                          <Link href="">Anline Leather</Link>
                        </li>
                        <li>
                          <Link href="">Buffalo Hide Leather</Link>
                        </li>
                        <li>
                          <Link href="">Cow Hide Leather</Link>
                        </li>
                        <li>
                          <Link href="">Goat Leather</Link>
                        </li>
                        <li>
                          <Link href="">Sheep Leather</Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      eventKey="1"
                      className="text-left w-100 "
                    >
                      <Link href="">
                        <a>
                          Men Fashion
                          <span className="float-right">
                            <FaAngleDown />
                          </span>
                        </a>
                      </Link>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="1">
                    <Card.Body>
                      <MenFashion />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      // variant="link"
                      eventKey="2"
                      className="text-left w-100 "
                    >
                      <Link href="">
                        <a>
                          Women Fashion
                          <span className="float-right">
                            <FaAngleDown />
                          </span>
                        </a>
                      </Link>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="2">
                    <Card.Body>
                      <WomenFashion />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      // variant="link"
                      eventKey="3"
                      className="text-left w-100 "
                    >
                      <Link href="">
                        <a>
                          Business Fashion
                          <span className="float-right">
                            <FaAngleDown />
                          </span>
                        </a>
                      </Link>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="3">
                    <Card.Body>
                      <BusinessFashion />
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      eventKey="4"
                      className="text-left w-100 "
                    >
                      <Link href="">
                        <a>
                          Work Wear
                          <span className="float-right">
                            <FaAngleDown />
                          </span>
                        </a>
                      </Link>
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="4">
                    <Card.Body>
                      <ul>
                        <li>
                          <Link href="">Bib Overalls</Link>
                        </li>
                        <li>
                          <Link href="">Coveralls</Link>
                        </li>
                        <li>
                          <Link href="">High Visibility Clothing</Link>
                        </li>
                        <li>
                          <Link href="">Jackets</Link>
                        </li>
                        <li>
                          <Link href="">Mechanic Gloves</Link>
                        </li>
                        <li>
                          <Link href="">Medical Uniforms</Link>
                        </li>
                        <li>
                          <Link href="">Trousers / Pants</Link>
                        </li>
                        <li>
                          <Link href="">Welding Gloves</Link>
                        </li>
                        <li>
                          <Link href="">Work Safety Gloves</Link>
                        </li>
                        <li>
                          <Link href="">Work Shirts</Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              <ul>
                <li className="active">
                  <Link href="">Contact US</Link>
                </li>
                <li className="active">
                  <Link href="">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default MobileNavbar;
