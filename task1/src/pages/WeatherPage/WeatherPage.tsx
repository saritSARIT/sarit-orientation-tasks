import type { FC } from "react";
import WeatherCard from "@components/WeatherCard";
import { CITIES } from "./consts";
import { generateRandomWeather } from "./functions";
import { map } from "lodash/fp";
import { useStyles } from "./styles";

export const WeatherPage: FC = () => {
  const classes = useStyles();
  const weatherList = map(generateRandomWeather, CITIES);

  return (
    <div className={classes.grid}>
      {map(
        (data) => (
          <WeatherCard key={data.city} {...data} />
        ),
        weatherList,
      )}
    </div>
  );
};
