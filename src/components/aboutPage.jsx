import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

import { 
  FaArrowLeft, 
  FaShieldAlt, 
  FaGlobe, 
  FaUsers, 
  FaAward, 
  FaLock, 
  FaRocket, 
  FaHeart,
  FaEye,
  FaHandshake,
  FaCog,
  FaChartLine,
  FaServer,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle
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

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "15+ years in cybersecurity and privacy advocacy"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      description: "Expert in network security and infrastructure"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "User experience and product strategy specialist"
    },
    {
      name: "David Kim",
      role: "Head of Security",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Cybersecurity expert and privacy researcher"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
        <Navbar />  

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-16">
          <div className={`text-center mb-16 transition-all duration-700 transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-red-600">LaslesVPN</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're on a mission to make the internet a safer, more private place for everyone. 
              Since 2020, we've been protecting users worldwide with cutting-edge VPN technology.
            </p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-700 transform delay-200 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-lg font-semibold text-gray-700 mb-1">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`transition-all duration-700 transform delay-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                LaslesVPN was born from a simple belief: everyone deserves privacy and security online. 
                In 2020, our founders witnessed the growing threats to digital privacy and decided to take action.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small team of privacy advocates has grown into a global movement, 
                protecting over 1 million users across 90+ countries. We've never wavered from our core mission: 
                making the internet a safer place for everyone.
              </p>
              <div className="flex items-center gap-4">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700 font-medium">No-logs policy since day one</span>
              </div>
            </div>
            <div className={`transition-all duration-700 transform delay-400 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="Our team working"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 transform delay-500 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and every decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${600 + index * 100}ms` }}>
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-700 transform delay-700 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate people behind LaslesVPN, working tirelessly to protect your privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className={`text-center bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${800 + index * 100}ms` }}>
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-red-600 font-semibold mb-2">{member.role}</p>
                <p className="text-sm text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 transform delay-1100 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Become part of our growing community of privacy-conscious users. 
              Experience the internet the way it should be - secure, private, and free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
              >
                View Pricing Plans
              </Link>
              <Link
                to="/signup"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
