import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartActions";

const CartCard = (props) => {
  const { image, price, name, condition, qty, product } = props.item;
  const [quantity, setQuantity] = useState(qty);
  const dispatch = useDispatch();
  const updateCartHandler = (product, quantity) => {
    // console.log("id:", product, "qty:", quantity);
    const productId = product;
    const qty = quantity;
    dispatch(addToCart(productId, qty));
    // console.log("id:", productId, "qty:", qty);
  };

  return (
    <div className="flex flex-col md:flex-row items-left md:items-center justify between gap-6 p-4 border border-gray-200 rounded">
      <div className="w-28 flex-shrink-0">
        <img src={image[0]} alt={name} />
      </div>
      <div className="md:w-1/3">
        <p className="text-gray-800 text-lg font-medium uppercase">{name}</p>
        <p className="text-gray-500 text-sm">
          <span>Price: </span>
          <span className="text-primary font-semibold">₦{price}</span>
        </p>
        <p className="text-gray-500 text-sm">
          <span>Condition: </span>
          <span className="text-green-500 font-semibold">{condition}</span>
        </p>
      </div>
      <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
        <button
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          onClick={() => {
            setQuantity((prev) => prev - 1) ?? updateCartHandler(product, quantity);
          }}
        >
          -
        </button>
        <input
          className="h-8 w-14 text-base p-2"
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          type="number"
          onBlur={() => updateCartHandler(product, quantity)}
        />

        <button
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer"
          onClick={() => {
            setQuantity((prev) => prev + 1) ?? updateCartHandler(product, quantity);
          }}
        >
          +
        </button>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-primary text-lg font-semibold">₦{price}</p>

        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
