"use client"
import { useState, useEffect } from 'react';

const testimonials = [
  {
    quote: "This product changed my life! The service and quality are unparalleled.",
    name: "John Doe",
    title: "CEO, Company",
    image: "https://via.placeholder.com/150",
  },
  {
    quote: "Excellent service and amazing support. Truly an outstanding experience.",
    name: "Jane Smith",
    title: "Marketing Manager",
    image: "https://via.placeholder.com/150",
  },
  {
    quote: "Highly recommended for anyone looking for quality and attention to detail.",
    name: "Mike Brown",
    title: "Developer",
    image: "https://via.placeholder.com/150",
  },
];

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative">
        {/* Slider Container */}
        <div className="overflow-hidden rounded-xl shadow-2xl bg-gradient-to-r from-indigo-500 to-purple-500">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-white rounded-xl p-8 shadow-xl m-4">
                  <div className="flex flex-col items-center">
                    <img
                      className="w-20 h-20 rounded-full border-4 border-indigo-500 mb-4"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <p className="text-lg text-gray-800 italic text-center">
                      “{testimonial.quote}”
                    </p>
                    <div className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-500">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons using inline SVG icons */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-indigo-600 p-2 rounded-full shadow-lg focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 text-indigo-600 p-2 rounded-full shadow-lg focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                index === current ? "bg-white" : "bg-indigo-300"
              } focus:outline-none`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
