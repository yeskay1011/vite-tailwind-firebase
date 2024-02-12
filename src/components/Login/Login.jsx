import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-blue-700">
      <div className="container w-1/3 shadow-2xl bg-white rounded-xl p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <input
              type="password"
              id="password"
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-full"
          >
            Login
          </button>
        </form>
        <p className="mt-4">
          You don't have an account?{" "}
          <Link to="/signup" className="text-blue-500">
            Click here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
