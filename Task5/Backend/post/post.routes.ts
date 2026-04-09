import { Router } from "express";
import { validateRequest } from "../middlewares/validate";
import { createPostSchema, updatePostSchema } from "./post.validator";
import { postController } from "./post.controller";
import { auth } from "../middlewares/auth";

const postRoutes = Router();

postRoutes.post(
  "/",
  auth,
  validateRequest(createPostSchema),
  postController.createPost,
);
postRoutes.get("/", postController.getAllPosts);
postRoutes.get("/:id", postController.getPostById);
postRoutes.put(
  "/:id",
  auth,
  validateRequest(updatePostSchema),
  postController.updatePost,
);
postRoutes.delete("/:id", auth, postController.deletePost);
export default postRoutes;
