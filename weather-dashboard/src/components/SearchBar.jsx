import React from "react";

const SearchBar = ({ city, setCity, fetchWeather }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    fetchWeather();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-3 items-center mb-6"
    >
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
