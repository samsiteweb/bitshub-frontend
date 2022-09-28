import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import master from "../images/payment-master.png";
import visa from "../images/payment-visa.png";

const Payment = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (name.length < 1) {
      alert("error!");
    }
    dispatch(saveShippingAddress({ name, phone, address, city }));
    navigate("account/payment-methods");
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
                    id="name"
                    type="text"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Name on Card <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="number"
                    onChange={(e) => {
                      setPhone(e.target.value);
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
                      id="address"
                      type="text"
                      onChange={(e) => {
                        setAddress(e.target.value);
                      }}
                      className="input-box"
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      CVV <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      onChange={(e) => {
                        setCity(e.target.value);
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
            <div className="space-y-2">
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">italian shape sofa</p>
                  <p className="text-sm text-gray-600">size:m</p>
                </div>
                <p className="text-gray-600">X3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">italian shape sofa</p>
                  <p className="text-sm text-gray-600">size:m</p>
                </div>
                <p className="text-gray-600">X3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-800 font-medium">italian shape sofa</p>
                  <p className="text-sm text-gray-600">size:m</p>
                </div>
                <p className="text-gray-600">X3</p>
                <p className="text-gray-800 font-medium">$320</p>
              </div>
            </div>

            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p>Subtotal</p>
              <p>$320</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p>Shipping</p>
              <p>free</p>
            </div>
            <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p className="font-semibold">Total</p>
              <p>$320</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
