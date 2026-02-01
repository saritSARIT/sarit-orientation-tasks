import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  loaderContainer: {
    width: "100vw",
    height: "100vh", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    border: "16px solid #f3f3f3",
    borderTop: "16px solid #3498db",
    borderRadius: "50%",
    width: 120,
    height: 120
  },
});


