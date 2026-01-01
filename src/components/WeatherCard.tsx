import type { WeatherData } from "../types";
import { createUseStyles } from "react-jss";
import { getWeatherCondition } from "../functions";
import { WEATHER_CONFIG } from "../consts";

const useStyles = createUseStyles({
  weatherCard: {
    padding: "1rem",
    borderRadius: "8px",
    color: "#fff",
    margin: "5%",
    textAlign: "center",
    width: "48%",
    fontFamily: "Asistent, sans-serif",
  },
    details: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
    },
});

interface Props {
  data: WeatherData;
}

const WeatherCard = ({ data }: Props) => {
  const classes = useStyles();

  const condition = getWeatherCondition(data.temp);
  const { color, icon } = WEATHER_CONFIG[condition];

  return (
    <div
      className={classes.weatherCard}
      style={{ backgroundColor: color }}
    >
      <h2>{data.city}</h2>
      <div className={classes.details}>
        <span >{icon}</span>
        <div>
        <p>Temperature: {data.temp}°C</p>
        <p>Humidity: {data.humidity}%</p>
        </div>
        
      </div>
    </div>
  );
};

export default WeatherCard;
