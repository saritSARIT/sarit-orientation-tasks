import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  form: {
    maxWidth: 900,
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 40,
  },
  button: {
    padding: 12,
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    background: "#1f2933",
    color: "#facc15",
    fontWeight: 600,
    "&:hover": {
      background: "#facc15",
      color: "#1f2933",
    },
  },
  error: {
    color: "#1f2933",
    textAlign: "center",
  },
});
