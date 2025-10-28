import React, { useState, useEffect } from "react";
const MapPage = () => {
    const [showElements, setShowElements] = useState(false);
    const apps = [
        {
            name: "NETFLIX",
            image: "https://lasles-vpn-landing-page.vercel.app/assets/sponsors/Netflix.png"
        },
        {
            name: "SPOTIFY",
            image: "https://lasles-vpn-landing-page.vercel.app/assets/sponsors/Spotify.png"
        },
        {
            name: "AMAZON",
            image: "https://lasles-vpn-landing-page.vercel.app/assets/sponsors/Amazon.png"
        },
        {
            name: "DISCORD",
            image: "https://lasles-vpn-landing-page.vercel.app/assets/sponsors/Discord.png"
        },
        {
            name: "REDIT",
            image: "https://lasles-vpn-landing-page.vercel.app/assets/sponsors/Reddit.png"
        },
    ]
    useEffect(() => {
        const timer = setTimeout(() => setShowElements(true), 300);
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="min-h-screen bg-gray-100 w-full px-4 sm:px-6 md:px-16 flex flex-col justify-center items-center py-8">
            <div className="flex flex-col justify-center items-center gap-6 md:gap-8 mb-8">
                <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    Huge Global Network of Fast VPN
                </h1>
                <p className={`text-sm sm:text-md md:text-lg text-gray-700 text-center max-w-2xl transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    See LaslesVPN everywhere to make it easier for you when you move locations.
                </p>
            </div>
            
            
            <div className="w-full max-w-4xl mb-8 md:mb-12">
                <img 
                    src="https://lasles-vpn-landing-page.vercel.app/assets/huge-global-illustration.svg" 
                    alt="Global VPN Network Map" 
                    className={`w-full h-auto object-contain transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} 
                />
            </div>
            
       
            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-8 justify-items-center items-center">
                    {apps.map((app) => (
                        <div 
                            key={app.name} 
                            className="flex justify-center items-center p-2 hover:scale-105 transition-transform duration-300"
                        >
                            <img 
                                src={app.image} 
                                alt={app.name} 
                                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain filter grayscale hover:grayscale-0 transition-all duration-300" 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MapPage;