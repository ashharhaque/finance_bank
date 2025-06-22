"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900 shadow-sm">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <div className="text-4xl font-extrabold tracking-wide text-gray-800">
            Team
            <span className="bg-gradient-to-r from-teal-400 to-teal-600 bg-clip-text text-transparent">
              Works
            </span>
          </div>
        </a>

        {/* Contact Button + Mobile Toggle */}
        <div className="flex items-center lg:order-2">
          <Link
            href="#contact-us"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-semibold rounded-full text-sm px-4 py-2 lg:mr-4 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
          >
            Contact Us
          </Link>

          <button
            onClick={toggleMenu}
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Menu Links */}
        <div
          className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="mobile-menu-2"
        >
          <ul className="flex flex-col space-y-1 mt-4 font-semibold text-base lg:flex-row lg:space-y-0 lg:gap-x-2 lg:mt-0">
            {[
              { name: "Home", link: "#home" },
              { name: "About Us", link: "#about-us" },
              { name: "Services", link: "#our-services" },
              { name: "Founders", link: "#ourfounders" },
            ].map((item) => (
              <li key={item.name}>
                <Link
                  href={item.link}
                  className="block py-2 px-3 text-gray-800 dark:text-white hover:bg-orange-100 dark:hover:bg-orange-600 hover:text-orange-800 dark:hover:text-white transition-all duration-300 rounded-full"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
