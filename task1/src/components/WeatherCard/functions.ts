/* eslint-disable unicorn/no-nested-ternary */
/* eslint-disable no-nested-ternary */
// Intentional nested ternary for compact conditional mapping
import {
  COLD_TEMPERATURE,
  NORMAL_TEMPERATURE,
  WeatherCondition,
} from "./consts";

export const getWeatherCondition = (temperature: number): WeatherCondition =>
  temperature <= 0
    ? WeatherCondition.FREEZING
    : temperature <= COLD_TEMPERATURE
      ? WeatherCondition.COLD
      : temperature <= NORMAL_TEMPERATURE
        ? WeatherCondition.NORMAL
        : WeatherCondition.HOT;
