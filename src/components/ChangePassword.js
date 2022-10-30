import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoadingBox from "./LoadingBox";
import MessageBox from "./modals/MessageBox";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { user, loading, error } = useSelector((state) => state?.userDetails);
  if (password !== confirmPassword) {
    toast.error("Password and confirm password do not match!");
  } else {
    // dispatch(register(name, email, password));
  }
  return (
    <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <p className="text-lg font-medium capitalize mb-4">Change Password</p>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2">
            <div>
              <div className="py-4">
                <label htmlFor="full-name" className="text-gray-600 mb-2 block">
                  Current Password
                </label>
                <input
                  type="password"
                  className="input-box"
                  placeholder="enter current password"
                  value={user.password}
                />
              </div>
              <div className="pb-4">
                <label htmlFor="full-name" className="text-gray-600 mb-2 block">
                  New Password
                </label>
                <input
                  id="password"
                  type="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="input-box"
                  placeholder="enter new password"
                />
              </div>
              <div>
                <label htmlFor="full-name" className="text-gray-600 mb-2 block">
                  Retype Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                  }}
                  className="input-box"
                  placeholder="repeat your password"
                />
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
      )}
    </div>
  );
};

export default ChangePassword;
