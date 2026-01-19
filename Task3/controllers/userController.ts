import { Request, Response } from "express";
import { UserManager } from "../managers/userManager";

export const UserController = {
  createUser: async (req: Request, res: Response) => {
    try {
      res.status(201).json(await UserManager.createUser(req.body));
    } catch (error: any) {
      res.status(409).json({ message: error.message });
    }
  },
  getAllUsers: async (res: Response) => {
    try {
      res.status(200).json(await UserManager.getAllUsers());
    } catch (error: any) {
      res.status(409).json({ message: error.message });
    }
  },
};
