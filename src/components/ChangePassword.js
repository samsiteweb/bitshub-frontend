import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import {
  USER_SIGNOUT,
  USER_UPDATE_PROFILE_RESET,
} from "../constants/userConstants";
import LoadingBox from "./LoadingBox";
import MessageBox from "./modals/MessageBox";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state?.userSignin);
  const { user, loading, error } = useSelector((state) => state?.userDetails);
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      navigate("/login?redirect=/account");
    } else if (!user) {
      dispatch({
        type: USER_UPDATE_PROFILE_RESET,
      });
      dispatch(detailsUser(userInfo._id));
    }
    if (error && error === "Invalid token") {
      localStorage.removeItem("userInfo");
      dispatch({
        type: USER_SIGNOUT,
      });
      navigate("/login?redirect=/account");
    }
    console.log(error);
  }, [dispatch, userInfo, user, navigate, error]);
  const removeUser = () => {
    setTimeout(() => {
      localStorage.removeItem("userInfo");
      dispatch({
        type: USER_SIGNOUT,
      });
      navigate("/login");
    }, 3000);
  };
  successUpdate && removeUser();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Password and confirm password do not match!");
    } else {
      dispatch(updateUserProfile({ userId: user._id, password }));
    }
  };

  return (
    <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <p className="text-lg font-medium capitalize mb-4">Change Password</p>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <>
          {loadingUpdate && <LoadingBox />}
          {errorUpdate && (
            <MessageBox variant="danger">{errorUpdate}</MessageBox>
          )}
          {successUpdate && (
            <MessageBox variant="success">
              Password updated successfully
            </MessageBox>
          )}
          <form onSubmit={submitHandler}>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2">
                <div>
                  <div className="pb-4">
                    <label
                      htmlFor="full-name"
                      className="text-gray-600 mb-2 block"
                    >
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
                    <label
                      htmlFor="confirmPassword"
                      className="text-gray-600 mb-2 block"
                    >
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
          </form>
        </>
      )}
    </div>
  );
};

export default ChangePassword;
