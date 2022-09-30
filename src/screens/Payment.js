import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import master from "../images/payment-master.png";
import visa from "../images/payment-visa.png";

const Payment = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  const cart = useSelector((state) => state?.cart);
  const { cartItems } = cart;

  const submitHandler = (e) => {
    e.preventDefault();
    if (cardName.length < 1 || cardNumber.length < 1 || exp.length < 1 || cvv.length < 1) {
      toast.error("Feild cannot be empty!");
    } else {
      toast.success("payment successful");
    }
  };

  return (
    <div>
      <Breadcrumbs page="Payment" />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="col-span-12 md:col-span-8">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Select payment method</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <div className="flex justify-between items-center">
              <p className="font-medium">Credit Card</p>
              <div className="flex items-center">
                <div className="w-20">
                  <img src={master} alt="" />
                </div>
                <div className="w-20">
                  <img src={visa} alt="" />
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <form onSubmit={submitHandler}>
                <div className="py-2">
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Card Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cardNumber"
                    type="number"
                    onChange={(e) => {
                      setCardNumber(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Name on Card <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="cardName"
                    type="text"
                    onChange={(e) => {
                      setCardName(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>

                <div className="py-2 flex items-center justify-between gap-4">
                  <div className="w-full">
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      Expiration Date <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="Exp"
                      type="date"
                      onChange={(e) => {
                        setExp(e.target.value);
                      }}
                      className="input-box"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      CVV <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="cvv"
                      type="number"
                      onChange={(e) => {
                        setCvv(e.target.value);
                      }}
                      className="input-box"
                    />
                  </div>
                </div>
              </form>
            </div>
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
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
