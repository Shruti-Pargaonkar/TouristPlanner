import React, { useState } from 'react';
import './WeatherApi.css';
import search_icon from "../Assets/Image/search.png";
import cloud_icon from "../Assets/Image/cloud.png";
import wind_icon from "../Assets/Image/wind.png";
import humidity_icon from "../Assets/Image/humidity.png";
import clear_icon from "../Assets/Image/clear.png";
import drizzle_icon from "../Assets/Image/drizzle.png";
import rain_icon from "../Assets/Image/rain.png";
import snow_icon from "../Assets/Image/snow.png";
import Navigation from './Navigation';
import FooterBar from './Footer';

export default function WeatherApi() {
    let api_key = "a14e6b517e983e34390757f192256db9";

    const [wicon, setWicon] = useState(cloud_icon);
    console.log(wicon);

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`;
        let response = await fetch(url);
        let data = await response.json(); // Await here to get JSON data
        console.log(data)
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");

        humidity[0].innerHTML = `${data.main.humidity}%`;
        wind[0].innerHTML = `${data.wind.speed} km/h`;
        temperature[0].innerHTML = `${data.main.temp}°C`;
        location[0].innerHTML = data.name;

        if (data.weather && data.weather[0] && data.weather[0].icon) {
            const weatherIcon = data.weather[0].icon;

            if (weatherIcon === "01d" || weatherIcon === "01n") {
                setWicon(clear_icon);
            } else if (weatherIcon === "02d" || weatherIcon === "02n") {
                setWicon(cloud_icon);
            } else if (weatherIcon === "03d" || weatherIcon === "03n") {
                setWicon(drizzle_icon);
            } else if (weatherIcon === "04d" || weatherIcon === "04n") {
                setWicon(drizzle_icon);
            } else if (weatherIcon === "09d" || weatherIcon === "09n") {
                setWicon(rain_icon);
            } else if (weatherIcon === "13d" || weatherIcon === "13n") {
                setWicon(snow_icon);
            } else {
                setWicon(clear_icon);
            }
        }
    };

    return (
        <div>
            <Navigation/>
            <div className='container1'>
                <div className='top-bar'>
                    <input type='text' className='cityInput' placeholder='Search'></input>
                    <div className='search-icon' onClick={() => { search() }}>
                        <img src={search_icon} alt=''></img>
                    </div>
                </div>
                <div className='weather-image'>
                    <img src={wicon} alt='Weather Icon'></img>
                </div>
                <div className='weather-temp'>33.25°C</div>
                <div className='weather-location'>Pune</div>
                <div className='data-container'>
                    <div className='element'>
                        <img src={humidity_icon} alt='' className='icon'></img>
                        <div className='data'>
                            <div className="humidity-percent">14%</div>
                            <div className='text'>Humidity</div>
                        </div>
                    </div>
                    <div className='element'>
                        <img src={wind_icon} alt='' className='icon'></img>
                        <div className='data'>
                            <div className='wind-rate'>0.83 km/h</div>
                            <div className='text'>Wind Speed</div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterBar/>
        </div>
    );
}
