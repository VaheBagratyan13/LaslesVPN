import { FaUser, FaMapMarkerAlt, FaServer } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
const FirstPage = () => {
  const [triggerNavAnim, setTriggerNavAnim] = useState(false);
  const [showElements, setShowElements] = useState(false);
  const items = [
    {
      title: "User",
      value: "950+",
      description: "User",
      fa: <FaUser className="text-2xl sm:text-3xl md:text-4xl text-blue-500"/>
    },
    
    {
      title: "Location",
      value: "90+",
      description: "Location",
      fa: <FaMapMarkerAlt className="text-2xl sm:text-3xl md:text-4xl text-red-500"/>
    },
    {
      title: "Server",
      value: "900+",
      description: "Server",
      fa: <FaServer className="text-2xl sm:text-3xl md:text-4xl text-green-500"/>
    }
  
  ]

 
  const handleClick = () => {
    setTriggerNavAnim(true);
    setTimeout(() => setTriggerNavAnim(false), 500);
  };

 
  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 w-full px-4 sm:px-6 md:px-16 flex flex-col justify-center items-center py-8">
      <Navbar triggerAnimation={triggerNavAnim} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full max-w-6xl">

        
        <div className="flex flex-col justify-center items-start md:items-start gap-4 w-full overflow-hidden text-center md:text-left">
          <h1 className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Want anything to be
          </h1>
          <h1 className={`text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-snug transition-all duration-700 ease-out transform delay-200 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            easy with <span className="text-red-600">LaslesVPN.</span>
          </h1>

          <p className={`text-xs sm:text-sm md:text-md lg:text-lg text-gray-700 transition-all duration-700 transform delay-400 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Provide a network for all your needs with ease and fun using LaslesVPN
          </p>
          <p className={`text-xs sm:text-sm md:text-md lg:text-lg text-gray-700 transition-all duration-700 transform delay-500 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Discover interesting features from us.
          </p>
          <Link to="/signup">
          <button
            onClick={handleClick}
            className={`mt-4 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-lg lg:text-xl rounded-full border-2 border-red-600 text-red-600 font-medium hover:bg-red-600 hover:text-white transition-colors duration-300 delay-600 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            Get Started
          </button>
          </Link>
        </div>

        <div className={`flex justify-center items-center w-full overflow-hidden transition-all duration-700 transform delay-700 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <img
            src="https://lasles-vpn-landing-page.vercel.app/assets/header-illustration.svg"
            alt="VPN"
            className="w-full max-w-[250px] sm:max-w-[350px] md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>

        <div className={`col-span-1 md:col-span-2 bg-white flex flex-col md:flex-row justify-center items-center gap-4 md:gap-16 shadow-lg p-4 md:p-6 rounded-lg mt-8 w-full transition-all duration-700 transform delay-800 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-1 md:gap-2 hover:scale-105 transform transition-transform duration-300 md:border-r-2 md:pr-4 border-gray-200 w-full md:w-auto py-2">
            {item.fa}
            <p className="text-sm sm:text-md md:text-lg font-semibold">{item.value}</p>
            <p className="text-xs sm:text-sm md:text-sm text-gray-600">{item.description}</p>
          </div>
        ))}

        </div>
      </div>
    </section>
  );
};

export default FirstPage;
