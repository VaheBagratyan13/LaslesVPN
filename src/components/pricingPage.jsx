import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaShieldAlt, FaGlobe, FaLock, FaRocket, FaCrown, FaBuilding } from 'react-icons/fa';
import Navbar from './Navbar';      
const PricingPage = () => {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const pricingRef = useRef(null);
    const pricingPlans = [
        {
            name: 'Basic',
            icon: FaShieldAlt,
            monthlyPrice: 9.99,
            yearlyPrice: 99.99,
            description: 'Perfect for personal use and light browsing',
            features: [
                '5 simultaneous connections',
                '50+ server locations',
                'Unlimited bandwidth',
                'Basic encryption',
                '24/7 email support',
                'No logs policy',
                'Kill switch',
                'Basic ad blocker'
            ],
            popular: false,
            color: 'blue'
        },
        {
            name: 'Premium',
            icon: FaRocket,
            monthlyPrice: 19.99,
            yearlyPrice: 199.99,
            description: 'Best for families and power users',
            features: [
                '10 simultaneous connections',
                '100+ server locations',
                'Unlimited bandwidth',
                'Military-grade encryption',
                '24/7 live chat support',
                'No logs policy',
                'Kill switch',
                'Advanced ad blocker',
                'Malware protection',
                'Split tunneling',
                'P2P support',
                'Smart DNS'
            ],
            popular: true,
            color: 'red'
        },
        {
            name: 'Enterprise',
            icon: FaBuilding,
            monthlyPrice: 49.99,
            yearlyPrice: 499.99,
            description: 'For businesses and organizations',
            features: [
                'Unlimited connections',
                '200+ server locations',
                'Unlimited bandwidth',
                'Military-grade encryption',
                'Dedicated account manager',
                'No logs policy',
                'Kill switch',
                'Advanced ad blocker',
                'Malware protection',
                'Split tunneling',
                'P2P support',
                'Smart DNS',
                'Custom server deployment',
                'API access',
                'Priority support',
                'Team management dashboard'
            ],
            popular: false,
            color: 'purple'
        }
    ];

    const getColorClasses = (color, isPopular) => {
        const colors = {
            blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                button: 'bg-blue-600 hover:bg-blue-700',
                text: 'text-blue-600'
            },
            red: {
                bg: 'bg-red-50',
                border: 'border-red-200',
                button: 'bg-red-600 hover:bg-red-700',
                text: 'text-red-600'
            },
            purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                button: 'bg-purple-600 hover:bg-purple-700',
                text: 'text-purple-600'
            }
        };
        return colors[color];
    };

    return (
        <div ref={pricingRef} className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <Navbar />      
            <div className="max-w-7xl mx-auto pt-16">
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {pricingPlans.map((plan, index) => {
                        const IconComponent = plan.icon;
                        const colorClasses = getColorClasses(plan.color, plan.popular);
                        const price = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
                        const originalPrice = billingCycle === 'yearly' ? plan.monthlyPrice * 12 : null;
                        const savings = billingCycle === 'yearly' ? originalPrice - plan.yearlyPrice : 0;

                        return (
                            <div
                                key={plan.name}
                                className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                                    plan.popular 
                                        ? 'border-red-500 transform scale-105' 
                                        : 'border-gray-200'
                                } transition-all duration-300 hover:shadow-xl`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-red-600 text-white">
                                            <FaCrown className="mr-1" />
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="p-8">
                                    <div className="text-center mb-8">
                                        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${colorClasses.bg} mb-4`}>
                                            <IconComponent className={`text-2xl ${colorClasses.text}`} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                        <p className="text-gray-600 mb-4">{plan.description}</p>
                                        
                                        <div className="mb-4">
                                            <span className="text-4xl font-bold text-gray-900">${price}</span>
                                            <span className="text-gray-600">/{billingCycle === 'monthly' ? 'month' : 'year'}</span>
                                            {billingCycle === 'yearly' && savings > 0 && (
                                                <div className="mt-2">
                                                    <span className="text-sm text-gray-500 line-through">${originalPrice}/year</span>
                                                    <span className="ml-2 text-sm text-green-600 font-medium">
                                                        Save ${savings.toFixed(2)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    
                                    <div className="mb-8">
                                        <ul className="space-y-3">
                                            {plan.features.map((feature, featureIndex) => (
                                                <li key={featureIndex} className="flex items-start">
                                                    <FaCheck className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                                                    <span className="text-gray-700">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                  
                                    <button

                                        className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-colors ${colorClasses.button} focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                            plan.popular ? 'focus:ring-red-500' : 'focus:ring-gray-500'
                                        }`}
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        Why Choose Our VPN?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                                <FaLock className="text-2xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Military-Grade Security</h3>
                            <p className="text-gray-600">
                                Advanced encryption protocols to keep your data safe and secure from hackers and surveillance.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
                                <FaGlobe className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Server Network</h3>
                            <p className="text-gray-600">
                                Access content from anywhere with our extensive network of servers across 50+ countries.
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-4">
                                <FaShieldAlt className="text-2xl text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No-Logs Policy</h3>
                            <p className="text-gray-600">
                                We don't track, collect, or store your online activities. Your privacy is our priority.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Can I change my plan anytime?
                            </h3>
                            <p className="text-gray-600">
                                Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                            </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Is there a money-back guarantee?
                            </h3>
                            <p className="text-gray-600">
                                We offer a 30-day money-back guarantee on all plans. If you're not satisfied, we'll refund your payment.
                            </p>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                How many devices can I connect?
                            </h3>
                            <p className="text-gray-600">
                                The number of simultaneous connections depends on your plan: Basic (5), Premium (10), Enterprise (unlimited).
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Do you offer customer support?
                            </h3>
                            <p className="text-gray-600">
                                Yes, we provide 24/7 customer support via email and live chat for Premium and Enterprise users.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPage;
