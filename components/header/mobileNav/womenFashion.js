import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
const WomenFashion = () => {
  return (
    <div>
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
                  Women Leather Accessories
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
                  <Link href="">Belt</Link>
                </li>
                <li>
                  <Link href="">Bracelets</Link>
                </li>
                <li>
                  <Link href=""> Cosmetic Pouches </Link>
                </li>
                <li>
                  <Link href=""> Jewellery Cases </Link>
                </li>
                <li>
                  <Link href="">Gloves</Link>
                </li>
                <li>
                  <Link href="">Wallets</Link>
                </li>
                <li>
                  <Link href="">Watch Straps</Link>
                </li>
                <li>
                  <Link href="">Lipstick Cases</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="1"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Women Leather bag
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Backpacks</Link>
                </li>
                <li>
                  <Link href="">Crossbody Bags</Link>
                </li>
                <li>
                  <Link href="">Crossbody Bags</Link>
                </li>
                <li>
                  <Link href="">Hand Bags</Link>
                </li>
                <li>
                  <Link href="">Crossbody Bags</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>

        <Card className="p-0">
          <Card.Header>
            <Accordion.Toggle
              as={Button}
              // variant="link"
              eventKey="2"
              className="text-left w-100 "
            >
              <Link href="">
                <a>
                  Women Leather outerwear
                  <span className="float-right">
                    <FaAngleDown />
                  </span>
                </a>
              </Link>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <ul>
                <li>
                  <Link href="">Biker Jackets</Link>
                </li>
                <li>
                  <Link href="">Blazers and Reefers</Link>
                </li>
                <li>
                  <Link href=""> Bomber Jackets </Link>
                </li>
                <li>
                  <Link href=""> Messenger Bags </Link>
                </li>
                <li>
                  <Link href="">Bomber Jackets</Link>
                </li>
                <li>
                  <Link href="">Full Length Coats</Link>
                </li>
                <li>
                  <Link href="">Parka,Duffel and Trench Coats</Link>
                </li>
                <li>
                  <Link href="">Waist Coats / Gilets</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default WomenFashion;
