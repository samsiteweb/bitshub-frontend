import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import { toast } from "react-toastify";
import Button from "../components/Button";
import CheckoutSteps from "../components/CheckoutSteps";

const Shipping = () => {
  const signinData = useSelector((state) => state?.userSignin);
  const { userInfo } = signinData;
  const navigate = useNavigate();
  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  });

  const cart = useSelector((state) => state?.cart);
  const { shippingDetails, cartItems } = cart;

  const [fullName, setFullName] = useState(shippingDetails.fullName);
  const [phone, setPhone] = useState(shippingDetails.phone);
  const [address, setAddress] = useState(shippingDetails.address);
  const [city, setCity] = useState(shippingDetails.city);
  // const [state, setState] = useState(shippingDetails.state);
  let taxPrice = (cartItems.reduce((a, c) => a + c.price * c.qty, 0) / 100) * 7.5;
  const totalPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0) + taxPrice;
  const shippingPrice = "free";
  const dispatch = useDispatch();

  const handleShipping = (e) => {
    e.preventDefault();
    if (fullName?.length < 1 || phone?.length < 1 || address?.length < 1 || city?.length < 1) {
      toast.error("Feild cannot be empty!");
    } else {
      dispatch(saveShippingAddress({ fullName, phone, address, city, taxPrice, shippingPrice, totalPrice }));
      navigate("/payment");
    }
  };

  return (
    <div>
      <Breadcrumbs page="Checkout" />
      <CheckoutSteps step1 step2 />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="col-span-12 md:col-span-8">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Shipping Details</p>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <div className="space-y-4">
              <form onSubmit={handleShipping}>
                <div className="py-2">
                  <label htmlFor="name" className="text-gray-600 mb-2 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="phone"
                    type="number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>
                <div className="py-2">
                  <label htmlFor="" className="text-gray-600 mb-2 block">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="address"
                    type="text"
                    value={address}
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                    className="input-box"
                  />
                </div>
                <div className="py-2 flex items-center justify-between gap-4">
                  <div className="w-full">
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="city"
                      type="text"
                      value={city}
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                      className="input-box"
                    />
                  </div>
                  {/* <div className="w-full">
                    <label htmlFor="" className="text-gray-600 mb-2 block">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="state"
                      type="text"
                      value={state}
                      onChange={(e) => {
                        setState(e.target.value);
                      }}
                      className="input-box"
                    />
                  </div> */}
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
            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
              <p>Subtotal</p>
              <p>
                ({cartItems.reduce((a, c) => a + c.qty, 0)} item(s)): ₦
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
              <p>Shipping</p>
              <p>{shippingPrice}</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p>VAT</p>
              <p>{taxPrice}</p>
            </div>
            <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p className="font-semibold">Total</p>
              <p>₦{totalPrice}</p>
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
            <Button
              disabled={cartItems.length === 0 ? true : false}
              className="w-full p-2"
              primary
              onClick={handleShipping}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
