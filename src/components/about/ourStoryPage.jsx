import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
const OurStoryPage = ({ showElements }) => {
    return (
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
                protecting over 1 million users across 90+ countries. We&apos;ve never wavered from our core mission: 
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
    )
}

export default OurStoryPage;