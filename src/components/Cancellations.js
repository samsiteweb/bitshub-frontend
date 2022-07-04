import React from "react";
import OrderCard from "./OrderCard";
import { OrderData } from "../data/orderData";
const Cancellations = () => {
  return (
    <div className="col-span-12 lg:col-span-9 space-y-4">
      <p className="text-lg font-medium capitalize mb-4">Cancellations</p>
      {OrderData.orders.map((item) => {
        return <OrderCard item={item} id={item.id} />;
      })}
    </div>
  );
};

export default Cancellations;
