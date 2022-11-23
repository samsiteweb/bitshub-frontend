import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailsUser, updateUserProfile } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/modals/MessageBox";
import { USER_UPDATE_PROFILE_RESET } from "../constants/userConstants";

const ProfileInfo = () => {
  const navigate = useNavigate();
  const { userInfo } = useSelector((state) => state?.userSignin);
  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const {
    success: successUpdate,
    error: errorUpdate,
    loading: loadingUpdate,
  } = userUpdateProfile;
  const { user, loading, error } = useSelector((state) => state?.userDetails);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(Number);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!user) {
      dispatch({
        type: USER_UPDATE_PROFILE_RESET,
      });
      dispatch(detailsUser(userInfo._id));
    } else {
      setFirstName(user.name);
      setLastName(user.lastName);
      setEmail(user.email);
      setPhone(user.phone);
      setDob(user.dob);
      setGender(user.gender);
    }
  }, [dispatch, user, userInfo, navigate, error]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateUserProfile({
        userId: user._id,
        firstName,
        lastName,
        email,
        phone,
        dob,
        gender,
      })
    );
  };

  return (
    <div className="col-span-12 lg:col-span-9 shadow rounded px-6 pt-5 pb-7">
      <div className="flex justify-between items-center">
        <p className="text-lg font-medium capitalize mb-4">
          Profile Information
        </p>

        {user?.isAdmin ? (
          <p className="text-sm font-medium capitalize mb-4 bg-[green] text-[#fff] p-2 rounded">
            Admin
          </p>
        ) : (
          ""
        )}
      </div>
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
              Profile updated successfully
            </MessageBox>
          )}
          <form onSubmit={submitHandler}>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="text-gray-600 mb-2 block"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className="input-box"
                    placeholder="Enter first name"
                    value={firstName}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="text-gray-600 mb-2 block"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className="input-box"
                    placeholder="Enter last name"
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dob" className="text-gray-600 mb-2 block">
                    Birthday
                  </label>
                  <input
                    id="dob"
                    type="date"
                    className="input-box"
                    value={dob}
                    onChange={(e) => {
                      setDob(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="gender" className="text-gray-600 mb-2 block">
                    Gender
                  </label>
                  <select name="" id="gender" className="input-box">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Female">Other</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="text-gray-600 mb-2 block">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="text"
                    className="input-box"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-gray-600 mb-2 block">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="number"
                    className="input-box"
                    placeholder="Enter phone number"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
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
          </form>
        </>
      )}
    </div>
  );
};

export default ProfileInfo;
