import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({triggerAnimation}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [animKey, setAnimKey] = useState(false);

  const navbarItems = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Help", href: "/help" },
  ];


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (triggerAnimation) {
      setAnimKey(true);
    }
  }, [triggerAnimation]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white shadow-md transition-all duration-300">
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between relative">
        
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-red-600">LaslesVPN</h1>
          </Link>
        </div>

        
        <div className="hidden md:flex space-x-8">
          {navbarItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-red-600 text-lg font-medium transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin" className="px-6 py-2 rounded-md text-gray-800 font-medium hover:bg-red-600 hover:text-white transition-colors duration-300">
            Sign In
          </Link>
          <Link to="/signup" className="px-6 py-2 rounded-md text-gray-800  font-medium hover:bg-red-600 hover:text-white transition-colors duration-300">
            Sign Up
          </Link>
        </div>

          
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
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

      
      <div className="absolute bottom-0 left-0 w-full h-1 overflow-hidden shadow-md">
        <div
          className={`h-1 bg-red-600 transition-all duration-500 ${
            scrolled || triggerAnimation ? "w-full scale-x-100 origin-left" : "w-0 scale-x-0 "
          }`}
        ></div>
      </div>

      
      {menuOpen && (
        <div className="md:hidden w-full bg-white shadow-md flex flex-col items-center gap-4 py-4">
          {navbarItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-red-600 text-lg font-medium transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Link to="/signin" className="px-6 py-2 rounded-md  text-gray-800 font-medium hover:bg-red-600 hover:text-white transition-colors duration-300 text-center" onClick={() => setMenuOpen(false)}>
              Sign In
            </Link>
            <Link to="/" className="px-6 py-2 rounded-md text-gray-800 font-medium hover:bg-red-600 hover:text-white transition-colors duration-300">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
