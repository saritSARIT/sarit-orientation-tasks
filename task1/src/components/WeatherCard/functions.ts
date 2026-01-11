/*  */
// Intentional nested ternary for compact conditional mapping
import {
  COLD_TEMPERATURE,
  NORMAL_TEMPERATURE,
  WeatherCondition,
} from "./consts";

export const getWeatherCondition = (temperature: number): WeatherCondition =>
// eslint-disable-next-line uvicorn/no-nested-ternary
  temperature <= 0
    ? WeatherCondition.FREEZING
    : temperature <= COLD_TEMPERATURE
      ? WeatherCondition.COLD
      : temperature <= NORMAL_TEMPERATURE
        ? WeatherCondition.NORMAL
        : WeatherCondition.HOT;
