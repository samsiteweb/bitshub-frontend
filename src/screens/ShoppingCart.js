import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Breadcrumbs from "../components/Breadcrumbs";
import CartCard from "../components/CartCard";
import MessageBox from "../components/modals/MessageBox";
import Button from "../components/Button";

const ShoppingCart = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const qty = Number(searchParams.get("qty"));
  const cart = useSelector((state) => state?.cart);
  const { cartItems } = cart;

  return (
    <div>
      <Breadcrumbs page="cart" />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="space-y-4 col-span-12 lg:col-span-8">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Billing details</p>
          </div>
          {cartItems.length === 0 ? (
            <MessageBox>
              No item in cart currently. <Link to="/shop">Go shopping</Link>
            </MessageBox>
          ) : (
            cartItems.map((item) => {
              return <CartCard item={item} qty={qty} key={item.product} />;
            })
          )}
        </div>
        <div className="col-span-12 lg:col-span-4">
          <div className="border border-gray-200 p-4 rounded">
            <p className="text-gray-800 text-lg mb-4 font-medium uppercase">order summary</p>

            <div className="flex justify-between border-b border-gray-200 text-gray-800 font-medium py-3">
              <p>Subtotal</p>
              <p>
                ({cartItems.reduce((a, c) => a + c.qty, 0)} items): ₦
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 py-3">
              <p>Shipping</p>
              <p>free</p>
            </div>
            <div className="flex justify-between border-b border-gray-200 text-gray-800 py-3">
              <p>Tax</p>
              <p>free</p>
            </div>
            <div className="flex justify-between border-gray-200 text-gray-800 font-medium py-3 uppercase">
              <p className="font-semibold">Total</p>
              <p>₦{cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</p>
            </div>

            <Button
              disabled={cartItems.length === 0 ? true : false}
              onClick={() => {
                navigate("/login?redirect=/shipping");
              }}
              primary
              className="w-full px-8 py-2 font-medium"
            >
              Proceed to checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
