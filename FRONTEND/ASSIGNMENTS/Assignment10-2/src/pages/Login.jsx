import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiMail, FiLock, FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { BsLightningChargeFill } from "react-icons/bs";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const Login = () => {
  const navigate = useNavigate();

  const { usersData, setIsLoggedIn } = useContext(MyStore);

  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const user = usersData.find(
      (item) => item.email === data.email && item.password === data.password
    );

    if (!user) {
      alert("Invalid Email or Password");
      return;
    }

    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login Successful");

    reset();

    navigate("/home"); // Change this route according to your app
  };

  return (
    <div className="font-poppins flex h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="relative hidden w-1/2 flex-col justify-center border-r border-white/10 px-14 py-10 lg:flex">
        <div className="pointer-events-none absolute -left-32 top-44 h-80 w-80 rounded-full bg-[#D7FF00]/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#D7FF00]/10 blur-[140px]" />

        <div className="absolute top-10 left-14 z-10 flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D7FF00]">
            <BsLightningChargeFill className="text-xl text-black" />
          </div>

          <h1 className="text-4xl font-bold tracking-tight">
            <span className="text-white">Sky</span>
            <span className="text-[#D7FF00]">Mart</span>
          </h1>
        </div>

        <div className="z-10">
          <p className="mb-6 text-sm font-semibold uppercase tracking-[3px] text-[#D7FF00]">
            Welcome back
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Shop the future.
            <br />
            <span className="text-[#D7FF00]">Today.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-500">
            Thousands of products, lightning-fast delivery, and prices that make
            your wallet happy.
          </p>

          <div className="mt-10 flex gap-5">
            <div className="flex h-28 w-48 flex-col items-center justify-center rounded-3xl border border-white/20 hover:border-[#D7FF00]/50">
              <h2 className="text-3xl font-bold text-[#D7FF00]">20K+</h2>
              <p className="mt-2 text-sm text-gray-500">Products</p>
            </div>

            <div className="flex h-28 w-48 flex-col items-center justify-center rounded-3xl border border-white/20 hover:border-[#D7FF00]/50">
              <h2 className="text-3xl font-bold text-[#D7FF00]">50K+</h2>
              <p className="mt-2 text-sm text-gray-500">Users</p>
            </div>

            <div className="flex h-28 w-48 flex-col items-center justify-center rounded-3xl border border-white/20 hover:border-[#D7FF00]/50">
              <h2 className="text-3xl font-bold text-[#D7FF00]">4.9★</h2>
              <p className="mt-2 text-sm text-gray-500">Rating</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-center px-6 lg:w-1/2">
        <div className="w-full max-w-125 rounded-4xl border border-white/10 bg-[#111111] p-10 shadow-xl">
          <div className="mb-8 flex items-center gap-3 lg:hidden">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D7FF00]">
              <BsLightningChargeFill className="text-xl text-black" />
            </div>

            <h1 className="text-3xl font-bold tracking-tight">
              <span className="text-white">Sky</span>
              <span className="text-[#D7FF00]">Mart</span>
            </h1>
          </div>

          <h2 className="text-5xl font-bold">Sign in</h2>

          <p className="mt-3 text-gray-500">
            Enter your credentials to continue
          </p>

          <form onSubmit={handleSubmit(formSubmit)} className="mt-10">
            <div>
              <div className="relative">
                <FiMail className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" />

                <input
                  type="email"
                  placeholder="Email address"
                  className="h-16 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-14 pr-4 text-white outline-none focus:border-[#D7FF00]"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                      message: "Invalid Email",
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

            <div className="mt-6">
              <div className="relative">
                <FiLock className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="h-16 w-full rounded-2xl border border-white/10 bg-[#1d1d1d] pl-14 pr-14 text-white outline-none focus:border-[#D7FF00]"
                  {...register("password", {
                    required: "Password is required",
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

            <button
              type="submit"
              className="mt-8 flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-[#D7FF00] text-xl font-semibold text-black transition hover:bg-[#c2e600]"
            >
              Sign in
              <FiArrowRight />
            </button>
          </form>

          <p className="mt-8 text-center text-gray-500">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="cursor-pointer font-semibold text-[#D7FF00] hover:underline"
            >
              Create one
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
