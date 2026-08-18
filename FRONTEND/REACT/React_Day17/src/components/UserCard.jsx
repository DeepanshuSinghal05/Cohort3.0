import React from "react";
import { Mail, Phone, MapPin, User, AtSign } from "lucide-react";

const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Card Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 text-white">
        <div className="flex items-center gap-4">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 flex items-center justify-center text-xl font-bold">
            {user.name.firstname.charAt(0).toUpperCase()}
            {user.name.lastname.charAt(0).toUpperCase()}
          </div>

          {/* Name */}
          <div>
            <h2 className="text-xl font-bold capitalize">
              {user.name.firstname} {user.name.lastname}
            </h2>

            <p className="flex items-center gap-1 text-indigo-100 text-sm mt-1">
              <AtSign size={15} />
              {user.username}
            </p>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 space-y-5">
        {/* Email */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 shrink-0 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <Mail size={20} />
          </div>

          <div className="min-w-0">
            <p className="text-xs text-gray-400">Email</p>

            <p className="text-sm font-medium text-gray-700 truncate">
              {user.email}
            </p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 shrink-0 rounded-xl bg-green-100 text-green-600 flex items-center justify-center">
            <Phone size={20} />
          </div>

          <div>
            <p className="text-xs text-gray-400">Phone</p>

            <p className="text-sm font-medium text-gray-700">{user.phone}</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <div className="w-11 h-11 shrink-0 rounded-xl bg-red-100 text-red-600 flex items-center justify-center">
            <MapPin size={20} />
          </div>

          <div>
            <p className="text-xs text-gray-400">Address</p>

            <p className="text-sm font-medium text-gray-700 capitalize">
              {user.address.number}, {user.address.street}
            </p>

            <p className="text-sm text-gray-500 capitalize">
              {user.address.city}
            </p>

            <p className="text-xs text-gray-400 mt-1">{user.address.zipcode}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-500">
            <User size={16} />
            <span className="text-sm">User ID</span>
          </div>

          <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm font-semibold">
            #{user.id}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
