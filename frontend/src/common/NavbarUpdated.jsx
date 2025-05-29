import React, { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import logo from "../assets/images/logo.svg"; // Adjust the path as necessary

const NavbarUpdated = () => {
  const [searchValue, setSearchValue] = useState("");
  const [avatarSrc, setAvatarSrc] = useState(
    `https://picsum.photos/200/200?random=${Math.floor(Math.random() * 1000)}`
  );

  return (
    <nav className="sticky top-0 z-50  bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 border-b border-slate-700 px-4 sm:px-14 md:px-6 lg:px-12 ">
      <div className="flex items-center justify-between gap-2">
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2">
          <img
            src={logo}
            alt="CopyTradeX Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16"
          />
          <span className="hidden sm:block text-base sm:text-lg font-semibold text-white">
            Copy Cat
          </span>
        </div>

        {/* Search Bar - Always visible */}
        <div className="flex-1 mx-2 sm:mx-4 md:mx-8 max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]  from-gray-900 via-gray-800 to-indigo-900">
          <div className="relative w-full">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={16}
            />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search for traders..."
              className="w-full bg-slate-800 border border-slate-600 rounded-lg pl-8 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Config Button */}
          <button className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg text-white transition-colors">
            <SlidersHorizontal size={16} />
            <span className="text-xs sm:text-sm font-medium">Config</span>
          </button>

          {/* Profile Avatar */}
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden border-2 border-slate-600 bg-slate-700">
            <img
              src={avatarSrc}
              alt="Profile"
              className="w-full h-full object-cover"
              onError={() =>
                setAvatarSrc(
                  "https://via.placeholder.com/200x200/64748b/ffffff?text=U"
                )
              }
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-2 text-sm sm:text-sm">
        <span className="text-slate-400">Last updated:</span>
        <span className="text-slate-300 whitespace-nowrap">
          2023-05-17 23:50:29 UTC
        </span>
        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
      </div>
    </nav>
  );
};

export default NavbarUpdated;
