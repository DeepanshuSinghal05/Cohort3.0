import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  console.log("Form Rendered");

  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="w-80  h-screen ">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className="flex flex-col gap-4 p-6 rounded bg-white"
      >
        <input
          {...register("productName")}
          className="p-2 border borer-gray-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          {...register("Price")}
          className="p-2 border borer-gray-400 rounded"
          type="text"
          placeholder="Price"
        />
        <span>Select a Category : </span>
        <select
          {...register("category")}
          className="p-2 border borer-gray-400 rounded"
        >
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          {...register("image")}
          className="p-2 border borer-gray-400 rounded"
          type="text"
          placeholder="Image"
        />
        <button className="p-2 bg-blue-600 text-white rounded">CREATE</button>
      </form>
    </div>
  );
};

export default Form;
