import React from "react";
import { Container } from "react-bootstrap";
import { BsEnvelope } from "react-icons/bs";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Ar from "../../../assests/images/flag/ar.png";
import CN from "../../../assests/images/flag/CN.png";
import De from "../../../assests/images/flag/de.png";
import Fr from "../../../assests/images/flag/fr.png";
import It from "../../../assests/images/flag/it.png";
import Nl from "../../../assests/images/flag/nl.png";
import Pt from "../../../assests/images/flag/pt.png";

const TopHeader = () => {
  return (
    <div>
      <div className="top-header">
        <Container fluid>
          <div className="d-flex mx-2 mail-social">
            <a href="mailto:sales@apexleather.co.uk" className="ml-2">
              {" "}
              <span className="mr-2">
                <BsEnvelope />
              </span>{" "}
              sales@apexleather.co.uk
            </a>
            <div className=" float-right">
              <div className="top-social d-flex ">
                <ul className="p-0  m-0">
                  <li>
                    <a href="">
                      <FaFacebookF />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>

                <span className="flags">
                  <ul className="mb-0 pb-0">
                    <li>
                      <a href="">
                        <Image alt="flags" src={Ar} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image alt="flags" src={CN} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image alt="flags" src={De} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image alt="flags" src={Fr} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image alt="flags" src={It} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image alt="flags" src={Nl} />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <Image alt="flags" src={Pt} />
                      </a>
                    </li>
                  </ul>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default TopHeader;
