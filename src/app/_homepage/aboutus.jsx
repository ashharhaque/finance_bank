"use client";
import { useEffect, useState } from "react";

const AboutUs = () => {
  const stats = [
    { value: 10, label: "Years Experience" },
    { value: 500, label: "Happy Clients" },
    { value: 1000, label: "Projects Completed" },
    { value: 20, label: "Awards Won" },
  ];

  // Counter logic for animation
  const Counter = ({ endValue }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      const duration = 2000; // Animation duration in milliseconds
      const increment = endValue / (duration / 16); // Smooth increment step

      const timer = setInterval(() => {
        setCount((prev) => {
          const nextValue = prev + increment;
          return nextValue >= endValue ? endValue : nextValue;
        });
      }, 16); // Smooth updates using ~60 FPS timing

      return () => clearInterval(timer); // Clean up on unmount
    }, [endValue]);

    return <span>{Math.round(count)}+</span>;
  };

  return (
    <section
      id="about"
      className="py-20 md:px-20 lg:px-20 bg-white flex items-center justify-center"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-12">
          <h2 className="text-center mt-10 font-heading  mb-6 bg-orange-100 text-orange-800 px-6 py-3 rounded-xl md:w-96 md:mx-auto text-lg md:text-2xl font-bold tracking-widest uppercase title-font">
            ABOUT US
          </h2>
          {/* <h3
            className="mb-4 text-3xl font-bold text-black section-title"
            data-aos="fade-down"
          >
            Capturing Moments That Last Forever
          </h3> */}
          <p
            className="mt-15 mb-8 max-w-3xl mx-auto text-gray-700"
            data-aos="fade-down"
          >
            The company since its inception in 2012 under the commitment and
            Vision of Mr.Kundan Kumar Singh and Mr.Rishi Arora is dedicated to
            supporting the growth of businesses like yours through expertise in
            working capital, term loans and MSME loans.We have collaborative
            partnerships with esteemed banking institutions and NBFC’S. Through
            collaborative endeavours with reputed banking institutions and NBFCs
            and by embracing the synergy of our expertise and partnerships, we
            offer a diverse range of financial products.
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
          <a
            href="#team"
            className="cursor-pointer rounded-full bg-purple-600 hover:bg-purple-700 text-white py-3 px-8"
          >
            Meet Our Team
          </a>
          <a
            href="#contact"
            className="cursor-pointer rounded-full border-2 py-3 px-8 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
