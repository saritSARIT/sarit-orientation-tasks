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
    marginBottom: "2rem",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#c00",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "1rem",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: 10,
    padding: "1rem",
    backgroundColor: "#fff3f3",
    transition: "box-shadow 0.2s ease",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&:hover": {
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    },
  },
  postName: {
    margin: 0,
    fontSize: "1.2rem",
    color: "#333",
  },
  button: {
    padding: "0.5rem 1rem",
    margin: "0.5rem 0",
    border: "none",
    borderRadius: 5,
    cursor: "pointer",
    backgroundColor: "#c00",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#900",
    },
  },
});
