import express from "express";
import userRoutes from "./routes/userRoutes";
import postRoutes from "./routes/postRoutes";
import "./db";

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
