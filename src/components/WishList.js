import React from "react";
import OrderCard from "./OrderCard";
import { OrderData } from "../data/orderData";

const WishList = () => {
  return (
    <div className="col-span-12 lg:col-span-9 space-y-4">
      <div>
        <p className="text-2xl font-semibold">
          Hey, just a little more patience
        </p>
        <p>We are working on it...</p>
      </div>
    </div>
  );
};

export default WishList;
