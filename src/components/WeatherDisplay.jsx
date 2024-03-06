import React from "react";
import { useState, useEffect } from "react";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import styles from "./WeatherDisplay.module.css"


export default function WeatherDisplay({city}) {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      if(city){
        setLoading(true);
        axios.get("https://api.weatherapi.com/v1/current.json", {
          params: {
            key: 'a52fb92132eb41ce8e703942232809',
            q: city,
          },
        })
        .then(res => {setWeatherData(res.data)})
        .catch(err => {console.error("Error Fething data"); 
        alert("Failed to fetch data");
        })
        .finally(() => {
          setLoading(false);
        })
      }
    }, [city]);
    console.log(weatherData)
    
  
    return(
      <>
        <div className={styles.weatherDisplay}>
          {loading && <p>Loading data...</p>}
          {console.log(loading)}
          {!loading && weatherData && (
            <div className={styles.weatherCard}>
              <WeatherCard title="Temprature" data={`${weatherData.current.temp_c}°C`}/>
              <WeatherCard title="Humidity" data={`${weatherData.current.humidity}%`}/>
              <WeatherCard title="Condition" data={`${weatherData.current.condition.text}`}/>
              <WeatherCard title="Wind Speed" data={`${weatherData.current.wind_kph} kph`}/>
            </div>
          )}
        </div>
      </>
    )
  }