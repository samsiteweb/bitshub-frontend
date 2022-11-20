import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = (props) => {
  const navigate = useNavigate();
  const { _id, PaidAt, orderItems, isDelivered, shippingDetails } = props?.item;
  return (
    <div className=" p-4 border border-gray-200 rounded">
      <div className="flex justify-between items-center">
        <div className="w-16 flex-shrink-0">
          <img className="w-full" src="../assets/products/1646_Lenovo-Yoga-3-Pro-Repair_1.jpg" alt="img-text" />
        </div>
        <button
          onClick={() => {
            navigate(`/order/${_id}`);
          }}
          className="text-primary border border-primary p-2"
        >
          view order
        </button>
      </div>
      <div className="my-3 flex items-center justify-evenly">
        <div>
          <p className="text-gray-600 text-base font-semibold">Order number</p>
          <p className="text-gray-600 text-base">{_id}</p>
        </div>
        <div>
          <p className="text-gray-600 text-base font-semibold">Purchased</p>
          <p className="text-gray-600 text-base">{PaidAt ? PaidAt?.substring(0, 10) : "Not paid"}</p>
        </div>
        <div>
          <p className="text-gray-600 text-base font-semibold">Quantity</p>
          <p className="text-gray-600 text-base">{orderItems?.length}</p>
        </div>

        <div>
          <p className="text-gray-600 text-base font-semibold">Total</p>
          <p className="text-gray-600 text-base">{shippingDetails?.totalPrice}</p>
        </div>
        <div>
          <p className="text-gray-600 text-base font-semibold">Status</p>
          <p className={` text-base ${isDelivered ? "text-green-600" : "text-red-600"}`}>
            {isDelivered ? "Delivered" : "Cancelled"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
