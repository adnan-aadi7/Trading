import React, { useState } from "react";
import {
  Search,
  Plus,
  Bell,
  Settings,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Dashboard", path: "/" },
    { name: "Traders", path: "/traders" },
    { name: "Trades", path: "/trade" },
    { name: "Analytics", path: "/analytics" },
    { name: "Leaderboard", path: "/leaderboard" },
  ];

  return (
    <nav className=" lg:px-12 py-3">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <div className="bg-blue-600 w-8 h-8 rounded flex items-center justify-center">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-white"></div>
          </div>

          {/* Navigation Links (desktop only) */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`pb-1 ${
                  location.pathname === link.path
                    ? "text-white border-b-2 border-white"
                    : "text-gray-300 hover:text-white"
                } transition-colors`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center text-gray-300 hover:text-white transition-colors cursor-pointer">
              <span>More</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search (visible on all screens) */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by Trade ID or Trader name"
              className="bg-slate-700 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg w-[200px] sm:w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Hamburger menu (mobile) */}
          <button
            className="md:hidden text-gray-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop only items */}
          <div className="hidden md:flex items-center space-x-4">
            {/* New Alert Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span>New Alert</span>
            </button>

            {/* Icons */}
            <button className="text-gray-300 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white transition-colors">
              <Settings className="w-5 h-5" />
            </button>

            {/* Profile */}
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E"
                alt="Profile"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block px-2 py-2 rounded ${
                location.pathname === link.path
                  ? "text-white bg-slate-700"
                  : "text-gray-300 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* New Alert Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 mt-2 transition-colors">
            <Plus className="w-4 h-4" />
            <span>New Alert</span>
          </button>

          {/* Icons */}
          <div className="flex justify-between mt-4 px-2">
            <button className="text-gray-300 hover:text-white">
              <Bell className="w-5 h-5" />
            </button>
            <button className="text-gray-300 hover:text-white">
              <Settings className="w-5 h-5" />
            </button>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-400 to-purple-600 flex items-center justify-center">
              <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E"
                alt="Profile"
                className="w-5 h-5"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
