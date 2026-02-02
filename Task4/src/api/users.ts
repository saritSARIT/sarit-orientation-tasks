import type { User } from "../types/user";
import { api } from "./server";

export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/users");
  return res.data;
};

export const createUser = async (data: { username: string; displayedName: string }): Promise<User> => {
  const res = await api.post<User>("/users", data);
  return res.data;
};
