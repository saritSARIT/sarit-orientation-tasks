import { Router } from "express";
import { validateRequest } from "../middlewares/validate";
import { createUserSchema } from "./user.validator";
import { userController } from "./user.controller";
import { warpController } from "../utils/wrapperFunctions";

const userRoutes = Router();

userRoutes.post(
  "/",
  validateRequest(createUserSchema),
  warpController(userController.createUser),
);
userRoutes.get("/", warpController(userController.getAllUsers));

export default userRoutes;
