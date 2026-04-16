import { Router } from "express";
import { validateRequest } from "../middlewares/validate";
import { createUserSchema, loginSchema } from "./user.validator";
import { userController } from "./user.controller";

const userRoutes = Router();

userRoutes.post(
  "/",
  validateRequest(createUserSchema),
  userController.createUser,
);

userRoutes.post("/login", validateRequest(loginSchema), userController.login);

userRoutes.get("/", userController.getAllUsers);

export default userRoutes;
