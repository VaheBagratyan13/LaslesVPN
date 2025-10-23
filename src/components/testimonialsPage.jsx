import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { 
  FaStar, 
  FaQuoteLeft, 
  FaQuoteRight, 
  FaChevronLeft, 
  FaChevronRight,
  FaPlay,
  FaThumbsUp,
  FaShieldAlt,
  FaRocket
} from 'react-icons/fa';

const TestimonialsPage = () => {
  const [showElements, setShowElements] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Software Engineer",
      location: "San Francisco, USA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      comment: "LaslesVPN has been a game-changer for my work. I travel frequently and need secure access to company resources. The connection is always stable and fast, no matter where I am in the world.",
      verified: true,
      plan: "Premium"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Digital Marketer",
      location: "Toronto, Canada",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      comment: "I've tried many VPNs before, but LaslesVPN stands out. The customer support is incredible, and the app is so easy to use. My family and I feel much safer online now.",
      verified: true,
      plan: "Basic"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Content Creator",
      location: "Barcelona, Spain",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      comment: "As a content creator, I need to access content from different regions. LaslesVPN makes this seamless. The streaming servers are optimized perfectly for my needs.",
      verified: true,
      plan: "Premium"
    },
    {
      id: 4,
      name: "David Kim",
      role: "Business Owner",
      location: "Seoul, South Korea",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      comment: "The enterprise plan has been perfect for our company. We can secure all our devices and our team can work remotely without any security concerns. Highly recommended!",
      verified: true,
      plan: "Enterprise"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      role: "Student",
      location: "Melbourne, Australia",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      comment: "I use LaslesVPN for my studies and personal browsing. The student discount made it affordable, and the performance is excellent. No more worrying about privacy on public WiFi.",
      verified: true,
      plan: "Basic"
    },
    {
      id: 6,
      name: "Ahmed Hassan",
      role: "Journalist",
      location: "Cairo, Egypt",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
      rating: 5,
      comment: "In my line of work, online security is crucial. LaslesVPN provides the protection I need while maintaining fast speeds. The no-logs policy gives me complete peace of mind.",
      verified: true,
      plan: "Premium"
    }
  ];

  const stats = [
    {
      icon: <FaThumbsUp className="text-4xl text-green-600" />,
      number: "98%",
      label: "Customer Satisfaction",
      description: "Based on user reviews"
    },
    {
      icon: <FaStar className="text-4xl text-yellow-500" />,
      number: "4.9/5",
      label: "Average Rating",
      description: "Across all platforms"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-blue-600" />,
      number: "1M+",
      label: "Happy Users",
      description: "Worldwide community"
    },
    {
      icon: <FaRocket className="text-4xl text-red-600" />,
      number: "24/7",
      label: "Support",
      description: "Always here to help"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-sm ${
          index < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Customer Testimonials
            </h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto">
              See what our customers are saying about LaslesVPN. 
              Real stories from real users who trust us with their online security.
            </p>
          </div>
        </div>
      </section>

      
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
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

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Testimonial
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our valued customers about their experience
            </p>
          </div>

          <div className={`bg-gray-50 rounded-2xl p-8 md:p-12 relative transition-all duration-700 transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <FaQuoteLeft className="text-4xl text-red-600 mb-6" />
            
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
                
                <blockquote className="text-lg md:text-xl text-gray-700 mb-6 italic">
                  "{testimonials[currentTestimonial].comment}"
                </blockquote>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-gray-600">
                      {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                    </p>
                    <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                      {testimonials[currentTestimonial].plan} Plan
                    </span>
                  </div>
                  
                  {testimonials[currentTestimonial].verified && (
                    <div className="mt-4 md:mt-0 flex items-center text-green-600">
                      <FaShieldAlt className="mr-2" />
                      <span className="text-sm font-medium">Verified Customer</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <FaQuoteRight className="text-4xl text-red-600 absolute bottom-4 right-4" />
            
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaChevronLeft className="text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <FaChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from our global community of users
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-gray-700 mb-4 italic">"{testimonial.comment}"</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{testimonial.location}</span>
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                    {testimonial.plan}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Watch our customers share their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${video * 100}ms` }}>
                <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                  <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors duration-300">
                    <FaPlay className="text-xl" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Customer Story #{video}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Watch how LaslesVPN has helped our customers stay secure online.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Happy Customers
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Experience the same security and peace of mind that thousands of users trust every day.
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
 
export default TestimonialsPage;

