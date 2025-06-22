import React from "react";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="h-screen min-h-screen bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply flex items-center">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          We invest in the world’s potential
        </h1>
        {/* <p className="mb-8 text-white px-4 sm:px-12 lg:px-24 max-w-5xl leading-relaxed">
          Partnering with{" "}
          <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-md">
            TEAM WORKS INC
          </span>{" "}
          means joining forces with a trusted partner dedicated to driving your
          business forward. We're here to help you unlock new opportunities,
          fuel growth, and achieve lasting success. Get in touch with us today
          and take the next step toward expanding your business horizons with
          confidence.
        </p> */}

        <p className="mb-8 text-white px-4 sm:px-12 lg:px-24 w-full leading-relaxed text-justify">
          Partnering with{" "}
          <span className="font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-1 rounded-md">
            TEAM WORKS INC
          </span>{" "}
          means joining forces with a trusted partner dedicated to driving your
          business forward. We're here to help you unlock new opportunities,
          fuel growth, and achieve lasting success. Get in touch with us today
          and take the next step toward expanding your business horizons with
          confidence.
        </p>

        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <Link
            href="#contact-us"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Contact Us
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
          {/* <a
            href="#"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          > */}

          {/* </a> */}
          <Link
            href="#about-us"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          >
            {" "}
            Learn more
          </Link>
          {/* <a
            href="#"
            className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
          > */}

          {/* </a> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
