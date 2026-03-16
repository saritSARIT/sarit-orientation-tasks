import { Router } from "express";
import { validateRequest } from "../middlewares/validate";
import { createPostSchema, updatePostSchema } from "./post.validator";
import { postController } from "./post.controller";
import { warpController } from "../utils/wrapperFunctions";
import { auth } from "../middlewares/auth";

const postRoutes = Router();

postRoutes.post(
  "/",
  auth,
  validateRequest(createPostSchema),
  warpController(postController.createPost),
);
postRoutes.get("/", warpController(postController.getAllPosts));
postRoutes.get("/:id", warpController(postController.getPostById));
postRoutes.put(
  "/:id",
  auth,
  validateRequest(updatePostSchema),
  warpController(postController.updatePost),
);
postRoutes.delete("/:id", auth, warpController(postController.deletePost));
export default postRoutes;
