import { Link } from 'react-router-dom';
const FootPage = ({ showElements }) => {
    return (
        
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Experience These Features?
        </h2>
        <p className="text-xl text-red-100 mb-8">
          Join millions of users who trust LaslesVPN for their online security and privacy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/pricing"
            className="px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            View Pricing Plans
          </Link>
          <Link
            to="/signup"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-300"
          >
            Start Free Trial
          </Link>
        </div>
      </div>
    </section>
    )
}

export default FootPage;