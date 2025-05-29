import React from "react";
import NavbarUpdated from "../../common/NavbarUpdated";
import TraderAnalysis from "../components/TraderAnalysis";
import TraderProfile from "../components/TraderProfile";
import VirtualWalletEvolution from "../components/VirtualWalletEvolution";
import TimeBasePerformance from "../components/TimebasePeformance";
import BehaviorMetrics from "../components/BehaviorMetrics";
import PerformanceComparison from "../components/PerformanceComparison";
import WalletComparisonChart from "../components/WalletComparisonChart";
import TradeHistoryTable from "../components/TradeHistoryTable";
import Footer from "../../common/Footer";

const Traders = () => {
  return (
    <>
      <NavbarUpdated />
      <TraderAnalysis />
      <TraderProfile />
      <VirtualWalletEvolution />
      <TimeBasePerformance />
      <BehaviorMetrics />
      <PerformanceComparison />
      <WalletComparisonChart />
      <TradeHistoryTable />
      <Footer />
    </>
  );
};

export default Traders;
