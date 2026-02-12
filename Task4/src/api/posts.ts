import type { Post, PostPayload } from "../types/post";
import { api } from "./axiosInstance";

export const getPosts = async (): Promise<Post[]> => api.get("/posts");

export const createPost = async (data: PostPayload): Promise<Post> =>
  api.post("/posts", data);

export const updatePost = async (
  id: string,
  data: Partial<Pick<Post, "postName" | "text" | "likes" | "userId" | "media">>
): Promise<Post> => api.put(`/posts/${id}`, data);

export const deletePost = async (id: string): Promise<Post | null> =>
  api.delete(`/posts/${id}`);
