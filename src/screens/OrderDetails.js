import React, { useEffect } from "react";
import { usePaystackPayment } from "react-paystack";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { detailsOrder, verifyOrder } from "../actions/createOrder";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/modals/MessageBox";
import { ORDER_PAY_RESET } from "../constants/orderConstants";

const OrderDetails = () => {
  const dispatch = useDispatch();
  const { _id: orderId } = useParams();
  const orderPay = useSelector((state) => state?.orderPay);
  const {
    loading: orderPayLoading,
    error: orderPayError,
    success: orderPaySuccess,
  } = orderPay;
  const orderDetails = useSelector((state) => state?.orderDetails);
  const { loading, error, order } = orderDetails;
  const { userInfo } = useSelector((state) => state?.userSignin);

  const PUBLIC_KEY_TEST = "pk_test_d1ea6075f9db65a1983a5d0c18fceda9d63d4672";

  const config = {
    reference: orderId,
    email: userInfo.email,
    amount: order?.shippingDetails?.totalPrice * 100,
    publicKey: PUBLIC_KEY_TEST,
  };

  const updatePaymentHandler = async (reference) => {
    dispatch(verifyOrder(reference.reference, order));
  };

  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    updatePaymentHandler(reference);
  };
  // console.log(paymentVerifySuccess);

  // you can call this function anything
  const onClose = (payment) => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed", payment);
  };

  useEffect(() => {
    if (!order || orderPaySuccess || (order && order._id !== orderId)) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(detailsOrder(orderId));
    }
  }, [dispatch, orderId, order, orderPaySuccess]);

  const initializePayment = usePaystackPayment(config);
  return loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <MessageBox variant="danger">{error}</MessageBox>
  ) : (
    <div>
      <Breadcrumbs page="Order" />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="col-span-12 md:col-span-8 space-y-4">
          <div className="border border-gray-200 p-4 rounded">
            <p className="font-medium text-gray-400">Order</p>
            <div className="pt-2">
              <div>
                <span className="font-normal">Order Id: </span>
                <span className="font-light text-sm">{order?._id}</span>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <p className="font-medium text-gray-400">Shipping details</p>
            <div className="pt-2">
              <div>
                <span className="font-normal">Name: </span>
                <span className="font-light text-sm">
                  {order?.shippingDetails?.fullName}
                </span>
              </div>
              <div>
                <span className="font-normal">Address: </span>
                <span className="font-light text-sm">
                  {`${order?.shippingDetails?.address}, ${order?.shippingDetails?.city}, ${order?.shippingDetails?.state}`}
                </span>
              </div>
              <div>
                {order?.isDelivered ? (
                  <MessageBox variant="success">
                    Delivered at {order?.deliveredAt}
                  </MessageBox>
                ) : (
                  <MessageBox variant="danger">Not Delivered</MessageBox>
                )}
              </div>
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <p className="font-medium text-gray-400">Payment</p>
            <div className="pt-2">
              <span className="font-normal">Method:</span>
              <span className="font-light text-sm">
                {" "}
                {order?.paymentMethod}
              </span>
            </div>
            <div>
              {order?.isPaid ? (
                <MessageBox variant="success">
                  Paid at: {order?.PaidAt}
                </MessageBox>
              ) : (
                <MessageBox variant="danger">Not Paid!</MessageBox>
              )}
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <p className="font-medium text-gray-400">Ordered items</p>
            {order?.orderItems?.map((item) => {
              return (
                <div
                  className="flex-col flex md:flex-row items-center justify-between gap-1 py-2 border-b border-gray-100"
                  key={item?.product}
                >
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-20">
                      <img
                        className="w-full"
                        src={item?.image}
                        alt={item?.name}
                      />
                    </div>

                    <p className="text-gray-700 font-semibold text-xs md:text-base">
                      {item?.name}
                    </p>
                    <p className="text-green-700 font-semibold text-xs md:text-base">
                      {item?.condition}
                    </p>
                  </div>
                  <div className="text-gray-600 mr-4">
                    <span className="text-gray-700 text-xs md:text-base pr-2">
                      {item?.price} x {item?.qty}
                    </span>
                    <span className="text-gray-700 font-semibold text-xs md:text-base">
                      = ₦{item?.price * item?.qty}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {order?.isPaid ? (
          <div className="col-span-12 md:col-span-4">
            <MessageBox variant="success">
              Payment made Successfully!
            </MessageBox>
          </div>
        ) : (
          <div className="col-span-12 md:col-span-4">
            <div className="bg-gray-200 text-black mb-4 rounded">
              <p className="px-4 py-3 text-sm font-semibold">Your Order</p>
            </div>
            <div className="border border-gray-200 p-4 rounded">
              <p className="text-gray-800 text-lg mb-4 font-medium uppercase">
                order summary
              </p>

              <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
                <p>Items</p>
                <p>
                  ₦{order?.orderItems?.reduce((a, c) => a + c.price * c.qty, 0)}
                </p>
              </div>
              <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
                <p>Shipping</p>
                <p>{order?.shippingDetails?.shippingPrice}</p>
              </div>
              <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
                <p>VAT</p>
                <p>{order?.shippingDetails?.taxPrice}</p>
              </div>
              <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
                <p className="font-semibold">Total</p>
                <p>₦{order?.shippingDetails?.totalPrice}</p>
              </div>

              {orderPayError && (
                <MessageBox variant="danger">{orderPayError}</MessageBox>
              )}
              {orderPayLoading && <LoadingBox></LoadingBox>}
              <Button
                disabled={loading}
                className="w-full p-2"
                primary
                onClick={() => {
                  initializePayment(onSuccess, onClose);
                }}
              >
                {loading ? "loading..." : "Place order"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetails;
