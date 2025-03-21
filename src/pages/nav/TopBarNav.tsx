import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  Home,
  Send,
  MessageSquare,
  Map,
  Info,
  Phone,
  LogOut,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const TopBarNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Prevent scrolling when the mobile menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const navLinks = [
    { path: "/", label: "Home", icon: <Home className="h-5 w-5" /> },
    {
      path: "/sendMoney",
      label: "Send Money",
      icon: <Send className="h-5 w-5" />,
    },
    {
      path: "/testimonials",
      label: "Testimonials",
      icon: <MessageSquare className="h-5 w-5" />,
    },
    {
      path: "/track",
      label: "Track Transfer",
      icon: <Map className="h-5 w-5" />,
    },
    { path: "/about", label: "About Us", icon: <Info className="h-5 w-5" /> },
    {
      path: "/contact",
      label: "Contact Us",
      icon: <Phone className="h-5 w-5" />,
    },
  ];

  return (
    <nav className="flex justify-between items-center p-4 h-16 sticky top-0 z-50 shadow-sm bg-[#0e746b] overflow-hidden">
      <div className="h-[50px] w-[50px] md:h-[60px] md:w-[60px] rounded-full">
        <img src="../logo.png" alt="Send Money" className="h-full w-full" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-2 md:space-x-1 lg:space-x-7 text-sm md:text-sm lg:text-lg whitespace-nowrap">
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <Link
              to={path}
              className={`transition duration-300 px-2 md:px-1 py-1 text-white ${
                location.pathname === path
                  ? "relative after:content-[''] after:absolute after:left-1/4 after:bottom-0 after:w-1/2 after:h-[2px] after:bg-white"
                  : "hover:text-black duration-500"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Login/Signup */}
      <div className="hidden md:flex gap-3 lg:gap-5">
        <Link
          to="/signup"
          className="text-white hover:bg-white hover:text-[#0e746b] rounded-lg px-2 py-1 duration-300 text-sm lg:text-base"
        >
          Sign-up
        </Link>
        <Link
          to="/login"
          className="text-[#0e746b] bg-white px-2 py-1 rounded-lg hover:bg-[#0e746b] hover:text-white duration-300 text-sm lg:text-base"
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
      >
        <Menu className="h-6 w-6" />
      </button>

      {/* Mobile Navigation - Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 w-screen h-screen bg-white shadow-lg flex flex-col z-50"
          >
            {/* Header with User Info */}
            <div className="bg-[#0e746b] p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>ID</AvatarFallback>
                </Avatar>
                <span className="font-medium text-sm text-white">User Id</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white">
                <LogOut className="h-5 w-5" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-4 py-2 uppercase text-xs font-bold text-gray-500">
                MAGAZINE
              </div>

              <ul className="space-y-1">
                {navLinks.map(({ path, label, icon }) => (
                  <li key={path}>
                    <Link
                      to={path}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center px-4 py-3 hover:bg-gray-100 ${
                        location.pathname === path
                          ? "text-[#0e746b] font-medium"
                          : "text-gray-700"
                      }`}
                    >
                      <span className="w-8">{icon}</span>
                      <span>{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Login/Signup Buttons */}
            <div className="p-4 border-t flex gap-2">
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center text-white bg-[#0e746b] px-3 py-2 rounded-lg hover:bg-[#199a8c] duration-300 text-sm"
              >
                Sign-up
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="flex-1 text-center text-[#0e746b] bg-white border border-[#0e746b] px-3 py-2 rounded-lg hover:bg-[#0e746b] hover:text-white duration-300 text-sm"
              >
                Login
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay when mobile menu is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </nav>
  );
};

export default TopBarNav;
