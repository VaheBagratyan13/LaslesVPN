import React, { useState, useRef } from 'react';
import { FaCheck, FaShieldAlt, FaRocket, FaCrown, FaBuilding } from 'react-icons/fa';
import Navbar from './Navbar';      
import ChooseOurVpnPage from './pricing/chooseOurVpnPage';
import AskedPage from './pricing/askedPage';
import YourPlanPage from './pricing/yourPlanPage';
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

    const getColorClasses = (color) => {
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
            
                <YourPlanPage billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {pricingPlans.map((plan) => {
                        const IconComponent = plan.icon;
                        const colorClasses = getColorClasses(plan.color);
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

                <ChooseOurVpnPage />
                <AskedPage />
            </div>
        </div>
    );
};

export default PricingPage;
