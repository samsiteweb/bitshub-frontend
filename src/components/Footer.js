import React from "react";
import bitshub from "../images/bitshub.jpeg";
import BottomBar from "./BottomBar";

const Footer = () => {
  return (
    <div>
      <div className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid md:grid-cols-2 break-words">
          <div className="col-span-4 grid grid-cols-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <img src={bitshub} alt="bitshub-img" className="w-32" />
                <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sequi.</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">My account</h3>
                <div className="mt-4 space-y-2">
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Orders
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Wishlist
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Track Order
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Manage Account
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Return Order
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Information</h3>
                <div className="mt-4 space-y-2">
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    About Us
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Return Policy
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Terms and condition
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Privacy Policy
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    FAQ
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact</h3>
                <div className="mt-4 space-y-2">
                  <p className="text-base text-gray-500 hover:text-gray-900 block">
                    <i className="fas fa-location pr-1"></i>18, Oremeji street, Computer Village, Ikeja
                  </p>
                  <p className="text-base text-gray-500 hover:text-gray-900 block">
                    <i className="fas fa-phone pr-1"></i>+234 8103431851
                  </p>
                  <p className="text-base text-gray-500 hover:text-gray-900 block">
                    <i className="fas fa-inbox pr-1"></i>support@bitshubsoluions.com
                  </p>
                </div>
                <div className="flex space-x-6 pt-4">
                  <a href="" className="text-grey-400 hover:text-gray-500">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="" className="text-grey-400 hover:text-gray-500">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="" className="text-grey-400 hover:text-gray-500">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="" className="text-grey-400 hover:text-gray-500">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 pt-4 pb-16 md:pb-4 md:mb-0">
        <div className="container flex items-center justify-between">
          <p className="text-white">© Bitshub - All Rights Reserved</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 block md:hidden bg-white">
        <BottomBar />
      </div>
    </div>
  );
};

export default Footer;
