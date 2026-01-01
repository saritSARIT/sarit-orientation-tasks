import type { WeatherData } from "./types";
import type { WeatherCondition } from "./consts";

export const generateRandomWeather = (city: string): WeatherData => {
  return {
    city,
    temp: Math.floor(Math.random() * 50) - 10,
    humidity: Math.floor(Math.random() * 100),
  };
};

export const getWeatherCondition = (temp: number): WeatherCondition => {
  if (temp <= 0) return "FREEZING";
  if (temp <= 15) return "COLD";
  if (temp <= 30) return "NORMAL";
  return "HOT";
};




