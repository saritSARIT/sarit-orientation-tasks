import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    margin: 10,
    padding: 3,
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
    color: "#1f2933",
  },
  list: {
    display: "flex",
    justifyContent: "center",
    gap: 15,
  },
  card: {
    border: "2px solid #facc15",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#1f2933",
    color: "#facc15",
    width: 170,
  },
  button: {
    padding: 15,
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    backgroundColor: "#facc15",
    color: "#1f2933",
    fontWeight: 600,
    "&:hover": {
      backgroundColor: "#1f2933",
      border: "1px solid #facc15",
      color: "#facc15",
    },
  },
  error: {
    color: "#1f2933",
    fontSize: 12,
  },
});
