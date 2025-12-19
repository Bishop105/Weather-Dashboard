import React from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const Forecast = ({ forecastData, selectedDate, setSelectedDate }) => {
  if (!forecastData?.list) return null;

  const dateToCheck = selectedDate || new Date();

  /* ===== 5-DAY FORECAST (12:00 PM ONLY) ===== */
  const dailyForecast = forecastData.list
    .filter(item => item.dt_txt.includes("12:00:00"))
    .slice(0, 5);

  /* ===== HOURLY FORECAST (SELECTED DAY) ===== */
  const hourlyForecast = forecastData.list.filter(item => {
    const itemDate = new Date(item.dt * 1000);
    return (
      itemDate.getFullYear() === dateToCheck.getFullYear() &&
      itemDate.getMonth() === dateToCheck.getMonth() &&
      itemDate.getDate() === dateToCheck.getDate()
    );
  });

  /* ===== TEMPERATURE CHART DATA ===== */
  const chartData = hourlyForecast.map(item => ({
    time: new Date(item.dt * 1000).toLocaleTimeString("en-US", {
      hour: "numeric",
    }),
    temp: Math.round(item.main.temp),
  }));

  return (
    <div className="mt-6 space-y-8">

      {/* ================= 5 DAY FORECAST ================= */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center text-white">
          5-Day Weather Forecast
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {dailyForecast.map((forecast) => {
            const forecastDate = new Date(forecast.dt * 1000);
            const isSelected =
              forecastDate.getFullYear() === dateToCheck.getFullYear() &&
              forecastDate.getMonth() === dateToCheck.getMonth() &&
              forecastDate.getDate() === dateToCheck.getDate();

            return (
              <div
                key={forecast.dt}
                onClick={() => setSelectedDate(forecastDate)}
                className={`cursor-pointer bg-white/20 dark:bg-gray-800/40 backdrop-blur-md
                  border rounded-xl p-4 text-center text-white shadow-lg
                  transform transition duration-300 hover:scale-105 hover:shadow-2xl
                  ${isSelected
                    ? "border-yellow-400 shadow-yellow-400/50"
                    : "border-white/30 dark:border-gray-700"
                  }`}
              >
                <h3 className="font-bold mb-2">
                  {forecastDate.toLocaleDateString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}
                </h3>

                {/* ✅ STATIC ICON — FIXED SIZE & CENTERED */}
                <img
                  className="mx-auto w-14 h-14 drop-shadow-lg"
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  alt={forecast.weather[0].description}
                />

                <p className="text-lg font-semibold mt-1">
                  {Math.round(forecast.main.temp)}°C
                </p>

                <p className="capitalize text-sm opacity-90">
                  {forecast.weather[0].description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= TEMPERATURE CHART ================= */}
      {chartData.length > 0 && (
        <div className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-md p-5 rounded-xl shadow-lg">
          <h2 className="text-xl font-bold text-center text-white mb-4">
            Temperature Trend
          </h2>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <XAxis dataKey="time" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="temp"
                stroke="#facc15"
                strokeWidth={3}
                dot={{ r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* ================= HOURLY FORECAST ================= */}
      {hourlyForecast.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center text-white">
            Hourly Forecast
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3">
            {hourlyForecast.map((hour) => {
              const time = new Date(hour.dt * 1000).toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "2-digit",
              });

              return (
                <motion.div
                  key={hour.dt}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.08 }}
                  className="bg-white/20 dark:bg-gray-800/40 backdrop-blur-md
                             p-3 rounded-lg text-center text-white shadow-md"
                >
                  <p className="text-sm font-semibold">{time}</p>

                  {/* ✅ FIXED ICON — STANDS OUT */}
                  <img
                    className="mx-auto w-12 h-12 drop-shadow-xl"
                    src={`https://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                    alt={hour.weather[0].description}
                  />

                  <p className="font-bold">
                    {Math.round(hour.main.temp)}°C
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
};

export default Forecast;
