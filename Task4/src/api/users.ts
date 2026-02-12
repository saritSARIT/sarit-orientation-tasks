import type { User, UserPayload } from "../types/user";
import { api } from "./axiosInstance";

export const getUsers = async (): Promise<User[]> => api.get("/users");

export const createUser = async (data: UserPayload): Promise<User> =>
  api.post("/users", data);
