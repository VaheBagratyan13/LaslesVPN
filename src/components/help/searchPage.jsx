import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
const SearchPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
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
    )
}

export default SearchPage;