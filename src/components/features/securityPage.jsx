import { FaCheckCircle, FaLock, FaGlobe, FaEyeSlash, FaRocket, FaShieldAlt, FaWifi } from 'react-icons/fa';
const SecurityPage = ({ showElements }) => {
    const coreFeatures = [
        {
          icon: <FaLock className="text-4xl text-red-600" />,
          title: "Military-Grade Encryption",
          description: "AES-256 encryption protects your data with the same security standard used by banks and governments worldwide.",
          details: [
            "256-bit encryption keys",
            "Perfect Forward Secrecy",
            "Multiple encryption protocols",
            "End-to-end security"
          ],
          color: "red"
        },
        {
          icon: <FaGlobe className="text-4xl text-blue-600" />,
          title: "Global Server Network",
          description: "Access content from anywhere with our extensive network of high-speed servers across 90+ countries.",
          details: [
            "200+ server locations",
            "Optimized for streaming",
            "Low latency connections",
            "Smart server selection"
          ],
          color: "blue"
        },
        {
          icon: <FaEyeSlash className="text-4xl text-green-600" />,
          title: "No-Logs Policy",
          description: "We never track, collect, or store your online activities. Your privacy is our top priority.",
          details: [
            "Zero data collection",
            "Independently audited",
            "Privacy by design",
            "Transparent policies"
          ],
          color: "green"
        },
        {
          icon: <FaRocket className="text-4xl text-purple-600" />,
          title: "Lightning Fast Speeds",
          description: "Experience blazing-fast connection speeds with our optimized network infrastructure and smart routing.",
          details: [
            "Unlimited bandwidth",
            "Optimized protocols",
            "Smart routing",
            "Speed testing tools"
          ],
          color: "purple"
        },
        {
          icon: <FaShieldAlt className="text-4xl text-yellow-600" />,
          title: "Kill Switch Protection",
          description: "Automatically disconnect from the internet if your VPN connection drops to prevent data leaks.",
          details: [
            "Automatic disconnection",
            "Network leak protection",
            "DNS leak prevention",
            "IPv6 leak protection"
          ],
          color: "yellow"
        },
        {
          icon: <FaWifi className="text-4xl text-indigo-600" />,
          title: "Public WiFi Security",
          description: "Secure your connection on public WiFi networks and protect against hackers and snoopers.",
          details: [
            "WiFi hotspot protection",
            "Man-in-the-middle prevention",
            "Secure public browsing",
            "Automatic protection"
          ],
          color: "indigo"
        }
      ];
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Security Features
            </h2>
            <p className="text-xl text-gray-600">
              Advanced protection features that keep you safe online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="flex justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <FaCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
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

export default SecurityPage;