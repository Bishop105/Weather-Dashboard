import React, { useState, useRef, useEffect } from "react";

const SearchBar = ({ city, setCity, fetchWeather, clearWeather }) => {
  const [inputValue, setInputValue] = useState(city || "");
  const [errorMessage, setErrorMessage] = useState("");
  const [shake, setShake] = useState(false);
  const [flash, setFlash] = useState(false);

  const inputRef = useRef(null);

  // Clear dashboard if input is emptied
  useEffect(() => {
    if (inputValue === "") {
      clearWeather(); // call parent function to reset dashboard
    }
  }, [inputValue, clearWeather]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      setErrorMessage("Please enter City name");
      setShake(true);
      setFlash(true);
      inputRef.current?.focus();
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setFlash(false), 500);
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    if (inputValue.trim().toLowerCase() === city?.toLowerCase()) {
      setErrorMessage(`Weather for "${inputValue}" is already displayed.`);
      setFlash(true);
      inputRef.current?.focus();
      setTimeout(() => setFlash(false), 500);
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    setErrorMessage("");
    setCity(inputValue);
    fetchWeather(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    if (errorMessage) setErrorMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSubmit(e);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col sm:flex-row gap-3 items-center mb-6
                 bg-white/20 dark:bg-gray-800/40 backdrop-blur-md p-4 rounded-xl shadow-lg
                 ${shake ? "animate-shake" : ""}`}
    >
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter city name"
        value={inputValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        className={`border px-4 py-2 rounded-lg w-64
                    focus:outline-none focus:ring-2 focus:ring-blue-400
                    bg-white/50 dark:bg-gray-700/50 text-black dark:text-white
                    transition-all duration-300
                    ${flash ? "border-red-500 bg-red-100 dark:bg-red-700/50" : "border-white/30"}`}
      />

      <button
        type="submit"
        className="bg-blue-500/80 dark:bg-blue-600/80 text-white px-5 py-2 rounded-lg
                   hover:bg-blue-600/90 dark:hover:bg-blue-700/90 transition backdrop-blur-md"
      >
        Search
      </button>

      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
    </form>
  );
};

export default SearchBar;
