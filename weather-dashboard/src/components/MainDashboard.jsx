import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import ErrorMessage from "./ErrorMessage";
import MyCalendar from "./Calendar";
import Forecast from "./Forecast";
import { FaTwitter, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const MainDashboard = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  };

  const [darkMode, setDarkMode] = useState(getInitialTheme);
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const fetchWeather = async (cityName) => {
    try {
      //  fetch API
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=ea340323c3d0fffbd3c06bbcfc9ab0b9`
      );
      const data = await response.json();
      if (data.cod !== "200") {
        setError(data.message || "Failed to fetch weather");
        setWeatherData(null);
        setSelectedDate(null);
      } else {
        setWeatherData(data);
        setError("");
      }
    } catch (err) {
      setError("Error fetching weather data");
      setWeatherData(null);
      setSelectedDate(null);
    }
  };

  const clearWeather = () => {
    setWeatherData(null);
    setSelectedDate(null);
    setCity("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat transition-all duration-300"
      style={{ backgroundImage: "url('/images/dashboard-bg.jpg')" }}
    >
      <div
        className={`flex flex-col min-h-screen transition-colors duration-300
          ${darkMode ? "bg-black/60" : "bg-black/40"}`}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="fixed top-6 right-6 z-50
            bg-white/80 dark:bg-gray-700/80
            px-4 py-2 rounded-full
            text-black dark:text-white font-semibold
            hover:bg-white hover:text-black
            dark:hover:bg-white dark:hover:text-black
            backdrop-blur-md
            shadow-lg
            transition-all duration-300"
        >
          {darkMode ? "☀ Switch to Light" : "🌙 Switch to Dark"}
        </button>

        <main className="flex-grow flex flex-col items-center px-4 py-6 space-y-4 text-white">
          <h1 className="text-4xl font-bold mb-6">Weather Dashboard</h1>

          <SearchBar
            city={city}
            setCity={setCity}
            fetchWeather={fetchWeather}
            clearWeather={clearWeather}
          />

          {error && <ErrorMessage message={error} />}

          {selectedDate && weatherData && (
            <p className="text-lg font-semibold text-yellow-300 mb-2">
              Forecast for:{" "}
              {selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "short",
                day: "numeric",
              })}
            </p>
          )}

          {weatherData && (
            <>
              <WeatherCard
                weatherData={weatherData}
                selectedDate={selectedDate}
              />

              <Forecast
                forecastData={weatherData}
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />

              <MyCalendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </>
          )}
        </main>
      </div>
    </motion.div>
  );
};

export default MainDashboard;
