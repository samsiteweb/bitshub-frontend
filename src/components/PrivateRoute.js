import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { userInfo } = useSelector((state) => state?.userSignin);
  const { error } = useSelector((state) => state?.userDetails);
  return userInfo ? (
    <Outlet />
  ) : error && error === "Invalid token" ? (
    <Navigate to="/login" />
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateRoute;
