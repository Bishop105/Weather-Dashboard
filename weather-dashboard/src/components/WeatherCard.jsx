import React from "react";

const WeatherCard = ({ weatherData }) => {
  // Guard clause for forecast API
  if (
    !weatherData ||
    !weatherData.list ||
    !weatherData.list.length
  ) {
    return (
      <div className="text-center text-gray-500 mt-5">
        Loading weather data...
      </div>
    );
  }

  // Get first forecast item (current-ish)
  const weather = weatherData.list[0];

  return (
    <div className="bg-white shadow-md rounded-lg p-5 max-w-sm mx-auto mt-5">
      <h2 className="text-2xl font-bold text-center">
        {weatherData.city.name}
      </h2>

      <p className="text-xl text-center">
        Temperature: {weather.main.temp} °C
      </p>

      <p className="text-md text-center">
        Humidity: {weather.main.humidity}%
      </p>

      <p className="text-md text-center">
        Wind Speed: {weather.wind.speed} m/s
      </p>

      <img
        className="mx-auto mt-3"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt={weather.weather[0].description}
      />
    </div>
  );
};

export default WeatherCard;
