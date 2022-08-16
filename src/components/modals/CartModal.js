import React from "react";

const CartModal = ({ modalHandler }) => {
  return (
    <div>
      <div className="text-white font-semibold text-center p-3 bg-primary">
        <span>Cart</span>
        <span
          className="modal-close cursor-pointer ml-[60%]"
          onClick={() => {
            modalHandler();
          }}
        >
          <svg
            class="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </span>
      </div>
      <div className="p-3 space-y-2">
        <p className="text-gray-700 font-medium border-b border-solid transition pt-4 pb-2">Total 2 Items</p>

        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="w-20">
              <img className="w-full" src="../assets/products/81nde-rFKzL._AC_SL1500_.jpg" alt="cart item" />
            </div>
            <div>
              <p className="text-gray-700 font-medium text-sm hover:text-primary">Lenovo Yoga Y6</p>
              <p className="text-gray-700 text-xs">#200,000</p>
            </div>
          </div>
          <div className="text-gray-600 cursor-pointer hover:text-primary mr-4">
            <i className="fas fa-trash"></i>
          </div>
        </div>
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div className="w-20">
              <img className="w-full" src="../assets/products/81nde-rFKzL._AC_SL1500_.jpg" alt="cart item" />
            </div>
            <div>
              <p className="text-gray-700 font-medium text-sm hover:text-primary">Lenovo Yoga Y6</p>
              <p className="text-gray-700 text-xs">#200,000</p>
            </div>
          </div>
          <div className="text-gray-600 cursor-pointer hover:text-primary mr-4">
            <i className="fas fa-trash"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
