import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";
import { MyStore } from "../context/MyContext";

const LogIn = () => {
  const { users, setIsLogIn, setCurrentUser, setIsSignUp } = useContext(MyStore);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    const user = users.find(
      (u) => u.email === data.email && u.password === data.password
    );

    if (!user) {
      alert("Invalid email or password");
      return;
    }

    setCurrentUser(user);
    setIsLogIn(true);
    reset();
  };

  return (
    <div className="font-poppins h-screen overflow-hidden bg-[#0A0A0A] flex text-white">
      <div className="hidden lg:flex w-1/2 border-r border-white/10 px-14 py-10 flex-col justify-center relative">
        <div className="pointer-events-none absolute -left-32 top-44 w-80 h-80 rounded-full bg-[#D7FF00]/10 blur-[130px]" />
        <div className="pointer-events-none absolute right-0 bottom-10 w-72 h-72 rounded-full bg-[#D7FF00]/10 blur-[140px]" />

        <div className="flex items-center gap-4 z-10 absolute top-10 left-14">
          <div className="w-11 h-11 rounded-2xl bg-[#D7FF00] flex items-center justify-center">
            <BsLightningChargeFill className="text-black text-xl" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-white">Sky</span>
            <span className="text-[#D7FF00]">Mart</span>
          </h1>
        </div>

        <div className="z-10">
          <p className="uppercase tracking-[3px] text-[#D7FF00] font-semibold mb-6 text-sm">
            Welcome back
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Shop the future.
            <br />
            <span className="text-[#D7FF00]">Today.</span>
          </h1>

          <p className="text-gray-500 text-lg mt-8 max-w-xl leading-8">
            Thousands of products, lightning-fast delivery, and prices that
            make your wallet happy.
          </p>

          <div className="flex gap-5 mt-10">
            <div className="border border-white/20 rounded-3xl w-48 h-28 flex flex-col justify-center items-center transition-colors duration-300 hover:border-[#D7FF00]/50">
              <h2 className="text-[#D7FF00] text-3xl font-bold">20K+</h2>
              <p className="text-gray-500 mt-2 text-sm">Products</p>
            </div>
            <div className="border border-white/20 rounded-3xl w-48 h-28 flex flex-col justify-center items-center transition-colors duration-300 hover:border-[#D7FF00]/50">
              <h2 className="text-[#D7FF00] text-3xl font-bold">50K+</h2>
              <p className="text-gray-500 mt-2 text-sm">Users</p>
            </div>
            <div className="border border-white/20 rounded-3xl w-48 h-28 flex flex-col justify-center items-center transition-colors duration-300 hover:border-[#D7FF00]/50">
              <h2 className="text-[#D7FF00] text-3xl font-bold">4.9★</h2>
              <p className="text-gray-500 mt-2 text-sm">Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center items-center px-6">
        <div className="w-full max-w-125 bg-[#111111] border border-white/10 rounded-4xl p-10 shadow-xl">
          <div className="flex items-center gap-3 mb-8 lg:hidden">
            <div className="w-11 h-11 rounded-xl bg-[#D7FF00] flex items-center justify-center">
              <BsLightningChargeFill className="text-black text-xl" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-white">Sky</span>
              <span className="text-[#D7FF00]">Mart</span>
            </h1>
          </div>

          <h2 className="text-5xl font-bold">Sign in</h2>
          <p className="text-gray-500 mt-3">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-10">
            <div>
              <div className="relative">
                <FiMail className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type="email"
                  placeholder="Email address"
                  {...register("email", { required: "Email is required" })}
                  className="w-full h-16 bg-[#1d1d1d] rounded-2xl border border-white/10 pl-14 pr-4 outline-none focus:border-[#D7FF00] transition-colors duration-200"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
              )}
            </div>

            <div className="mt-6">
              <div className="relative">
                <FiLock className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  {...register("password", { required: "Password is required" })}
                  className="w-full h-16 bg-[#1d1d1d] rounded-2xl border border-white/10 pl-14 pr-14 outline-none focus:border-[#D7FF00] transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                  {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="mt-8 w-full h-16 rounded-2xl bg-[#D7FF00] hover:bg-[#c2e600] text-black font-semibold text-xl flex items-center justify-center gap-3 duration-200 active:scale-[0.98]"
            >
              Sign in
              <FiArrowRight />
            </button>
          </form>

          <p className="text-center text-gray-500 mt-8">
            Don't have an account?{" "}
            <span
              onClick={() => setIsSignUp((prev) => !prev)}
              className="text-[#D7FF00] font-semibold cursor-pointer hover:underline"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;