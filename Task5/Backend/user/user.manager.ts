import { userRepository } from "./user.repository";
import type { User } from "../types/user";
import jwt from "jsonwebtoken";

export const userManager = {
  createUser: async (data: User): Promise<User> =>
    await userRepository.createUser(data),

  getAllUsers: async (): Promise<User[]> => await userRepository.getAllUsers(),

  login: async (username: string) => {
    try {
      const user = await userRepository.getUserByUsername(username);

      const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET as string,
        { expiresIn: "1d" },
      );

      return { user, token };
    } catch {
      throw new Error("User not found");
    }
  },
};
