import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HistoryTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Hardcoded array of 50 dummy trades
  const trades = [
    {
      id: 1,
      date: "May 17, 2023, 08:24",
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
      leverage: "10x",
      currentBalance: "$10,108.00",
      closedBalance: "$10,000.00",
      riskRatio: "1.5",
    },
    {
      id: 2,
      date: "May 16, 2023, 19:12",
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
      leverage: "20x",
      currentBalance: "$10,327.00",
      closedBalance: "$10,108.00",
      riskRatio: "2.1",
    },
    {
      id: 3,
      date: "May 15, 2023, 14:05",
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
      leverage: "5x",
      currentBalance: "$10,073.50",
      closedBalance: "$10,127.00",
      riskRatio: "0.8",
    },
    {
      id: 4,
      date: "May 14, 2023, 22:37",
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
      leverage: "15x",
      currentBalance: "$10,153.75",
      closedBalance: "$10,073.50",
      riskRatio: "1.9",
    },
    {
      id: 5,
      date: "May 13, 2023, 10:18",
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
      leverage: "25x",
      currentBalance: "$10,475.50",
      closedBalance: "$10,153.75",
      riskRatio: "3.5",
    },
    {
      id: 6,
      date: "May 12, 2023, 15:45",
      pair: "ADA/USDT",
      pairIcon: "₳",
      pairColor: "text-cyan-400",
      pnlPercent: "-0.55%",
      configPnl: "-$13.75",
      absPnl: "-$55.00",
      duration: "1.1h",
      dd: "-0.8%",
      du: "+0.5%",
      positionInc: "0 (0%)",
      partialClose: "0 (0%)",
      leverage: "5x",
      currentBalance: "$10,461.75",
      closedBalance: "$10,475.50",
      riskRatio: "0.6",
    },
    {
      id: 7,
      date: "May 11, 2023, 09:00",
      pair: "DOGE/USDT",
      pairIcon: "🐶",
      pairColor: "text-yellow-600",
      pnlPercent: "+6.18%",
      configPnl: "+$154.50",
      absPnl: "+$618.00",
      duration: "18.9h",
      dd: "-3.1%",
      du: "+7.5%",
      positionInc: "2 (+60%)",
      partialClose: "3 (70%)",
      leverage: "12x",
      currentBalance: "$10,616.25",
      closedBalance: "$10,461.75",
      riskRatio: "2.8",
    },
    {
      id: 8,
      date: "May 10, 2023, 20:00",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "-3.50%",
      configPnl: "-$87.50",
      absPnl: "-$350.00",
      duration: "5.0h",
      dd: "-4.0%",
      du: "+1.0%",
      positionInc: "0 (0%)",
      partialClose: "1 (20%)",
      leverage: "18x",
      currentBalance: "$10,528.75",
      closedBalance: "$10,616.25",
      riskRatio: "0.9",
    },
    {
      id: 9,
      date: "May 09, 2023, 11:30",
      pair: "SOL/USDT",
      pairIcon: "◈",
      pairColor: "text-blue-400",
      pnlPercent: "+9.99%",
      configPnl: "+$249.75",
      absPnl: "+$999.00",
      duration: "15.5h",
      dd: "-2.0%",
      du: "+11.0%",
      positionInc: "3 (+100%)",
      partialClose: "4 (80%)",
      leverage: "22x",
      currentBalance: "$10,778.50",
      closedBalance: "$10,528.75",
      riskRatio: "3.1",
    },
    {
      id: 10,
      date: "May 08, 2023, 23:10",
      pair: "ETH/USDT",
      pairIcon: "♦",
      pairColor: "text-purple-400",
      pnlPercent: "+1.11%",
      configPnl: "+$27.75",
      absPnl: "+$111.00",
      duration: "3.3h",
      dd: "-0.5%",
      du: "+1.5%",
      positionInc: "1 (+30%)",
      partialClose: "1 (30%)",
      leverage: "8x",
      currentBalance: "$10,806.25",
      closedBalance: "$10,778.50",
      riskRatio: "1.3",
    },
    {
      id: 11,
      date: "May 07, 2023, 14:00",
      pair: "LINK/USDT",
      pairIcon: "🔗",
      pairColor: "text-blue-500",
      pnlPercent: "-5.20%",
      configPnl: "-$130.00",
      absPnl: "-$520.00",
      duration: "7.8h",
      dd: "-6.0%",
      du: "+0.8%",
      positionInc: "0 (0%)",
      partialClose: "0 (0%)",
      leverage: "15x",
      currentBalance: "$10,676.25",
      closedBalance: "$10,806.25",
      riskRatio: "0.7",
    },
    {
      id: 12,
      date: "May 06, 2023, 08:00",
      pair: "ADA/USDT",
      pairIcon: "₳",
      pairColor: "text-cyan-400",
      pnlPercent: "+7.45%",
      configPnl: "+$186.25",
      absPnl: "+$745.00",
      duration: "16.2h",
      dd: "-1.8%",
      du: "+8.2%",
      positionInc: "2 (+70%)",
      partialClose: "3 (75%)",
      leverage: "10x",
      currentBalance: "$10,862.50",
      closedBalance: "$10,676.25",
      riskRatio: "2.9",
    },
    {
      id: 13,
      date: "May 05, 2023, 19:00",
      pair: "DOGE/USDT",
      pairIcon: "🐶",
      pairColor: "text-yellow-600",
      pnlPercent: "-1.88%",
      configPnl: "-$47.00",
      absPnl: "-$188.00",
      duration: "4.1h",
      dd: "-2.5%",
      du: "+0.5%",
      positionInc: "0 (0%)",
      partialClose: "1 (25%)",
      leverage: "12x",
      currentBalance: "$10,815.50",
      closedBalance: "$10,862.50",
      riskRatio: "0.7",
    },
    {
      id: 14,
      date: "May 04, 2023, 10:00",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "+5.50%",
      configPnl: "+$137.50",
      absPnl: "+$550.00",
      duration: "10.5h",
      dd: "-1.0%",
      du: "+6.5%",
      positionInc: "1 (+40%)",
      partialClose: "2 (50%)",
      leverage: "18x",
      currentBalance: "$10,953.00",
      closedBalance: "$10,815.50",
      riskRatio: "2.5",
    },
    {
      id: 15,
      date: "May 03, 2023, 22:00",
      pair: "ETH/USDT",
      pairIcon: "♦",
      pairColor: "text-purple-400",
      pnlPercent: "+0.75%",
      configPnl: "+$18.75",
      absPnl: "+$75.00",
      duration: "2.0h",
      dd: "-0.3%",
      du: "+1.0%",
      positionInc: "0 (0%)",
      partialClose: "1 (30%)",
      leverage: "8x",
      currentBalance: "$10,971.75",
      closedBalance: "$10,953.00",
      riskRatio: "1.1",
    },
    {
      id: 16,
      date: "May 02, 2023, 13:00",
      pair: "SOL/USDT",
      pairIcon: "◈",
      pairColor: "text-blue-400",
      pnlPercent: "-4.00%",
      configPnl: "-$100.00",
      absPnl: "-$400.00",
      duration: "6.8h",
      dd: "-4.5%",
      du: "+0.5%",
      positionInc: "0 (0%)",
      partialClose: "0 (0%)",
      leverage: "10x",
      currentBalance: "$10,871.75",
      closedBalance: "$10,971.75",
      riskRatio: "0.6",
    },
    {
      id: 17,
      date: "May 01, 2023, 07:00",
      pair: "LINK/USDT",
      pairIcon: "🔗",
      pairColor: "text-blue-500",
      pnlPercent: "+8.15%",
      configPnl: "+$203.75",
      absPnl: "+$815.00",
      duration: "20.0h",
      dd: "-2.2%",
      du: "+9.0%",
      positionInc: "3 (+80%)",
      partialClose: "4 (75%)",
      leverage: "20x",
      currentBalance: "$11,075.50",
      closedBalance: "$10,871.75",
      riskRatio: "3.0",
    },
    {
      id: 18,
      date: "Apr 30, 2023, 18:00",
      pair: "ADA/USDT",
      pairIcon: "₳",
      pairColor: "text-cyan-400",
      pnlPercent: "+2.90%",
      configPnl: "+$72.50",
      absPnl: "+$290.00",
      duration: "5.5h",
      dd: "-1.0%",
      du: "+3.5%",
      positionInc: "1 (+35%)",
      partialClose: "2 (40%)",
      leverage: "15x",
      currentBalance: "$11,148.00",
      closedBalance: "$11,075.50",
      riskRatio: "1.8",
    },
    {
      id: 19,
      date: "Apr 29, 2023, 09:30",
      pair: "DOGE/USDT",
      pairIcon: "🐶",
      pairColor: "text-yellow-600",
      pnlPercent: "-0.10%",
      configPnl: "-$2.50",
      absPnl: "-$10.00",
      duration: "1.0h",
      dd: "-0.2%",
      du: "+0.1%",
      positionInc: "0 (0%)",
      partialClose: "0 (0%)",
      leverage: "5x",
      currentBalance: "$11,145.50",
      closedBalance: "$11,148.00",
      riskRatio: "0.5",
    },
    {
      id: 20,
      date: "Apr 28, 2023, 21:00",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "+6.00%",
      configPnl: "+$150.00",
      absPnl: "+$600.00",
      duration: "14.0h",
      dd: "-1.5%",
      du: "+7.5%",
      positionInc: "2 (+50%)",
      partialClose: "3 (60%)",
      leverage: "20x",
      currentBalance: "$11,295.50",
      closedBalance: "$11,145.50",
      riskRatio: "2.7",
    },
    {
      id: 21,
      date: "Apr 27, 2023, 12:00",
      pair: "ETH/USDT",
      pairIcon: "♦",
      pairColor: "text-purple-400",
      pnlPercent: "+3.40%",
      configPnl: "+$85.00",
      absPnl: "+$340.00",
      duration: "8.0h",
      dd: "-1.0%",
      du: "+4.4%",
      positionInc: "1 (+30%)",
      partialClose: "2 (45%)",
      leverage: "10x",
      currentBalance: "$11,380.50",
      closedBalance: "$11,295.50",
      riskRatio: "1.9",
    },
    {
      id: 22,
      date: "Apr 26, 2023, 06:00",
      pair: "SOL/USDT",
      pairIcon: "◈",
      pairColor: "text-blue-400",
      pnlPercent: "-2.80%",
      configPnl: "-$70.00",
      absPnl: "-$280.00",
      duration: "4.0h",
      dd: "-3.5%",
      du: "+0.7%",
      positionInc: "0 (0%)",
      partialClose: "1 (20%)",
      leverage: "12x",
      currentBalance: "$11,310.50",
      closedBalance: "$11,380.50",
      riskRatio: "0.8",
    },
    {
      id: 23,
      date: "Apr 25, 2023, 17:00",
      pair: "LINK/USDT",
      pairIcon: "🔗",
      pairColor: "text-blue-500",
      pnlPercent: "+10.50%",
      configPnl: "+$262.50",
      absPnl: "+$1,050.00",
      duration: "22.0h",
      dd: "-3.0%",
      du: "+11.5%",
      positionInc: "3 (+90%)",
      partialClose: "4 (85%)",
      leverage: "25x",
      currentBalance: "$11,573.00",
      closedBalance: "$11,310.50",
      riskRatio: "3.2",
    },
    {
      id: 24,
      date: "Apr 24, 2023, 08:30",
      pair: "ADA/USDT",
      pairIcon: "₳",
      pairColor: "text-cyan-400",
      pnlPercent: "+1.50%",
      configPnl: "+$37.50",
      absPnl: "+$150.00",
      duration: "3.0h",
      dd: "-0.5%",
      du: "+2.0%",
      positionInc: "1 (+20%)",
      partialClose: "1 (20%)",
      leverage: "8x",
      currentBalance: "$11,610.50",
      closedBalance: "$11,573.00",
      riskRatio: "1.4",
    },
    {
      id: 25,
      date: "Apr 23, 2023, 20:00",
      pair: "DOGE/USDT",
      pairIcon: "🐶",
      pairColor: "text-yellow-600",
      pnlPercent: "-1.00%",
      configPnl: "-$25.00",
      absPnl: "-$100.00",
      duration: "2.5h",
      dd: "-1.5%",
      du: "+0.2%",
      positionInc: "0 (0%)",
      partialClose: "0 (0%)",
      leverage: "10x",
      currentBalance: "$11,585.50",
      closedBalance: "$11,610.50",
      riskRatio: "0.7",
    },
    {
      id: 26,
      date: "Apr 22, 2023, 11:00",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "+7.00%",
      configPnl: "+$175.00",
      absPnl: "+$700.00",
      duration: "16.0h",
      dd: "-1.8%",
      du: "+8.8%",
      positionInc: "2 (+60%)",
      partialClose: "3 (70%)",
      leverage: "20x",
      currentBalance: "$12,285.50",
      closedBalance: "$11,585.50",
      riskRatio: "2.9",
    },
    {
      id: 27,
      date: "Apr 21, 2023, 05:00",
      pair: "ETH/USDT",
      pairIcon: "♦",
      pairColor: "text-purple-400",
      pnlPercent: "+4.50%",
      configPnl: "+$112.50",
      absPnl: "+$450.00",
      duration: "9.5h",
      dd: "-1.2%",
      du: "+5.7%",
      positionInc: "1 (+40%)",
      partialClose: "2 (55%)",
      leverage: "15x",
      currentBalance: "$12,735.50",
      closedBalance: "$12,285.50",
      riskRatio: "2.2",
    },
    {
      id: 28,
      date: "Apr 20, 2023, 16:00",
      pair: "SOL/USDT",
      pairIcon: "◈",
      pairColor: "text-blue-400",
      pnlPercent: "-3.20%",
      configPnl: "-$80.00",
      absPnl: "-$320.00",
      duration: "5.0h",
      dd: "-3.8%",
      du: "+0.9%",
      positionInc: "0 (0%)",
      partialClose: "1 (25%)",
      leverage: "10x",
      currentBalance: "$12,415.50",
      closedBalance: "$12,735.50",
      riskRatio: "0.8",
    },
    {
      id: 29,
      date: "Apr 19, 2023, 07:00",
      pair: "LINK/USDT",
      pairIcon: "🔗",
      pairColor: "text-blue-500",
      pnlPercent: "+9.20%",
      configPnl: "+$230.00",
      absPnl: "+$920.00",
      duration: "21.0h",
      dd: "-2.5%",
      du: "+10.5%",
      positionInc: "3 (+85%)",
      partialClose: "4 (80%)",
      leverage: "22x",
      currentBalance: "$13,335.50",
      closedBalance: "$12,415.50",
      riskRatio: "3.1",
    },
    {
      id: 30,
      date: "Apr 18, 2023, 18:30",
      pair: "ADA/USDT",
      pairIcon: "₳",
      pairColor: "text-cyan-400",
      pnlPercent: "+2.10%",
      configPnl: "+$52.50",
      absPnl: "+$210.00",
      duration: "4.0h",
      dd: "-0.8%",
      du: "+2.9%",
      positionInc: "1 (+30%)",
      partialClose: "2 (40%)",
      leverage: "18x",
      currentBalance: "$13,545.50",
      closedBalance: "$13,335.50",
      riskRatio: "1.7",
    },
    {
      id: 31,
      date: "Apr 17, 2023, 09:00",
      pair: "DOGE/USDT",
      pairIcon: "🐶",
      pairColor: "text-yellow-600",
      pnlPercent: "-0.60%",
      configPnl: "-$15.00",
      absPnl: "-$60.00",
      duration: "1.5h",
      dd: "-1.0%",
      du: "+0.3%",
      positionInc: "0 (0%)",
      partialClose: "0 (0%)",
      leverage: "5x",
      currentBalance: "$13,485.50",
      closedBalance: "$13,545.50",
      riskRatio: "0.6",
    },
    {
      id: 32,
      date: "Apr 16, 2023, 20:00",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "+8.50%",
      configPnl: "+$212.50",
      absPnl: "+$850.00",
      duration: "18.0h",
      dd: "-2.0%",
      du: "+9.5%",
      positionInc: "3 (+70%)",
      partialClose: "4 (75%)",
      leverage: "20x",
      currentBalance: "$14,335.50",
      closedBalance: "$13,485.50",
      riskRatio: "3.3",
    },
    {
      id: 33,
      date: "Apr 15, 2023, 11:30",
      pair: "ETH/USDT",
      pairIcon: "♦",
      pairColor: "text-purple-400",
      pnlPercent: "+5.80%",
      configPnl: "+$145.00",
      absPnl: "+$580.00",
      duration: "10.0h",
      dd: "-1.5%",
      du: "+6.8%",
      positionInc: "2 (+50%)",
      partialClose: "3 (60%)",
      leverage: "15x",
      currentBalance: "$14,915.50",
      closedBalance: "$14,335.50",
      riskRatio: "2.6",
    },
    {
      id: 34,
      date: "Apr 14, 2023, 06:00",
      pair: "SOL/USDT",
      pairIcon: "◈",
      pairColor: "text-blue-400",
      pnlPercent: "-2.50%",
      configPnl: "-$62.50",
      absPnl: "-$250.00",
      duration: "4.5h",
      dd: "-3.0%",
      du: "+0.8%",
      positionInc: "0 (0%)",
      partialClose: "1 (20%)",
      leverage: "10x",
      currentBalance: "$14,665.50",
      closedBalance: "$14,915.50",
      riskRatio: "0.9",
    },
    {
      id: 35,
      date: "Apr 13, 2023, 17:00",
      pair: "LINK/USDT",
      pairIcon: "🔗",
      pairColor: "text-blue-500",
      pnlPercent: "+11.00%",
      configPnl: "+$275.00",
      absPnl: "+$1,100.00",
      duration: "24.0h",
      dd: "-3.5%",
      du: "+12.0%",
      positionInc: "3 (+95%)",
      partialClose: "4 (90%)",
      leverage: "25x",
      currentBalance: "$15,765.50",
      closedBalance: "$14,665.50",
      riskRatio: "3.4",
    },
    {
      id: 36,
      date: "Apr 12, 2023, 08:30",
      pair: "ADA/USDT",
      pairIcon: "₳",
      pairColor: "text-cyan-400",
      pnlPercent: "+1.80%",
      configPnl: "+$45.00",
      absPnl: "+$180.00",
      duration: "3.5h",
      dd: "-0.6%",
      du: "+2.5%",
      positionInc: "1 (+25%)",
      partialClose: "1 (30%)",
      leverage: "8x",
      currentBalance: "$15,945.50",
      closedBalance: "$15,765.50",
      riskRatio: "1.5",
    },
    {
      id: 37,
      date: "Apr 11, 2023, 20:00",
      pair: "DOGE/USDT",
      pairIcon: "🐶",
      pairColor: "text-yellow-600",
      pnlPercent: "-0.40%",
      configPnl: "-$10.00",
      absPnl: "-$40.00",
      duration: "2.0h",
      dd: "-0.8%",
      du: "+0.1%",
      positionInc: "0 (0%)",
      partialClose: "0 (0%)",
      leverage: "5x",
      currentBalance: "$15,905.50",
      closedBalance: "$15,945.50",
      riskRatio: "0.5",
    },
    {
      id: 38,
      date: "Apr 10, 2023, 11:00",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "+7.50%",
      configPnl: "+$187.50",
      absPnl: "+$750.00",
      duration: "17.0h",
      dd: "-1.9%",
      du: "+9.4%",
      positionInc: "2 (+65%)",
      partialClose: "3 (70%)",
      leverage: "22x",
      currentBalance: "$16,655.50",
      closedBalance: "$15,905.50",
      riskRatio: "3.0",
    },
    {
      id: 39,
      date: "Apr 09, 2023, 05:00",
      pair: "ETH/USDT",
      pairIcon: "♦",
      pairColor: "text-purple-400",
      pnlPercent: "+4.00%",
      configPnl: "+$100.00",
      absPnl: "+$400.00",
      duration: "8.5h",
      dd: "-1.1%",
      du: "+5.1%",
      positionInc: "1 (+35%)",
      partialClose: "2 (50%)",
      leverage: "18x",
      currentBalance: "$17,055.50",
      closedBalance: "$16,655.50",
      riskRatio: "2.1",
    },
    {
      id: 40,
      date: "Apr 08, 2023, 16:00",
      pair: "SOL/USDT",
      pairIcon: "◈",
      pairColor: "text-blue-400",
      pnlPercent: "-3.50%",
      configPnl: "-$87.50",
      absPnl: "-$350.00",
      duration: "5.5h",
      dd: "-4.0%",
      du: "+0.7%",
      positionInc: "0 (0%)",
      partialClose: "1 (25%)",
      leverage: "12x",
      currentBalance: "$16,705.50",
      closedBalance: "$17,055.50",
      riskRatio: "0.8",
    },
    {
      id: 41,
      date: "Apr 07, 2023, 07:00",
      pair: "LINK/USDT",
      pairIcon: "🔗",
      pairColor: "text-blue-500",
      pnlPercent: "+10.00%",
      configPnl: "+$250.00",
      absPnl: "+$1,000.00",
      duration: "23.0h",
      dd: "-3.2%",
      du: "+11.0%",
      positionInc: "3 (+90%)",
      partialClose: "4 (85%)",
      leverage: "25x",
      currentBalance: "$17,705.50",
      closedBalance: "$16,705.50",
      riskRatio: "3.3",
    },
    {
      id: 42,
      date: "Apr 06, 2023, 18:30",
      pair: "ADA/USDT",
      pairIcon: "₳",
      pairColor: "text-cyan-400",
      pnlPercent: "+2.50%",
      configPnl: "+$62.50",
      absPnl: "+$250.00",
      duration: "4.5h",
      dd: "-1.0%",
      du: "+3.0%",
      positionInc: "1 (+30%)",
      partialClose: "2 (40%)",
      leverage: "15x",
      currentBalance: "$17,955.50",
      closedBalance: "$17,705.50",
      riskRatio: "1.9",
    },
    {
      id: 43,
      date: "Apr 05, 2023, 09:00",
      pair: "DOGE/USDT",
      pairIcon: "🐶",
      pairColor: "text-yellow-600",
      pnlPercent: "-0.80%",
      configPnl: "-$20.00",
      absPnl: "-$80.00",
      duration: "1.8h",
      dd: "-1.2%",
      du: "+0.2%",
      positionInc: "0 (0%)",
      partialClose: "0 (0%)",
      leverage: "5x",
      currentBalance: "$17,875.50",
      closedBalance: "$17,955.50",
      riskRatio: "0.6",
    },
    {
      id: 44,
      date: "Apr 04, 2023, 20:00",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "+9.00%",
      configPnl: "+$225.00",
      absPnl: "+$900.00",
      duration: "19.0h",
      dd: "-2.1%",
      du: "+10.0%",
      positionInc: "3 (+75%)",
      partialClose: "4 (80%)",
      leverage: "20x",
      currentBalance: "$18,775.50",
      closedBalance: "$17,875.50",
      riskRatio: "3.2",
    },
    {
      id: 45,
      date: "Apr 03, 2023, 11:30",
      pair: "ETH/USDT",
      pairIcon: "♦",
      pairColor: "text-purple-400",
      pnlPercent: "+5.00%",
      configPnl: "+$125.00",
      absPnl: "+$500.00",
      duration: "9.0h",
      dd: "-1.3%",
      du: "+6.3%",
      positionInc: "2 (+45%)",
      partialClose: "3 (55%)",
      leverage: "18x",
      currentBalance: "$19,275.50",
      closedBalance: "$18,775.50",
      riskRatio: "2.4",
    },
    {
      id: 46,
      date: "Apr 02, 2023, 06:00",
      pair: "SOL/USDT",
      pairIcon: "◈",
      pairColor: "text-blue-400",
      pnlPercent: "-2.00%",
      configPnl: "-$50.00",
      absPnl: "-$200.00",
      duration: "3.8h",
      dd: "-2.5%",
      du: "+0.5%",
      positionInc: "0 (0%)",
      partialClose: "1 (20%)",
      leverage: "10x",
      currentBalance: "$19,075.50",
      closedBalance: "$19,275.50",
      riskRatio: "0.7",
    },
    {
      id: 47,
      date: "Apr 01, 2023, 17:00",
      pair: "LINK/USDT",
      pairIcon: "🔗",
      pairColor: "text-blue-500",
      pnlPercent: "+8.00%",
      configPnl: "+$200.00",
      absPnl: "+$800.00",
      duration: "20.0h",
      dd: "-2.0%",
      du: "+9.0%",
      positionInc: "3 (+80%)",
      partialClose: "4 (75%)",
      leverage: "22x",
      currentBalance: "$19,875.50",
      closedBalance: "$19,075.50",
      riskRatio: "3.0",
    },
    {
      id: 48,
      date: "Mar 31, 2023, 08:30",
      pair: "ADA/USDT",
      pairIcon: "₳",
      pairColor: "text-cyan-400",
      pnlPercent: "+1.20%",
      configPnl: "+$30.00",
      absPnl: "+$120.00",
      duration: "3.0h",
      dd: "-0.5%",
      du: "+1.7%",
      positionInc: "1 (+20%)",
      partialClose: "1 (20%)",
      leverage: "8x",
      currentBalance: "$19,995.50",
      closedBalance: "$19,875.50",
      riskRatio: "1.3",
    },
    {
      id: 49,
      date: "Mar 30, 2023, 20:00",
      pair: "DOGE/USDT",
      pairIcon: "🐶",
      pairColor: "text-yellow-600",
      pnlPercent: "-0.30%",
      configPnl: "-$7.50",
      absPnl: "-$30.00",
      duration: "1.0h",
      dd: "-0.5%",
      du: "+0.1%",
      positionInc: "0 (0%)",
      partialClose: "0 (0%)",
      leverage: "5x",
      currentBalance: "$19,965.50",
      closedBalance: "$19,995.50",
      riskRatio: "0.5",
    },
    {
      id: 50,
      date: "Mar 29, 2023, 11:00",
      pair: "BTC/USDT",
      pairIcon: "₿",
      pairColor: "text-yellow-500",
      pnlPercent: "+6.50%",
      configPnl: "+$162.50",
      absPnl: "+$650.00",
      duration: "15.0h",
      dd: "-1.7%",
      du: "+8.2%",
      positionInc: "2 (+55%)",
      partialClose: "3 (60%)",
      leverage: "18x",
      currentBalance: "$20,615.50",
      closedBalance: "$19,965.50",
      riskRatio: "2.8",
    },
  ];

  const totalTrades = trades.length;
  const tradesPerPage = 10;
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

  // Calculate which trades to display on the current page
  const indexOfLastTrade = currentPage * tradesPerPage;
  const indexOfFirstTrade = indexOfLastTrade - tradesPerPage;
  const currentTrades = trades.slice(indexOfFirstTrade, indexOfLastTrade);

  const renderPagination = () => {
    const pages = [];

    // Previous button
    pages.push(
      <button
        key="prev"
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-gray-800 disabled:text-slate-500 text-white rounded-lg transition-colors text-sm"
      >
        <ChevronLeft size={16} />
        <span className="hidden sm:inline">Prev</span>
      </button>
    );

    // Page numbers (show first, last, current and surrounding pages)
    const startPage = Math.max(1, currentPage - 2);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (startPage > 1) {
      pages.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors text-sm"
        >
          1
        </button>
      );
      if (startPage > 2) {
        pages.push(
          <span key="ellipsis1" className="text-gray-400 px-2">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-2 sm:px-3 py-1.5 sm:py-2 rounded transition-colors text-sm ${
            currentPage === i
              ? "bg-blue-600 text-white"
              : "bg-gray-700 hover:bg-gray-600 text-gray-300"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pages.push(
          <span key="ellipsis2" className="text-gray-400 px-2">
            ...
          </span>
        );
      }
      pages.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-2 sm:px-3 py-1.5 sm:py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded transition-colors text-sm"
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    pages.push(
      <button
        key="next"
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="flex items-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-slate-700 hover:bg-slate-600 disabled:bg-gray-800 disabled:text-slate-500 text-white rounded-lg transition-colors text-sm"
      >
        <span className="hidden sm:inline">Next</span>
        <ChevronRight size={16} />
      </button>
    );

    return pages;
  };

  return (
    <>
      {/* Table Container */}
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <div className="min-w-[1200px] px-4 sm:px-0">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Date
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Pair
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Leverage
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  PNL %
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Config
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  PNL $
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Time
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  DD %
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  DU %
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Inc.
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Close
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Balance
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Closed
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Risk Ratio
                </th>
                <th className="text-left py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-400 font-medium whitespace-nowrap">
                  Sharpe
                </th>
              </tr>
            </thead>
            <tbody>
              {currentTrades.map((trade, index) => (
                <tr
                  key={trade.id}
                  className={`border-b border-gray-700 transition-colors hover:bg-gray-700 ${
                    index === currentTrades.length - 1 ? "border-b-0" : ""
                  }`}
                >
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                    {trade.date}
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 whitespace-nowrap">
                    <div className="flex items-center gap-1">
                      <span className={`text-sm ${getPnlColor(trade.pair)}`}>
                        {trade.pairIcon}
                      </span>
                      <span className="text-[10px] sm:text-xs text-white font-medium">
                        {trade.pair}
                      </span>
                    </div>
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                    {trade.leverage}
                  </td>
                  <td
                    className={`py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs font-semibold whitespace-nowrap ${getPnlColor(
                      trade.pnlPercent
                    )}`}
                  >
                    {trade.pnlPercent}
                  </td>
                  <td
                    className={`py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs font-medium whitespace-nowrap ${getPnlColor(
                      trade.configPnl
                    )}`}
                  >
                    {trade.configPnl}
                  </td>
                  <td
                    className={`py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs font-semibold whitespace-nowrap ${getPnlColor(
                      trade.absPnl
                    )}`}
                  >
                    {trade.absPnl}
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                    {trade.duration}
                  </td>
                  <td
                    className={`py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs font-medium whitespace-nowrap ${getDDColor(
                      trade.dd
                    )}`}
                  >
                    {trade.dd}
                  </td>
                  <td
                    className={`py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs font-medium whitespace-nowrap ${getDUColor(
                      trade.du
                    )}`}
                  >
                    {trade.du}
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                    {trade.positionInc}
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                    {trade.partialClose}
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                    {trade.currentBalance}
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                    {trade.closedBalance}
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                    {trade.riskRatio}
                  </td>
                  <td className="py-2 sm:py-3 px-1 sm:px-2 text-[10px] sm:text-xs text-gray-300 whitespace-nowrap">
                    <div className="flex items-center">
                      <div
                        className="w-20 h-2 bg-white mr-2"
                        style={{
                          width: `${(parseFloat(trade.riskRatio) / 5) * 80}px`,
                        }}
                      ></div>
                      {trade.riskRatio}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer with pagination */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 sm:gap-0 mt-4 sm:mt-6">
        <div className="text-slate-400 text-xs sm:text-sm">
          Showing {(currentPage - 1) * tradesPerPage + 1}-
          {Math.min(currentPage * tradesPerPage, trades.length)} of{" "}
          {trades.length} trades
        </div>
        <div className="flex items-center gap-1 sm:gap-2">
          {renderPagination()}
        </div>
      </div>
    </>
  );
};

export default HistoryTable;
