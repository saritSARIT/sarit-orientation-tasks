import type { Request, Response } from "express";
import { userManager } from "./user.manager";
import { StatusCodes } from "http-status-codes";
import type { User } from "../types/user";

export const userController = {
  
  createUser: async (request: Request<object, object,User>, response: Response): Promise<void> => {
    const user = await userManager.createUser(request.body);

    response.status(StatusCodes.CREATED).json(user);
  },

  getAllUsers: async (request: Request, response: Response): Promise<void> => {
    const users = await userManager.getAllUsers();

    response.json(users);
  },

  login: async (request: Request<object, object, { username: string }>, response: Response): Promise<void> => {
    const user = await userManager.login(request.body.username);

    response.json(user);
  },
};
