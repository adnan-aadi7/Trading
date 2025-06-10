import React, { useState } from "react";
import { X } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useLocation } from "react-router-dom";

const Config = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the source page from the location state
  const sourcePage = location.state?.from || "/traders";

  // State for config inputs
  const [quantityType, setQuantityType] = useState("$");
  const [marginMode, setMarginMode] = useState("CROSSED");
  const [maxLeverage, setMaxLeverage] = useState("10");
  const [maxIncreasePercentage, setMaxIncreasePercentage] = useState("100");
  const [stopLoss, setStopLoss] = useState("5");
  const [takeProfit, setTakeProfit] = useState("10");
  const [increaseType, setIncreaseType] = useState("%");
  const [decreaseType, setDecreaseType] = useState("%");
  const [increaseSource, setIncreaseSource] = useState("POSITION");
  const [decreaseSource, setDecreaseSource] = useState("POSITION");
  const [removeCrypto, setRemoveCrypto] = useState("");

  // State for new quantity inputs
  const [increaseQuantity, setIncreaseQuantity] = useState("0");
  const [decreaseQuantity, setDecreaseQuantity] = useState("0");
  const [openQuantity, setOpenQuantity] = useState("0");

  // State for Time Period
  const [selectedPeriod, setSelectedPeriod] = useState("24H");
  const [isCustomDateOpen, setIsCustomDateOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const timeOptions = ["1H", "4H", "12H", "24H", "7D", "30D", "Custom"];

  // Add custom styles for select elements
  const selectStyles = {
    paddingRight: "1.5rem",
    appearance: "none",
    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 0.3rem center",
    backgroundSize: "1em 1em",
  };

  const handlePeriodSelect = (period) => {
    if (period === "Custom") {
      setSelectedPeriod("Custom");
      setIsCustomDateOpen(true);
    } else {
      setSelectedPeriod(period);
      setIsCustomDateOpen(false);
      setStartDate(new Date());
      setEndDate(new Date());
    }
  };

  const handleApplyClick = () => {
    const config = {
      quantityType,
      marginMode,
      maxLeverage,
      maxIncreasePercentage,
      stopLoss,
      takeProfit,
      increaseType,
      decreaseType,
      increaseSource,
      decreaseSource,
      removeCrypto,
      timePeriod: selectedPeriod,
      customDateRange:
        selectedPeriod === "Custom" ? { startDate, endDate } : undefined,
      increaseQuantity,
      decreaseQuantity,
      openQuantity,
    };
    console.log("Config Applied:", config);
    navigate(sourcePage);
  };

  return (
    <div className="py-6 px-4 flex justify-center">
      <div className="bg-gray-800 px-6 py-3 rounded-lg shadow-xl w-full max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">
            Trading Configuration
          </h2>
          <button
            onClick={() => navigate(sourcePage)}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4">
          {/* Quantity Type */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Quantity Type
            </label>
            <select
              value={quantityType}
              onChange={(e) => setQuantityType(e.target.value)}
              style={selectStyles}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="$">$ (USD)</option>
              <option value="%">% (Percentage)</option>
            </select>
          </div>

          {/* Margin Mode */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Margin Mode
            </label>
            <select
              value={marginMode}
              onChange={(e) => setMarginMode(e.target.value)}
              style={selectStyles}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="CROSSED">Crossed</option>
              <option value="ISOLATED">Isolated</option>
            </select>
          </div>

          {/* Max Leverage */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Max Leverage
            </label>
            <input
              type="number"
              value={maxLeverage}
              onChange={(e) => setMaxLeverage(e.target.value)}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
              placeholder="10"
            />
          </div>

          {/* Max Increase Percentage */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Max Increase Percentage
            </label>
            <input
              type="number"
              value={maxIncreasePercentage}
              onChange={(e) => setMaxIncreasePercentage(e.target.value)}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
              placeholder="100"
            />
          </div>

          {/* Stop Loss */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Stop Loss (%)
            </label>
            <input
              type="number"
              value={stopLoss}
              onChange={(e) => setStopLoss(e.target.value)}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
              placeholder="5"
            />
          </div>

          {/* Take Profit */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Take Profit (%)
            </label>
            <input
              type="number"
              value={takeProfit}
              onChange={(e) => setTakeProfit(e.target.value)}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
              placeholder="10"
            />
          </div>

          {/* Increase Type */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Increase Type
            </label>
            <select
              value={increaseType}
              onChange={(e) => setIncreaseType(e.target.value)}
              style={selectStyles}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="%">% (Percentage)</option>
              <option value="$">$ (USD)</option>
            </select>
          </div>

          {/* Decrease Type */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Decrease Type
            </label>
            <select
              value={decreaseType}
              onChange={(e) => setDecreaseType(e.target.value)}
              style={selectStyles}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="%">% (Percentage)</option>
              <option value="$">$ (USD)</option>
            </select>
          </div>

          {/* Increase Source */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Increase Source
            </label>
            <select
              value={increaseSource}
              onChange={(e) => setIncreaseSource(e.target.value)}
              style={selectStyles}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="POSITION">Position</option>
              <option value="WALLET">Wallet</option>
            </select>
          </div>

          {/* Decrease Source */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Decrease Source
            </label>
            <select
              value={decreaseSource}
              onChange={(e) => setDecreaseSource(e.target.value)}
              style={selectStyles}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
            >
              <option value="POSITION">Position</option>
              <option value="WALLET">Wallet</option>
            </select>
          </div>

          {/* Increase Quantity */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Increase Quantity
            </label>
            <input
              type="number"
              value={increaseQuantity}
              onChange={(e) => setIncreaseQuantity(e.target.value)}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
              placeholder="0"
            />
          </div>

          {/* Decrease Quantity */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Decrease Quantity
            </label>
            <input
              type="number"
              value={decreaseQuantity}
              onChange={(e) => setDecreaseQuantity(e.target.value)}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
              placeholder="0"
            />
          </div>

          {/* Open Quantity */}
          <div>
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Open Quantity
            </label>
            <input
              type="number"
              value={openQuantity}
              onChange={(e) => setOpenQuantity(e.target.value)}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
              placeholder="0"
            />
          </div>

          {/* Remove Crypto */}
          <div className="md:col-span-2">
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Remove Crypto (tags/keywords)
            </label>
            <input
              type="text"
              value={removeCrypto}
              onChange={(e) => setRemoveCrypto(e.target.value)}
              className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 pr-8 focus:ring-2 focus:ring-blue-500"
              placeholder="Enter tags/keywords to exclude (comma-separated)"
            />
          </div>

          {/* Time Period */}
          <div className="md:col-span-2 mb-3">
            <label className="block text-gray-400 text-sm font-medium mb-2">
              Time Period
            </label>
            <div className="flex flex-wrap gap-2 mb-4">
              {timeOptions.map((period) => (
                <button
                  key={period}
                  onClick={() => handlePeriodSelect(period)}
                  className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                    selectedPeriod === period
                      ? "bg-blue-600 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
            {selectedPeriod === "Custom" && isCustomDateOpen && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-400 mb-1">
                    From
                  </label>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-400 mb-1">To</label>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    dateFormat="yyyy-MM-dd"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 mt-3">
          <button
            onClick={() => navigate(sourcePage)}
            className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => navigate(sourcePage)}
            className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
          >
            Return
          </button>
          <button
            onClick={handleApplyClick}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Config;
