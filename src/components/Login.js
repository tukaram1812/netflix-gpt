import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const HandleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          alt="netflix-bg-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3d31dac6-aaf0-4e6e-8bd7-e16c5d9cd9a3/web/IN-en-20260119-TRIFECTA-perspective_cce70d60-69c5-428f-99cf-44c212fcec3f_large.jpg"
        />
      </div>

      <form className="bg-black absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-85">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Email Address"
        />

        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Full Name"
          />
        )}

        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-700"
            type="text"
            placeholder="Mobile Number"
          />
        )}

        <input
          className="p-4 my-4 w-full bg-gray-700"
          type="text"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-800 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-6 px-1 my-6 cursor-pointer hover:underline"
          onClick={HandleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a user? Sign Up now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
