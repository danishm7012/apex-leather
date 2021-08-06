import React from "react";
// import context from "react-bootstrap/esm/AccordionContext";
import Hero from "../../components/hero";
import Meta from "../../components/Meta";
import ProductDetailPage from "../../components/productDetails";
const productDetail = ({ product }) => {
  return (
    <div>
      <Meta title="Detail Page" keywords="Apex Leather" />
      <Hero title="Product Detail Page" current="Product-detail" />
      <ProductDetailPage product={product} />
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://apex-leather.herokuapp.com/products/${context.params.slug}`
  );
  const product = await res.json();
  return {
    props: {
      product,
    },
  };
};

export default productDetail;
