import React from "react";
import ProductFullDetail from "./productFullDetail";
import Reviews from "./reviews";

const ProductDetailPage = ({product}) => {
  return (
    <div>
      <ProductFullDetail product={product} />
      <Reviews />
    </div>
  );
};

export default ProductDetailPage;
