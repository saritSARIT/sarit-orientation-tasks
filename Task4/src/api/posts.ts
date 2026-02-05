import type { Post, PostPayload } from "../types/post";
import { api } from "./axiosInstance";

export const getPosts = async (): Promise<Post[]> => {
  const res = await api.get<Post[]>("/posts");
  return res.data;
};

export const createPost = async (data: PostPayload): Promise<Post> => {
  const res = await api.post<Post>("/posts", data);
  return res.data;
};

export const updatePost = async (
  id: string,
  data: Partial<Pick<Post, "postName" | "text" | "likes" | "userId" | "media">>,
): Promise<Post> => {
  const res = await api.put<Post>(`/posts/${id}`, data);
  return res.data;
};

export const deletePost = async (id: string): Promise<Post| null> => {
  return await api.delete(`/posts/${id}`);
};
