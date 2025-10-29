import React, { useState, useEffect } from "react";
import { FaStar, FaArrowRight, FaThumbsUp, FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";
const CommentPage = () => {
    const [showElements, setShowElements] = useState(false);
    const comments = [
        {
            name: "Viezh Robert",
            country: "Warzaw, Poland",
            comment: "Wow... I am very happy to use this VPN, it turned out to be more than ",
            rating: "5",
            image: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=3005"
        },
        
        {
            name: "Yessica Christy",
            country: "Shanxi, China",
            comment: "I like it because I enjoy using it and the service is very good, I recommend it!",
            rating: "5",
            image: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=3005"
        },
        
        {
            name: "Kim Young Jou",
            country: "Seoul, South Korea",
            comment: "I love using it, it seems to be very good. The service is very good, I recommend it!",
            rating: "5",
            image: "https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=3005"
        },
        
    ]
    useEffect(() => {
        const timer = setTimeout(() => setShowElements(true), 300);
        return () => clearTimeout(timer);
    }, []);
    return (
        <section className="min-h-screen bg-gray-100 w-full px-4 sm:px-6 md:px-16 flex flex-col justify-center items-center py-8">
            <div className="flex flex-col justify-center items-center gap-8 mb-8">
                <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>Trusted by Thousands of Happy Customer</h1>
                <p className={`text-sm sm:text-md md:text-lg text-gray-700 text-center max-w-2xl transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                    These are the stories of our customers who have joined us with great pleasure when using this crazy feature.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch w-full max-w-6xl">
                {comments.map((comment) => (
                    <div className={`flex flex-col justify-between items-center gap-2 shadow-lg p-4 md:p-6 border-2 border-gray-200 rounded-lg h-full transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} key={comment.name}>
                        <div className="flex flex-row justify-end items-end gap-2">
                            <p className="text-sm sm:text-md md:text-lg text-gray-700 text-center italic">{comment.rating} <FaStar className="text-yellow-500" /></p> 
                        </div>                     
                            <img src={comment.image} alt={comment.name} className={`w-20 rounded-full h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} />
                        <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-center transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{comment.name}</h1>
                        <p className={`text-sm sm:text-md md:text-lg text-gray-700 text-center italic transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{comment.country}</p>
                        <p className={`text-sm sm:text-md md:text-lg text-gray-700 text-center italic transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{comment.comment}</p>
                        
                        {/* Action Buttons */}
                        <div className={`flex gap-2 mt-4 transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <button className="flex items-center gap-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300 text-sm">
                                <FaThumbsUp className="text-xs" />
                                Like
                            </button>
                            <button className="flex items-center gap-1 px-3 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-300 text-sm">
                                <FaShare className="text-xs" />
                                Share
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            
            
            <div className={`mt-16 text-center transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Ready to Share Your Experience?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Join thousands of satisfied customers and share your LaslesVPN experience with others.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/testimonials"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition-colors duration-300"
                    >
                        View All Testimonials
                        <FaArrowRight className="text-sm" />
                    </Link>
                    <Link
                        to="/signup"
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-red-600 text-red-600 font-bold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300"
                    >
                        Start Your Journey
                        <FaArrowRight className="text-sm" />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CommentPage;