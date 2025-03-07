import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Navigation';

const Weather = () => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = '5b30cd726478614f33537409b9dcb067';

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      setWeatherData(response.data.list);
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null); // Clear weather data in case of an error
    }
  };

  const handleSearch = async () => {
    // Check if both city and date are provided before fetching data
    if (city && date) {
      const urlSearch = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
      await fetchData(urlSearch);
    } else {
      alert('Please enter both city and date.');
    }
  };

  const groupForecastsByDay = (forecasts) => {
    if (!forecasts) return {}; // Check if forecasts is null or undefined
    return forecasts.reduce((grouped, forecast) => {
      const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString();
      grouped[forecastDate] = grouped[forecastDate] || [];
      grouped[forecastDate].push(forecast);
      return grouped;
    }, {});
  };

  const filteredForecasts = weatherData
    ? weatherData.filter((forecast) => {
        const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString();
        return forecastDate === new Date(date).toLocaleDateString();
      })
    : [];

  const groupedForecasts = groupForecastsByDay(filteredForecasts);

  const getWeatherCondition = (weatherId) => {
    // You can customize this function based on the OpenWeatherMap API weather condition codes
    if (weatherId >= 200 && weatherId < 300) {
      return 'Thunderstorm';
    } else if (weatherId >= 300 && weatherId < 600) {
      return 'Rainy';
    } else if (weatherId >= 600 && weatherId < 700) {
      return 'Snowy';
    } else if (weatherId >= 700 && weatherId < 800) {
      return 'Misty';
    } else if (weatherId === 800) {
      return 'Clear';
    } else if (weatherId === 801 || weatherId === 802) {
      return 'Partly Cloudy';
    } else if (weatherId >= 803 && weatherId <= 804) {
      return 'Cloudy';
    } else {
      return 'Unknown';
    }
  };

  return (
    <div>
      <Navigation/>
      <div className="container mt-5 bg-light p-4 rounded">
        <div className="header mb-4 text-center">
          <h1 className="text-primary">Weather Forecast</h1>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter city name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input   
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
        {Object.keys(groupedForecasts).length > 0 && (
          <>
            <h2 className="text-center">{city}</h2>
            <div className="row justify-content-center">
              {Object.entries(groupedForecasts).map(([forecastDate, forecasts]) => (
                <div className="col-md-4 mb-4" key={forecastDate}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title bg-info text-white p-2 rounded">{forecastDate}</h5>
                      <p className="card-text">
                        {forecasts.map((forecast) => (
                          <div key={forecast.dt}>
                            {new Date(forecast.dt * 1000).toLocaleTimeString(undefined, {
                              timeZone: 'Asia/Kolkata',
                            })}
                            : {Math.floor(forecast.main.temp_min - 273.15)}°C -{' '}
                            {getWeatherCondition(forecast.weather[0].id)}
                          </div>
                        ))}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Weather;