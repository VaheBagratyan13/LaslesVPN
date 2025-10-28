import React from 'react';

const AskedPage = () => {
    const questions = [
        {
            question: "Can I change my plan anytime?",
            answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
        },
        {
            question: "Is there a money-back guarantee?",
            answer: "We offer a 30-day money-back guarantee on all plans. If you're not satisfied, we'll refund your payment."
        },
        {
            question: "How many devices can I connect?",
            answer: "The number of simultaneous connections depends on your plan: Basic (5), Premium (10), Enterprise (unlimited)."
        },
        {
            question: "Do you offer customer support?",
            answer: "Yes, we provide 24/7 customer support via email and live chat for Premium and Enterprise users."
        }
    ]
    return (
        <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Frequently Asked Questions
        </h2>
        <div className="space-y-6">
        {questions.map((question, index) => (
            <div key={index} className="border-b border-gray-200 pb-4" style={{ transitionDelay: `${index * 100}ms` }}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{question.question}</h3>
                    <p className="text-gray-600">{question.answer}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default AskedPage;