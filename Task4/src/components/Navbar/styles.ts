import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  navbar: {
    display: "flex",
    gap: 210,
    padding: 25,
    backgroundColor: "#1f2933",
    alignItems: "center",
  },
  navLink: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: 16,
    fontWeight: 500,
    transition: "color 0.2s ease",
    "&:hover": {
      color: "#facc15",
    },
  },
});

