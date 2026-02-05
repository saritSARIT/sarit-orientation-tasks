import express from "express";
import userRoutes from "./user/user.routes";
import postRoutes from "./post/post.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { databaseConnect } from "./database";
import cors from "cors";

const app = express();
const port = process.env.PORT;
const {baseURL} = process.env;

databaseConnect();

app.use(cors({ origin:baseURL}));

app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
