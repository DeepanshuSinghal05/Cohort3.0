import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
} from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const Signup = () => {
  const navigate = useNavigate();

  const { usersData, setUsersData } = useContext(MyStore);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const formSubmit = (data) => {
    const { confirmPassword, ...user } = data;

    const isUserExist = usersData.some((item) => item.email === user.email);

    if (isUserExist) {
      alert("User already exists!");
      return;
    }

    const updatedUsers = [...usersData, user];

    setUsersData(updatedUsers);
    localStorage.setItem("usersData", JSON.stringify(updatedUsers));

    alert("Account Created Successfully!");

    reset();

    navigate("/");
  };

  return (
    <div className="font-poppins flex h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0A0A] px-4">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D7FF00]">
          <BsLightningChargeFill className="text-xl text-black" />
        </div>

        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-white">Sky</span>
          <span className="text-[#D7FF00]">Mart</span>
        </h1>
      </div>

      <div className="w-full max-w-125 rounded-4xl border border-white/10 bg-[#111111] p-10 shadow-xl">
        <h2 className="text-5xl font-bold text-white">Create account</h2>

        <p className="mt-3 mb-8 text-gray-500">
          Join SkyMart and start shopping
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          <div>
            <div className="relative">
              <FiUser className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" />

              <input
                type="text"
                placeholder="Full name"
                className="h-16 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-14 pr-5 text-white outline-none focus:border-[#D7FF00]"
                {...register("name", {
                  required: "Name is required",
                })}
              />
            </div>

            {errors.name && (
              <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <FiMail className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" />

              <input
                type="email"
                placeholder="Email address"
                className="h-16 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-14 pr-5 text-white outline-none focus:border-[#D7FF00]"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                    message: "Invalid email",
                  },
                })}
              />
            </div>

            {errors.email && (
              <p className="mt-2 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <FiLock className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                className="h-16 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-14 pr-14 text-white outline-none focus:border-[#D7FF00]"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>

            {errors.password && (
              <p className="mt-2 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <FiLock className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                className="h-16 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-14 pr-14 text-white outline-none focus:border-[#D7FF00]"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
              />

              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute top-1/2 right-5 -translate-y-1/2 text-gray-500 hover:text-white"
              >
                {showConfirmPassword ? (
                  <FiEyeOff size={20} />
                ) : (
                  <FiEye size={20} />
                )}
              </button>
            </div>

            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="mt-2 flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-[#D7FF00] text-xl font-semibold text-black transition hover:bg-[#c2e600]"
          >
            Create account
            <FiArrowRight />
          </button>
        </form>

        <p className="mt-8 text-center text-gray-500">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="cursor-pointer font-semibold text-[#D7FF00] hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
