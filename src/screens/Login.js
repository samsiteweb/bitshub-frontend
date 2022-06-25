import React, { useState } from "react";

const Login = () => {
  const [tab, setTab] = useState("login");

  return (
    <div className="container py-16">
      {tab === "login" && (
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Login</h2>
          <p className="text-gray-600 mb-6 text-sm">Login if you are a returning user</p>
          <form action="">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="text-gray-600 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <input
                  type="email"
                  className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="Enter password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input type="checkbox" id="agreement" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                <label htmlFor="agreement" className="text-gray-600 ml-3 cursor pointer">
                  Remember me
                </label>
              </div>
              <span
                onClick={() => {
                  setTab("forgot-password");
                }}
                href="#"
                className="text-primary cursor-pointer"
              >
                Forgot password?
              </span>
            </div>
            <div className="mt-4">
              <button className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
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
              href=""
              className="w-1/2 py-2 text-center text-white bg-blue-800 hover:bg-blue-700 rounded uppercase font-roboto font-medium text-sm"
            >
              Facebook
            </a>
            <a
              href=""
              className="w-1/2 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-500 rounded uppercase font-roboto font-medium text-sm"
            >
              Google
            </a>
          </div>
          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?
            <span
              onClick={() => {
                setTab("register");
              }}
              className="text-primary cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      )}
      {tab === "register" && (
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Create an account</h2>
          <p className="text-gray-600 mb-6 text-sm">Sign up here if you're a new customer</p>
          <form action="">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="text-gray-600 mb-2 block">
                  Full Name
                </label>
                <input
                  type="name"
                  className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-600 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="example@mail.com"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="type password"
                />
              </div>
              <div>
                <label htmlFor="password" className="text-gray-600 mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="confirm your password"
                />
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="flex items-center">
                <input type="checkbox" id="agreement" className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                <label htmlFor="agreement" className="text-gray-600 ml-3 cursor pointer">
                  I have read and agreed to the
                </label>
              </div>
              <a href="#" className="text-primary">
                terms and conditions
              </a>
            </div>
            <div className="mt-4">
              <button className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                create account
              </button>
            </div>
          </form>
          <div className="flex mt-6 justify-center relative">
            <div className="text-gray-600 uppercase px-3 bg-white z-10 relative">or sign up with</div>
            <div className="absolute left-0 top-3 w-full border-b-2 border-gray-200"></div>
          </div>
          <div className="flex mt-4 gap-4">
            <a
              href=""
              className="w-1/2 py-2 text-center text-white bg-blue-800 hover:bg-blue-700 rounded uppercase font-roboto font-medium text-sm"
            >
              Facebook
            </a>
            <a
              href=""
              className="w-1/2 py-2 text-center text-white bg-yellow-600 hover:bg-yellow-500 rounded uppercase font-roboto font-medium text-sm"
            >
              Google
            </a>
          </div>
          <p className="mt-4 text-gray-600 text-center">
            Already have an account?
            <span
              onClick={() => {
                setTab("login");
              }}
              className="text-primary cursor-pointer"
            >
              Login Now
            </span>
          </p>
        </div>
      )}
      {tab === "forgot-password" && (
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-1">Reset Password</h2>
          <p className="text-gray-600 mb-6 text-sm">Please enter your email address below to receive a link.</p>
          <form action="">
            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="text-gray-600 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full block border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                  placeholder="example@mail.com"
                />
              </div>

              <div className="mt-4">
                <button className="block w-1/2 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                  reset my password
                </button>
              </div>
            </div>
          </form>

          <p className="mt-4 text-gray-600 text-center">
            Don't have an account?
            <span
              onClick={() => {
                setTab("register");
              }}
              className="text-primary cursor-pointer"
            >
              Sign up
            </span>
          </p>
        </div>
      )}
    </div>
  );
};
export default Login;
