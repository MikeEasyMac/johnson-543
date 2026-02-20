"use client";

import { FaReact } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-red-700 text-white px-6 py-4">
      
      {/* Left side (icon + title) */}
      <div className="flex items-center gap-2 text-xl font-bold">
        <FaReact />
        <span>My Website</span>
      </div>

      {/* Right side (nav) */}
      <nav className="flex gap-6">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>

    </header>
  );
}