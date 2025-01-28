import React from 'react';
import { Mail, Phone, MapPin, Globe, Github, Linkedin } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={`py-12 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={20} className="text-blue-500" />
                <span>Dayalbagh Educational Institute, Agra</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-500" />
                <span>+91 562 2801545</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-500" />
                <span>info@dei.ac.in</span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={20} className="text-blue-500" />
                <a href="https://www.dei.ac.in" className="hover:text-blue-500 transition-colors">
                  www.dei.ac.in
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#labs" className="hover:text-blue-500 transition-colors">Virtual Labs</a>
              </li>
              <li>
                <a href="#hiring" className="hover:text-blue-500 transition-colors">Hiring Services</a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-500 transition-colors">Core Courses</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 rounded-full border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Stay connected with us on social media for the latest updates and announcements.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Virtual Labs @ DEI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;