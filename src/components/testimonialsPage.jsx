import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import CustomerPage from './testimonials/customerPage';
import StatsPage from './testimonials/statsPage';
import FeaturedPage from './testimonials/featuredPage';
import FeedBackPage from './testimonials/feedBackPage';
import VideoStoryPage from './testimonials/videoStoryPage';
import FootPage from './testimonials/footPage';
import { 
  FaStar
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
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
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

    <CustomerPage />

    <StatsPage showElements={showElements} />

    <FeaturedPage showElements={showElements} testimonials={testimonials} currentTestimonial={currentTestimonial} nextTestimonial={nextTestimonial} prevTestimonial={prevTestimonial} renderStars={renderStars} />

    <FeedBackPage showElements={showElements} testimonials={testimonials} renderStars={renderStars} />

    <VideoStoryPage showElements={showElements} />

    <FootPage />
    </div>
  );
};
 
export default TestimonialsPage;

