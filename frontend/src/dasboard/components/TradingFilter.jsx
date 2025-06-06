// import React, { useState } from "react";
// import { ChevronDown } from "lucide-react";

// const TradingFilter = () => {
//   const [filters, setFilters] = useState({
//     timeframe: "24h",
//     pair: "All Pairs",
//     leverage: "Any",
//     minPnl: "Any",
//   });

//   const [dropdownOpen, setDropdownOpen] = useState({
//     timeframe: false,
//     pair: false,
//     leverage: false,
//     minPnl: false,
//   });

//   const filterOptions = {
//     timeframe: ["1h", "4h", "12h", "24h", "7d", "30d"],
//     pair: [
//       "All Pairs",
//       "BTC/USDT",
//       "ETH/USDT",
//       "SOL/USDT",
//       "BNB/USDT",
//       "XRP/USDT",
//     ],
//     leverage: ["Any", "1x", "2x", "5x", "10x", "20x", "50x", "100x"],
//     minPnl: ["Any", ">$100", ">$500", ">$1000", ">$5000", ">$10000"],
//   };

//   const handleFilterChange = (filterType, value) => {
//     setFilters((prev) => ({
//       ...prev,
//       [filterType]: value,
//     }));
//     setDropdownOpen((prev) => ({
//       ...prev,
//       [filterType]: false,
//     }));
//   };

//   const toggleDropdown = (filterType) => {
//     setDropdownOpen((prev) => ({
//       ...Object.keys(prev).reduce((acc, key) => ({ ...acc, [key]: false }), {}),
//       [filterType]: !prev[filterType],
//     }));
//   };

//   const FilterDropdown = ({ label, filterType, value }) => (
//     <div className="relative">
//       <label className="text-slate-400 text-xs sm:text-sm mr-2">{label}:</label>
//       <button
//         onClick={() => toggleDropdown(filterType)}
//         className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-white px-2 py-1 rounded border border-slate-600 hover:border-slate-500 transition-colors flex items-center gap-1.5 min-w-[60px] sm:min-w-[70px] text-xs sm:text-sm"
//       >
//         <span className="truncate">{value}</span>
//         <ChevronDown
//           size={12}
//           className={`transition-transform flex-shrink-0 ${
//             dropdownOpen[filterType] ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {dropdownOpen[filterType] && (
//         <div className="absolute top-full left-0 mt-1 bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 border border-slate-600 rounded shadow-lg z-10 min-w-[100px] max-h-[300px] overflow-y-auto">
//           {filterOptions[filterType].map((option) => (
//             <button
//               key={option}
//               onClick={() => handleFilterChange(filterType, option)}
//               className={`w-full text-left px-2 py-1.5 hover:bg-slate-700 transition-colors text-xs sm:text-sm ${
//                 value === option ? "bg-slate-700 text-blue-400" : "text-white"
//               }`}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );

//   return (
//     <div className="bg-slate-900 border-b border-slate-700 px-8 ">
//       <div className="container mx-auto px-4 py-1">
//         <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
//           <div className="flex flex-wrap items-center gap-2 sm:gap-4">
//             <FilterDropdown
//               label="Timeframe"
//               filterType="timeframe"
//               value={filters.timeframe}
//             />
//             <FilterDropdown
//               label="Pair"
//               filterType="pair"
//               value={filters.pair}
//             />
//             <FilterDropdown
//               label="Leverage"
//               filterType="leverage"
//               value={filters.leverage}
//             />
//             <FilterDropdown
//               label="Min. PNL"
//               filterType="minPnl"
//               value={filters.minPnl}
//             />
//           </div>

//           <div className="flex items-center gap-2 text-xs sm:text-sm">
//             <span className="text-slate-400">Last updated:</span>
//             <span className="text-slate-300 whitespace-nowrap">
//               2023-05-17 23:50:29 UTC
//             </span>
//             <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TradingFilter;
