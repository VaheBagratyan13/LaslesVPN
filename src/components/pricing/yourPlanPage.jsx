import React from 'react';

const YourPlanPage = ({ billingCycle, setBillingCycle }) => {
    return (
        <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your VPN Plan
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Secure your internet connection with our premium VPN service. 
            Choose the plan that fits your needs and protect your privacy online.
        </p>
        
        <div className="flex items-center justify-center mb-8">
            <span className={`text-lg font-medium ${billingCycle === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
            </span>
            <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="mx-4 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
                <span
                    className={`${
                        billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                />
            </button>
            <span className={`text-lg font-medium ${billingCycle === 'yearly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Yearly
            </span>
            {billingCycle === 'yearly' && (
                <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Save 17%
                </span>
            )}
        </div>
    </div>
    )
}

export default YourPlanPage;