import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: 40,
  },
  input: {
    padding: 10,
    fontSize: 15,
    borderRadius: 6,
    border: "1px solid #1f2933",
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
