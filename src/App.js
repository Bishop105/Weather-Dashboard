import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingPage from './components/LandingPage';
import MainDashboard from './components/MainDashboard';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [isLanding, setIsLanding] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  // Fetch weather whenever city or selectedDate changes
  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setError('');
      setLoading(true);

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
        );

        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city, selectedDate]);

  const handleFetchWeather = () => {
    if (!city) {
      setError('Please enter a city');
      return;
    }
    setSelectedDate(new Date());
  };

  return (
    <AnimatePresence mode="wait">
      {isLanding ? (
        <motion.div
          key="landing"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <LandingPage onGetStarted={() => setIsLanding(false)} />
        </motion.div>
      ) : (
        <motion.div
          key="dashboard"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <MainDashboard
            city={city}
            setCity={setCity}
            fetchWeather={handleFetchWeather}
            weatherData={weatherData}
            error={error}
            loading={loading}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default App;
