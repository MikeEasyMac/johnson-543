"use client";

import { FaUser } from "react-icons/fa";

export default function Aside() {
  return (
    <aside className="w-64 bg-white text-black p-5 border-r-2 border-gray-800 font-semibold">
      
      <div className="flex items-center gap-2 mb-4">
        <FaUser />
        <span>Menu</span>
      </div>

      <ul className="space-y-2">
        <li className="p-2 hover:bg-gray-200 rounded">Dashboard</li>
        <li className="p-2 hover:bg-gray-200 rounded">Settings</li>
        <li className="p-2 hover:bg-gray-200 rounded">Profile</li>
      </ul>

    </aside>
  );
}