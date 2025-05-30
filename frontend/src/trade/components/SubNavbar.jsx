import React from "react";
import { Link, useLocation } from "react-router-dom";

const SubNavbar = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="bg-gradient-to-br from-gray-900 via-gray-800 to-indigo-900 text-gray-300 px-4 py-3 text-sm">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link to="/" className="text-blue-400 hover:text-blue-200">
            Home
          </Link>
          {pathnames.length > 0 && <span className="mx-2">/</span>}
        </li>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return (
            <li key={to} className="flex items-center">
              {last ? (
                <span>{value.charAt(0).toUpperCase() + value.slice(1)}</span>
              ) : (
                <Link to={to} className="text-blue-400 hover:text-blue-200">
                  {value.charAt(0).toUpperCase() + value.slice(1)}
                </Link>
              )}
              {!last && <span className="mx-2">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default SubNavbar;
