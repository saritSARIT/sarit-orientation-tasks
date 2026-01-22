import { Router } from "express";
import { validateBody } from "../middlewares/validate";
import { createUserSchema } from "./user.validator";
import { userController } from "./user.controller";

const userRoutes = Router();

userRoutes.post("/", validateBody(createUserSchema), userController.createUser);
userRoutes.get("/", userController.getAllUsers);

export default userRoutes;
