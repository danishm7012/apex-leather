import React from "react";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { ImCopy } from "react-icons/im";
import Link from "next/link";
import LeatherImg from "../../assests/images/leather-tanning-1.jpg";

const ProductCard = ({
  BgImg,
  WishListLink,
  CompareLink,
  addToCart,
  ProductTitle,
}) => {
  return (
    <div>
      <div className="product-card p-2">
        <div
          className="product-img"
          style={{ backgroundImage: `url(${BgImg})` }}
        >
          {/* <img src={BgImg } alt="" /> */}
          <div className="overlay">
            <div className="cart-icons">
              <ul>
                <li>
                  <Link href={`productDetail/3`}>
                    <a className="icons">
                      <FaEye />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a className="icons">
                      <FaHeart />
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a className="icons">
                      <ImCopy />
                    </a>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={addToCart}
                    style={{ background: "transparent", border: "none" }}
                  >
                    <a className="icons">
                      <FaShoppingCart />
                    </a>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="product-text p-2">
          <Link href={`productDetail/3`}>{ProductTitle}</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
