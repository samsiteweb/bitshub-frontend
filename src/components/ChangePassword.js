import React from "react";

const ChangePassword = () => {
  return (
    <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <p className="text-lg font-medium capitalize mb-4">Change Password</p>
      <div className="space-y-4">
        <div className="grid md:grid-cols-2">
          <div>
            <div className="py-4">
              <label htmlFor="full-name" className="text-gray-600 mb-2 block">
                Current Password
              </label>
              <input type="password" className="input-box" placeholder="enter current password" />
            </div>
            <div className="pb-4">
              <label htmlFor="full-name" className="text-gray-600 mb-2 block">
                New Password
              </label>
              <input type="password" className="input-box" placeholder="enter new password" />
            </div>
            <div>
              <label htmlFor="full-name" className="text-gray-600 mb-2 block">
                Retype Password
              </label>
              <input type="password" className="input-box" placeholder="repeat your password" />
            </div>
          </div>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-primary border border-primary text-white px-12 py-3 font-medium rounded-md uppercase hover:bg-transparent hover:text-primary transition text-sm text-center"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
