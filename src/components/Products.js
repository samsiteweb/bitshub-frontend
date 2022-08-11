import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";
import MessageBox from "./modals/MessageBox";
import LoadingBox from "./LoadingBox";
import ProductData from "../data/productData";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { product } = ProductData.products;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const { data } = await axios.get("/api/products");
  //       setLoading(false);
  //       setProducts(data);
  //     } catch (err) {
  //       setError(err.message);
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
          {product.map((item) => {
            return <Product item={item} id={item.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
