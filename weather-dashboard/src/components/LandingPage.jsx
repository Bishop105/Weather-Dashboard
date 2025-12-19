import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from "framer-motion";

const LandingPage = ({ onGetStarted }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="flex flex-col min-h-screen bg-blue-100 dark:bg-gray-900 transition-colors duration-300 text-center"
    >
      {/* THEME TOGGLE BUTTON */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-6 right-6
                   bg-white/80 dark:bg-gray-700/80
                   px-4 py-2 rounded-full
                   text-black dark:text-white font-semibold
                   hover:bg-white hover:text-black
                   dark:hover:bg-white dark:hover:text-black
                   backdrop-blur-md
                   shadow-md
                   transition"
      >
        {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
      </button>

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col items-center pt-20 px-4 text-black dark:text-white">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 font-ibm">
          Weather Dashboard
        </h1>

        <h2 
          className="text-3xl md:text-4xl mb-5"
          style={{ fontFamily: "'Italianno', cursive", color: darkMode ? "#fff" : "#3D1F77" }}
        >
          "Your Weather, Your Way"
        </h2>

        <p className="mb-5 max-w-md font-ibm">
          Welcome to the Weather Dashboard! Get real-time weather updates for your city.
        </p>

        {/* ✅ GET STARTED BUTTON WITH LIGHT & DARK HOVER */}
        <button
          onClick={onGetStarted}
          className={`
            bg-[#6C8F8B] dark:bg-[#4E736F] text-white
            px-6 py-3 rounded-lg font-holtwood text-2xl md:text-3xl
            border border-[#6C8F8B]
            shadow-md transition-all duration-300
            hover:bg-white hover:text-[#6C8F8B]
            dark:hover:bg-gray-200 dark:hover:text-[#4E736F]
          `}
          aria-label="Get started with weather updates"
        >
          Get Started
        </button>
      </main>

      {/* FOOTER */}
      <footer className="w-screen border-t border-gray-300 dark:border-gray-700 bg-[#6C8F8B] dark:bg-[#4E736F] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm mb-3 md:mb-0">
            © 2025 Weather Dashboard. All rights reserved.
          </p>

          <div className="flex gap-3 text-xl">
            {[{
              href: "https://twitter.com",
              icon: <FaTwitter />,
              label: "Twitter"
            }, {
              href: "https://github.com",
              icon: <FaGithub />,
              label: "GitHub"
            }, {
              href: "https://linkedin.com",
              icon: <FaLinkedin />,
              label: "LinkedIn"
            }, {
              href: "https://instagram.com",
              icon: <FaInstagram />,
              label: "Instagram"
            }].map(item => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="bg-white/20 hover:bg-white text-white hover:text-[#6C8F8B] p-2 rounded-full transition duration-200"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

LandingPage.propTypes = {
  onGetStarted: PropTypes.func.isRequired,
};

export default LandingPage;
