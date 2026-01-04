import * as React from "react";
import WeatherCard from "./components/WeatherCard";
import { CITIES } from "./consts";
import { generateRandomWeather } from "./functions";
import type { WeatherData } from "./types";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({

    grid: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        width: "100vw",
        height: "100vh",
        alignItems: "center",
        justifyItems: "center",
        backgroundColor: "#c1c1e0ff",
    },
});

const Index = () => {
    const classes = useStyles();
    const weatherList: WeatherData[] = CITIES.map(city => generateRandomWeather(city));


    return React.createElement(
        "div",
        { className: classes.grid },
        weatherList.map(data =>
            React.createElement(WeatherCard, { key: data.city, data })
        )
    );
};

export default Index;
