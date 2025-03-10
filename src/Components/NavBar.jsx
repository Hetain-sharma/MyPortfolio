import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="w-full bg-blue-950 h-20 flex items-center justify-between px-8 md:px-16 shadow-lg">
      {/* Logo Section */}
      <div>
        <NavLink
          to="/"
          className="text-white text-2xl font-extrabold hover:text-gray-300 transition"
        >
          HetainCodes
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/contactMe"
          className="text-white text-lg font-medium hover:text-gray-300 transition"
        >
          Contact Me
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
