import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const style = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.95);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-slideDown {
    animation: slideDown 0.4s ease-out forwards;
  }
  
  .animate-scaleIn {
    animation: scaleIn 0.3s ease-out forwards;
  }
`;


if (typeof document !== 'undefined') {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = style;
  if (!document.head.querySelector('style[data-navbar-animations]')) {
    styleSheet.setAttribute('data-navbar-animations', 'true');
    document.head.appendChild(styleSheet);
  }
}

const Navbar = ({triggerAnimation}) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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


  return (
    <nav className={`w-full fixed top-0 left-0 z-50 bg-white shadow-md transition-all duration-500 ${
      scrolled ? 'shadow-lg backdrop-blur-sm bg-white/95' : 'shadow-md'
    }`}>
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between relative">
        
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
          <h1 className="text-2xl font-bold text-red-600 transition-all duration-300 group-hover:scale-105">LaslesVPN</h1>
          </Link>
        </div>

        
        <div className="hidden md:flex space-x-8">
          {navbarItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-600 hover:text-red-600 text-lg font-medium transition-all duration-300 hover:scale-105 relative group"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/signin" className="px-6 py-2 rounded-md text-gray-800 font-medium hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Sign In
          </Link>
          <Link to="/signup" className="px-6 py-2 rounded-md text-gray-800 font-medium hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg">
            Sign Up
          </Link>
        </div>

          
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-600 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-all duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="relative w-8 h-10">
            
              <span className={`absolute top-1 left-0 w-8 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-3' : ''
              }`}></span>
              <span className={`absolute top-4 left-0 w-8 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`absolute top-7 left-0 w-8 h-0.5 bg-current transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-3' : ''
              }`}></span>
            </div>
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

      
      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-25 z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
      
      {/* Mobile Menu */}
      <div className={`md:hidden w-full bg-white shadow-lg overflow-hidden transition-all duration-500 ease-out z-50 relative ${
        menuOpen ? 'max-h-screen opacity-100 transform translate-y-0' : 'max-h-0 opacity-0 transform -translate-y-4'
      }`}>
        <div className={`flex flex-col items-center gap-4 py-6 px-4 transition-all duration-300 ${
          menuOpen ? 'animate-slideDown' : ''
        }`}>
            {navbarItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-600 hover:text-red-600 text-lg font-medium transition-all duration-300 hover:scale-105 transform ${
                  menuOpen ? 'animate-fadeInUp' : ''
                }`}
                style={{
                  animationDelay: menuOpen ? `${index * 0.1}s` : '0s'
                }}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <div className={`flex flex-col gap-3 mt-6 w-full max-w-xs ${
              menuOpen ? 'animate-scaleIn' : ''
            }`} style={{
              animationDelay: menuOpen ? `${navbarItems.length * 0.1 + 0.2}s` : '0s'
            }}>
              <Link 
                to="/signin" 
                className="px-8 py-3 rounded-lg text-gray-800 font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-center hover:scale-105 hover:shadow-lg border border-gray-200 hover:border-red-600" 
                onClick={() => setMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/signup" 
                className="px-8 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300 text-center hover:scale-105 hover:shadow-lg"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
