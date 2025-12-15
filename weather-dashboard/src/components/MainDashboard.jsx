import React from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import ErrorMessage from "./ErrorMessage";
import MyCalendar from "./Calendar";
import Forecast from "./Forecast";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const MainDashboard = ({
  city,
  setCity,
  fetchWeather,
  weatherData,
  error,
}) => {
  return (
    // PAGE WRAPPER
    <div className="flex flex-col min-h-screen bg-gray-100">

      {/* MAIN CONTENT */}
      <main className="flex-grow flex flex-col items-center px-4 py-6">
        <h1 className="text-4xl font-bold mb-6">Weather Dashboard</h1>

        <SearchBar
          city={city}
          setCity={setCity}
          fetchWeather={fetchWeather}
        />

        {error && <ErrorMessage message={error} />}

        {weatherData && (
          <>
            <WeatherCard weatherData={weatherData} />
            <Forecast forecastData={weatherData} />
          </>
        )}

        <MyCalendar />
      </main>

      {/* FOOTER */}
      <footer className="w-full border-t border-gray-300 bg-[#6C8F8B] text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* COPYRIGHT */}
          <p className="text-sm">
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

export default MainDashboard;
