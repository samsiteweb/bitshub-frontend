import React, { useEffect, useState } from "react";
import Axios from "axios";
import OrderCard from "./OrderCard";
import { useSelector } from "react-redux";
import LoadingBox from "./LoadingBox";
import MessageBox from "./modals/MessageBox";

const OrderHistory = () => {
  // const { loading, error, myOrders } = useSelector((state) => state?.orderMineList);
  const { userInfo } = useSelector((state) => state?.userSignin);
  const [myOrders, setMyOrders] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const BASE_URL = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    const listOrderMine = async () => {
      try {
        const { data } = await Axios.get(`${BASE_URL}/api/orders/mine`, {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        });
        setLoading(false);
        setMyOrders(data);
      } catch (error) {
        setError(error);
      }
    };
    listOrderMine();
  }, [userInfo.token, userInfo]);

  return (
    <div className="col-span-12 lg:col-span-9 space-y-4">
      <p className="font-semibold text-gray-800">Order History</p>

      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        myOrders?.map((item) => <OrderCard item={item} key={item?._id} />)
      )}
    </div>
  );
};

export default OrderHistory;
