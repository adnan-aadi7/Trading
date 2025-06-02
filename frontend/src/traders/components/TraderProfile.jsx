import React from "react";
import { Star, Copy, User, Pencil } from "lucide-react";

function TraderProfile() {
  // Placeholder for edit functionality (optional)
  const handleEditClick = () => {
    console.log("Edit icon clicked");
    // Implement edit functionality here (e.g., open a modal to edit profile name)
  };

  return (
    <div className=" p-4 sm:p-6 w-full px-4 sm:px-14">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
          </div>
          <div>
            <h1 className="text-white text-xl sm:text-xl lg:text-2xl font-bold flex items-center gap-3">
              Trader Profile: CryptoWhale7843
              <Pencil
                size={20}
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
                onClick={handleEditClick}
              />
            </h1>
            <p className="text-gray-400 text-base sm:text-lg">
              UID: 0x7a3b...f921 · Active since May 12, 2022
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm sm:text-base">
            <Star size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Add to Favorites</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm sm:text-base">
            <Copy size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Copy Trader</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 ">
        {/* Virtual Wallet */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Virtual Wallet
          </h3>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-1">
            $34,782.56
          </div>
          <div className="text-green-400 text-xs sm:text-sm">
            +247.83% since start
          </div>
        </div>

        {/* Risk-Reward Ratio */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Risk-Reward Ratio
          </h3>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-1">
            1:2.4
          </div>
          <div className="text-green-400 text-xs sm:text-sm">Above average</div>
        </div>

        {/* Total Trades */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Total Trades
          </h3>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-1">
            1,247
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">
            ~4.2 trades/day
          </div>
        </div>

        {/* Last Activity */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Last Activity
          </h3>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-1">
            2h ago
          </div>
          <div className="text-green-400 text-xs sm:text-sm">Active today</div>
        </div>

        {/* Total ROI */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">Total ROI</h3>
          <div className="text-green-400 text-2xl sm:text-3xl font-bold mb-1">
            +247.83%
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">All time</div>
        </div>

        {/* Absolute PNL */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Absolute PNL
          </h3>
          <div className="text-green-400 text-2xl sm:text-3xl font-bold mb-1">
            +$24,782.56
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">All time</div>
        </div>

        {/* Liquidation Count */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Liquidation Count
          </h3>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-1">
            3
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">
            0.24% of trades
          </div>
        </div>

        {/* Average PNL */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Average PNL
          </h3>
          <div className="text-green-400 text-2xl sm:text-3xl font-bold mb-1">
            +2.34%
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">Per trade</div>
        </div>

        {/* Config PNL */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">Config PNL</h3>
          <div className="text-green-400 text-2xl sm:text-3xl font-bold mb-1">
            +$6,195.64
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">
            Based on settings
          </div>
        </div>

        {/* Avg Absolute PNL */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Avg Absolute PNL
          </h3>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-1">
            $198.74
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">Per trade</div>
        </div>

        {/* Min Config PNL */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Min Config PNL
          </h3>
          <div className="text-red-400 text-2xl sm:text-3xl font-bold mb-1">
            -$1,247.32
          </div>
          <div className="text-gray-400 text-xs sm:text-sm">Worst trade</div>
        </div>

        {/* Win Rate */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">Win Rate</h3>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-1">
            68.4%
          </div>
          <div className="text-green-400 text-xs sm:text-sm">Above average</div>
        </div>

        {/* Sharpe Ratio */}
        <div className="bg-gray-800 p-4 sm:p-6 rounded-lg hover:scale-105 transition-transform duration-300">
          <h3 className="text-gray-400 text-sm font-medium mb-2">
            Sharpe Ratio
          </h3>
          <div className="text-white text-2xl sm:text-3xl font-bold mb-1">
            2.45
          </div>
          <div className="text-green-400 text-xs sm:text-sm">Excellent</div>
        </div>
      </div>
    </div>
  );
}
export default TraderProfile;
