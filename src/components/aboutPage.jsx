import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import FootPage from './about/footPage';
import StatsPage from './about/statsPage';
import OurStoryPage from './about/ourStoryPage';
import OurValuesPage from './about/ourValuesPage';
import TeamPage from './about/teamPage';
import { 
  FaShieldAlt, 
  FaGlobe, 
  FaUsers, 
  FaLock, 
  FaHeart,
  FaServer,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
const AboutPage = () => {
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: <FaUsers className="text-4xl text-red-600" />,
      number: "950+",
      label: "Active Users",
      description: "Trusted by users worldwide"
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-blue-600" />,
      number: "90+",
      label: "Countries",
      description: "Global server coverage"
    },
    {
      icon: <FaServer className="text-4xl text-green-600" />,
      number: "900+",
      label: "Servers",
      description: "High-speed connections"
    },
    {
      icon: <FaClock className="text-4xl text-purple-600" />,
      number: "24/7",
      label: "Support",
      description: "Always here to help"
    }
  ];

  const values = [
    {
      icon: <FaLock className="text-3xl text-red-600" />,
      title: "Privacy First",
      description: "We believe your online privacy is a fundamental right. We never log your activities or share your data with third parties."
    },
    {
      icon: <FaShieldAlt className="text-3xl text-blue-600" />,
      title: "Security Excellence",
      description: "Military-grade encryption and cutting-edge security protocols protect your data from hackers and surveillance."
    },
    {
      icon: <FaGlobe className="text-3xl text-green-600" />,
      title: "Global Freedom",
      description: "Access content from anywhere in the world without restrictions. Break down digital barriers and explore freely."
    },
    {
      icon: <FaHeart className="text-3xl text-purple-600" />,
      title: "User-Centric",
      description: "Every feature we build is designed with our users in mind. Your feedback shapes our product development."
    }
  ];




  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />  

        <StatsPage showElements={showElements} stats={stats} />

        <OurStoryPage showElements={showElements} />

        <OurValuesPage showElements={showElements} values={values} />
    
        <TeamPage showElements={showElements} />

        <FootPage showElements={showElements} />
    </div>
  );
};

export default AboutPage;
