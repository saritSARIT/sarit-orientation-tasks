import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    maxWidth: 500,
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: "2rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.5rem",
    fontSize: "1rem",
  },
  button: {
    padding: "0.5rem",
    fontSize: "1rem",
    cursor: "pointer",
    backgroundColor: "#1f2933",
    color: "#fff",
    border: "none",
    "&:hover": {
      backgroundColor: "#facc15",
      color: "#000",
    },
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
  },
});
