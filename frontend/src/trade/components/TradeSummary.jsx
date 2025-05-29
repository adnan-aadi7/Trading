import React from "react";

const TradeSummary = () => {
  return (
    <div className="bg-gradient-to-br bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 rounded-lg p-3 sm:p-4 md:p-6 w-full sm:w-80 border border-slate-700">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-white text-lg sm:text-xl font-semibold">
          Trade Summary
        </h2>
        <span className="text-gray-400 text-xs sm:text-sm">#TR78291</span>
      </div>

      {/* Trader */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-gray-400 text-xs sm:text-sm">Trader</span>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center">
            <span className="text-xs font-bold text-white">🐋</span>
          </div>
          <span className="text-white font-medium text-sm sm:text-base">
            CryptoWhale_42
          </span>
        </div>
      </div>

      {/* Trading Pair and Direction */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-gray-400 text-xs sm:text-sm">Trading Pair</span>
        <span className="text-white font-medium text-sm sm:text-base">
          BTC/USDT
        </span>
      </div>

      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-gray-400 text-xs sm:text-sm">Direction</span>
        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
          LONG
        </span>
      </div>

      {/* Leverage and Status */}
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <span className="text-gray-400 text-xs sm:text-sm">Leverage</span>
        <span className="text-yellow-400 font-bold text-sm sm:text-base">
          10x
        </span>
      </div>

      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <span className="text-gray-400 text-xs sm:text-sm">Status</span>
        <span className="text-gray-300 text-xs sm:text-sm">CLOSED</span>
      </div>

      {/* Entry and Exit Prices */}
      <div className="flex justify-between mb-4 sm:mb-6">
        <div>
          <span className="text-gray-400 text-xs sm:text-sm block mb-1">
            Entry Price
          </span>
          <span className="text-white text-base sm:text-lg font-semibold">
            $27,456.21
          </span>
        </div>
        <div className="text-right">
          <span className="text-gray-400 text-xs sm:text-sm block mb-1">
            Exit Price
          </span>
          <span className="text-white text-base sm:text-lg font-semibold">
            $29,873.45
          </span>
        </div>
      </div>

      {/* Open and Close Times */}
      <div className="flex justify-between mb-4 sm:mb-6">
        <div>
          <span className="text-gray-400 text-xs sm:text-sm block mb-1">
            Open Time
          </span>
          <div className="text-white text-xs sm:text-sm">
            <div>May 12, 2023</div>
            <div>08:42:15 UTC</div>
          </div>
        </div>
        <div className="text-right">
          <span className="text-gray-400 text-xs sm:text-sm block mb-1">
            Close Time
          </span>
          <div className="text-white text-xs sm:text-sm">
            <div>May 14, 2023</div>
            <div>14:23:56 UTC</div>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="border-t border-slate-700 pt-3 sm:pt-4">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs sm:text-sm">Result</span>
          <span className="text-green-400 text-base sm:text-lg font-bold">
            +$2,418.24 (+8.81%)
          </span>
        </div>
      </div>
    </div>
  );
};

export default TradeSummary;
