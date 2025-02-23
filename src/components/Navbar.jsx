import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-4">
      <h1 className="text-white text-2xl font-bold">JKT48 Members</h1>
      <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 mt-2">
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
