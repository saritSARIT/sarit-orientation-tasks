import { userRepository } from "./user.repository";
import type { User } from "../types/user";
import jwt from "jsonwebtoken";
import { config } from "../config";
import { throwError } from "../utils/errors";

export const userManager = {
  createUser: async (data: User): Promise<User> =>
    await userRepository.createUser(data),

  getAllUsers: async (): Promise<User[]> =>
    await userRepository.getAllUsers(),

  login: async (
    username: string
  ): Promise<{ user: User; token: string }> => {
    //Ts problem
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const user = (await userRepository
      .getUserByUsername(username)
      .catch(() => {
        throwError("User not found");
      }))!;

    const token = jwt.sign(
      { userId: user._id },
      config.jwtSecret,
      { expiresIn: config.jwtExpiresIn }
    );

    return { user, token };
  },
};