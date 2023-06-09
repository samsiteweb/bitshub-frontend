import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
// import paypal from "../images/paypal.png";
// import creditCard from "../images/credit-card.png";
import { useNavigate } from "react-router-dom";
import { savePaymentMethod } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";
import Breadcrumbs from "../components/Breadcrumbs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const PaymentMethod = () => {
  const [paymentMethod, setPaymentMethod] = useState("paystack");
  const cart = useSelector((state) => state?.cart);
  const { shippingDetails } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };
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
    <div className="lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <Breadcrumbs page="Payment method" />
      <div className="container">
        <CheckoutSteps step1 step2 step3 />
        <div className="bg-gray-200 text-black my-4 rounded">
          <p className="px-4 py-3 text-sm font-semibold">
            Select payment method
          </p>
        </div>

        <FormControl>
          {/* <FormLabel id="demo-controlled-radio-buttons-group">Method</FormLabel> */}
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={paymentMethod}
            onChange={handleChange}
          >
            <FormControlLabel
              value="paystack"
              control={<Radio />}
              label="Paystack"
            />
            <FormControlLabel
              disabled
              value="cash"
              control={<Radio />}
              label="Cash on delivery"
            />
          </RadioGroup>
        </FormControl>

        <div className="my-4">
          <Button
            className="py-2 px-4 text-sm"
            primary
            onClick={submitHandler}
            children="continue"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
