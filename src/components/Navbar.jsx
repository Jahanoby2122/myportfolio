import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  const menuItems = [
    { path: "#home", label: "Home" },
    { path: "#about", label: "About" },
    { path: "#skills", label: "Skills" },
    { path: "#projects", label: "Projects" },
    { path: "#contact", label: "Contact" },
  ];

  const handleNavClick = (path) => {
    navigate(`/${path}`); // navigate with hash
    closeDrawer();

    const sectionId = path.replace("#", "");
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    setCurrentHash(path);
  };

  const renderLinks = (isMobile = false) =>
    menuItems.map((item) => {
      const isActive =
        item.path === "#home"
          ? currentHash === "" || currentHash === "#home"
          : currentHash === item.path;

      return (
        <motion.li
          key={item.path}
          whileHover={isMobile ? { x: 5 } : {}}
          transition={{ type: "spring", stiffness: 300 }}
          className="list-none"
        >
          <button
            onClick={() => handleNavClick(item.path)}
            className={`${
              isMobile
                ? "block px-5 py-3 rounded-lg text-lg transition-all duration-300 w-full text-left"
                : "relative px-3 py-2 rounded-md transition-all duration-300"
            } ${
              isActive
                ? "text-white bg-blue-600/20 font-medium border-l-4 border-blue-400"
                : "text-gray-300 hover:text-white hover:bg-gray-700/40"
            }`}
          >
            {item.label}
          </button>
        </motion.li>
      );
    });

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center">
            <Link
              to="/#home"
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Akash
              </span>
            </Link>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex justify-center flex-1">
            <ul className="flex gap-2 text-md font-medium">{renderLinks()}</ul>
          </div>

          {/* Resume Button (Desktop) */}
          <div className="hidden lg:flex items-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative group">
              <a
                href="https://drive.google.com/uc?export=download&id=1sOcy1cOSIKc823yqGD23kskZbvNDa_Lv"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden">
                  <span className="relative z-10">Resume</span>
                </button>
              </a>
            </motion.div>
          </div>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleDrawer}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800 transition"
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
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 z-40"
              onClick={closeDrawer}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-80 max-w-full bg-gray-900 shadow-2xl border-l border-blue-800/40 z-50 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">A</span>
                  </div>
                  <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Akash
                  </span>
                </motion.div>
                <button className="text-gray-400 hover:text-white text-3xl p-1" onClick={closeDrawer}>
                  &times;
                </button>
              </div>

              <ul className="space-y-3 flex-1">{renderLinks(true)}</ul>

              <div className="pt-6">
                <Link
                  href="https://drive.google.com/uc?export=download&id=1sOcy1cOSIKc823yqGD23kskZbvNDa_Lv"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeDrawer}
                  className="block"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-3.5 rounded-lg font-medium text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg hover:shadow-blue-500/30 transition-all duration-300 relative overflow-hidden"
                  >
                    <span className="relative z-10">Download Resume</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
