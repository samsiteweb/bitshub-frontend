import React from "react";

const OrderCard = (props) => {
  const { image, price, quantityInStock, name } = props.item;
  return (
    <div className="flex flex-col md:flex-row items-left md:items-center justify between gap-6 p-4 border border-gray-200 rounded">
      <div className="w-28 flex-shrink-0">
        <img src={image[0]} alt={name} />
      </div>
      <div className="md:w-1/3">
        <p className="text-gray-800 text-lg font-medium uppercase">{name}</p>
        <p className="text-gray-500 text-sm">
          <span>Availability: </span>
          <span className={quantityInStock > 0 ? "text-green-600" : "text-red-600"}>
            {quantityInStock > 0 ? "In stock" : "out of stock"}
          </span>
        </p>
      </div>
      <div className="text-primary text-lg font-semibold">₦{price}</div>
      <div className="flex items-center justify-between gap-4">
        <button
          type="submit"
          className={
            quantityInStock < 1
              ? "cursor-not-allowed bg-red-400 border border-red-400 text-white px-2 py-2 font-medium rounded-md uppercase text-sm text-center"
              : "bg-primary border border-primary text-white px-2 py-2 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
          }
        >
          Add to cart
        </button>

        <div className="text-gray-600 cursor-pointer hover:text-primary">
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
