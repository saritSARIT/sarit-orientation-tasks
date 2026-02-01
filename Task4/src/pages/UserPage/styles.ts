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
    backgroundColor: "#f9f9f9",
    transition: "box-shadow 0.2s ease",
    "&:hover": {
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    },
  },
  username: {
    margin: 0,
    fontSize: "1.2rem",
    color: "#333",
  },
  displayedName: {
    margin: "0.3rem 0 0 0",
    color: "#555",
  },
});
