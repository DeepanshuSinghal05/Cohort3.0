import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const {registeredUsers, setRegisteredUsers} = useContext(Auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log("Register Data:", data);
    let arr = [...registeredUsers, data]
    setRegisteredUsers(arr);
    toast.success("Registration Successfu, Please Login");
    localStorage.setItem("registeredUsers", JSON.stringify(arr));
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Register to get started
          </p>
        </div>

        {/* Register Form */}
        <form
          onSubmit={handleSubmit(formSubmit)}
          className="space-y-5"
        >

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email Address
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none transition focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Create Account
          </button>
        </form>

        {/* Bottom Login Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-blue-600 font-semibold hover:text-blue-700 hover:underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default Register;