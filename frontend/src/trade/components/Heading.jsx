import React from "react";
import { User, ChevronLeft, ChevronRight } from "lucide-react";

const Heading = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
      {/* Left side - Title and WIN badge */}
      <div className="flex items-center gap-2 sm:gap-3">
        <h1 className="text-white text-lg sm:text-xl md:text-2xl font-semibold">
          Trade Details
        </h1>
        <span className="bg-green-500 text-white text-xs font-bold px-2 sm:px-3 py-1 rounded-full">
          WIN
        </span>
      </div>

      {/* Right side - View Trader Profile and Navigation buttons */}
      <div className="flex items-center gap-2 w-full sm:w-auto">
        {/* View Trader Profile Button */}
        <button className="bg-slate-700 hover:bg-slate-600 text-white px-2 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium flex-1 sm:flex-none">
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">View Trader Profile</span>
          <span className="sm:hidden">Profile</span>
        </button>

        {/* Navigation Buttons - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Previous Trade Button */}
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Trade</span>
          </button>

          {/* Next Trade Button */}
          <button className="bg-slate-700 hover:bg-slate-600 text-white px-3 sm:px-4 py-2 rounded-lg flex items-center gap-2 transition-colors text-sm font-medium">
            <span>Next Trade</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Navigation - Only arrows */}
        <div className="flex sm:hidden items-center gap-2">
          <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="bg-slate-700 hover:bg-slate-600 text-white p-2 rounded-lg transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heading;
