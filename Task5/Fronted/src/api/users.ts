import type { User, UserPayload } from "../types/user";
import { api } from "./axiosInstance";

export const getUsers = async (): Promise<User[]> => await api.get("/users");

export const createUser = async (data: UserPayload): Promise<User> =>
  await api.post("/users", data);
