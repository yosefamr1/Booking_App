import React from "react";
import { PiUserCircleBold } from "react-icons/pi";


export default function ProfileCard({ username }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 w-72 h-80">
      <h2 className="text-lg font-semibold mb-4">Profile</h2>

      <div className="flex flex-col items-center">
        <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-xl font-semibold text-blue-700 mb-3">
                              <PiUserCircleBold className="text-6xl"/>

        </div>

        <h3 className="text-lg font-bold">{username}</h3>
        <p className="text-gray-500 text-sm">Personal Account</p>

        <button className="mt-4 bg-gray-100 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 transition">
          Edit Profile
        </button>
      </div>
    </div>
  );
}
