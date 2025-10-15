import axios from 'axios';
import type { WeatherData } from '../types';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const DEFAULT_CITY = import.meta.env.VITE_CITY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export async function fetchWeather(
  location: string = DEFAULT_CITY,
  units: 'metric' | 'imperial' = 'imperial'
): Promise<WeatherData> {
  try {
    const response = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: API_KEY,
        q: location,
        aqi: 'no'
      }
    });

    const data = response.data;

    const isMetric = units === 'metric';

    return {
      temperature: isMetric ? data.current.temp_c : data.current.temp_f,
      feelsLike: isMetric ? data.current.feelslike_c : data.current.feelslike_f,
      condition: data.current.condition.text,
      description: data.current.condition.text,
      humidity: data.current.humidity,
      windSpeed: isMetric ? data.current.wind_kph : data.current.wind_mph,
      precipitation: isMetric ? data.current.precip_mm : data.current.precip_in,
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
