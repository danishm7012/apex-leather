import React from "react";
import Link from "next/link";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const MainNavbar = () => {
  return (
    <div>
      <div className="main-navbar pl-3">
        <ul>
          <li className="active">
            <Link href="">home</Link>
          </li>
          <li className="menu-items">
            <Link href="">
              <a>
                Leather Tanning <FaAngleDown />
              </a>
            </Link>

            <div className="drop-down-menu p-3">
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
            </div>
          </li>
          <li className="menu-items">
            <Link href="">
              <a>
                Men Fashion <FaAngleDown />
              </a>
            </Link>
            <div className="drop-down-menu p-3">
              <ul>
                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      Men Leather Accessories
                      <FaAngleRight className="mt-1" />
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                  </div>
                </li>
                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      Men Leather bag
                      <FaAngleRight className="mt-1" />
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                  </div>
                </li>
               
                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      <a>Men Leather outwear</a>
                      <div className="">
                        <FaAngleRight className="mt-1 " />
                      </div>
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                  </div>
                </li>
              
              </ul>
            </div>
          </li>
          <li className="menu-items">
            <Link href="">
              <a>
                Women Fashion <FaAngleDown />
              </a>
            </Link>
            <div className="drop-down-menu p-4">
              <ul>
                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      Women Leather Accessories
                      <FaAngleRight className="mt-1" />
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                  </div>
                </li>

                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      Women Leather bag
                      <FaAngleRight className="mt-1" />
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                  </div>
                </li>

                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      Women Leather outerwear
                      <FaAngleRight className="mt-1" />
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="menu-items">
            <Link href="">
              <a>
                Business Fashion <FaAngleDown />
              </a>
            </Link>
            <div className="drop-down-menu p-4">
              <ul>
                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      Business Leather Accessories
                      <FaAngleRight className="mt-1" />
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                  </div>
                </li>

                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      Business Leather bag
                      <FaAngleRight className="mt-1" />
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                  </div>
                </li>

                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      Business Leather holder / cases
                      <FaAngleRight className="mt-1" />
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="menu-items">
            <Link href="">
              <a>
                Work wear <FaAngleDown />
              </a>
            </Link>
            <div className="drop-down-menu p-4">
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
            </div>
          </li>
          <li>
            <Link href="">about us</Link>
          </li>
          <li>
            <Link href="">contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavbar;
