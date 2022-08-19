import React, { useEffect } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/cartActions";
import Breadcrumbs from "../components/Breadcrumbs";
import CartCard from "../components/CartCard";
import MessageBox from "../components/modals/MessageBox";

const ShoppingCart = () => {
  const params = useParams();
  const { id: productId } = params;
  const [searchParams, setSearchParams] = useSearchParams();
  const qty = Number(searchParams.get("qty"));
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <div>
      <Breadcrumbs page="cart" />
      <div className="container grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-16 pt-4">
        <div className="space-y-4 col-span-12 lg:col-span-8">
          <div className="bg-gray-200 text-black mb-4 rounded">
            <p className="px-4 py-3 text-sm font-semibold">Billing details</p>
            {/* <p className="px-4 py-3 text-sm font-semibold">
              productId: {productId} quantity:{qty}
            </p> */}
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
              <p>₦320,000</p>
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
              <p>₦320,000</p>
            </div>

            <Link
              to="/checkout"
              className="w-full block text-center bg-primary border-primary text-white border px-4 py-3 font-medium rounded-md hover:bg-transparent hover:text-primary transition uppercase"
            >
              Proceed to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
