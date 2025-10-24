import { FaPlay } from 'react-icons/fa';
const VideoStoryPage = ({ showElements }) => {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              Watch our customers share their experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((video) => (
              <div key={video} className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: `${video * 100}ms` }}>
                <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                  <button className="bg-red-600 text-white p-4 rounded-full hover:bg-red-700 transition-colors duration-300">
                    <FaPlay className="text-xl" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 mb-2">
                    Customer Story #{video}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Watch how LaslesVPN has helped our customers stay secure online.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default VideoStoryPage;