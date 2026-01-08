import { createUseStyles } from "react-jss";
import type { StylesProps } from "./types";

export const useStyles = createUseStyles({
  weatherCard: {
    padding: 15,
    borderRadius: 8,
    color: "#fff",
    textAlign: "center",
    fontFamily: "Asistent, sans-serif",
    backgroundColor: ({ color }: StylesProps) => color,
  },
  details: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    alignItems: "center",
    justifyItems: "center",
    gap: 5,
  },
  WeatherIcon: {
    fontSize: "2em",
  },
});
