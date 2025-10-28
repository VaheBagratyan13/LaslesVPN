// import { FaCheckCircle } from "react-icons/fa";
// const NotebookPage = () => {
//     const features = [
//         {
//             title: "Powerful Features",
//             icon: <FaCheckCircle />,
//         },
//         {
//             title: " Internet without borders.",
//             icon: <FaCheckCircle />,
//         },
//         {
//             title: "Supercharged VPN.",
//             icon: <FaCheckCircle />,
//         },
//         {
//             title: "No specific time limits.",
//             icon: <FaCheckCircle />,
//         },
//     ]
//   return (
//     <section className="h-auto w-full px-4 sm:px-6 md:px-16 flex flex-row justify-center items-center gap-16">
//         <div className="flex flex-col justify-center items-start gap-4">
//             <img className="w-full max-w-lg h-full max-h-lg"  src="https://lasles-vpn-landing-page.vercel.app/assets/features-illustration.svg" alt="notebook" />
//         </div>
//         <div className="flex flex-col justify-center items-start gap-4">
//             <div className="flex flex-col justify-center items-start gap-4 w-full">
//                 <h1 className="text-4xl font-bold">We Provide Many Features You Can Use</h1>
//                 <p className="text-lg">You can explore the features that we provide with fun and have their own functions each feature.</p>
//             </div>
//             <div className="flex flex-col justify-center items-start gap-4 w-full">
//                 {features.map((feature) => (
//                     <div className="flex flex-row justify-center items-center gap-4" key={feature.title}>
//                         <div className="w-10 h-10 rounded-full bg-green-600 flex justify-center items-center">{feature.icon}</div>
//                         <h1>{feature.title}</h1>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </section>
//   );
// };

// export default NotebookPage;
import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
const NotebookPage = () => {
  const [showElements, setShowElements] = useState(false);
  const features = [
    { title: "Powerful Features", icon: <FaCheckCircle className="text-green-600"/> },
    { title: "Internet without borders.", icon: <FaCheckCircle className="text-green-600"/> },
    { title: "Supercharged VPN.", icon: <FaCheckCircle className="text-green-600"/> },
    { title: "No specific time limits.", icon: <FaCheckCircle className="text-green-600"/> },
  ];
  useEffect(() => {
    const timer = setTimeout(() => setShowElements(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full bg-gray-100 min-h-screen px-4 sm:px-6 md:px-16 py-8 flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
      
     
      <div className="flex justify-center items-center w-full md:w-1/2">
        <img
          className={`w-full max-h-lg  max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          src="https://lasles-vpn-landing-page.vercel.app/assets/features-illustration.svg"
          alt="notebook"
        />
      </div>

     
      <div className="flex flex-col justify-center items-start gap-6 w-full md:w-1/2">
        
       
        <div className="flex flex-col gap-4">
          <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            We Provide Many Features You Can Use
          </h1>
          <p className={`text-sm sm:text-md md:text-lg text-gray-700 transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            You can explore the features that we provide with fun and have their own functions each feature.
          </p>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {features.map((feature) => (
                <div className={`flex flex-row justify-start items-center gap-4 w-full transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} key={feature.title}>
                {feature.icon}
              
              <h2 className={`text-sm sm:text-md md:text-lg transition-all duration-700 ease-out transform ${showElements ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>{feature.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotebookPage;
