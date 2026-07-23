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
import { MyStore } from "../context/MyContext";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const { setUsers, setIsSignUp } = useContext(MyStore);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formSubmit = (data) => {
    setUsers((prevUsers) => [...prevUsers, data]);
    reset();
    setIsSignUp((prev) => !prev);
  };

  return (
    <div className="font-poppins h-screen overflow-hidden bg-[#0A0A0A] flex flex-col items-center justify-center px-4">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-11 h-11 rounded-xl bg-[#D7FF00] flex items-center justify-center">
          <BsLightningChargeFill className="text-black text-xl" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-white">Sky</span>
          <span className="text-[#D7FF00]">Mart</span>
        </h1>
      </div>

      <div className="w-full max-w-125 bg-[#111111] border border-white/10 rounded-4xl p-10 shadow-xl">
        <h2 className="text-5xl font-bold text-white">Create account</h2>
        <p className="text-gray-500 mt-3 mb-8">
          Join SkyMart and start shopping
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          <div>
            <div className="relative">
              <FiUser className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                {...register("name", { required: "Full name is required" })}
                type="text"
                placeholder="Full name"
                className="w-full h-16 bg-[#1d1d1d] border border-white/10 rounded-2xl pl-14 pr-5 outline-none focus:border-[#D7FF00] transition-colors duration-200"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                {...register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email address"
                className="w-full h-16 bg-[#1d1d1d] border border-white/10 rounded-2xl pl-14 pr-5 outline-none focus:border-[#D7FF00] transition-colors duration-200"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Use at least 6 characters" },
                })}
                type={showPassword ? "text" : "password"}
                placeholder="Password (min 6 chars)"
                className="w-full h-16 bg-[#1d1d1d] border border-white/10 rounded-2xl pl-14 pr-14 outline-none focus:border-[#D7FF00] transition-colors duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                tabIndex={-1}
              >
                {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                {...register("confirmPassword", { required: "Please confirm your password" })}
                type={showConfirm ? "text" : "password"}
                placeholder="Confirm password"
                className="w-full h-16 bg-[#1d1d1d] border border-white/10 rounded-2xl pl-14 pr-14 outline-none focus:border-[#D7FF00] transition-colors duration-200"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((prev) => !prev)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                tabIndex={-1}
              >
                {showConfirm ? <FiEyeOff size={20} /> : <FiEye size={20} />}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-2">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full h-16 bg-[#D7FF00] rounded-2xl flex items-center justify-center gap-3 text-black font-semibold text-xl hover:bg-[#c2e600] active:scale-[0.98] transition-all duration-200 mt-2"
          >
            Create account
            <FiArrowRight />
          </button>
        </form>

        <p className="text-center text-gray-500 mt-8">
          Already have an account?{" "}
          <span
            onClick={() => setIsSignUp((prev) => !prev)}
            className="text-[#D7FF00] font-semibold cursor-pointer hover:underline"
          >
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;