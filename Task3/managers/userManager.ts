import { UserRepository } from "../repositories/userRepository";
import { User } from "../types/user";
import { validateCreateUser } from "../validators/userValidator";

export const UserManager = {
  createUser: async (data: User) => {
    try {
      validateCreateUser(data);
      await UserRepository.createUser(data);
    } catch (error: any) {
      console.error("Error in UserManager.createUser:", error);
      throw new Error(error.message);
    }
  },
  getAllUsers: async () => {
    return UserRepository.getAllUsers();
  },
};
