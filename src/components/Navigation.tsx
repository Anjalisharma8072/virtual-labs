import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';



interface NavigationProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`sticky top-0 z-50 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
      } shadow-md transition-colors duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img
                src="https://www.vlab.co.in/images/logo.jpg"
                alt="DEI Virtual Labs Logooooooo"
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/150";
                }}
              />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              VIRTUAL LABS @ DEI
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#labs"
              className="font-medium hover:text-blue-500 transition-colors"
            >
              Virtual Labs
            </a>
            <a
              href="#hiring"
              className="font-medium hover:text-blue-500 transition-colors"
            >
              Hiring Services
            </a>
            <a
              href="#courses"
              className="font-medium hover:text-blue-500 transition-colors"
            >
              Core Courses
            </a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div
            className={`px-2 pt-2 pb-3 space-y-1 ${
              darkMode ? "bg-gray-900" : "bg-white"
            }`}
          >
            <a
              href="#labs"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Virtual Labs
            </a>
            <a
              href="#hiring"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Hiring Services
            </a>
            <a
              href="#courses"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Core Courses
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;