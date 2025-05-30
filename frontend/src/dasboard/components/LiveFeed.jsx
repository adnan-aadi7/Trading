import React from "react";
import { Filter } from "lucide-react";

const LiveFeed = () => {
  const trades = [
    {
      id: 1,
      type: "LONG",
      trader: "CryptoWhale24",
      pair: "BTC/USDT",
      entry: "$64,230",
      leverage: "25x",
      positionSize: "$125,000",
      timestamp: "2 min ago",
      status: "open",
    },
    {
      id: 2,
      type: "SHORT",
      trader: "BitTrader",
      pair: "ETH/USDT",
      entry: "$3,470",
      leverage: "10x",
      positionSize: "$75,000",
      timestamp: "5 min ago",
      status: "open",
    },
    {
      id: 3,
      type: "CLOSED",
      trader: "MoonShot",
      pair: "SOL/USDT",
      profit: "+$32,450 (+18.2%)",
      duration: "3h 24m",
      timestamp: "8 min ago",
      status: "closed",
    },
  ];

  const getTypeStyles = (type) => {
    switch (type) {
      case "LONG":
        return "bg-green-600 text-white";
      case "SHORT":
        return "bg-red-600 text-white";
      case "CLOSED":
        return "bg-yellow-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="w-full ">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h1 className="text-white text-xl font-semibold">Live Feed</h1>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
          <button className="flex items-center gap-2 bg-gray-800 hover:bg-slate-600 text-white px-3 py-2 rounded-lg transition-colors">
            <Filter size={16} />
            <span>Filter</span>
          </button>
        </div>

        {/* Trade Cards */}
        <div className="space-y-4 w-full">
          {trades.map((trade) => (
            <div
              key={trade.id}
              className="bg-gradient-to-br bg-gray-800 rounded-xl p-4 border border-slate-700"
            >
              {/* Trade Type Badge and Timestamp */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-semibold ${getTypeStyles(
                    trade.type
                  )}`}
                >
                  {trade.type}
                </span>
                <span className="text-slate-400 text-sm">
                  {trade.timestamp}
                </span>
              </div>

              {/* Trade Details */}
              {trade.status === "open" ? (
                <>
                  <h3 className="text-white text-lg font-medium mb-2">
                    {trade.trader} opened {trade.pair}
                  </h3>
                  <p className="text-slate-300 text-sm mb-3">
                    Entry: {trade.entry} | Leverage: {trade.leverage}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">
                      Position Size: {trade.positionSize}
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                      Copy Trade
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="text-white text-lg font-medium mb-2">
                    {trade.trader} closed {trade.pair}
                  </h3>
                  <p className="text-green-400 text-lg font-semibold mb-3">
                    Profit: {trade.profit}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400 text-sm">
                      Duration: {trade.duration}
                    </span>
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveFeed;
