import React, { useContext } from "react";
import {
  User,
  AtSign,
  Mail,
  Lock,
  RotateCcw,
  Music2,
  Mic2,
  Radio,
  ArrowRight,
  Headphones,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContextData } from "../context/AuthContext";


const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      role: "listener",
    },
  });

  const password = watch("password");
  const role = watch("role");

  const { registerUser } = useContext(AuthContextData);

  const submitHandler = (data) => {
    const response = registerUser(data);

    if (!response.success) {
      toast.error(response.message);
      reset()
      return;
    }

    toast.success(response.message);
    reset();
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-white flex items-center justify-center px-4 py-8 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />

      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="w-full max-w-[540px] relative z-10">
        <div className="text-center mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold">MusicHub</h1>

          <p className="text-sm text-gray-300 mt-1">
            Join the sound revolution.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(submitHandler)}
          className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-6 sm:px-8 sm:py-8 shadow-2xl"
        >
          <input type="hidden" {...register("role")} />

          {/* Role */}
          <div className="grid grid-cols-2 gap-3 mb-5">
            <button
              type="button"
              onClick={() => setValue("role", "listener")}
              className={`h-24 sm:h-28 rounded-xl border flex flex-col items-center justify-center gap-2 transition ${
                role === "listener"
                  ? "border-blue-300 bg-white/10 shadow-[0_0_20px_rgba(100,140,255,0.3)]"
                  : "border-white/20 bg-white/5"
              }`}
            >
              <Music2 size={27} />
              <span className="text-sm font-semibold">Listener</span>
            </button>

            <button
              type="button"
              onClick={() => setValue("role", "artist")}
              className={`h-24 sm:h-28 rounded-xl border flex flex-col items-center justify-center gap-2 transition ${
                role === "artist"
                  ? "border-blue-300 bg-white/10 shadow-[0_0_20px_rgba(100,140,255,0.3)]"
                  : "border-white/20 bg-white/5"
              }`}
            >
              <Mic2 size={27} />
              <span className="text-sm font-semibold">Artist</span>
            </button>
          </div>

          {/* Inputs */}
          <div className="space-y-3">
            {/* Full Name */}
            <div>
              <div className="relative">
                <User
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                />

                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullName", {
                    required: "Full name is required",
                  })}
                  className="w-full h-12 rounded-full bg-[#17181d] border border-white/10 pl-11 pr-5 outline-none text-sm placeholder:text-gray-400 focus:border-blue-400 transition"
                />
              </div>

              {errors.fullName && (
                <p className="text-red-400 text-xs ml-4 mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Username */}
            <div>
              <div className="relative">
                <AtSign
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                />

                <input
                  type="text"
                  placeholder="Username"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  className="w-full h-12 rounded-full bg-[#17181d] border border-white/10 pl-11 pr-5 outline-none text-sm placeholder:text-gray-400 focus:border-blue-400 transition"
                />
              </div>

              {errors.username && (
                <p className="text-red-400 text-xs ml-4 mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Enter a valid email",
                    },
                  })}
                  className="w-full h-12 rounded-full bg-[#17181d] border border-white/10 pl-11 pr-5 outline-none text-sm placeholder:text-gray-400 focus:border-blue-400 transition"
                />
              </div>

              {errors.email && (
                <p className="text-red-400 text-xs ml-4 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <div className="relative">
                  <Lock
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Minimum 6 characters",
                      },
                    })}
                    className="w-full h-12 rounded-full bg-[#17181d] border border-white/10 pl-11 pr-4 outline-none text-sm placeholder:text-gray-400 focus:border-blue-400 transition"
                  />
                </div>

                {errors.password && (
                  <p className="text-red-400 text-xs ml-4 mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <div className="relative">
                  <RotateCcw
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2"
                  />

                  <input
                    type="password"
                    placeholder="Confirm"
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                    className="w-full h-12 rounded-full bg-[#17181d] border border-white/10 pl-11 pr-4 outline-none text-sm placeholder:text-gray-400 focus:border-blue-400 transition"
                  />
                </div>

                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs ml-4 mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-12 rounded-full bg-gradient-to-r from-white to-[#83a7ff] text-[#3154a5] font-bold flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(100,140,255,0.35)] hover:scale-[1.01] transition mt-6"
          >
            Register
            <ArrowRight size={18} />
          </button>

          <p className="text-center text-sm text-gray-300 mt-5">
            Already have an account?{" "}
            <button
              type="button"
              className="text-white font-semibold hover:text-blue-300 transition"
            >
              Login
            </button>
          </p>
        </form>

        <div className="flex justify-center items-center gap-7 mt-7 text-white/90">
          <Music2 size={25} />
          <Headphones size={27} />
          <Radio size={27} />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
