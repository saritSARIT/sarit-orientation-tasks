import { Router } from "express";
import { validateBody } from "../middlewares/validate";
import {
  createPostSchema,
  updatePostSchema,
} from "./post.validator";
import { postController } from "./post.controller";

const postRoutes = Router();

postRoutes.post("/", validateBody(createPostSchema), postController.createPost);
postRoutes.get("/", postController.getAllPosts);
postRoutes.get("/:id", postController.getPostById);
postRoutes.put("/:id", validateBody(updatePostSchema), postController.updatePost);
postRoutes.delete("/:id", postController.deletePost);

export default postRoutes;
