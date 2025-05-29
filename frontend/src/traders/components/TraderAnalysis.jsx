import React, { useState } from "react";
import { Settings } from "lucide-react";

function TraderAnalysis() {
  const [startingBalance, setStartingBalance] = useState("10,000");
  const [walletPercentage, setWalletPercentage] = useState("25");
  const [selectedPeriod, setSelectedPeriod] = useState("1M");

  const timePeriods = ["1M", "3M", "6M", "1Y", "All"];

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-4 sm:p-6 rounded-lg w-full px-4 sm:px-14">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6 sm:mb-8">
        <h1 className="text-white text-xl sm:text-2xl font-semibold">
          Trader Analysis Configuration
        </h1>
        <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
          <Settings size={18} className="sm:w-5 sm:h-5" />
          <span className="text-sm font-medium">Advanced Settings</span>
        </button>
      </div>

      {/* Configuration Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Starting Balance */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-4 sm:p-6 rounded-lg">
          <label className="block text-gray-400 text-sm font-medium mb-3 sm:mb-4">
            Starting Balance
          </label>
          <div className="relative">
            <input
              type="number"
              value={startingBalance}
              onChange={(e) => setStartingBalance(e.target.value)}
              className="w-full bg-transparent text-white text-xl sm:text-2xl font-semibold outline-none border-none pr-12"
              placeholder="10,000"
            />
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg font-medium">
              USD
            </span>
          </div>
        </div>

        {/* Wallet Percentage */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-4 sm:p-6 rounded-lg">
          <label className="block text-gray-400 text-sm font-medium mb-3 sm:mb-4">
            % of Wallet Used
          </label>
          <div className="relative">
            <input
              type="number"
              min="0"
              value={walletPercentage}
              onChange={(e) => setWalletPercentage(e.target.value)}
              className="w-full bg-transparent text-white text-xl sm:text-2xl font-semibold outline-none border-none pr-6"
              placeholder="25"
            />
            <span className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 text-base sm:text-lg font-medium">
              %
            </span>
          </div>
        </div>

        {/* Time Period */}
        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 p-4 sm:p-6 rounded-lg md:col-span-2 lg:col-span-1">
          <label className="block text-gray-400 text-sm font-medium mb-3 sm:mb-4">
            Time Period
          </label>
          <div className="flex flex-wrap gap-2">
            {timePeriods.map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors ${
                  selectedPeriod === period
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default TraderAnalysis;
