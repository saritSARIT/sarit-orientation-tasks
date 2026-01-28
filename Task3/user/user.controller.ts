import type { Request, Response, NextFunction } from "express";
import { userManager } from "./user.manager";
import { StatusCodes } from "http-status-codes";

export const userController = {
  createUser: async (req: Request, res: Response) => {
    const user = await userManager.createUser(req.body);
    res.status(StatusCodes.CREATED).json(user);
  },
  getAllUsers: async (req: Request, res: Response) => {
    const users = await userManager.getAllUsers();
    res.json(users);
  },
};
