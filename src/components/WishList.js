import React from "react";
import OrderCard from "./OrderCard";
import { OrderData } from "../data/orderData";

const WishList = () => {
  return (
    <div className="col-span-12 lg:col-span-9 space-y-4">
      {OrderData.orders.map((item) => {
        return <OrderCard item={item} id={item.id} />;
      })}
    </div>
  );
};

export default WishList;
