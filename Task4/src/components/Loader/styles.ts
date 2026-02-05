import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    border: "10px solid #1f2933",
    borderTop: "10px solid #facc15",
    borderRadius: "50%",
    width: 60,
    height: 60,
  },
});
