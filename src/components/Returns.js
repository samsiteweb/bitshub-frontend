import React from "react";
import OrderCard from "./OrderCard";
import { OrderData } from "../data/orderData";

const Returns = () => {
  return (
    <div className="col-span-12 lg:col-span-9 space-y-4">
      <p>Returns</p>
      {OrderData.orders.map((item) => {
        return <OrderCard item={item} id={item.id} />;
      })}
    </div>
  );
};

export default Returns;
