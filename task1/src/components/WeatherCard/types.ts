import type { Property } from "csstype";

export type WeatherCardProps = {
  city: string;
  temperature: number;
  humidity: number;
};

export type StylesProps = {
  color: Property.Color;
};
