import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  input: {
    padding: 10,
    fontSize: 15,
    borderRadius: 6,
    border: "1px solid #1f2933",
  },
  error: {
    color: "#1f2933",
    textAlign: "center",
  },
});
