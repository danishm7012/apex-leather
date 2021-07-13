import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import Link from "next/link";
const BusinessFashion = () => {
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
                  Business Leather Accessories
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
                  <Link href="">Desk items</Link>
                </li>
                <li>
                  <Link href="">Diaries</Link>
                </li>
                <li>
                  <Link href="">Key Holders</Link>
                </li>
                <li>
                  <Link href="">Notepads</Link>
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
                  Business Leather bag
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
                  <Link href="">Document Bags</Link>
                </li>
                <li>
                  <Link href="">Organizers</Link>
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
                  Business Leather holder / cases
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
                  <Link href="">Cheque Book Cases</Link>
                </li>
                <li>
                  <Link href="">Document Bags</Link>
                </li>
                <li>
                  <Link href="">Folders</Link>
                </li>
                <li>
                  <Link href="">Gift Sets</Link>
                </li>
                <li>
                  <Link href="">Writing Portfolios</Link>
                </li>
              </ul>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default BusinessFashion;
