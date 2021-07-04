import React from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../images/logo.svg";

function Navbar() {
  return (
    <header className="navbar h-24 flex flex-row items-center justify-between px-6 md:px-14 xl:px-16 bg-pink-500 text-white text-lg font-semibold">
      <Link to="/" className="font-bold text-xl">
        <img src={Logo} className="h-screen w-36" alt="IBDB" />
      </Link>
      <nav className="flex flex-row gap-6">
        <NavLink
          activeClassName="bg-pink-500"
          to="/"
          className="py-1 md:py-1.5 md:px-4 xl:py-2 xl:px-6 hover:bg-opacity-50 transition ease-in-out cursor-pointer rounded-md"
        >
          Explore
        </NavLink>
        <NavLink
          activeClassName="bg-pink-500"
          to="/books"
          className="py-1 md:py-1.5 md:px-4 xl:py-2 xl:px-6 hover:bg-opacity-50 transition ease-in-out cursor-pointer rounded-md"
        >
          Books
        </NavLink>
        <NavLink
          activeClassName="bg-pink-500"
          to="/authors"
          className="px-2 py-1 md:py-1.5 md:px-4 xl:py-2 xl:px-6 hover:bg-opacity-50 transition ease-in-out cursor-pointer rounded-md"
        >
          Authors
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
