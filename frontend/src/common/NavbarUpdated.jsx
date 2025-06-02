import React, { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Clock,
  ChevronDown,
  Calendar,
} from "lucide-react";
import logo from "../assets/images/updatedlogo.svg"; // Adjust the path as necessary
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NavbarUpdated = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState("24H");
  const [isCustomDateOpen, setIsCustomDateOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const timeOptions = ["1H", "4H", "12H", "24H", "7D", "30D", "Custom"];

  const handleTimeSelect = (time) => {
    if (time === "Custom") {
      setIsCustomDateOpen(true);
    } else {
      setSelectedTime(time);
      setIsTimeDropdownOpen(false);
    }
  };

  const handleCustomDateSelect = () => {
    // Format the date range for display
    const formatDate = (date) => {
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    };
    setSelectedTime(`${formatDate(startDate)} - ${formatDate(endDate)}`);
    setIsCustomDateOpen(false);
    setIsTimeDropdownOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-800 px-4 sm:px-14 md:px-6 lg:px-13 py-5 ">
      <div className="flex items-center justify-between gap-2">
        {/* Logo */}
        <div className="flex items-center gap-1 sm:gap-2">
          <img
            src={logo}
            alt="CopyTradeX Logo"
            className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12"
          />
        </div>

        {/* Search Bar - Always visible */}
        <div className="flex-1 mx-2 sm:mx-4 md:mx-8 max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px]  bg-gray-800">
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
              className="w-full bg-gray-900 border border-slate-600 rounded-lg pl-8 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Config Button */}
          <button className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-900 hover:bg-slate-700 border border-slate-600 rounded-lg text-white transition-colors">
            <SlidersHorizontal size={16} />
            <span className="text-xs sm:text-sm font-medium">Config</span>
          </button>

          {/* Time Period Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
              className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-900 hover:bg-slate-700 border border-slate-600 rounded-lg text-white transition-colors"
            >
              <Clock size={16} />
              <span className="text-xs sm:text-sm font-medium">
                {selectedTime}
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform ${
                  isTimeDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isTimeDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[88px] bg-gray-900 border border-slate-600 rounded-lg shadow-lg z-50">
                {timeOptions.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`w-full px-3 py-2 text-left text-xs sm:text-sm hover:bg-slate-700 transition-colors ${
                      selectedTime === time ? "text-blue-400" : "text-white"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            )}

            {isCustomDateOpen && (
              <div className="absolute right-0 mt-2 p-4 bg-gray-900 border border-slate-600 rounded-lg shadow-lg z-50 w-[300px]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-white">
                      Select Date Range
                    </h3>
                    <button
                      onClick={() => setIsCustomDateOpen(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      ×
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">
                        From
                      </label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        dateFormat="MMM d, yyyy"
                        calendarClassName="bg-gray-900 border border-slate-600"
                        popperClassName="react-datepicker-popper"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-400 mb-1">
                        To
                      </label>
                      <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        dateFormat="MMM d, yyyy"
                        calendarClassName="bg-gray-900 border border-slate-600"
                        popperClassName="react-datepicker-popper"
                        minDate={startDate}
                      />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsCustomDateOpen(false)}
                      className="flex-1 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded text-sm transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleCustomDateSelect}
                      className="flex-1 px-3 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarUpdated;
