import { motion } from "framer-motion";
import React from "react";

const WeatherCard = ({ weatherData, selectedDate }) => {
  if (!weatherData?.list?.length) {
    return <div className="text-center text-white mt-5">Loading weather data...</div>;
  }

  const dateToCheck = selectedDate || new Date();

  const forecastForDate =
    weatherData.list.find((item) => {
      const forecastDate = new Date(item.dt * 1000);
      return (
        forecastDate.getFullYear() === dateToCheck.getFullYear() &&
        forecastDate.getMonth() === dateToCheck.getMonth() &&
        forecastDate.getDate() === dateToCheck.getDate()
      );
    }) || weatherData.list[0];

  const weather = forecastForDate;

  return (
    <motion.div
      key={selectedDate?.toDateString()}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-md shadow-lg rounded-xl p-5 max-w-sm mx-auto mt-5 text-white border border-white/30 dark:border-gray-700
                 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <h2 className="text-2xl font-bold text-center">
        {weatherData.city.name}
      </h2>

      {/* STATIC WEATHER ICON */}
      <img
       className="mx-auto my-4 w-24 h-24 transition-transform duration-300 hover:scale-110 drop-shadow-xl"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />

      <p className="text-xl text-center">
        Temperature: {Math.round(weather.main.temp)} °C
      </p>

      <p className="text-md text-center">
        Humidity: {weather.main.humidity}%
      </p>

      <p className="text-md text-center">
        Wind Speed: {weather.wind.speed} m/s
      </p>
    </motion.div>
  );
};

export default WeatherCard;
