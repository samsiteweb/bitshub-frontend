import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchData();
  }, []);
  return (
    <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
      {products.map((item) => {
        return <Product item={item} id={item.id} />;
      })}
    </div>
  );
};

export default Products;
