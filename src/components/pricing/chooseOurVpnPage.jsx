import { FaLock, FaGlobe, FaShieldAlt } from 'react-icons/fa';
const ChooseOurVpnPage = () => {  
    const features = [
        {
            title: "Military-Grade Security",
            description: "Advanced encryption protocols to keep your data safe and secure from hackers and surveillance.",
            icon: <FaLock className="text-2xl text-green-600" />
        },
        {
            title: "Global Server Network",
            description: "Access content from anywhere with our extensive network of servers across 50+ countries.",
            icon: <FaGlobe className="text-2xl text-blue-600" />
        },
        {
            title: "No-Logs Policy",
            description: "We don't track, collect, or store your online activities. Your privacy is our priority.",
            icon: <FaShieldAlt className="text-2xl text-purple-600" />
        }

    ]
    return (

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Why Choose Our VPN?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                        {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default ChooseOurVpnPage;