import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../actions/cartActions";
import Button from "./Button";
import Rating from "./Rating";

const Product = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const customId = "custom-id-yes";
  const addToCarthandler = () => {
    dispatch(addToCart(item._id, 1));
    toast.success("Successfully added to cart", {
      toastId: customId,
    });
  };

  return (
    <div>
      <div className="bg-white rounded shadow overflow-hidden group">
        <div className="relative" style={{ height: "150px" }}>
          <img
            src={item.image}
            alt="productImage"
            style={{ width: "100%", height: "100%" }}
          />

          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
            <Link
              to="/shop"
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition"
            >
              <i className="fas fa-search"></i>
            </Link>
            <span
              className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center
              hover:bg-gray-800 transition"
            >
              <i className="far fa-heart"></i>
            </span>
            <p className="text-sm text-red-500 font-medium">
              {item?.quantityInStock < 1 ? "item sold out" : ""}
            </p>
          </div>
        </div>
        <div className="pt-4 pb-3 px-4">
          <Link to={`/product-details/${item._id}`}>
            <p className="uppercase font-medium text-l text-gray-800 hover:text-primary transition">
              {item.name}
            </p>
          </Link>
          <p className="text-xs text-gray-500 mb-2">{item.config}</p>
          <div className="flex items-baseline mb-1 space-x-2 font-roboto">
            <p className="text-l text-primary font-semibold">₦{item.price}</p>
            <p className="text-sm text-gray-400 line-through">
              ₦{item.initialPrice}
            </p>
          </div>
          <div>
            <Rating rating={item?.rating} reviews={item?.reviews} />
          </div>
        </div>

        <Button
          className="block w-full border border-primary rounded-none rounded-b px-8 py-2 font-medium"
          primary
          onClick={addToCarthandler}
          disabled={item?.quantityInStock < 1 ? true : false}
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
