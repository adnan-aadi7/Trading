import React from "react";
import Heading from "../components/Heading";
import TradeSummary from "../components/TradeSummary";
import PriceActionChart from "../components/PriceAction";
import PositionDynamics from "../components/PositionDynamics";
import TradeTimeline from "../components/TradeTimeline";
import RiskMetrics from "../components/RiskMetrics";
import MarketContext from "../components/MarketContext";
import Footer from "../../common/Footer";
import Navbar from "../../common/Navbar";

const Trades = () => {
  // Changed component name to Trades for clarity
  return (
    <>
      <Navbar />
      {/* <SubNavbar /> SubNavbar added here */}
      <Heading />
      {/* Two-column layout container with full width */}
      <div className="flex flex-col lg:flex-row py-2 sm:py-3 md:py-4 px-2 sm:px-4 md:px-8 lg:px-12 gap-4 md:gap-6 lg:gap-3 w-full">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full lg:w-1/4">
          {" "}
          {/* Adjusted width classes */}
          <TradeSummary />
          <PositionDynamics />
          <RiskMetrics />
        </div>
        {/* Right Column */}
        <div className="flex flex-col gap-4 md:gap-6 lg:gap-8 flex-grow">
          {" "}
          {/* Use flex-grow to fill remaining space */}
          <PriceActionChart />
          <TradeTimeline />
          <MarketContext />
        </div>
      </div>
      {/* MarketContext component is not included in this layout based on the image */}
      <Footer />
    </>
  );
};

export default Trades; // Changed export name
