const FeedBackPage = ({ showElements, testimonials, renderStars }) => {
    return (
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
                
                <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.comment}&rdquo;</p>
                
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
    )
}

export default FeedBackPage;