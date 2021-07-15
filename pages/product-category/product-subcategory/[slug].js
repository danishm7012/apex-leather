import React from "react";
import Hero from "../../../components/hero";
import Meta from "../../../components/Meta";
import SubCategory from "../../../components/sub-category";

const Subcategory = () => {
  return (
    <div>
      <Meta title="Product Sub-Category" keywords="Apex Leather" />
      <Hero title="Product Sub-Category" current="Product Category" />
      <SubCategory />
    </div>
  );
};

export default Subcategory;
