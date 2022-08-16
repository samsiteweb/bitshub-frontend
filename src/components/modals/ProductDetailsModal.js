import React from "react";

const ProductDetailsModal = (props) => {
  return (
    <div class="modal-content py-4 text-left px-6">
      <div class="flex justify-between items-center pb-3">
        <p class="text-2xl font-bold text-green-600">Success!</p>
        <div class="modal-close cursor-pointer z-50" onClick={props.modalHandler}>
          <svg
            class="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
        </div>
      </div>
      <div className="py-4 text-sm">
        <p>Item has been successfully added to cart</p>
        <p>Would you like to continue shopping or go to cart?</p>
      </div>

      <div class="flex justify-between pt-2">
        <button class="px-4 bg-transparent p-3 border rounded-lg text-gray-500 hover:bg-gray-100 hover:text-primary hover:border-primary mr-2 text-sm">
          Continue shopping
        </button>
        <button class="modal-close px-4 bg-primary p-3 rounded-lg text-white hover:bg-transparent hover:text-primary hover:border-primary border text-sm">
          Complete order
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsModal;
