import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
// import paypal from "../images/paypal.png";
// import creditCard from "../images/credit-card.png";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const cart = useSelector((state) => state?.cart);
  const { shippingDetails } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/place-order");
  };
  useEffect(() => {
    if (!shippingDetails.address) {
      navigate("/shipping");
    }
  });

  return (
    <div className="container">
      <div className="bg-gray-200 text-black my-4 rounded">
        <p className="px-4 py-3 text-sm font-semibold">Select payment method</p>
      </div>
      <form onSubmit={submitHandler}>
        <div className="flex items-center justify-center gap-4 py-4">
          <div className="w-24 h-24 p-4 border-primary border rounded flex items-center justify-center gap-1">
            {/* <img className="w-full" src={creditCard} alt="/" /> */}
            <input
              type="radio"
              id="paypal"
              value="PayPal"
              name="paymentMethod"
              required
              checked
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div className="w-24 h-24 p-4 border-primary border rounded flex items-center justify-center gap-1">
            {/* <img className="w-full" src={paypal} alt="/" /> */}
            <input
              type="radio"
              id="stripe"
              value="Stripe"
              name="paymentMethod"
              required
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            />
            <label htmlFor="stripe">Stripe</label>
          </div>
        </div>
        <div>
          <Button className="p-2 w-full" primary onClick={submitHandler} children="continue" />
        </div>
      </form>
    </div>
  );
};

export default PaymentMethod;
