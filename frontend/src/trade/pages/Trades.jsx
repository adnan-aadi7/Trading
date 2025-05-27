import React from "react";
import Heading from "../components/Heading";
import TradeSummary from "../components/TradeSummary";
import PriceActionChart from "../components/PriceAction";
import PositionDynamics from "../components/PositionDynamics";
import TradeTimeline from "../components/TradeTimeline";
import RiskMetrics from "../components/RiskMetrics";
import MarketContext from "../components/MarketContext";
import Navbar from "../../common/Navbar";

const Trades = () => {
  // Changed component name to Trades for clarity
  return (
    <>
      <Navbar />
      {/* <SubNavbar /> SubNavbar added here */}
      <Heading />
      {/* Two-column layout container */}
      <div className="flex flex-col lg:flex-row p-3 sm:p-4 md:p-6 lg:px-[50px] xl:px-[100px] gap-4 md:gap-6 lg:gap-12">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full lg:w-1/3 xl:w-1/4">
          {" "}
          {/* Adjusted width classes */}
          <TradeSummary />
          <PositionDynamics />
          <RiskMetrics />
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-12 flex-grow">
          {" "}
          {/* Use flex-grow to fill remaining space */}
          <PriceActionChart />
          <TradeTimeline />
          <MarketContext />
        </div>
      </div>
      {/* MarketContext component is not included in this layout based on the image */}
    </>
  );
};

export default Trades; // Changed export name
