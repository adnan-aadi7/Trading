import React, { useState } from "react";
import { Filter, Download } from "lucide-react";
import HistoryTable from "./HistoryTable";

const TradeHistoryTable = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="bg-gray-800 text-white p-4 sm:p-6 rounded-lg w-full max-w-[1410px] mx-auto mt-6 sm:mt-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Trade History
        </h2>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-md transition-colors border border-gray-700 text-sm"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-md transition-colors border border-gray-700 text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      {isFilterOpen && (
        <div className="bg-gray-800 p-3 sm:p-4 rounded-lg mb-6 border border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                Trading Pair
              </label>
              <select className="w-full bg-gray-800 border border-gray-600 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-sm text-white">
                <option>All Pairs</option>
                <option>BTC/USDT</option>
                <option>ETH/USDT</option>
                <option>SOL/USDT</option>
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                PNL Range
              </label>
              <select className="w-full bg-gray-800 border border-gray-600 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-sm text-white">
                <option>All Results</option>
                <option>Profitable Only</option>
                <option>Losses Only</option>
              </select>
            </div>
            <div>
              <label className="block text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                Date Range
              </label>
              <input
                type="date"
                className="w-full bg-gray-800 border border-gray-600 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-sm text-white"
              />
            </div>
            <div className="flex items-end">
              <button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 px-3 sm:px-4 py-1.5 sm:py-2 rounded text-sm text-white transition-colors">
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render the HistoryTable component */}
      <HistoryTable />
    </div>
  );
};

export default TradeHistoryTable;
