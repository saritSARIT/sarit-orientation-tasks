import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  container: {
    padding: 50,
    fontFamily: "Arial, sans-serif",
  },
  title: {
    textAlign: "center",
    marginBottom: 50,
  },
  list: {
    display: "flex",
    justifyContent: "center",
    gap: 30,
  },
  card: {
    border: "1px solid #facc15",
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#1f2933",
    width: 200,
  },
  username: {
    margin: 0,
    fontSize: 25,
    color: "#facc15",
  },
  displayedName: {
    margin: 0,
    color: "#facc15",
  },
});
