// src/components/Forecast.jsx
import React from "react";

const Forecast = ({ forecastData }) => {
  if (!forecastData || !forecastData.list) return null;

  // Pick one forecast per day (12:00 PM)
  const dailyForecast = forecastData.list
    .filter(item => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">
        5-Day Weather Forecast
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {dailyForecast.map((forecast) => (
          <div
            key={forecast.dt}
            className="bg-white border rounded-lg p-4 shadow-md text-center"
          >
            <h3 className="font-bold mb-2">
              {new Date(forecast.dt * 1000).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
              })}
            </h3>

            <img
              className="mx-auto"
              src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
              alt={forecast.weather[0].description}
            />

            <p className="text-lg font-semibold">
              {Math.round(forecast.main.temp)}°C
            </p>

            <p className="capitalize text-sm text-gray-600">
              {forecast.weather[0].description}
            </p>

            <p className="text-sm">
              Humidity: {forecast.main.humidity}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
