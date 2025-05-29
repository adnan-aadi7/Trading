import React, { useState } from "react";
import { Filter, Download, ChevronLeft, ChevronRight } from "lucide-react";

const TradeHistoryTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const trades = [
    {
      id: 1,
      date: "May 17, 2023 08:24",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "+4.32%",
      configPnl: "+$108.00",
      absPnl: "+$432.00",
      duration: "6.2h",
      dd: "-1.2%",
      du: "+5.1%",
      positionInc: "1 (+25%)",
      partialClose: "2 (50%)",
    },
    {
      id: 2,
      date: "May 16, 2023 19:12",
      pair: "ETH/USDT",
      pairIcon: "♦",
      pairColor: "text-purple-400",
      pnlPercent: "+8.76%",
      configPnl: "+$219.00",
      absPnl: "+$876.00",
      duration: "12.8h",
      dd: "-2.4%",
      du: "+9.8%",
      positionInc: "2 (+75%)",
      partialClose: "3 (65%)",
    },
    {
      id: 3,
      date: "May 15, 2023 14:05",
      pair: "SOL/USDT",
      pairIcon: "◈",
      pairColor: "text-blue-400",
      pnlPercent: "-2.14%",
      configPnl: "-$53.50",
      absPnl: "-$214.00",
      duration: "4.5h",
      dd: "-3.8%",
      du: "+1.2%",
      positionInc: "0 (0%)",
      partialClose: "1 (30%)",
    },
    {
      id: 4,
      date: "May 14, 2023 22:37",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "+3.21%",
      configPnl: "+$80.25",
      absPnl: "+$321.00",
      duration: "9.1h",
      dd: "-1.5%",
      du: "+4.2%",
      positionInc: "1 (+30%)",
      partialClose: "2 (45%)",
    },
    {
      id: 5,
      date: "May 13, 2023 10:18",
      pair: "LINK/USDT",
      pairIcon: "🔗",
      pairColor: "text-blue-500",
      pnlPercent: "+12.87%",
      configPnl: "+$321.75",
      absPnl: "+$1,287.00",
      duration: "28.3h",
      dd: "-4.2%",
      du: "+14.1%",
      positionInc: "3 (+120%)",
      partialClose: "4 (75%)",
    },
  ];

  const totalTrades = 1247;
  const tradesPerPage = 5;
  const totalPages = Math.ceil(totalTrades / tradesPerPage);

  const getPnlColor = (value) => {
    if (value.startsWith("+")) return "text-green-400";
    if (value.startsWith("-")) return "text-red-400";
    return "text-gray-300";
  };

  const getDDColor = (value) => {
    return value.startsWith("-") ? "text-red-400" : "text-green-400";
  };

  const getDUColor = (value) => {
    return value.startsWith("+") ? "text-green-400" : "text-red-400";
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPaginationButton = (page, isActive = false) => (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      className={`px-3 py-1 rounded ${
        isActive
          ? "bg-blue-600 text-white"
          : "bg-gray-700 text-gray-300 hover:bg-gray-600"
      } transition-colors`}
    >
      {page}
    </button>
  );

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white p-4 sm:p-6 rounded-lg w-full max-w-[1400px] mx-auto mt-6 sm:mt-10 overflow-x-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold text-white">
          Trade History
        </h2>
        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-md transition-colors border border-gray-700 text-sm"
          >
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 hover:bg-gray-700 px-3 sm:px-4 py-2 rounded-md transition-colors border border-gray-700 text-sm">
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
              <select className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 border border-gray-600 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-sm text-white">
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
              <select className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 border border-gray-600 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-sm text-white">
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
                className="w-full bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 border border-gray-600 rounded px-2 sm:px-3 py-1.5 sm:py-2 text-sm text-white"
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

      {/* Table Container */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="min-w-[800px] px-4 sm:px-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  Date
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  Trading Pair
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  PNL %
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  Config PNL
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  Abs PNL (USD)
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  Duration
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  DD %
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  DU %
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  Position Inc.
                </th>
                <th className="text-left py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm text-gray-400 font-medium whitespace-nowrap">
                  Partial Close
                </th>
              </tr>
            </thead>
            <tbody>
              {trades.map((trade) => (
                <tr
                  key={trade.id}
                  className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
                >
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                    {trade.date}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 whitespace-nowrap">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <span
                        className={`text-base sm:text-lg ${trade.pairColor}`}
                      >
                        {trade.pairIcon}
                      </span>
                      <span className="text-sm sm:text-base text-white font-medium">
                        {trade.pair}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold whitespace-nowrap ${getPnlColor(
                      trade.pnlPercent
                    )}`}
                  >
                    {trade.pnlPercent}
                  </td>
                  <td
                    className={`py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium whitespace-nowrap ${getPnlColor(
                      trade.configPnl
                    )}`}
                  >
                    {trade.configPnl}
                  </td>
                  <td
                    className={`py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-semibold whitespace-nowrap ${getPnlColor(
                      trade.absPnl
                    )}`}
                  >
                    {trade.absPnl}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                    {trade.duration}
                  </td>
                  <td
                    className={`py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium whitespace-nowrap ${getDDColor(
                      trade.dd
                    )}`}
                  >
                    {trade.dd}
                  </td>
                  <td
                    className={`py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm font-medium whitespace-nowrap ${getDUColor(
                      trade.du
                    )}`}
                  >
                    {trade.du}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                    {trade.positionInc}
                  </td>
                  <td className="py-3 sm:py-4 px-2 sm:px-4 text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                    {trade.partialClose}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer with pagination */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mt-4 sm:mt-6">
        <div className="text-xs sm:text-sm text-gray-400">
          Showing {tradesPerPage} of {totalTrades.toLocaleString()} trades
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-1 px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm"
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            Previous
          </button>

          <div className="flex gap-1">
            {renderPaginationButton(1, currentPage === 1)}
            {renderPaginationButton(2, currentPage === 2)}
            {renderPaginationButton(3, currentPage === 3)}

            {currentPage > 4 && (
              <>
                <span className="px-1 sm:px-2 py-1 text-gray-400 text-xs sm:text-sm">
                  ...
                </span>
                {renderPaginationButton(currentPage)}
              </>
            )}

            <span className="px-1 sm:px-2 py-1 text-gray-400 text-xs sm:text-sm">
              ...
            </span>
            {renderPaginationButton(250, currentPage === 250)}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center gap-1 px-2 sm:px-3 py-1 bg-gray-700 text-gray-300 rounded hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-xs sm:text-sm"
          >
            Next
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TradeHistoryTable;
