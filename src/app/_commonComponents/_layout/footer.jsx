import React from 'react';
import { MapPin, Phone, Mail, Globe, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white px-4 pt-16 pb-10 mx-auto max-w-4xl md:px-8">
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 justify-center">
        {/* Contact Section */}
        <div id="contact-us" className="flex flex-col items-center text-center space-y-6 text-sm">
          <h2 className="text-2xl font-bold tracking-wide text-gray-900 uppercase">Contact Us</h2>
          <p className="text-gray-700 font-medium text-base">Team Work Advisors Pvt Ltd</p>

          {/* Address */}
          {/* <div className="grid grid-cols-[2rem_1fr] items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <MapPin className="h-4 w-4 text-blue-600" />
            </div>
            <span className="text-gray-700">123 Business Street, Mumbai, India</span>
          </div> */}

          {/* Phone */}
          {/* <div className="grid grid-cols-[2rem_1fr] items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <Phone className="h-4 w-4 text-blue-600" />
            </div>
            <a href="tel:+911234567890" className="text-blue-600 hover:underline">
              +91 12345 67890
            </a>
          </div> */}

          {/* Email */}
          {/* <div className="grid grid-cols-[2rem_1fr] items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <Mail className="h-4 w-4 text-blue-600" />
            </div>
            <a href="mailto:info@teamworkadvisors.com" className="text-blue-600 hover:underline">
              info@teamworkadvisors.com
            </a>
          </div> */}

          {/* Website */}
          <div className="grid grid-cols-[2rem_1fr] items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
              <Globe className="h-4 w-4 text-blue-600" />
            </div>
            <a
              href="https://www.teamworksadvisors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              www.teamworksadvisors.com
            </a>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="flex flex-col items-center text-center space-y-6 text-sm">
          <h2 className="text-2xl font-bold tracking-wide text-gray-900 uppercase">Join Us On</h2>
          <div className="flex items-center space-x-5 mt-2">
            <a
              href="https://linkedin.com"
              className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-700 transition-colors shadow-md"
            >
              <Linkedin className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
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
