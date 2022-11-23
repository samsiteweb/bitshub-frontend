import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import avatar from "../images/avatar.png";
import ProfileModal from "./modals/ProfileModal";
import SideBarModal from "./modals/SideBarModal";
import { signout } from "../actions/userActions";

const ProfileSideNav = () => {
  const [showNav, setShowNav] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleProfileNav = () => {
    setShowNav(!showNav);
  };
  const signoutHandler = () => {
    dispatch(signout());
    navigate("/login");
  };
  return (
    <div className="col-span-12 lg:col-span-3">
      <div className="px-4 py-3 shadow flex items-center gap-4 relative">
        <div className="flex-shrink-0">
          <img
            src={avatar}
            alt=""
            className="rounded-full h-14 w-14 border border-gray-200 p-1 object-cover"
          />
        </div>
        <div className="flex-grow">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">Hello,</p>
              <p className="text-gray-800 font-medium">John Doe</p>
            </div>

            <i
              className="block lg:hidden fas fa-bars text-white border border-primary bg-primary p-2 rounded hover:bg-transparent hover:text-primary transition"
              onClick={() => {
                handleProfileNav();
              }}
            ></i>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600 hidden lg:block">
        <div className="space-y-1 pl-8">
          <Link
            to="/account"
            className="relative hover:text-primary block font-medium transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            Manage Account
          </Link>
          <Link
            to="/account/profile-info"
            className="relative hover:text-primary block transition"
          >
            Profile Information
          </Link>
          <Link
            to="/account/manage-address"
            className="relative hover:text-primary block transition"
          >
            Manage Address
          </Link>
          <Link
            to="/account/change-password"
            className="relative hover:text-primary block transition"
          >
            Change Password
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <Link
            to="/account/order-history"
            className="relative hover:text-primary block font-medium transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            My Order History
          </Link>
          <Link
            to="/account/returns"
            className="relative hover:text-primary block transition"
          >
            My returns
          </Link>
          <Link
            to="/account/cancellations"
            className="relative hover:text-primary block transition"
          >
            My Cancellations
          </Link>
          <Link
            to="/account/reviews"
            className="relative hover:text-primary block transition"
          >
            My Reviews
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <Link
            to="/account/payment-methods"
            className="relative hover:text-primary block font-medium transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            Payment Methods
          </Link>
          <Link
            to="/account/voucher"
            className="relative hover:text-primary block transition"
          >
            Voucher
          </Link>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <Link
            to="/account/wishlist"
            className="relative hover:text-primary block font-medium transition"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            My Wishlist
          </Link>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <p
            onClick={signoutHandler}
            className="relative hover:text-primary block font-medium transition cursor-pointer"
          >
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            Logout
          </p>
        </div>
      </div>
      {showNav && (
        <SideBarModal modalHandler={handleProfileNav}>
          <ProfileModal modalHandler={handleProfileNav} />
        </SideBarModal>
      )}
    </div>
  );
};

export default ProfileSideNav;
