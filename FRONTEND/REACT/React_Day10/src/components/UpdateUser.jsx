import React from "react";
import { useForm } from "react-hook-form";

const UpdateUser = ({
  users,
  setUsers,
  updateIndex,
  setIsUpdate,
}) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: users[updateIndex],
    mode: "onChange",
  });

  const formSubmit = (data) => {
    const updatedUsers = [...users];
    updatedUsers[updateIndex] = data;

    setUsers(updatedUsers);
    reset();
    setIsUpdate(false);
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800">
          Update User
        </h1>
        <p className="text-gray-500 mt-2">
          Modify the user details and save your changes.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-5"
      >

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Full Name
          </label>

          <input
            {...register("name", {
              required: "Name is Required",
            })}
            className="w-full p-3 rounded-xl border outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            type="text"
            placeholder="Enter your full name"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email Address
          </label>

          <input
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="w-full p-3 rounded-xl border  outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            type="email"
            placeholder="example@gmail.com"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-2">
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Mobile Number
          </label>

          <input
            {...register("mobile", {
              required: "Mobile is Required",
              minLength: {
                value: 10,
                message: "Mobile Number must be 10 digits",
              },
              maxLength: {
                value: 10,
                message: "Mobile Number must be 10 digits",
              },
            })}
            className="w-full p-3 rounded-xl border outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            type="number"
            placeholder="9876543210"
          />

          {errors.mobile && (
            <p className="text-red-500 text-sm mt-2">
              {errors.mobile.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Image URL
          </label>

          <input
            {...register("image", {
              required: "Image is Required",
            })}
            className="w-full p-3 rounded-xl border outline-none transition-all duration-300 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
            type="url"
            placeholder="https://example.com/profile.jpg"
          />

          {errors.image && (
            <p className="text-red-500 text-sm mt-2">
              {errors.image.message}
            </p>
          )}
        </div>

        <div className="flex gap-4 pt-2">
          <button
            type="submit"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            Update User
          </button>

          <button
            type="button"
            onClick={() => setIsUpdate(false)}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 rounded-xl shadow transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;