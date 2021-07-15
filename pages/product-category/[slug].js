import React from "react";
import Hero from "../../components/hero";
import Meta from "../../components/Meta";
import Category from "../../components/category";
const CategoryPage = () => {
  return (
    <div>
      <Meta title="Product" keywords="Apex Leather" />
      <Hero title="Product Category" current="Product Category" />
      <Category />
    </div>
  );
};

export default CategoryPage;
