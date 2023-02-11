import React, { useEffect, useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { CreateOrder } from "../actions/createOrder";
import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { toast } from "react-toastify";

const Payment = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [PaidAt, setPaidAt] = useState("");
  const [isDelivered, setIsDelivered] = useState(false);
  const [deliveredAt, setDeliveredAt] = useState("");
  const cart = useSelector((state) => state?.cart);
  const orderCreate = useSelector((state) => state?.orderCreate);
  const { loading, success, error, order } = orderCreate;
  const { cartItems, paymentMethod, shippingDetails } = cart;
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const customId = "custom-id-yes";

  useEffect(() => {
    if (!paymentMethod) {
      navigate("/payment");
    }
  }, [navigate, paymentMethod]);

  const placeOrderHandler = () => {
    dispatch(
      CreateOrder({
        orderItems: cartItems,
        paymentMethod,
        isPaid,
        PaidAt,
        isDelivered,
        deliveredAt,
        shippingDetails,
      })
    );
    setLoader(loading);
  };

  if (error) {
    toast.error(error, {
      toastId: customId,
    });
  } else if (success) {
    navigate(`/order/${order._id}`);
  }
  return (
    <div>
      <Breadcrumbs page="confirm details" />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="col-span-12 md:col-span-8 space-y-4">
          <div className="border border-gray-200 p-4 rounded">
            <p className="text-sm font-medium text-gray-800 pb-2 flex items-center justify-between">
              DELIVERY DETAILS
              <Link to="/shipping" className="text-primary text-xs">
                Change
              </Link>
            </p>
            <hr />
            <div className="pt-2 space-y-1">
              <p className="font-medium text-xs">{shippingDetails.fullName}</p>

              <p className="font-medium text-xs text-gray-400">
                {`${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.region}`}
              </p>
              <p className="font-medium text-xs text-gray-400">
                {shippingDetails.phone}
              </p>
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <p className="text-sm font-medium text-gray-800 pb-2 flex items-center justify-between">
              PAYMENT METHOD
              <Link to="/payment" className="text-primary text-xs">
                Change
              </Link>
            </p>
            <hr />
            <div className="pt-2">
              <p className="font-medium text-xs text-gray-400">
                {paymentMethod}
              </p>
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <p className="text-sm font-medium text-gray-800 pb-1 flex items-center justify-between">
              ITEMS IN CART
              <Link to="/cart/:id" className="text-primary text-xs">
                Change
              </Link>
            </p>
            <hr />
            {cartItems?.map((item) => {
              return (
                <div
                  className="flex-col flex md:flex-row items-center justify-between gap-1 py-2"
                  key={item.product}
                >
                  <div className="w-20">
                    <img className="w-full" src={item.image} alt={item.name} />
                  </div>
                  <div>
                    <span className="text-gray-400 text-xs">{item.name}</span>
                    <span className="text-green-400 text-xs">
                      {item.condition}
                    </span>
                  </div>

                  <div className="text-gray-400 mr-4">
                    <span className="text-gray-400 text-xs pr-2">
                      ₦{item.price.toLocaleString()} x {item.qty}
                    </span>
                    <span className="text-gray-400 font-semibold text-xs">
                      = ₦{item.price * item.qty.toLocaleString()}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="col-span-12 md:col-span-4">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Your Order</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <p className="text-sm font-medium text-gray-800 pb-1">
              ITEMS IN CART
            </p>
            <hr />
            {cartItems.map((item) => {
              return (
                <div className="space-y-2" key={item.product}>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gray-400 text-xs">{item.name}</p>
                      <p className="text-xs text-gray-400">{item.condition}</p>
                    </div>
                    <p className="text-gray-400 text-xs">X{item.qty}</p>
                    <p className="text-gray-400 font-medium text-xs">
                      ₦{item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between border-b border-gray-200 text-gray-400 font-medium py-3">
              <p className="text-xs">Subtotal</p>
              <p className="text-xs">
                ({cartItems.reduce((a, c) => a + c.qty, 0)} item(s)): ₦
                {shippingDetails?.subtotal?.toLocaleString()}
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-400 font-medium py-3 text-xs">
              <p>Shipping</p>
              <p>₦{shippingDetails.shippingPrice.toLocaleString()}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-400 font-medium py-3 uppercase text-xs">
              <p>VAT</p>
              <p>₦{shippingDetails.taxPrice.toLocaleString()}</p>
            </div>
            <div className="flex justify-between border-gray-200 text-gray-400 font-medium py-3 uppercase text-xs">
              <p className="font-semibold">Total</p>
              <p>₦{shippingDetails.totalPrice.toLocaleString()}</p>
            </div>
            <div className="flex items-center mb-4 mt-2">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              />
              <label
                htmlFor="agreement"
                className="text-gray-400 ml-3 cursor-pointer text-xs"
              >
                Agree to our
                <a href="/" className="text-primary pl-1">
                  terms & condition
                </a>
              </label>
            </div>
            <Button
              disabled={loader}
              className="w-full p-2"
              primary
              onClick={placeOrderHandler}
            >
              {loader ? "loading..." : "Place order"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
