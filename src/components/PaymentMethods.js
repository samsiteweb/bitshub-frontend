import React from "react";
import OrderCard from "./OrderCard";
import { OrderData } from "../data/orderData";

const PaymentMethods = () => {
  return (
    <div className="col-span-9 space-y-4">
      <p>Payment methods</p>
      {OrderData.orders.map((item) => {
        return <OrderCard item={item} id={item.id} />;
      })}
    </div>
  );
};

export default PaymentMethods;
