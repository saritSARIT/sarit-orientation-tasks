import express from "express";
import userRoutes from "./user/user.routes";
import postRoutes from "./post/post.routes";
import { errorHandler } from "./middlewares/errorHandler";
import { databaseConnect } from "./database";
import cors from "cors";
import { config } from "./config";

const app = express();

databaseConnect();

app.use(cors({ origin: config.frontedUrl }));

app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.use(errorHandler);

app.get("/", (request, response) => {
  response.send("Server is running");
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});