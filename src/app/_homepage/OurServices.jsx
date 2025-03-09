"use client"
import { useEffect } from 'react';

const services = [
    {
        title: "Web Development",
        description: "Custom web applications tailored to your business needs. We use cutting-edge technologies to deliver fast, responsive, and scalable solutions.",
        icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
        title: "Mobile App Development",
        description: "Innovative mobile applications for iOS and Android. We create user-friendly apps that engage your audience and drive business growth.",
        icon: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    },
    {
        title: "Data Analytics",
        description: "Turn your data into actionable insights. Our analytics services help you make informed decisions and optimize your business processes.",
        icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
    }
];

const Services = () => {
    useEffect(() => {
        document.documentElement.classList.remove('dark');
    }, []);

    return (
        <div className="bg-white text-gray-800">
            <main className="container mx-auto px-6 py-8">
                <h1 className="text-4xl font-bold text-center text-indigo-800 mb-12 animate-fade-in">
                    Our Services
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={service.title}
                            className="bg-gray-900 text-white rounded-xl shadow-md p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in"
                            style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon} />
                            </svg>
                            <h2 className="text-xl font-semibold text-indigo-400 mb-2">{service.title}</h2>
                            <p className="text-gray-300">{service.description}</p>
                        </div>
                    ))}
                </div>
            </main>

            <style>
                {`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
                `}
            </style>
        </div>
    );
};

export default Services;