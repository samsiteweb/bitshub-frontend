import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { useSelector } from "react-redux";

const Payment = () => {
  const cart = useSelector((state) => state?.cart);
  const { cartItems, paymentMethod, shippingDetails } = cart;

  const submitHandler = () => {};

  return (
    <div>
      <Breadcrumbs page="Payment" />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="col-span-12 md:col-span-8 space-y-4">
          <div className="border border-gray-200 p-4 rounded">
            <p className="font-medium text-gray-400">Shipping</p>
            <div className="pt-2">
              <span className="font-normal">Address:</span>
              <span className="font-light text-sm">
                {" "}
                {`${shippingDetails.address}, ${shippingDetails.city}, ${shippingDetails.state}`}
              </span>
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <p className="font-medium text-gray-400">Payment</p>
            <div className="pt-2">
              <span className="font-normal">Method:</span> <span className="font-light text-sm">{paymentMethod}</span>
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <p className="font-medium text-gray-400">Ordered items</p>
            {cartItems?.map((item) => {
              return (
                <div
                  className="flex items-center justify-between gap-1 py-2 border-b border-gray-100"
                  key={item.product}
                >
                  <div className="w-20">
                    <img className="w-full" src="../assets/products/81nde-rFKzL._AC_SL1500_.jpg" alt="cart item" />
                  </div>

                  <p className="text-gray-700 font-semibold text-xs md:text-base">{item.name}</p>
                  <p className="text-green-700 font-semibold text-xs md:text-base">{item.condition}</p>

                  <div className="text-gray-600 mr-4">
                    <span className="text-gray-700 text-xs md:text-base pr-2">
                      {item.price} x {item.qty}
                    </span>
                    <span className="text-gray-700 font-semibold text-xs md:text-base">= ₦{item.price * item.qty}</span>
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
            <p className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</p>
            {cartItems.map((item) => {
              return (
                <div className="space-y-2" key={item.product}>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gray-800 font-medium">{item.name}</p>
                      <p className="text-sm text-gray-600">{item.condition}</p>
                    </div>
                    <p className="text-gray-600">X{item.qty}</p>
                    <p className="text-gray-800 font-medium">₦{item.price}</p>
                  </div>
                </div>
              );
            })}
            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p>Subtotal</p>
              <p>
                ({cartItems.reduce((a, c) => a + c.qty, 0)} items): ₦
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p>Shipping</p>
              <p>free</p>
            </div>
            <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p className="font-semibold">Total</p>
              <p>₦{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
            </div>
            <div className="flex items-center mb-4 mt-2">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              />
              <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer text-sm">
                Agree to our
                <a href="/" className="text-primary pl-1">
                  terms & condition
                </a>
              </label>
            </div>
            <button
              onClick={submitHandler}
              className="w-full block text-center bg-primary border-primary text-white border px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition uppercase"
            >
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
