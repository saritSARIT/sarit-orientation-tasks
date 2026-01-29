import type { User } from "../types/user";
import { api } from "./server";

// מביא את כל המשתמשים
export const getUsers = async (): Promise<User[]> => {
  const res = await api.get<User[]>("/users");
  return res.data;
};

// יוצר משתמש חדש
export const createUser = async (data: { username: string; displayedName: string }): Promise<User> => {
  const res = await api.post<User>("/users", data);
  return res.data;
};
