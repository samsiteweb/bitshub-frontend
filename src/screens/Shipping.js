import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import { toast } from "react-toastify";
import Button from "../components/Button";
import CheckoutSteps from "../components/CheckoutSteps";
import InputField from "../components/InputField";
import { useFormik } from 'formik';
import { ShippingSchema } from "../utilities/schemas";

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

  const userAddressMap = useSelector((state) => state?.userAddressMap);
  const { address: addressMap } = userAddressMap;


 
  const [lng, setLng] = useState(shippingDetails.lng);
  const [lat, setLat] = useState(shippingDetails.lat);


  let taxPrice =
    (cartItems.reduce((a, c) => a + c.price * c.qty, 0) / 100) * 7.5;
  const totalPrice =
    cartItems.reduce((a, c) => a + c.price * c.qty, 0) + taxPrice;
  const shippingPrice = "free";
  const dispatch = useDispatch();


  const initialValues = {
    fullName: shippingDetails.fullName ? shippingDetails.fullName : "",
    phone: shippingDetails.phone ? shippingDetails.phone :"",
    address: (addressMap?.address || shippingDetails.address) ? (addressMap?.address || shippingDetails.address) : "",
    city: (addressMap?.city || shippingDetails.city) ? (addressMap?.city || shippingDetails.city) : "",
    region: (addressMap?.region || shippingDetails.region) ? (addressMap?.region || shippingDetails.region) : ""
  }



  const handleShipping = (info) => {
    const newLat = addressMap ? addressMap.lat : lat;
    const newLng = addressMap ? addressMap.lng : lng;
    if (addressMap) {
      setLng(addressMap.lng);
      setLat(addressMap.lat);
    }
    let moveOn = true;
    if (!newLat || !newLng) {
      moveOn = window.confirm(
        "You did not set your location on map. Continue?"
      );
    }

    const payload = {
      fullName: info?.fullName,
      phone: info?.phone,
      address: info?.address,
      city: info?.city,
      data: info?.region,
      taxPrice,
      shippingPrice,
      totalPrice,
      lat: newLat,
      lng: newLng,
    }
   
    if (moveOn) {
      dispatch(
        saveShippingAddress(payload)
      );
      navigate("/payment");
    }
  };

  const chooseOnMap = () => {
    const payload = {
      fullName: values?.fullName,
      phone: values?.phone,
      address: values?.address,
      city: values?.city,
      data: values?.region,
      taxPrice,
      shippingPrice,
      totalPrice,
      lat,
      lng
    }
    dispatch(
      saveShippingAddress(payload)
    );
    navigate("/map");
  };

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm } =
  useFormik({
      initialValues,
      validationSchema: ShippingSchema,
      onSubmit: (data) => handleShipping(data),
      enableReinitialize: true
  });

  return (
    <div>
      <Breadcrumbs page="Checkout" />
      <CheckoutSteps step1 step2 />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="col-span-12 md:col-span-8">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Shipping Details</p>
          </div>
          <div>
            <button
              className="bg-gray-300 text-gray-800 rounded p-2 my-2"
              onClick={chooseOnMap}
            >
              Choose location on map
            </button>
          </div>
          <div className="border border-gray-200 p-4 rounded">
            <div className="space-y-4">
              <form>
                <div className="py-2">
                <InputField 
                  label="Full Name"
                  id="name"
                  required
                  type="text"
                  value={values.fullName}
                  onChange={handleChange("fullName")}
                  errorMsg={touched.fullName ? errors.fullName : undefined}
                  placeholder="Enter your Fullname"
              />
             
                </div>
                <div className="py-2">
                <InputField 
                  label="Phone"
                  id="phone"
                  type="number"
                  required
                  value={values.phone}
                  onChange={handleChange("phone")}
                  errorMsg={touched.phone ? errors.phone : undefined}
                  placeholder="Enter your Phone no"
              />
             
                </div>
                <div className="py-2">
                <InputField 
                  label="Address"
                  id="address"
                  type="text"
                  required
                  value={values.address}
                  onChange={handleChange("address")}
                  errorMsg={touched.address ? errors.address : undefined}
                  placeholder="Enter your address"
              />
             
                </div>
                <div className="py-2 flex items-center justify-between gap-4">
                  <div className="w-full">
                  <InputField 
                  label="City"
                  id="city"
                  required
                  type="text"
                  value={values.city}
                  onChange={handleChange("city")}
                  errorMsg={touched.city ? errors.city : undefined}
                  placeholder="Enter your city"
              />
             
                  </div>
                  <div className="w-full">
                  <InputField 
                  label="State"
                  id="state"
                  required
                  type="text"
                  value={values.region}
                  onChange={handleChange("region")}
                  errorMsg={touched.region ? errors.region : undefined}
                  placeholder="Enter your State"
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
            <p className="text-gray-800 text-lg mb-4 font-medium uppercase">
              order summary
            </p>
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
              <label
                htmlFor="agreement"
                className="text-gray-600 ml-3 cursor-pointer text-sm"
              >
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
              onClick={handleSubmit}
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
