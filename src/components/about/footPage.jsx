import { Link } from 'react-router-dom';
const FootPage = ({ showElements }) => {
    return (
        <section className="py-16 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transition-all duration-700 transform delay-1100 ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Mission?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Become part of our growing community of privacy-conscious users. 
              Experience the internet the way it should be - secure, private, and free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/pricing"
                className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
              >
                View Pricing Plans
              </Link>
              <Link
                to="/signup"
                className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}

export default FootPage;