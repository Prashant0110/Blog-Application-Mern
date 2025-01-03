import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <nav className={`bg-gray-100 dark:bg-gray-900 shadow-md`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          My Brand
        </div>
        <div className="hidden md:flex space-x-6 items-center">
          <Link
            to="/about"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300"
          >
            Projects
          </Link>
          <div className="flex items-center">
            <span className="mr-2 text-gray-800 dark:text-gray-200">
              {darkMode ? "Dark" : "Light"}
            </span>
            <button
              onClick={toggleDarkMode}
              className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none"
            >
              <span
                className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full transition transform ${
                  darkMode ? "bg-blue-600 translate-x-5" : "bg-gray-300"
                }`}
              />
              <span
                className={`bg-gray-200 dark:bg-gray-600 h-6 w-11 rounded-full transition`}
              />
            </button>
          </div>
        </div>
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 dark:text-gray-200 focus:outline-none"
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-md">
          <Link
            to="/about"
            className="block text-gray-800 dark:text-white hover:text-blue-500 transition duration-300 p-4"
          >
            About
          </Link>
          <Link
            to="/projects"
            className="block text-gray-800 dark:text-white hover:text-blue-500 transition duration-300 p-4"
          >
            Projects
          </Link>
          <button
            onClick={toggleDarkMode}
            className="block text-gray-800 dark:text-white hover:text-blue-500 transition duration-300 p-4"
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
