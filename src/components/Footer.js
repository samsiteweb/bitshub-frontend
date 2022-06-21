import React from "react";
import bitshub from "../images/bitshub.jpeg";

const Footer = () => {
  return (
    <div>
      <div className="bg-white pt-16 pb-12 border-t border-gray-100">
        <div className="container grid grid-cols-3 gap-8">
          <div className="col-span-1 space-y-8">
            <img src={bitshub} alt="bitshub-img" className="w-32" />
            <p className="text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, sequi.</p>
            <div className="flex space-x-6">
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
          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Solutions</h3>
                <div className="mt-4 space-y-2">
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Marketing
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Analytics
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Commerce
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Insights
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Support</h3>
                <div className="mt-4 space-y-2">
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Pricing
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Documentation
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Guides
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    API Status
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
                <div className="mt-4 space-y-2">
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    About
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Jobs
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Blog
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Press
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
                <div className="mt-4 space-y-2">
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Claim
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Privacy
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Policy
                  </a>
                  <a href="" className="text-base text-gray-500 hover:text-gray-900 block">
                    Terms
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container flex items-center justify-between">
          <p className="text-white">© Bitshub - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
