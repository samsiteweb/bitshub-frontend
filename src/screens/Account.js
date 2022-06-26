import React from "react";
import Breadcrumbs from "../components/Breadcrumbs";
import avatar from "../images/avatar.png";
import ProfileCard from "../components/ProfileCard";

const Account = () => {
  return (
    <div>
      <Breadcrumbs page="Account" />
      <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
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
              <a href="" className="relative text-primary block font-medium capitalize transition">
                <span className="absolute -left-8 top-0 text-base">
                  <i className="far fa-address-card"></i>
                </span>
                Manage Account
              </a>
              <a href="" className="relative hover:text-primary block transition">
                Profile Information
              </a>
              <a href="" className="relative hover:text-primary block transition">
                Manage Address
              </a>
              <a href="" className="relative hover:text-primary block transition">
                Change Password
              </a>
            </div>

            <div className="space-y-1 pl-8 pt-4">
              <a href="" className="relative text-primary block font-medium transition">
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

        <div className="col-span-9 grid grid-cols-3 gap-4">
          <ProfileCard name="John doe" line1="example@mail.com" line2="08103431851" title="Personal Profile" />
          <ProfileCard
            title="Shipping Address"
            name="John doe"
            line1="21, Bade Abiona street, Agege, Lagos."
            line2="08103431851"
          />

          <ProfileCard
            title="Billing Address"
            name="John doe"
            line1="6, Olufeko street, Fola Agoro, Yaba, Lagos"
            line2="08103431851"
          />
        </div>
      </div>
    </div>
  );
};

export default Account;
