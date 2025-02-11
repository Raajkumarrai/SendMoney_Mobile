import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const TopBarNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/track", label: "Track Transfer" },
    { path: "/send", label: "Send Money" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div>
      <div
        className="flex justify-between h-20 w-full p-3 items-center"
        style={{
          backgroundColor: "rgba(196, 255, 249, 1)",
        }}
      >
        <div className="h-[70px] w-[70px]">
          <img src="../logo.png" alt="Send Money" className="h-full w-full" />
        </div>

        <div className=" p-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl flex items-center gap-2"
          >
            {isOpen ? (
              <>
                <FaTimes className="text-2xl" />
              </>
            ) : (
              <>
                <FaBars className="text-2xl" />
              </>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="relative">
          <div className="bg-white p-4 absolute right-0 top-25 w-auto h-auto z-10">
            <ul className="text-lg">
              {navLinks.map(({ path, label }) => (
                <li key={path} className="p-2 transition-all duration-200">
                  <Link to={path} className="w-full h-full">
                    {label}
                  </Link>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBarNav;
