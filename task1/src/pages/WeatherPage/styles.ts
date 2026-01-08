import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyItems: "center",
    backgroundColor: "#c1c1e0ff",
  },
});
