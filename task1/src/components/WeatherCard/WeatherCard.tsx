import { getWeatherCondition } from "./functions";
import { WEATHER_CONFIG } from "./consts";
import { useStyles } from "./styles";
import type { WeatherCardProps } from "./types";
import type { FC } from "react";
import { useTranslation } from "react-i18next";

export const WeatherCard: FC<WeatherCardProps> = ({
  city,
  temperature,
  humidity,
}) => {
  const condition = getWeatherCondition(temperature);
  const { color, icon } = WEATHER_CONFIG[condition];

  const classes = useStyles({ color });

  const { t } = useTranslation();

  return (
    <div className={classes.weatherCard}>
      <h2>{city}</h2>
      <div className={classes.details}>
        <span className={classes.WeatherIcon}>{icon}</span>
        <div>
          <p>{t("WEATHER_CARD.TEMPERATURE", { value: temperature })}</p>
          <p>{t("WEATHER_CARD.HUMIDITY", { value: humidity })}</p>
        </div>
      </div>
    </div>
  );
};
