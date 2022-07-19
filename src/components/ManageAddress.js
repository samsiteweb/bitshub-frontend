import React from "react";

const ManageAddress = () => {
  return (
    <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <p className="text-lg font-medium capitalize mb-4">Manage Address</p>
      <div className="space-y-4">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="full-name" className="text-gray-600 mb-2 block">
              Full Name
            </label>
            <input type="text" className="input-box" placeholder="Enter full name" />
          </div>
          <div>
            <label htmlFor="full-name" className="text-gray-600 mb-2 block">
              Phone Number
            </label>
            <input type="text" className="input-box" placeholder="Enter Number" />
          </div>
        </div>

        <div>
          <label htmlFor="full-name" className="text-gray-600 mb-2 block">
            Address
          </label>
          <input type="text" className="input-box" placeholder="Enter address" />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-primary border border-primary text-white px-12 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ManageAddress;
