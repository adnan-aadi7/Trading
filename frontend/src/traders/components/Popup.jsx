import React, { useState } from "react";
import { X, Calendar, Clock, ChevronDown } from "lucide-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Popup = ({ isOpen, onClose, onApplyConfig }) => {
  // State for config inputs
  const [configStartingBalance, setConfigStartingBalance] = useState("10000");
  const [configWalletPercentage, setConfigWalletPercentage] = useState("25");
  const [configIncreasePosition, setConfigIncreasePosition] = useState("10");
  const [configDecreasePosition, setConfigDecreasePosition] = useState("10");

  // State for Time Period within the popup
  const [selectedPeriod, setSelectedPeriod] = useState("24H");
  const [isCustomDateOpen, setIsCustomDateOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date()); // State for start date
  const [endDate, setEndDate] = useState(new Date()); // State for end date

  const timeOptions = ["1H", "4H", "12H", "24H", "7D", "30D", "Custom"];

  const handlePeriodSelect = (period) => {
    if (period === "Custom") {
      setSelectedPeriod("Custom");
      setIsCustomDateOpen(true);
    } else {
      setSelectedPeriod(period);
      setIsCustomDateOpen(false);
      setStartDate(new Date()); // Reset dates when not custom
      setEndDate(new Date());
    }
  };

  // Handle apply config button click
  const handleApplyClick = () => {
    const config = {
      startingBalance: configStartingBalance,
      walletPercentage: configWalletPercentage,
      increasePosition: configIncreasePosition,
      decreasePosition: configDecreasePosition,
      timePeriod: selectedPeriod, // This will be 'Custom' if selected
      customDateRange:
        selectedPeriod === "Custom" ? { startDate, endDate } : undefined, // Pass date range
    };
    onApplyConfig(config); // Pass config to parent's handler
    onClose(); // Close the modal
  };

  if (!isOpen) return null; // Don't render the modal if not open

  return (
    <>
      {/* Embedded styles to hide number input spinners and style date picker */}
      <style jsx>{`
        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        input[type="number"] {
          -moz-appearance: textfield;
        }

        /* Styles for react-datepicker calendar */
        .react-datepicker {
          background-color: #1f2937; /* bg-gray-800 */
          border: 1px solid #4b5563; /* border-slate-600 */
          color: #e5e7eb; /* text-gray-200 */
        }

        .react-datepicker__header {
          background-color: #1f2937; /* bg-gray-800 */
          border-bottom: 1px solid #4b5563; /* border-slate-600 */
        }

        .react-datepicker__current-month,
        .react-datepicker__day-name {
          color: #d1d5db; /* text-gray-300 */
        }

        .react-datepicker__day {
          color: #e5e7eb; /* text-gray-200 */
        }

        .react-datepicker__day:hover {
          background-color: #4b5563; /* hover:bg-gray-600 */
        }

        .react-datepicker__day--selected,
        .react-datepicker__day--in-selecting-range,
        .react-datepicker__day--in-range {
          background-color: #2563eb; /* bg-blue-600 */
          color: white; /* text-white */
        }

        .react-datepicker__day--keyboard-selected {
          background-color: #4b5563; /* bg-gray-600 */
          color: #e5e7eb; /* text-gray-200 */
        }

        .react-datepicker__day--outside-month {
          color: #6b7280; /* text-gray-500 */
        }

        .react-datepicker__navigation {
          color: #d1d5db; /* text-gray-300 */
        }
      `}</style>
      <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md mx-4">
          {/* Pop-up Header */}
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-white text-lg font-semibold">
              Configuration Settings
            </h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white"
            >
              <X size={20} />
            </button>
          </div>

          {/* Pop-up Content - Configuration Inputs */}
          <div className="space-y-4">
            {/* Starting Balance */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Starting Balance
              </label>
              <input
                type="number"
                value={configStartingBalance}
                onChange={(e) => setConfigStartingBalance(e.target.value)}
                className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                style={{
                  "-webkit-appearance": "none",
                  margin: 0,
                  "-moz-appearance": "textfield",
                }}
                placeholder="10000"
              />
            </div>

            {/* % of Wallet Used */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                % of Wallet Used
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={configWalletPercentage}
                onChange={(e) => setConfigWalletPercentage(e.target.value)}
                className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                style={{
                  "-webkit-appearance": "none",
                  margin: 0,
                  "-moz-appearance": "textfield",
                }}
                placeholder="25"
              />
            </div>

            {/* Increase Position % */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Increase Position %
              </label>
              <input
                type="number"
                min="0"
                value={configIncreasePosition}
                onChange={(e) => setConfigIncreasePosition(e.target.value)}
                className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                style={{
                  "-webkit-appearance": "none",
                  margin: 0,
                  "-moz-appearance": "textfield",
                }}
                placeholder="10"
              />
            </div>

            {/* Decrease Position % */}
            <div>
              <label className="block text-gray-400 text-sm font-medium mb-2">
                Decrease Position %
              </label>
              <input
                type="number"
                min="0"
                value={configDecreasePosition}
                onChange={(e) => setConfigDecreasePosition(e.target.value)}
                className="w-full bg-gray-800 text-white text-base font-semibold outline-none border border-slate-600 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500"
                style={{
                  "-webkit-appearance": "none",
                  margin: 0,
                  "-moz-appearance": "textfield",
                }}
                placeholder="10"
              />
            </div>

            {/* Time Period - including Custom Date Picker */}
            <div>
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
                <div className="mt-2 space-y-2">
                  {/* Start Date Picker */}
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
                      calendarClassName="bg-gray-800 border border-slate-600"
                      popperClassName="react-datepicker-popper"
                    />
                  </div>
                  {/* End Date Picker */}
                  <div>
                    <label className="block text-xs text-gray-400 mb-1">
                      To
                    </label>
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate} // Ensure end date is after start date
                      className="w-full bg-slate-700 border border-slate-600 rounded px-3 py-2 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      dateFormat="yyyy-MM-dd"
                      calendarClassName="bg-gray-800 border border-slate-600"
                      popperClassName="react-datepicker-popper"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Pop-up Footer - Action Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose} // Use the onClose prop for Cancel
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Cancel
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
    </>
  );
};

export default Popup;
