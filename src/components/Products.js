import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";
import Product from "./Product";
import MessageBox from "./modals/MessageBox";
import LoadingBox from "./LoadingBox";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state?.productList);
  const { loading, error, products } = productList;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, cartItems]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div className="grid lg:grid-cols-4 gap-3 md:grid-cols-3 sm:grid-cols-2">
          {products?.map((item) => {
            return <Product item={item} key={item?._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
