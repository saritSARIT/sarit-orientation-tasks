import type { Post, PostPayload } from "../types/post";
import { api } from "./axiosInstance";

export const getPosts = async (): Promise<Post[]> => await api.get("/posts");

export const createPost = async (data: PostPayload): Promise<Post> =>
  await api.post("/posts", data);

export const updatePost = async (
  id: string,
  data: Partial<Omit<Post, "_id" | "createdAt">>,
): Promise<Post> => await api.put(`/posts/${id}`, data);

export const deletePost = async (id: string): Promise<Post> =>
  await api.delete(`/posts/${id}`);
