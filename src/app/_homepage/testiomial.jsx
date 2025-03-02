"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Person1 from "@/public/katrina.jpg";

const testimonials = [
  {
    quote: "This product changed my life! The service and quality are unparalleled.",
    name: "John Doe",
    title: "CEO, Company",
    image: Person1,
  },
  {
    quote: "Excellent service and amazing support. Truly an outstanding experience.",
    name: "Jane Smith",
    title: "Marketing Manager",
    image: Person1,
  },
  {
    quote: "Highly recommended for anyone looking for quality and attention to detail.",
    name: "Mike Brown",
    title: "Developer",
    image: Person1,
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
    <div className="w-full max-w-5xl mx-auto py-16 px-8 sticky top-1/3">
      <div className="relative">
        {/* Slider Container */}
        <div className="overflow-hidden rounded-xl shadow-2xl bg-gradient-to-r from-indigo-500 to-purple-500">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <div className="bg-white rounded-xl p-10 shadow-xl m-6">
                  <div className="flex flex-col items-center">
                    <Image
                      className="rounded-full border-4 border-indigo-500 mb-6"
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={120}
                      height={120}
                    />
                    <p className="text-xl text-gray-800 italic text-center">
                      “{testimonial.quote}”
                    </p>
                    <div className="mt-8">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-lg text-gray-500">{testimonial.title}</p>
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
          className="absolute top-1/2 left-6 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-indigo-600 p-3 rounded-full shadow-lg focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-6 transform -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-indigo-600 p-3 rounded-full shadow-lg focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full ${
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
