import { FaThumbsUp, FaStar, FaShieldAlt, FaRocket } from 'react-icons/fa';
const StatsPage = ({ showElements }) => {
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
    return (
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
    )
}

export default StatsPage;