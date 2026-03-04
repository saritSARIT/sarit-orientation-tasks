import userSchema from "../models/user";
import type { User } from "../types/user";

export const userRepository = {
  createUser: async (data: User): Promise<User> =>
    await userSchema.create(data),

  getAllUsers: async (): Promise<User[]> => await userSchema.find(),
};
