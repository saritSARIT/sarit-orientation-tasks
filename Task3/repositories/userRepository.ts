import UserModel from "../models/user";
import { User } from "../types/user";

export const UserRepository = {
  createUser: async (data: User) => {
    return UserModel.create(data);
  },
  getAllUsers: async () => {
    return UserModel.find();
  },
};
