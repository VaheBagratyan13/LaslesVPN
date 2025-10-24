import { FaCheckCircle } from 'react-icons/fa';
const ProtocolsPage = ({ showElements }) => {
    const securityFeatures = [
        {
          title: "Encryption Protocols",
          options: ["OpenVPN", "IKEv2", "WireGuard", "L2TP/IPSec"],
          description: "Multiple protocols to choose from based on your needs"
        },
        {
          title: "DNS Protection",
          options: ["DNS Leak Protection", "Custom DNS", "IPv6 Leak Protection"],
          description: "Complete DNS security to prevent data leaks"
        },
        {
          title: "Network Security",
          options: ["Kill Switch", "Firewall Integration", "Port Forwarding"],
          description: "Advanced network protection features"
        }
      ];
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security Protocols & Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose from multiple security protocols and advanced options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((security, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{security.title}</h3>
                <p className="text-gray-600 mb-6">{security.description}</p>
                <div className="space-y-3">
                  {security.options.map((option, optionIndex) => (
                    <div key={optionIndex} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{option}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default ProtocolsPage;