import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    maxWidth: 900,
    margin: "auto",
    padding: 20,
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: 15,
  },
   error: {
    color: "#1f2933",
    textAlign: "center",
  },
});