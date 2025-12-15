import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import MainDashboard from './components/MainDashboard';
import reportWebVitals from './reportWebVitals';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');
  const [isLanding, setIsLanding] = useState(true);
  const [selectedDate, setSelectedDate] = useState(new Date()); // Added calendar date
  const [loading, setLoading] = useState(false);

  // Fetch weather whenever city or selectedDate changes
  useEffect(() => {
    if (!city) return; // Only fetch if a city is entered

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

  // Function to handle manual fetch (e.g., from a button in MainDashboard)
  const handleFetchWeather = () => {
    if (!city) {
      setError('Please enter a city');
      return;
    }
    setSelectedDate(new Date()); // Triggers useEffect to fetch
  };

  return (
    <div>
      {isLanding ? (
        <LandingPage onGetStarted={() => setIsLanding(false)} />
      ) : (
        <MainDashboard
          city={city}
          setCity={setCity}
          fetchWeather={handleFetchWeather} // Pass updated fetch function
          weatherData={weatherData}
          error={error}
          loading={loading}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate} // Pass date state for calendar
        />
      )}
    </div>
  );
}

reportWebVitals();
export default App;
