import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const TopBarNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/sendMoney", label: "Send Money" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/track", label: "Track Transfer" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <nav className="flex justify-between items-center w-full p-4 h-20 sticky top-0 z-50 shadow-sm bg-[#0e746b]">
      {/* Logo */}
      <div className="h-[70px] w-[70px] rounded-full">
        <img src="../logo.png" alt="Send Money" className="h-full w-full" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-10 text-lg">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`transition duration-300 px-3 py-1 text-white ${
                location.pathname === path ? "underline" : "hover:text-black"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Login/Signup */}
      <div className="hidden md:flex gap-5">
        <Link
          to="/signup"
          className="text-white hover:bg-white hover:text-[#0e746b] rounded-lg px-2 py-1 duration-300"
        >
          Sign-up
        </Link>
        <Link
          to="/login"
          className="text-[#0e746b] bg-white px-2 py-1 rounded-lg hover:bg-[#0e746b] hover:text-white duration-300"
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-xl"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? (
          <FaTimes className="text-3xl" />
        ) : (
          <FaBars className="text-3xl" />
        )}
      </motion.button>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-screen bg-white shadow-lg flex flex-col items-center pt-20 space-y-6 z-[999999999999999999909999999999999999999999999]"
          >
            <ul className="text-lg space-y-6">
              {navLinks.map(({ path, label }) => (
                <li key={path} className="text-xl">
                  <Link
                    to={path}
                    onClick={() => setIsOpen(false)}
                    className={`transition duration-300 px-3 py-1 ${
                      location.pathname === path
                        ? "text-blue-500 underline"
                        : ""
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Login/Signup in flex (same line) */}
            <div className="flex gap-4 mt-6">
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="text-white bg-[#0e746b] px-4 py-2 rounded-lg hover:bg-[#199a8c] duration-300"
              >
                Sign-up
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="text-[#0e746b] bg-white border border-[#0e746b] px-4 py-2 rounded-lg hover:bg-[#0e746b] hover:text-white duration-300"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TopBarNav;
