import React from "react";
import Link from "next/link";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

const MainNavbar = () => {
  return (
    <div>
      <div className="main-navbar pl-3">
        <ul className="mb-0">
          <li className="active">
            <Link href="/">home</Link>
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
                  
                  </div>
                </li>

                <li className="inner-dropdown w-100">
                  <Link href="">
                    <a className="d-flex items-link w-100">
                      Men Leather Outwear
                      <FaAngleRight className="mt-1" />
                    </a>
                  </Link>
                  <div className="drop-down-menu-1 p-4">
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
                        <Link href="">Document Bags</Link>
                      </li>
                      <li>
                        <Link href="">Organizers</Link>
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
            <Link href="/about">about us</Link>
          </li>
          <li>
            <Link href="/contactUs">contact us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainNavbar;
