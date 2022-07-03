import React from "react";
import { ProductData } from "../data/productData";
import Product from "./Product";

const Products = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
      {ProductData.products.map((item) => {
        return <Product item={item} id={item.id} />;
      })}
    </div>
  );
};

export default Products;
