import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TopBarNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Track current page

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/track", label: "Track Transfer" },
    { path: "/sendMoney", label: "Send Money" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className="flex justify-between items-center w-full p-4 h-20 sticky top-0 bg-opacity-80 z-50 shadow-sm"
      style={{ backgroundColor: "rgba(196, 255, 249, 1)" }}
    >
      {/* Logo */}
      <div className="h-[70px] w-[70px] rounded-full">
        <img src="../logo.png" alt="Send Money" className="h-full w-full" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-10 text-lg ">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`transition duration-300 px-3 py-1 rounded shadow-lg shadow-blue-300 ${
                location.pathname === path
                  ? "text-blue-500 font-serif shadow-sm shadow-black"
                  : "hover:text-blue-300"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button with Rotation Animation */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-3xl"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </motion.button>

      {/* Mobile Navigation with Smooth Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed pb-3 mt-20 top-0 right-0 w-3/4 h-auto bg-white md:hidden flex flex-col items-center justify-center shadow-lg rounded-2xl"
          >
            <ul className="text-lg text-center space-y-6">
              {navLinks.map(({ path, label }) => (
                <li key={path} className="p-4 text-xl w-full">
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`transition duration-300 px-3 py-1 rounded  ${
                      location.pathname === path
                        ? "text-blue-500 font-serif shadow-md shadow-black"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* This span will be visible only on desktop */}
      <span className="hidden md:inline-block"></span>
    </nav>
  );
};

export default TopBarNav;
