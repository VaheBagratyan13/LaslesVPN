import React from 'react';
import { Link } from 'react-router-dom';
const SubscribePage = () => {
  return (
    <section  className="bg-white py-16 flex justify-center px-4 sm:px-6 md:px-16">
      <div className="bg-white shadow-2xl border-2 border-gray-200 rounded-lg p-10 text-center w-full max-w-4xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Subscribe Now for Special Features
        </h2>
        <p className="text-gray-500 mb-6 text-sm sm:text-md md:text-lg">
          Let’s subscribe with us and find the fun. Stay updated with our latest features and offers.
        </p>
        <Link to="/pricing"> 
            <button className="bg-red-500 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-medium hover:bg-red-600 transition cursor-pointer">
              Subscribe Now
            </button>
        </Link>
      </div>
    </section>
  );
};

export default SubscribePage;
