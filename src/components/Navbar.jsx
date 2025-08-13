import React, { useState } from "react";
import { Link, NavLink } from "react-router"; // router থেকে ঠিক import

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/project", label: "Project" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
  ];

  const links = menuItems.map((item) => (
    <li key={item.path} className="list-none">
      <NavLink
        to={item.path}
        onClick={closeDrawer}
        className={({ isActive }) =>
          isActive
            ? "block py-2 text-blue-500 font-semibold border-b border-blue-500"
            : "block py-2 text-white hover:text-blue-400"
        }
      >
        {item.label}
      </NavLink>
    </li>
  ));

  return (
    <nav className="bg-black fixed top-0 left-0 right-0 px-4 py-2 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="btn btn-ghost bg-blue-500 text-white text-xl">
            Akash
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex flex-1 justify-center">
          <ul className="flex gap-6">{links}</ul>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:flex">
          <Link to="/talk">
            <button className="btn bg-blue-500 text-white">RESUME</button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button onClick={toggleDrawer} className="btn btn-ghost text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-[#1a1a2e] p-6 transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="text-white text-2xl absolute top-4 right-4"
          onClick={closeDrawer}
        >
          &times;
        </button>
        <ul className="mt-12 space-y-4">{links}</ul>
        <Link to="/talk">
          <button className="btn bg-blue-500 text-white mt-6 w-full">
            RESUME
          </button>
        </Link>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={closeDrawer}
        />
      )}
    </nav>
  );
};

export default Navbar;
