import React from "react";
import { ProductData } from "../data/productData";
import Product from "./Product";

const Products = () => {
  return (
    <div className="container pb-16">
      <h2 className="text-2xl font-medium text-gray-800 uppercase mb-6">top new arrival</h2>
      <div className="grid lg:grid-cols-4 gap-6 md:grid-cols-3 sm:grid-cols-2">
        {ProductData.products.map((item) => {
          return <Product item={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
