import { Router } from "express";
import { validateRequest } from "../middlewares/validate";
import { createPostSchema, updatePostSchema } from "./post.validator";
import { postController } from "./post.controller";
import { warpController } from "../utils/wrapperFunctions";

const postRoutes = Router();

postRoutes.post(
  "/",
  validateRequest(createPostSchema),
  warpController(postController.createPost),
);
postRoutes.get("/", warpController(postController.getAllPosts));
postRoutes.get("/:id", warpController(postController.getPostById));
postRoutes.put(
  "/:id",
  validateRequest(updatePostSchema),
  warpController(postController.updatePost),
);
postRoutes.delete("/:id", warpController(postController.deletePost));
export default postRoutes;
