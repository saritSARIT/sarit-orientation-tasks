import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    maxWidth: 900,
    margin: "2rem auto",
    padding: "1rem",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    width: "100%",
    padding: 7,
    marginBottom: "1rem",
    border: "1px solid #f1ce06",
    borderRadius: 5,
  },
  button: {
    width: "100%",
    padding: 7,
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    backgroundColor: "#0b0c0c",
    color: "#f1ce06",
    "&:hover": {
      backgroundColor: "#f1ce06",
      color: "#0b0c0c"
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  error: {
    color: "#0b0c0c",
    fontSize: 14,
  },
});
