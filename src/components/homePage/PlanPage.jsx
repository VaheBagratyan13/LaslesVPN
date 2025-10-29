import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
    const PlanPage = () => {
    const images = 'https://lasles-vpn-landing-page.vercel.app/assets/plan/Standard.svg'
    const plans = [
        {
            title: "Free Plan",
            price: "Free",
            features: ["Basic Features", "Limited Storage", "Limited Bandwidth", "Limited Devices", "Limited Users"],
        },
        {
            title: "Standard Plan",
            price: "$9.99/month",
            features: ["Standard Features", "Unlimited Storage", "Unlimited Bandwidth", "Unlimited Devices", "Unlimited Users"],
        },
        {
            title: "Premium Plan",
            price: "$19.99/month",
            features: ["Premium Features", "Unlimited Storage", "Unlimited Bandwidth", "Unlimited Devices", "Unlimited Users"],
        },
    ]
    return (
        <section className="min-h-screen bg-gray-100 w-full px-4 sm:px-6 md:px-16 flex flex-col justify-center items-center py-8">
            <div className="flex flex-col justify-center items-center gap-8 mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center">Choose Your Plan</h1>
                <p className="text-sm sm:text-md md:text-lg text-gray-700 text-center">Let&apos;s choose the package that is best for you and explore it</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch w-full max-w-6xl">
                {plans.map((plan) => (
                    <div className="flex flex-col justify-between items-center gap-4 shadow-lg p-4 md:p-6 border-2 border-gray-200 rounded-lg h-full" key={plan.title}>
                        <div className="flex flex-col items-center gap-4 w-full">
                            <img className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain" src={images} alt={plan.title} />
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-center">{plan.title}</h1>
                            <p className="text-sm sm:text-md md:text-lg text-gray-700 text-center">{plan.price}</p>
                            <ul className="flex flex-col justify-center items-start gap-2 w-full">
                                {plan.features.map((feature) => (
                                    
                                    <li className="flex flex-row justify-start items-center gap-2 text-sm sm:text-md" key={feature}> 
                                        <FaCheckCircle className="text-green-600 flex-shrink-0"/>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Link to="/signup">
                        <button  className="w-full px-4 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 text-xs sm:text-sm md:text-lg lg:text-xl rounded-full border-2 border-red-600 text-red-600 font-medium hover:bg-red-600 hover:text-white transition-colors duration-300 mt-4">Select</button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default PlanPage;