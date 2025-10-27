    import { FaDownload, FaRocket, FaGlobe } from 'react-icons/fa';
    const QuickPage = ({ showElements }) => {
    const quickStartSteps = [
        {
          icon: <FaDownload className="text-2xl text-red-600" />,
          title: "Download & Install",
          description: "Get our app from your device's app store or download directly from our website"
        },
        {
          icon: <FaRocket className="text-2xl text-blue-600" />,
          title: "Create Account",
          description: "Sign up with your email and choose your preferred plan"
        },
        {
          icon: <FaGlobe className="text-2xl text-green-600" />,
          title: "Connect & Browse",
          description: "Select a server location and start browsing securely"
        }
      ];
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto pt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quick Start Guide
            </h2>
            <p className="text-xl text-gray-600">
              Get up and running with LaslesVPN in just a few simple steps
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default QuickPage;