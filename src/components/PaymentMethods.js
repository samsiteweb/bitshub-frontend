import React, { useState } from "react";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
// import paypal from "../images/paypal.png";
// import creditCard from "../images/credit-card.png";
import { savePaymentMethod } from "../actions/cartActions";
import Breadcrumbs from "../components/Breadcrumbs";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

const PaymentMethods = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
  };

  return (
    <div className="lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <Breadcrumbs page="Payment method" />
      <div className="container">
        {/* <CheckoutSteps step1 step2 step3 /> */}
        <div className="bg-gray-200 text-black my-4 rounded">
          <p className="px-4 py-3 text-sm font-semibold">
            Select payment method
          </p>
        </div>
        <FormControl className="" onSubmit={submitHandler}>
          <div className="flex flex-col">
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={paymentMethod}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
              }}
            >
              <div className="p-2 rounded flex gap-4 items-center">
                {/* <img className="w-full" src={creditCard} alt="/" /> */}

                <FormControlLabel
                  disabled
                  id="paypal"
                  label="Cash on hand"
                  value="PayPal"
                  required
                  checked
                  control={<Radio />}
                />
              </div>
              <div className="p-2 rounded flex gap-4 items-center mb-6">
                {/* <img className="w-full" src={paypal} alt="/" /> */}
                <FormControlLabel
                  id="stripe"
                  label="Stripe"
                  required
                  value="Stripe"
                  control={<Radio />}
                />
              </div>
            </RadioGroup>
          </div>
          <div className="mb-44">
            <Button
              className="p-2 px-7"
              primary
              onClick={submitHandler}
              children="Save"
            />
          </div>
        </FormControl>
      </div>
    </div>
  );
};

export default PaymentMethods;
