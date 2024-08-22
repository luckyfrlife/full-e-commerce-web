import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign Up");
  return (
    <section className="max-padd-container flexCenter flex-col pt-32 bg-primary">
      <div className="w-full max-w-[666px] h-[600px] bg-primary m-auto px-14 py-10 rounded-md">
        <h3 className="h3">{state}</h3>
        <div className="flex flex-col gap-4 mt-7">
          {state === "Sign Up" ? (
            <input
              name="username"
              type="text"
              placeholder="Your Name"
              className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
            />
          ) : (
            ""
          )}
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="h-8 w-full pl-5 bg-white outline-none rounded-xl text-sm"
          />
        </div>
        <button className="btn-dark rounded-xl my-5 !py-1">Continue</button>

        {state === "Sign Up" ? (
          <p className="text-black font-bold">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
              className="text-secondary underline cursor-pointer">
              Login
            </span>
          </p>
        ) : (
          <p className="text-black font-bold">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
              className="text-secondary underline cursor-pointer">
              Click here
            </span>
          </p>
        )}

        <div className="flexStart mt-6 gap-3">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree the terms of use & privaccy policy.</p>
        </div>
      </div>
    </section>
  );
};

export default Login;
