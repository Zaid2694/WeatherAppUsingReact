# 🌤️ Weather App Using React

A modern weather application built with **React**, **Bootstrap**, and **OpenWeatherMap API**. Get real-time weather information by entering latitude/longitude coordinates or using your current location.

## 🎯 Features
- 🔍 **Search by Coordinates** - Enter latitude & longitude to get weather
- 📍 **Geolocation Support** - Auto-detect user's current location
- 🌡️ **Real-time Weather** - Temperature, feels like, min/max temp
- 🌅 **Sunrise & Sunset** - Displays local times
- 🕒 **Recent Searches** - Saves history using LocalStorage
- ⚡ **Loading Spinner** - Smooth UX during API calls
- 📱 **Responsive Design** - Works on all screen sizes

## 🛠️ Tech Stack
- **React 19** (UI Framework)
- **Bootstrap 5** (Styling)
- **Axios** (HTTP Requests)
- **OpenWeatherMap API** (Weather Data)

## ⚙️ How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/Zaid2694/WeatherAppUsingReact.git
   2. Install dependencies
2. Install dependencies
Run the following command to install all required packages:
npm install
3. Start the development server
Once the installation is complete, start the app by running:
npm start
🔑 API Key Configuration
This project uses the OpenWeatherMap API. To use your own API key:

Get a free API key from OpenWeatherMap.

Open src/Components/Weather.js.

Replace the API key in all Axios calls with your own key.
