import { userRepository } from "./user.repository";
import type { User } from "../types/user";
import jwt from "jsonwebtoken";
import { config } from "../config";

export const userManager = {
  createUser: async (data: User): Promise<User> =>
    await userRepository.createUser(data),

  getAllUsers: async (): Promise<User[]> =>
    await userRepository.getAllUsers(),

  login: async (
    username: string
  ): Promise<{ user: User; token: string }> => {
    const user = await userRepository
      .getUserByUsername(username)
      .catch(() => {
        throw new Error("User not found");
      });

    const token = jwt.sign(
      { userId: user._id },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );

    return { user, token };
  },
};