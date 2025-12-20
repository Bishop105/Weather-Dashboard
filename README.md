🌦️ Weather Dashboard

A modern, responsive Weather Dashboard built with React that allows users to search for cities and view current weather conditions, hourly updates, and a 5-day forecast using a clean, intuitive interface.

🚀 Features

🔍 City-based search with validation and user-friendly error handling

🌡️ Current weather overview (temperature, humidity, wind speed)

🕒 Hourly forecast for the selected day

📅 5-day weather forecast with clickable day selection

🌤️ Consistent weather icons powered by OpenWeather

🎨 Responsive UI with Tailwind CSS (light & dark mode support)

🧹 Auto-clear dashboard when search input is cleared

✨ Smooth hover effects and subtle animations using Framer Motion

🛠️ Technologies Used

React

Tailwind CSS

Framer Motion

OpenWeather API

Recharts (for temperature trends)

📦 Installation & Setup

Follow the steps below to run the project locally:

git clone https://github.com/Bishop105/weather-dashboard.git
cd weather-dashboard
npm install
npm start


The application will start at:

http://localhost:3000

🔑 Environment Variables

This project uses the OpenWeather API.

Create a .env file in the root directory and add:

REACT_APP_WEATHER_API_KEY=your_api_key_here


⚠️ Make sure not to commit your API key to version control.

🧭 How It Works

Enter a city name in the search bar

Click Search (results are not fetched automatically on typing)

View:

Current weather conditions

Hourly forecast for the selected date

5-day forecast (click any day to update the dashboard)

Clear the input field to reset the dashboard

📱 Responsive Design

The dashboard is optimized for:

Desktop

Tablet

Mobile devices

Layout and spacing automatically adapt across screen sizes.

⚠️ Error Handling

Empty search input validation

Duplicate city search prevention

Friendly error messages for invalid cities or API issues

📌 Future Improvements

🌙 Automatic day/night icon switching

🌬 Wind direction indicators

📍 Location-based weather (GPS)

🧊 Feels-like temperature & pressure data

👨‍💻 Author

Bismark Asuming
GitHub: Bishop105