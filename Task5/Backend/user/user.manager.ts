import { userRepository } from "./user.repository";
import type { User } from "../types/user";

export const userManager = {
  createUser: async (data: User): Promise<User> =>
    await userRepository.createUser(data),

  getAllUsers: async (): Promise<User[]> => await userRepository.getAllUsers(),

  login: async (username: string): Promise<User> => {
    const user = await userRepository.getUserByUsername(username);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  },
};
