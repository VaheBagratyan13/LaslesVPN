import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { 
  FaShieldAlt, 
  FaGlobe, 
  FaLock, 
  FaRocket, 
  FaWifi, 
  FaMobile, 
  FaDesktop, 
  FaTablet, 
  FaGamepad, 
  FaTv,     
  FaEyeSlash, 
  FaCheckCircle, 
  FaChartLine, 
  FaBolt, 
  FaUserShield, 
  FaKey, 
  FaNetworkWired, 
  FaCloud, 
  FaHdd, 
  FaCheck, 
} from 'react-icons/fa';

const FeaturesPage = () => {
  const [showElements, setShowElements] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const coreFeatures = [
    {
      icon: <FaLock className="text-4xl text-red-600" />,
      title: "Military-Grade Encryption",
      description: "AES-256 encryption protects your data with the same security standard used by banks and governments worldwide.",
      details: [
        "256-bit encryption keys",
        "Perfect Forward Secrecy",
        "Multiple encryption protocols",
        "End-to-end security"
      ],
      color: "red"
    },
    {
      icon: <FaGlobe className="text-4xl text-blue-600" />,
      title: "Global Server Network",
      description: "Access content from anywhere with our extensive network of high-speed servers across 90+ countries.",
      details: [
        "200+ server locations",
        "Optimized for streaming",
        "Low latency connections",
        "Smart server selection"
      ],
      color: "blue"
    },
    {
      icon: <FaEyeSlash className="text-4xl text-green-600" />,
      title: "No-Logs Policy",
      description: "We never track, collect, or store your online activities. Your privacy is our top priority.",
      details: [
        "Zero data collection",
        "Independently audited",
        "Privacy by design",
        "Transparent policies"
      ],
      color: "green"
    },
    {
      icon: <FaRocket className="text-4xl text-purple-600" />,
      title: "Lightning Fast Speeds",
      description: "Experience blazing-fast connection speeds with our optimized network infrastructure and smart routing.",
      details: [
        "Unlimited bandwidth",
        "Optimized protocols",
        "Smart routing",
        "Speed testing tools"
      ],
      color: "purple"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-yellow-600" />,
      title: "Kill Switch Protection",
      description: "Automatically disconnect from the internet if your VPN connection drops to prevent data leaks.",
      details: [
        "Automatic disconnection",
        "Network leak protection",
        "DNS leak prevention",
        "IPv6 leak protection"
      ],
      color: "yellow"
    },
    {
      icon: <FaWifi className="text-4xl text-indigo-600" />,
      title: "Public WiFi Security",
      description: "Secure your connection on public WiFi networks and protect against hackers and snoopers.",
      details: [
        "WiFi hotspot protection",
        "Man-in-the-middle prevention",
        "Secure public browsing",
        "Automatic protection"
      ],
      color: "indigo"
    }
  ];

  const deviceFeatures = [
    {
      icon: <FaDesktop className="text-3xl text-blue-600" />,
      title: "Windows & macOS",
      description: "Native apps with advanced features and intuitive interface",
      features: ["Kill switch", "Split tunneling", "Auto-connect", "Custom DNS"]
    },
    {
      icon: <FaMobile className="text-3xl text-green-600" />,
      title: "iOS & Android",
      description: "Mobile-optimized apps with touch-friendly controls",
      features: ["One-tap connect", "Location spoofing", "App protection", "Battery optimization"]
    },
    {
      icon: <FaTablet className="text-3xl text-purple-600" />,
      title: "Tablets",
      description: "Full-featured apps for iPad and Android tablets",
      features: ["Large screen UI", "Touch gestures", "Multi-window support", "Sync settings"]
    },
    {
      icon: <FaTv className="text-3xl text-red-600" />,
      title: "Smart TVs",
      description: "Stream securely on your smart TV and streaming devices",
      features: ["4K streaming", "Remote control", "Auto-start", "Parental controls"]
    },
    {
      icon: <FaGamepad className="text-3xl text-yellow-600" />,
      title: "Gaming Consoles",
      description: "Reduce ping and protect your gaming sessions",
      features: ["Low latency", "DDoS protection", "Region switching", "Gaming servers"]
    },
    {
      icon: <FaNetworkWired className="text-3xl text-indigo-600" />,
      title: "Routers",
      description: "Protect all devices on your home network",
      features: ["Router configuration", "Network-wide protection", "Guest network", "Parental controls"]
    }
  ];

  const advancedFeatures = [
    {
      icon: <FaChartLine className="text-2xl text-green-600" />,
      title: "Split Tunneling",
      description: "Choose which apps use the VPN and which use your regular connection"
    },
    {
      icon: <FaBolt className="text-2xl text-yellow-600" />,
      title: "Smart Connect",
      description: "Automatically connects to the fastest server for your location"
    },
    {
      icon: <FaUserShield className="text-2xl text-blue-600" />,
      title: "Multi-Factor Authentication",
      description: "Add an extra layer of security to your account"
    },
    {
      icon: <FaKey className="text-2xl text-purple-600" />,
      title: "Custom DNS",
      description: "Use your preferred DNS servers for enhanced privacy"
    },
    {
      icon: <FaCloud className="text-2xl text-indigo-600" />,
      title: "Cloud Storage Protection",
      description: "Secure your files in cloud storage services"
    },
    {
      icon: <FaHdd className="text-2xl text-red-600" />,
      title: "P2P Support",
      description: "Safe and anonymous file sharing and torrenting"
    }
  ];

  const securityFeatures = [
    {
      title: "Encryption Protocols",
      options: ["OpenVPN", "IKEv2", "WireGuard", "L2TP/IPSec"],
      description: "Multiple protocols to choose from based on your needs"
    },
    {
      title: "DNS Protection",
      options: ["DNS Leak Protection", "Custom DNS", "IPv6 Leak Protection"],
      description: "Complete DNS security to prevent data leaks"
    },
    {
      title: "Network Security",
      options: ["Kill Switch", "Firewall Integration", "Port Forwarding"],
      description: "Advanced network protection features"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Powerful Features
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              Discover the comprehensive security and privacy features that make LaslesVPN 
              the most trusted VPN service worldwide.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Security Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced protection features that keep you safe online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Works on All Your Devices
            </h2>
            <p className="text-xl text-gray-600">
              Secure all your devices with native apps and easy setup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deviceFeatures.map((device, index) => (
              <div key={index} className={`bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex items-center mb-4">
                  {device.icon}
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{device.title}</h3>
                    <p className="text-sm text-gray-600">{device.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {device.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2 text-sm" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600">
              Powerful tools for power users and advanced customization
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className={`bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Protocols & Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose from multiple security protocols and advanced options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((security, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{security.title}</h3>
                <p className="text-gray-600 mb-6">{security.description}</p>
                <div className="space-y-3">
                  {security.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See LaslesVPN in Action
            </h2>
            <p className="text-xl text-gray-600">
              Experience our features with this interactive demo
            </p>
          </div>

          <div className={`bg-gray-900 rounded-2xl p-8 text-white ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-3 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-lg font-semibold">
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsConnected(!isConnected)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isConnected 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {isConnected ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Your IP Address</h3>
                <p className="text-sm text-gray-300">
                  {isConnected ? '192.168.1.100 (Protected)' : '203.0.113.1 (Exposed)'}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Server Location</h3>
                <p className="text-sm text-gray-300">
                  {isConnected ? 'New York, USA' : 'Not Connected'}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Encryption</h3>
                <p className="text-sm text-gray-300">
                  {isConnected ? 'AES-256 Active' : 'No Protection'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Experience These Features?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join millions of users who trust LaslesVPN for their online security and privacy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              View Pricing Plans
            </Link>
            <Link
              to="/signup"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesPage;
