"use client";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
const AboutUs = () => {
  const stats = [
    { value: 10, label: "Years Experience" },
    { value: 500, label: "Happy Clients" },
    { value: 1000, label: "Projects Completed" },
    { value: 20, label: "Awards Won" },
  ];

  // Counter logic for animation with Intersection Observer
  const Counter = ({ endValue }) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) observer.observe(ref.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!hasStarted) return;
      const duration = 2000; // Animation duration in milliseconds
      const increment = endValue / (duration / 16); // Smooth increment step

      const timer = setInterval(() => {
        setCount((prev) => {
          const nextValue = prev + increment;
          return nextValue >= endValue ? endValue : nextValue;
        });
      }, 16);

      return () => clearInterval(timer); // Clean up on unmount
    }, [hasStarted, endValue]);

    return <span ref={ref}>{Math.round(count)}+</span>;
  };

  return (
    <section
      id="about-us"
      className="py-20 md:px-20 lg:px-20 bg-white flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-center mt-10 font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
            ABOUT US
          </h2>
          <p
            className="mt-15 mb-8 max-w-3xl mx-auto text-gray-700"
            data-aos="fade-down"
          >
            Team Work Advisors Pvt Ltd is a premier investment banking and
            financial advisory firm with a deep-rooted expertise in debt
            syndication, working capital management, and capital advisory. With
            over 15 years of industry experience, our team brings unparalleled
            insights and strategic solutions tailored to meet the evolving
            financial needs of businesses. Having worked with global financial
            institutions and Banks, we possess the expertise to navigate complex
            financial landscapes and drive business success.
          </p>

          {/* About Cards Section */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-lg bg-gray-800 text-white p-6 text-center shadow-md"
              >
                <h4 className="mb-2 text-3xl font-bold text-purple-400">
                  <Counter endValue={stat.value} />
                </h4>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Buttons Section */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
          data-aos="fade-up"
        >
          <Link href="#ourfounders"  className="cursor-pointer rounded-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-8"> Meet Our Founders</Link>
          {/* <a
            href="#team"
            className="cursor-pointer rounded-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-8"
          > */}
           
          {/* </a> */}
          <Link href="#contact-us" className="cursor-pointer rounded-full border-2 py-3 px-8 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out">
          Contact Us
          </Link>
          {/* <a
            href="#contact"
            
          >
           
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
