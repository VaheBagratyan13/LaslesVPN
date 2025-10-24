import { FaQuoteLeft, FaQuoteRight, FaChevronLeft, FaChevronRight, FaShieldAlt, FaStar } from 'react-icons/fa'; 
    const FeaturedPage = ({ showElements, testimonials, currentTestimonial, nextTestimonial, prevTestimonial, renderStars }) => {
    return (
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

          <div className={`bg-gray-50 rounded-2xl p-8 md:p-12 relative transition-all duration-700 transform mx-16 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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
              className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-red-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
            >
              <FaChevronLeft className="text-white " />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute -right-16 top-1/2  transform -translate-y-1/2 bg-red-600 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 z-10"
            >
              <FaChevronRight className="text-white" />
            </button>
          </div>
        </div>
      </section>
    )
}

export default FeaturedPage;