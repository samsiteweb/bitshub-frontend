import React from "react";

const ForgotPassword = () => {
  return (
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
            // setTab("register");
          }}
          className="text-primary cursor-pointer"
        >
          Sign up
        </span>
      </p>
    </div>
  );
};

export default ForgotPassword;
