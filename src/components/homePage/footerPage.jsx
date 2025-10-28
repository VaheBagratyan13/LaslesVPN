import React from 'react';

const FooterPage = () => {
    const footerData = [
        {
            title: "Product",
            items: ["Features", "Pricing", "Integrations", "Enterprise", "Solutions"],
        },
        {
            title: "Company",
            items: ["About", "Contact", "Team", "Blog", "Careers"],
        },
        {
            title: "Resources",
            items: ["Prospects", "Customers", "Press", "Experts", "Developers"],
        },
    ]
    return (
        <section className="bg-gray-100 flex flex-col items-center justify-center">
                <div className="flex flex-col md:flex-row items-start justify-start w-full px-6 md:px-32 gap-6 md:gap-0">
                {footerData.map((item, index) => (
                    <div key={index} className="flex flex-col items-start justify-start w-full md:w-1/3 p-4">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">{item.title}</h2>
                        <ul className="flex flex-col items-start justify-start">
                            {item.items.map((item, index) => (
                                <li key={index} className="text-gray-500 mb-2 text-sm sm:text-md md:text-lg hover:text-red-500 cursor-pointer">{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="border-t border-b border-gray-300 w-full my-4"></div>
            <div className="flex flex-col sm:flex-row items-center justify-center my-4">
                <p className="text-gray-500 mb-2 text-sm sm:text-md md:text-lg text-center">© 2025 All rights reserved.</p>
            </div>
        </section>
    )
}

export default FooterPage;