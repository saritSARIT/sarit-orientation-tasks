import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    margin: 5,
    padding: 3,
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: 40,
  },
  list: {
    display: "flex",
    justifyContent: "center",
    gap: 20,
  },
  card: {
    border: "1px solid #facc15",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#1f2933",
    color: "#facc15",
    width: 300,
  },
  postName: {
    margin: 0,
    fontSize: 25,
    color: "#facc15",
  },
  text: {
    margin: "0 5 0 0 0",
    color: "#facc15",
  },
});
