import React from "react";

const Usercard = ({
  user,
  index,
  setIsUpdate,
  setUpdateIndex,
  setUsers,
}) => {
  const handleDelete = () => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          src={user.image}
          alt={user.name}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 truncate">
          {user.name}
        </h2>

        <div className="mt-4 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">Email:</span>
            <p className="text-gray-700 text-sm break-all">
              {user.email}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-gray-500 font-medium">Mobile:</span>
            <p className="text-gray-700 text-sm">
              {user.mobile}
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={() => {
              setUpdateIndex(index);
              setIsUpdate(true);
            }}
            className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Update
          </button>

          <button
            onClick={handleDelete}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Usercard;