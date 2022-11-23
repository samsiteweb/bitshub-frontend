import React from "react";
import { useNavigate } from "react-router-dom";

const OrderCard = (props) => {
  const navigate = useNavigate();
  const { _id, PaidAt, orderItems, isDelivered, shippingDetails } = props?.item;
  return (
    <div className=" p-4 border border-gray-200 rounded">
      <div className="flex justify-between items-center">
        <div className="w-16 flex-shrink-0">
          <img
            className="w-full"
            src="../assets/products/1646_Lenovo-Yoga-3-Pro-Repair_1.jpg"
            alt="img-text"
          />
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
          <p className="text-gray-600 text-sm font-semibold">Order number</p>
          <p className="text-gray-600 text-sm">{_id}</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm font-semibold">Purchased</p>
          <p className="text-gray-600 text-sm">
            {PaidAt ? PaidAt?.substring(0, 10) : "Not paid"}
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm font-semibold">Quantity</p>
          <p className="text-gray-600 text-sm">{orderItems?.length}</p>
        </div>

        <div>
          <p className="text-gray-600 text-sm font-semibold">Total</p>
          <p className="text-gray-600 text-sm">
            {shippingDetails?.totalPrice || "null"}
          </p>
        </div>
        <div>
          <p className="text-gray-600 text-sm font-semibold">Status</p>
          <p
            className={` text-sm ${
              isDelivered ? "text-green-600" : "text-yellow-600"
            }`}
          >
            {isDelivered ? "Delivered" : "Processing"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
