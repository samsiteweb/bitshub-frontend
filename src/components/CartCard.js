import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart, itemRemove } from "../actions/cartActions";
import Button from "./Button";

const CartCard = (props) => {
  const { price, name, condition, qty, product, quantityInStock } = props.item;
  const [editQty, setEditQty] = useState(false);
  const [quantity, setQuantity] = useState(Number(qty));
  const removeFromCartHandler = (id) => {
    dispatch(itemRemove(id));
  };

  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row items-left md:items-center justify between gap-6 p-4 border border-gray-200 rounded">
      <div className="w-28 flex-shrink-0">{/* <img src={image[0]} alt={name} /> */}</div>
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
        <Button
          secondary
          disabled={qty <= 1 ? true : false}
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none w-full"
          onClick={() => {
            setEditQty(true);
            setQuantity((prev) => (prev -= 1));
            dispatch(addToCart(product, quantity - 1));
          }}
        >
          -
        </Button>

        <input
          className="h-8 w-14 text-base p-2 w-full"
          onChange={(e) => {
            setEditQty(true);
            setQuantity(Number(e.target.value));
          }}
          value={editQty ? Number(quantity) : qty}
          type="number"
          onBlur={() => {
            dispatch(addToCart(product, quantity));
            console.log("dispatched!!", product, quantity);
          }}
        />

        <Button
          disabled={qty >= quantityInStock ? true : false}
          secondary
          className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer w-full"
          onClick={() => {
            setEditQty(true);
            setQuantity((prev) => (prev += 1));
            dispatch(addToCart(product, quantity + 1));
          }}
        >
          +
        </Button>
      </div>
      <div className="flex items-center justify-between gap-4">
        <p className="text-primary text-lg font-semibold w-24">₦{price * qty}</p>

        <div
          className="text-gray-600 cursor-pointer hover:text-primary"
          onClick={() => {
            removeFromCartHandler(product);
          }}
        >
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
