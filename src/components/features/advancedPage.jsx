import { FaChartLine, FaBolt, FaUserShield, FaKey, FaCloud, FaHdd } from 'react-icons/fa';
const AdvancedPage = ({ showElements }) => {
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
    return (
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
    )
}

export default AdvancedPage;