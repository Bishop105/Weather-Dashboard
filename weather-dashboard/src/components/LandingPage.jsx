import React from 'react';
import PropTypes from 'prop-types';
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const LandingPage = ({ onGetStarted }) => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-100 text-center">

      {/* MAIN CONTENT - STARTS AT TOP */}
      <main className="flex-grow flex flex-col items-center pt-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-5 font-ibm">
          Weather Dashboard
        </h1>

        <h2 
          className="text-3xl md:text-4xl mb-5"
          style={{ fontFamily: "'Italianno', cursive", color: "#3D1F77" }}
        >
          "Your Weather, Your Way"
        </h2>

        <p className="mb-5 max-w-md font-ibm">
          Welcome to the Weather Dashboard! Get real-time weather updates for your city.
        </p>

        <button
          onClick={onGetStarted}
          className="bg-[#6C8F8B] text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#6C8F8B] transition duration-200 border border-[#6C8F8B] font-holtwood text-2xl md:text-3xl"
          aria-label="Get started with weather updates"
        >
          Get Started
        </button>
      </main>

      {/* STICKY FOOTER */}
      <footer className="w-screen border-t border-gray-300 bg-[#6C8F8B] text-white mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* COPYRIGHT */}
          <p className="text-sm mb-3 md:mb-0">
            © 2025 Weather Dashboard. All rights reserved.
          </p>

          {/* SOCIAL ICONS */}
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
            }].map((item) => (
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

    </div>
  );
};

LandingPage.propTypes = {
  onGetStarted: PropTypes.func.isRequired,
};

export default LandingPage;
