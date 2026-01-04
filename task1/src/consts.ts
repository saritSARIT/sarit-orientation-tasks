export const CITIES = ["Jerusalem", "Tel Aviv", "Haifa", "Eilat"];

export type WeatherCondition =
    | "FREEZING"
    | "COLD"
    | "NORMAL"
    | "HOT";

export const WEATHER_CONFIG = {
    FREEZING: {
        color: "rgba(224, 224, 240, 1)",
        icon: "❄️",
    },
    COLD: {
        color: "#6396f5ff",
        icon: "🥶",
    },
    NORMAL: {
        color: "#f5dd08ff",
        icon: "😊",
    },
    HOT: {
        color: "#f55f55ff",
        icon: "🥵",
    },
} as const;
