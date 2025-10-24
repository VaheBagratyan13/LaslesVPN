import { FaDesktop, FaMobile, FaTablet, FaTv, FaGamepad, FaNetworkWired, FaCheck } from 'react-icons/fa';
const DeviceFeaturesPage = ({ showElements }) => {
    const deviceFeatures = [
        {
          icon: <FaDesktop className="text-3xl text-blue-600" />,
          title: "Windows & macOS",
          description: "Native apps with advanced features and intuitive interface",
          features: ["Kill switch", "Split tunneling", "Auto-connect", "Custom DNS"]
        },
        {
          icon: <FaMobile className="text-3xl text-green-600" />,
          title: "iOS & Android",
          description: "Mobile-optimized apps with touch-friendly controls",
          features: ["One-tap connect", "Location spoofing", "App protection", "Battery optimization"]
        },
        {
          icon: <FaTablet className="text-3xl text-purple-600" />,
          title: "Tablets",
          description: "Full-featured apps for iPad and Android tablets",
          features: ["Large screen UI", "Touch gestures", "Multi-window support", "Sync settings"]
        },
        {
          icon: <FaTv className="text-3xl text-red-600" />,
          title: "Smart TVs",
          description: "Stream securely on your smart TV and streaming devices",
          features: ["4K streaming", "Remote control", "Auto-start", "Parental controls"]
        },
        {
          icon: <FaGamepad className="text-3xl text-yellow-600" />,
          title: "Gaming Consoles",
          description: "Reduce ping and protect your gaming sessions",
          features: ["Low latency", "DDoS protection", "Region switching", "Gaming servers"]
        },
        {
          icon: <FaNetworkWired className="text-3xl text-indigo-600" />,
          title: "Routers",
          description: "Protect all devices on your home network",
          features: ["Router configuration", "Network-wide protection", "Guest network", "Parental controls"]
        }
      ];
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Works on All Your Devices
            </h2>
            <p className="text-xl text-gray-600">
              Secure all your devices with native apps and easy setup
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {deviceFeatures.map((device, index) => (
              <div key={index} className={`bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex items-center mb-4">
                  {device.icon}
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">{device.title}</h3>
                    <p className="text-sm text-gray-600">{device.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {device.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <FaCheck className="text-green-500 mr-2 text-sm" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default DeviceFeaturesPage;