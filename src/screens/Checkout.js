import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";

const Checkout = () => {
  return (
    <div>
      <Breadcrumbs page="Checkout" />
      <div className="container grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="col-span-8 border border-gray-200 p-4 rounded">
          <p className="text-lg font-medium capitalize mb-4">Checkout</p>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
              <div>
                <label htmlFor="" className="text-gray-600 mb-2 block">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input type="text" className="input-box" />
              </div>
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Company name <span className="text-red-500">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Address <span className="text-red-500">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Phone <span className="text-red-500">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
            <div>
              <label htmlFor="" className="text-gray-600 mb-2 block">
                Email <span className="text-red-500">*</span>
              </label>
              <input type="text" className="input-box" />
            </div>
          </div>
        </div>
        <div className="col-span-4 border border-gray-200 p-4 rounded">
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
              <a href="" className="text-primary">
                terms & condition
              </a>
            </label>
          </div>
          <a
            href=""
            className="w-full block text-center bg-primary border-primary text-white border px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition uppercase"
          >
            Place Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
