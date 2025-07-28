import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen fixed inset-0 flex flex-col justify-center items-center p-4 overflow-hidden">
      <div className="max-w-7xl w-full flex flex-col mx-auto gap-8">
        <h1 className="text-4xl font-bold mb-2 text-center">iTask</h1>
        <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 min-h-[24rem]  rounded-lg  shadow-[0_0_100px_rgba(0,0,0,1)] focus:ring-2 focus:ring-blue flex flex-col justify-center items-center mx-auto p-8">
          <form action="#" method="POST" className="space-y-6 w-1/2">
            <div>
              <label
                for="email"
                className="block text-sm/6 font-medium text-#FFFFFFDE-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autocomplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div>
                <label
                  for="password"
                  className="block text-sm/6 font-medium text-#FFFFFFDE-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autocomplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="flex justify-center item-center">
              <button
                type="submit"
                className="
    w-[120px]  px-4 py-2 bg-#213547-500 text-white rounded-lg
  transition-transform duration-75
  active:scale-95 active:bg-#213547-600
  hover:scale-105 hover:bg-#213547-400 hover:border-blue-600
  border-2 border-white
  shadow-md"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 font-medium text-#FFFFFFDE-500 gap-8">
            Not a member?
            <Link
              to="/signup"
              className=" ml-2 font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Sign Up!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
