import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white px-4 pt-16 pb-10 mx-auto max-w-4xl md:px-8">
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 justify-center">
        {/* Contact */}
        <div className="flex flex-col items-center text-center space-y-4 text-sm">
          <h2 className="text-xl font-bold tracking-wide text-gray-900 uppercase">Contact</h2>
          <div>
            <p className="text-gray-700">Phone:</p>
            <a href="tel:850-123-5021" className="text-blue-600 hover:underline">850-123-5021</a>
          </div>
          <div>
            <p className="text-gray-700">Email:</p>
            <a href="mailto:info@lorem.mail" className="text-blue-600 hover:underline">info@lorem.mail</a>
          </div>
          <div>
            <p className="text-gray-700">Address:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              312 Lovely Street, NY
            </a>
          </div>
        </div>

        {/* Join Us */}
        <div className="flex flex-col items-center text-center space-y-4 text-sm">
          <h2 className="text-xl font-bold tracking-wide text-gray-900 uppercase">Join Us On</h2>
          <div className="flex items-center space-x-4 mt-2">
            <a
              href="https://linkedin.com"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
            {/* Add more icons here if needed */}
          </div>
        </div>
      </div>

      {/* Divider & Bottom Text */}
      <div className="mt-12 border-t border-gray-200 pt-6 text-center">
        <p className="text-sm text-gray-600">
          Powered by{' '}
          <a href="#" className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
            ADALABS
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
