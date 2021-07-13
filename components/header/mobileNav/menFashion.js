import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
const MenFashion = () => {
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
                  Men Leather Accessories
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
                  <Link href=""> Caps </Link>
                </li>
                <li>
                  <Link href=""> Card Holder </Link>
                </li>
                <li>
                  <Link href="">Gloves</Link>
                </li>
                <li>
                  <Link href="">Shaving Pouches</Link>
                </li>
                <li>
                  <Link href="">Wallets</Link>
                </li>
                <li>
                  <Link href="">Watch Straps</Link>
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
                  Men Leather bag
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
                  <Link href="">Briefcases</Link>
                </li>
                <li>
                  <Link href="">Crossbody Bags</Link>
                </li>
                <li>
                  <Link href="">Laptops Bag</Link>
                </li>
                <li>
                  <Link href="">Messenger Bags</Link>
                </li>
                <li>
                  <Link href="">Office Bags</Link>
                </li>
                <li>
                  <Link href="">Wrist / Clutch Bags</Link>
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
                  Men Leather Outwear
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

export default MenFashion;
