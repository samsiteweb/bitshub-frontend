import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import bitshub from "../images/bitshub.jpeg";
import Navbar from "./Navbar";
import TopBar from "./TopBar";
import packageIcon from "../images/package.png";
import switchIcon from "../images/power-off.png";
import { signout } from "../actions/userActions";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const signinData = useSelector((state) => state?.userSignin);
  const { userInfo } = signinData;
  const { cartItems } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signoutHandler = () => {
    dispatch(signout());
    navigate("/login");
  };
  return (
    <div>
      <TopBar />
      <div className="py-4 shadow-sm bg-white">
        <div className="container flex items-center justify-between ">
          <Link to="/">
            <img src={bitshub} alt="bitshub-img" className="w-32" />
          </Link>
          <div className="hidden w-full md:max-w-xl relative md:flex ml-3">
            <span className="absolute left-4 top-3 text-lg text-gray-400">
              <i className="fas fa-search"></i>
            </span>
            <input
              type="text"
              name=""
              id=""
              className="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none focus:ring-0 focus:border-primary"
              placeholder="search"
            />
            <button className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
              Search
            </button>
          </div>
          <div className="flex items-center space-x-4 ml-3">
            <Link to="/account/wishlist" className="text-center text-gray-700 hover:text-primary transition relative">
              <div className="text-2xl">
                <i className="far fa-heart"></i>
              </div>
              <div className="text-xs leading-3">Wish list</div>
              <span className="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                8
              </span>
            </Link>
            <Link
              to="/cart/:id"
              className="hidden md:block text-center text-gray-700 hover:text-primary transition relative"
            >
              <div className="text-2xl">
                <i className="fas fa-shopping-bag"></i>
              </div>
              <div className="text-xs leading-3">Cart</div>
              {cartItems.length > 0 && (
                <span className="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <div className="cursor-pointer relative group">
              <div className="text-center text-gray-700 hover:text-primary transition relative">
                <p className="text-2xl">
                  <i className="far fa-user"></i>
                </p>
                <p className="text-xs leading-3">{userInfo?.name || "Account"}</p>
              </div>
              <div className="absolute w-[15rem] right-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible z-50">
                {userInfo ? <p className="px-6 py-3">{`Welcome, ${userInfo.name}`}</p> : ""}

                <Link to="/account" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <i className="far fa-user"></i>
                  <span className="ml-6 text-gray-600 text-sm">My Account</span>
                </Link>
                <Link to="/account/order-history" className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src={packageIcon} alt="" className="w-5 h-5 object-contain text-color-red" />
                  <span className="ml-6 text-gray-600 text-sm">My Order</span>
                </Link>
                <div className="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                  <img src={switchIcon} alt="" className="w-5 h-5 object-contain text-color-red" />
                  <span className="ml-6 text-gray-600 text-sm">
                    {userInfo ? <span onClick={signoutHandler}>Sign Out</span> : <Link to="/login">Sign In</Link>}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Header;
