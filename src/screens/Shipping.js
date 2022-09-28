import React, { useState } from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const Shipping = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  return (
    <div>
      <Breadcrumbs page="Checkout" />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="col-span-12 md:col-span-8">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Shipping Details</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <div className="space-y-4">
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Full Name <span className="text-red-500">*</span>
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
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Phone <span className="text-red-500">*</span>
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
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Address <span className="text-red-500">*</span>
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
              <div className="flex">
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    City <span className="text-red-500">*</span>
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
                <div>
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    State <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="state"
                    type="text"
                    onChange={(e) => {
                      setState(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>
              </div>
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
            <div className="flex items-center mb-4 mt-2">
              <input
                type="checkbox"
                id="agreement"
                className="text-primary focus:ring-0 rounded-sm cursor-pointer w-3 h-3"
              />
              <label htmlFor="agreement" className="text-gray-600 ml-3 cursor-pointer text-sm">
                Agree to our
                <a href="" className="text-primary pl-1">
                  terms & condition
                </a>
              </label>
            </div>
            <a
              href=""
              className="w-full block text-center bg-primary border-primary text-white border px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition uppercase"
            >
              Continue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
