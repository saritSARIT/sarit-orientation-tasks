import type { User, UserPayload } from "../types/user";
import { api } from "./axiosInstance";

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/users");
  return res.data;
};

export const createUser = async (data: UserPayload): Promise<User> => {
  const res = await api.post<User>("/users", data);
  return res.data;
};
