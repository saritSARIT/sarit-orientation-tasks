import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    padding: 40,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    alignItems: "center",
  },

  title: {
    fontSize: 28,
  },

  input: {
    padding: 10,
    fontSize: 16,
    width: 250,
  },

  button: {
    padding: 10,
    fontSize: 16,
    cursor: "pointer",
  },
});