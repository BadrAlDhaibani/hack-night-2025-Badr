import axios from 'axios';
import type { WeatherData } from '../types';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const CITY = import.meta.env.VITE_CITY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function fetchWeather(): Promise<WeatherData> {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: CITY,
        aqi: 'no'
      }
    });

    const data = response.data;

    return {
      temperature: data.current.temp_c,
      feelsLike: data.current.feelslike_c,
      condition: data.current.condition.text,
      description: data.current.condition.text,
      humidity: data.current.humidity,
      windSpeed: data.current.wind_kph,
      precipitation: data.current.precip_mm,
      icon: data.current.condition.icon,
      location: data.location.name,
      isDay: data.current.is_day === 1,
      localTime: data.location.localtime
    };
  } catch (error) {
    console.error('Error fetching weather:', error);
    throw new Error('Failed to fetch weather data');
  }
}
