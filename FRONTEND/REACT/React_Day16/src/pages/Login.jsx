import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Auth } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {

    let navigate = useNavigate()

    const {registeredUsers, loggedInUser, setLoggedInUser} = useContext(Auth);

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset
    } = useForm();
  
    const formSubmit = (data) => {
      console.log("Register Data:", data);
  
     

      let user  = registeredUsers.find((val)=>{
        return val.email === data.email && val.password === data.password
      })

      if(!user){
        toast.error('Invalid Credentials')
        reset()
        return
      }

      setLoggedInUser(user);
      toast.success('Login Successful')
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/main");

      reset()
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
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
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Bottom Signup Section */}
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-gray-500 text-sm">
            Don't have an account?{" "}
            <button
            onClick={()=>navigate('/register')}
              type="button"
              className="text-blue-600 font-semibold hover:text-blue-700 hover:underline"
            >
              Click here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
