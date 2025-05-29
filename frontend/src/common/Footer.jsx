import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-end gap-2 text-sm sm:text-sm py-12 px-14">
      <span className="text-slate-400">Last updated:</span>
      <span className="text-slate-300 whitespace-nowrap">
        2023-05-17 23:50:29 UTC
      </span>
      <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
    </div>
  );
};

export default Footer;
