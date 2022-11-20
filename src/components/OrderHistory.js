import React, { useEffect, useState } from "react";
import Axios from "axios";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "./LoadingBox";
import MessageBox from "./modals/MessageBox";
import { listOrderMine } from "../actions/createOrder";

const OrderHistory = () => {
  // const { loading, error, myOrders } = useSelector((state) => state?.orderMineList);
  const { userInfo } = useSelector((state) => state?.userSignin);
  const dispatch = useDispatch();
  const [myOrders, setMyOrders] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const BASE_URL = "https://bitshub-api.herokuapp.com";

  useEffect(() => {
    // if (!myOrders) {
    //   dispatch(listOrderMine());
    // }
    const listOrderMine = async () => {
      try {
        const { data } = await Axios.get(`${BASE_URL}/api/orders/mine`, {
          headers: {
            authorization: `Bearer ${userInfo.token}`,
          },
        });
        setLoading(false);
        setMyOrders(data);
        // dispatch({
        //   type: ORDER_MINE_LIST_SUCCESS,
        //   payload: data,
        // });
      } catch (error) {
        setError(error);
      }
    };
    listOrderMine();
  }, [userInfo.token, userInfo]);

  return (
    <div className="col-span-12 lg:col-span-9 space-y-4">
      <p className="font-semibold text-gray-800">Order History</p>
      {/* {myOrders?.map((item) => (
        <OrderCard item={item} key={item?._id} />
      ))} */}
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
