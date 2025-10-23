import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


import { 
  FaSearch, 
  FaGlobe, 
  FaRocket, 
  FaDownload, 
  FaEnvelope, 
  FaComments, 
  FaBook, 
  FaVideo, 
  FaChevronDown, 
  FaChevronUp,
  FaCheckCircle,
  FaExclamationTriangle,
} from 'react-icons/fa';
const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('getting-started');

  const faqData = [
    {
      question: "How do I install LaslesVPN?",
      answer: "Download our app from the App Store, Google Play, or our website. Follow the simple installation wizard, create your account, and you're ready to go! The entire process takes less than 2 minutes."
    },
    {
      question: "Which devices are supported?",
      answer: "LaslesVPN works on Windows, macOS, iOS, Android, Linux, routers, smart TVs, and gaming consoles. We also provide browser extensions for Chrome, Firefox, and Safari."
    },
    {
      question: "How many devices can I connect simultaneously?",
      answer: "This depends on your plan: Basic (5 devices), Premium (10 devices), and Enterprise (unlimited devices). You can connect and disconnect devices anytime."
    },
    {
      question: "Is my data really secure?",
      answer: "Yes! We use military-grade AES-256 encryption, the same standard used by banks and governments. We also have a strict no-logs policy, meaning we never track or store your online activities."
    },
    {
      question: "Can I use LaslesVPN for streaming?",
      answer: "Absolutely! Our VPN is optimized for streaming services like Netflix, Hulu, BBC iPlayer, and more. We have dedicated streaming servers for the best performance."
    },
    {
      question: "What if I experience slow speeds?",
      answer: "Try connecting to a server closer to your location, or use our Smart Connect feature to automatically find the fastest server. You can also try different protocols in the settings."
    },
    {
      question: "Do you offer a money-back guarantee?",
      answer: "Yes! We offer a 30-day money-back guarantee on all plans. If you're not completely satisfied, contact our support team for a full refund."
    },
    {
      question: "How do I cancel my subscription?",
      answer: "You can cancel anytime from your account dashboard or by contacting our support team. Your service will continue until the end of your current billing period."
    }
  ];

  const quickStartSteps = [
    {
      icon: <FaDownload className="text-2xl text-red-600" />,
      title: "Download & Install",
      description: "Get our app from your device's app store or download directly from our website"
    },
    {
      icon: <FaRocket className="text-2xl text-blue-600" />,
      title: "Create Account",
      description: "Sign up with your email and choose your preferred plan"
    },
    {
      icon: <FaGlobe className="text-2xl text-green-600" />,
      title: "Connect & Browse",
      description: "Select a server location and start browsing securely"
    }
  ];

  const supportOptions = [
    {
      icon: <FaComments className="text-3xl text-blue-600" />,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7 Available",
      action: "Start Chat"
    },
    {
      icon: <FaEnvelope className="text-3xl text-green-600" />,
      title: "Email Support",
      description: "Send us a detailed message and we'll respond quickly",
      availability: "Response within 2 hours",
      action: "Send Email"
    },
    {
      icon: <FaBook className="text-3xl text-purple-600" />,
      title: "Knowledge Base",
      description: "Browse our comprehensive help articles",
      availability: "Always Available",
      action: "Browse Articles"
    },
    {
      icon: <FaVideo className="text-3xl text-red-600" />,
      title: "Video Tutorials",
      description: "Watch step-by-step setup guides",
      availability: "Always Available",
      action: "Watch Videos"
    }
  ];

  const troubleshootingTips = [
    {
      icon: <FaExclamationTriangle className="text-xl text-yellow-600" />,
      problem: "Can't connect to VPN",
      solutions: [
        "Check your internet connection",
        "Try a different server location",
        "Restart the VPN app",
        "Check firewall settings"
      ]
    },
    {
      icon: <FaExclamationTriangle className="text-xl text-yellow-600" />,
      problem: "Slow connection speeds",
      solutions: [
        "Connect to a server closer to you",
        "Try different VPN protocols",
        "Close other bandwidth-heavy apps",
        "Use our Smart Connect feature"
      ]
    },
    {
      icon: <FaExclamationTriangle className="text-xl text-yellow-600" />,
      problem: "App won't start",
      solutions: [
        "Update to the latest version",
        "Restart your device",
        "Check system requirements",
        "Reinstall the application"
      ]
    }
  ];

  const filteredFaq = faqData.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Help & Support
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              Get the help you need to make the most of LaslesVPN. 
              Find answers, tutorials, and connect with our support team.
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Search for help articles, FAQs, or topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 text-lg rounded-lg border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-600">
              Get up and running with LaslesVPN in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="flex flex-wrap justify-center mb-12">
            <button
              onClick={() => setActiveTab('getting-started')}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-colors ${
                activeTab === 'getting-started' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Getting Started
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-colors ${
                activeTab === 'faq' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              FAQ
            </button>
            <button
              onClick={() => setActiveTab('troubleshooting')}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-colors ${
                activeTab === 'troubleshooting' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Troubleshooting
            </button>
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-6 py-3 mx-2 mb-2 rounded-lg font-medium transition-colors ${
                activeTab === 'contact' 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Contact Support
            </button>
          </div>

          {activeTab === 'getting-started' && (
            <div className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Download & Installation</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Windows & macOS</h4>
                        <p className="text-gray-600">Download from our website or app stores</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Mobile Devices</h4>
                        <p className="text-gray-600">Available on iOS App Store and Google Play</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Browser Extensions</h4>
                        <p className="text-gray-600">Chrome, Firefox, and Safari extensions available</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">First Time Setup</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</span>
                      <span className="text-gray-700">Create your account and choose a plan</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</span>
                      <span className="text-gray-700">Download and install the app</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</span>
                      <span className="text-gray-700">Log in with your credentials</span>
                    </div>
                    <div className="flex items-center">
                      <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">4</span>
                      <span className="text-gray-700">Select a server and connect</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4">
                {filteredFaq.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900">{faq.question}</span>
                      {expandedFaq === index ? (
                        <FaChevronUp className="text-gray-500" />
                      ) : (
                        <FaChevronDown className="text-gray-500" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-4 text-gray-600">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'troubleshooting' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h3>
                <p className="text-gray-600">Quick fixes for the most common problems</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {troubleshootingTips.map((tip, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="flex items-center mb-4">
                      {tip.icon}
                      <h4 className="text-lg font-semibold text-gray-900 ml-3">{tip.problem}</h4>
                    </div>
                    <ul className="space-y-2">
                      {tip.solutions.map((solution, solutionIndex) => (
                        <li key={solutionIndex} className="flex items-start">
                          <FaCheckCircle className="text-green-500 mt-1 mr-2 flex-shrink-0 text-sm" />
                          <span className="text-gray-600 text-sm">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                <p className="text-gray-600">Choose the support option that works best for you</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {supportOptions.map((option, index) => (
                  <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <div className="flex justify-center mb-4">
                      {option.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{option.title}</h4>
                    <p className="text-gray-600 mb-3">{option.description}</p>
                    <p className="text-sm text-green-600 font-medium mb-4">{option.availability}</p>
                    <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
                      {option.action}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Our support team is here 24/7 to help you with any questions or issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/pricing"
              className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              View Plans
            </Link>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300">
              Contact Support
            </button>
          </div>
        </div>
      </section>
   
    </div>
  );
};

export default HelpPage;
