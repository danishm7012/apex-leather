import React from "react";
import Hero from "../components/hero";
import Meta from "../components/Meta";
import ProductDetailPage from "../components/productDetails";
const productDetail = () => {
  return (
    <div>
      <Meta title="Detail Page" keywords="Apex Leather" />
      <Hero title="Product Detail Page" current="Product-detail" />
      <ProductDetailPage />
    </div>
  );
};

export default productDetail;
