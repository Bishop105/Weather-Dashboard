import React from "react";
import SearchBar from "./SearchBar";
import WeatherCard from "./WeatherCard";
import ErrorMessage from "./ErrorMessage";
import MyCalendar from "./Calendar";
import Forecast from "./Forecast";

const MainDashboard = ({
  city,
  setCity,
  fetchWeather,
  weatherData,
  error,
}) => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-4 py-6">
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
    </div>
  );
};

export default MainDashboard;
