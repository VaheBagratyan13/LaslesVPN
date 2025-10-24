import { useState } from 'react';
const ActionVpnPage = ({ showElements }) => {
    const [isConnected, setIsConnected] = useState(false);
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See LaslesVPN in Action
            </h2>
            <p className="text-xl text-gray-600">
              Experience our features with this interactive demo
            </p>
          </div>

          <div className={`bg-gray-900 rounded-2xl p-8 text-white ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className={`w-4 h-4 rounded-full mr-3 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-lg font-semibold">
                  {isConnected ? 'Connected' : 'Disconnected'}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsConnected(!isConnected)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    isConnected 
                      ? 'bg-red-600 hover:bg-red-700' 
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {isConnected ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Your IP Address</h3>
                <p className="text-sm text-gray-300">
                  {isConnected ? '192.168.1.100 (Protected)' : '203.0.113.1 (Exposed)'}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Server Location</h3>
                <p className="text-sm text-gray-300">
                  {isConnected ? 'New York, USA' : 'Not Connected'}
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">Encryption</h3>
                <p className="text-sm text-gray-300">
                  {isConnected ? 'AES-256 Active' : 'No Protection'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ActionVpnPage;