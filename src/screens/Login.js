import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../actions/userActions";
import LoadingBox from "../components/LoadingBox";
import { toast } from "react-toastify";
import InputField from "../components/InputField";
import { useFormik } from 'formik';
import { LoginSchema } from "../utilities/schemas";




const Login = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get("redirect");
  const redirect = redirectInUrl ? redirectInUrl : "/";


  const signinData = useSelector((state) => state?.userSignin);
  const { loading, error, userInfo } = signinData;
  const customId = "custom-id-yes";
  const dispatch = useDispatch();


  const initialValues = {
    email: "",
    password: ""
  }

  const signinHandler = (data) => {
   
    dispatch(signin(data?.email, data?.password));
  };

  // toast.error(error, {
  //   toastId: customId,
  // });
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [redirect, userInfo, navigate]);

  const { values, errors, touched, handleChange, handleSubmit, handleBlur, resetForm } =
  useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: (data) => signinHandler(data),
      enableReinitialize: true
  });

  return (
    <div className="container py-16">
      {loading ? (
        <LoadingBox />
      ) : (
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">Login if you are a returning user</p>
          <form>
            <div className="space-y-4">
           
              <InputField 
                  label="Email"
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange("email")}
                  errorMsg={touched.email ? errors.email : undefined}
                  placeholder="Enter your email address"
              />
             
             <InputField 
                  label="Password"
                  id="password"
                  type="password"
                  value={values.password}
                  onChange={handleChange("password")}
                  errorMsg={touched.password ? errors.password : undefined}
                  placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input type="checkbox" id="agreement" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                <label htmlFor="agreement" className="text-gray-600 ml-3 cursor pointer">
                  Remember me
                </label>
              </div>
              <Link to="/" className="text-primary cursor-pointer">
                Forgot password?
              </Link>
            </div>
            <div className="mt-4">
              <button onClick={handleSubmit} className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                Login
              </button>
            </div>
          </form>
          <div className="flex mt-6 justify-center relative">
            <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">or login with</div>
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          </div>
          <div className="flex mt-4 gap-4">
            <a
              href="/"
              className="w-1/2 py-2 text-center text-white bg-blue-800 hover:bg-blue-700 rounded uppercase font-roboto font-medium text-sm"
            >
              Facebook
            </a>
            <a
              href="/"
              className="w-1/2 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-500 rounded uppercase font-roboto font-medium text-sm"
            >
              Google
            </a>
          </div>
          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?
            <span className="text-primary cursor-pointer">
              <Link to={`/register?redirect=${redirect}`}>Create account</Link>
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
export default Login;
