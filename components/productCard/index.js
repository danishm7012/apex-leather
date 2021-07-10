import React from "react";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { ImCopy } from "react-icons/im";
import Link from "next/link";
import LeatherImg from "../../assests/images/leather-tanning-1.jpg";

const ProductCard = ({
  BgImg,
  DetailLink,
  WishListLink,
  CompareLink,
  CartLink,
  TitleLink,
  ProductTitle,
}) => {
  return (
    <div>
      <div className="product-card p-2">
        <div className="product-img" style={{ background: `${BgImg}` }}>
          <div className="overlay">
            <div className="cart-icons">
              <ul>
                <li>
                  <Link href={""}>
                    <a className="icons">
                      <FaEye />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`WishListLink`}>
                    <a className="icons">
                      <FaHeart />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`CompareLink`}>
                    <a className="icons">
                      <ImCopy />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href={`CartLink`}>
                    <a className="icons">
                      <FaShoppingCart />
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="product-text p-2">
          <Link href={`TitleLink`}>{ProductTitle}</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
