import React from "react";

export default function PositionDynamics() {
  return (
    <div className="bg-slate-800 rounded-lg p-3 sm:p-4 md:p-6 w-full sm:w-80">
      {/* Header */}
      <h2 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6">
        Position Dynamics
      </h2>

      {/* Balance Information */}
      <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs sm:text-sm">
            Starting Balance
          </span>
          <span className="text-white text-base sm:text-lg font-semibold">
            $12,500.00
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs sm:text-sm">
            Ending Balance
          </span>
          <span className="text-white text-base sm:text-lg font-semibold">
            $14,918.24
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs sm:text-sm">Config PNL</span>
          <span className="text-green-400 text-base sm:text-lg font-semibold">
            +19.35%
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs sm:text-sm">Max Drawdown</span>
          <span className="text-red-400 text-base sm:text-lg font-semibold">
            -4.23%
          </span>
        </div>
      </div>

      {/* Position Increases Section */}
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="text-gray-400 text-xs sm:text-sm">
            Position Increases
          </span>
          <span className="text-white text-xl sm:text-2xl font-bold">2</span>
        </div>

        {/* Progress bar for position increases */}
        <div className="w-full bg-slate-700 rounded-full h-1.5 sm:h-2 mb-1 sm:mb-2">
          <div
            className="bg-blue-500 h-1.5 sm:h-2 rounded-full"
            style={{ width: "40%" }}
          ></div>
        </div>

        <p className="text-blue-400 text-xs">+20% from initial position</p>
      </div>

      {/* Partial Closes Section */}
      <div>
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span className="text-gray-400 text-xs sm:text-sm">
            Partial Closes
          </span>
          <span className="text-white text-xl sm:text-2xl font-bold">1</span>
        </div>

        {/* Progress bar for partial closes */}
        <div className="w-full bg-slate-700 rounded-full h-1.5 sm:h-2 mb-1 sm:mb-2">
          <div
            className="bg-yellow-500 h-1.5 sm:h-2 rounded-full"
            style={{ width: "25%" }}
          ></div>
        </div>

        <p className="text-yellow-400 text-xs">25% of position closed early</p>
      </div>
    </div>
  );
}
