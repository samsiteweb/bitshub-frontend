import React, { useEffect } from "react";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "./LoadingBox";
import MessageBox from "./modals/MessageBox";
import { listOrderMine } from "../actions/createOrder";

const OrderHistory = () => {
  const { loading, error, myOrders } = useSelector((state) => state?.orderMineList);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!myOrders) {
      dispatch(listOrderMine());
    }
  }, [dispatch, myOrders]);
  return (
    <div className="col-span-12 lg:col-span-9 space-y-4">
      <p className="font-semibold text-gray-800">Order History</p>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">errorrrrr!!</MessageBox>
      ) : (
        myOrders?.map((item) => <OrderCard item={item} key={item?._id} />)
      )}
    </div>
  );
};

export default OrderHistory;
