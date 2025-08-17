import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router"; // ✅
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  // ✅ Menu items list
  const menuItems = [
    { path: "/#home", label: "Home" },
    { path: "/#about", label: "About" },
    { path: "/#skills", label: "Skills" },
    { path: "/#projects", label: "Projects" },
    { path: "/#contact", label: "Contact" }
  ];

  // ✅ Smooth Scroll Function (সব section এর জন্য)
  const handleNavClick = (path) => {
    navigate(path);
    closeDrawer();

    const sectionId = path.replace("/#", ""); // "/#about" → "about"
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else if (path === "/#home" || path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ✅ Links mapping with smooth scroll
  const links = menuItems.map((item) => (
    <li key={item.path} className="list-none">
      <NavLink
        to={item.path}
        onClick={() => handleNavClick(item.path)} // ✅ updated to smooth scroll
        className={({ isActive }) =>
          isActive
            ? "relative text-blue-400 font-medium"
            : "relative text-gray-300 hover:text-white transition-colors duration-300"
        }
      >
        {item.label}
      </NavLink>
    </li>
  ));

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-gray-900/80 backdrop-blur-sm py-3"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✅ Main Flex — 3 Section */}
        <div className="flex items-center justify-between h-16">
          
          {/* ✅ Left - Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link to="/#home" onClick={() => handleNavClick("/#home")}> {/* ✅ smooth scroll */}
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Akash
              </span>
            </Link>
          </motion.div>

          {/* ✅ Middle - Nav Links */}
          <div className="hidden lg:flex justify-center flex-1">
            <ul className="flex gap-8">{links}</ul>
          </div>

          {/* ✅ Right - Resume Button */}
          <div className="hidden lg:flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/resume">
                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                  Resume
                </button>
              </Link>
            </motion.div>
          </div>

          {/* ✅ Mobile Hamburger */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleDrawer}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
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
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* ✅ Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={closeDrawer}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl z-50 p-6"
            >
              <div className="flex justify-end">
                <button
                  className="text-gray-400 hover:text-white text-2xl"
                  onClick={closeDrawer}
                >
                  &times;
                </button>
              </div>

              <div className="mt-12 flex flex-col h-[calc(100%-3rem)]">
                <ul className="space-y-6">
                  {menuItems.map((item) => (
                    <li key={item.path} className="list-none">
                      <NavLink
                        to={item.path}
                        onClick={() => handleNavClick(item.path)} // ✅ smooth scroll in mobile
                        className={({ isActive }) =>
                          isActive
                            ? "relative text-blue-400 font-medium"
                            : "relative text-gray-300 hover:text-white transition-colors duration-300"
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link to="/resume" onClick={closeDrawer}>
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                      RESUME
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
