import React from "react";
import { FaEye, FaHeart, FaShoppingCart } from "react-icons/fa";
import { ImCopy } from "react-icons/im";
import { BiDollar } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const ProductCard = ({ BgImg, ProductTitle, newPrice, oldPrice, Slug, ID }) => {
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
                  <Link
                    href={`/productDetail/${Slug}`}
                    // as={}
                  >
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
              </ul>
            </div>
          </div>
        </div>

        <div className="product-text p-2">
          <div className="price">
            <p className="mb-0">
              <span className="new-price mr-2">
                <BiDollar />
                {newPrice}
              </span>
              <span className="old-price">
                <BiDollar /> {oldPrice}
              </span>
            </p>
          </div>
          <button
            className="snipcart-add-item add-to-cart"
            data-item-id={ID}
            data-item-price={newPrice}
            data-item-url="/paintings/starry-night"
            // data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
            data-item-image={BgImg}
            data-item-name={ProductTitle}
          >
            <AiOutlineShoppingCart className="icons" />
            Add to cart
          </button>

          <br />
          <Link href={`/productDetail/${Slug}`}>{ProductTitle}</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
