import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-700">
      <div className="container w-1/3 shadow-2xl bg-white rounded-xl p-4">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600">
              Password:
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-gray-300 p-2 w-full pr-10"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2 cursor-pointer"
              >
                {showPassword ? "👁️" : "👁️‍🗨️"}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-gray-600">
              Confirm Password:
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border border-gray-300 p-2 w-full pr-10"
                required
              />
              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-2 cursor-pointer"
              >
                {showConfirmPassword ? "👁️" : "👁️‍🗨️"}
                {/* {showConfirmPassword ? "👁️" : "👁️‍🗨️"} */}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 w-full rounded hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500">
            Click here.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
