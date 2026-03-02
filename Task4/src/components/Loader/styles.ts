import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  animate: {
    border: "10px solid #1f2933",
    borderTop: "10px solid #facc15",
    borderRadius: "50%",
    width: 60,
    height: 60,
    animation: "$spin 1s linear infinite",
  },
   "@keyframes spin": {
    to: {
      transform: "rotate(360deg)",
    },
  },
});
