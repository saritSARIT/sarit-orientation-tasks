import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    maxWidth: "400px",
    margin: "0 auto",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    background: "#1976d2",
    color: "white",
    fontWeight: 600,
  },
  error: {
    color: "red",
    textAlign: "center",
  },
});
