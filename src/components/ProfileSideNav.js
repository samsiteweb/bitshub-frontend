import React from "react";
import { Link } from "react-router-dom";
import avatar from "../images/avatar.png";

const ProfileSideNav = () => {
  return (
    <div className="col-span-3">
      <div className="px-4 py-3 shadow flex items-center gap-4">
        <div className="flex-shrink-0">
          <img src={avatar} alt="" className="rounded-full h-14 w-14 border border-gray-200 p-1 object-cover" />
        </div>
        <div className="flex-grow">
          <p className="text-gray-600">Hello</p>
          <h4 className="text-gray-800 font-medium">John Doe</h4>
        </div>
      </div>

      <div className="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
        <div className="space-y-1 pl-8">
          <Link to="/account/manage-account" className="relative hover:text-primary block font-medium transition">
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            Manage Account
          </Link>
          <Link to="/account/profile-info" className="relative hover:text-primary block transition">
            Profile Information
          </Link>
          <Link to="/account/manage-address" className="relative hover:text-primary block transition">
            Manage Address
          </Link>
          <Link to="/account/change-password" className="relative hover:text-primary block transition">
            Change Password
          </Link>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <a href="" className="relative hover:text-primary block font-medium transition">
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            My Order History
          </a>
          <a href="" className="relative hover:text-primary block transition">
            My returns{" "}
          </a>
          <a href="" className="relative hover:text-primary block transition">
            My Cancellations
          </a>
          <a href="" className="relative hover:text-primary block transition">
            My Reviews
          </a>
        </div>

        <div className="space-y-1 pl-8 pt-4">
          <a href="" className="relative hover:text-primary block font-medium transition">
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            Payment Methods
          </a>
          <a href="" className="relative hover:text-primary block transition">
            Voucher
          </a>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <a href="" className="relative hover:text-primary block font-medium transition">
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            My Wishlist
          </a>
        </div>
        <div className="space-y-1 pl-8 pt-4">
          <a href="" className="relative hover:text-primary block font-medium transition">
            <span className="absolute -left-8 top-0 text-base">
              <i className="far fa-address-card"></i>
            </span>
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSideNav;
