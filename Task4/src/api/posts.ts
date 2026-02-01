import type { Post } from "../types/post";
import { api } from "./server";

// מביא את כל הפוסטים
export const getPosts = async (): Promise<Post[]> => {
  const res = await api.get<Post[]>("/posts");
  return res.data;
};

// יוצר פוסט חדש
export const createPost = async (data: {
  postName: string;
  text: string;
  userId: string;
  media?: string;
}): Promise<Post> => {
  const res = await api.post<Post>("/posts", data);
  return res.data;
};

// מעדכן פוסט קיים
export const updatePost = async (
  id: string,
  data: Partial<Pick<Post, "postName" | "text" | "media">>
): Promise<Post> => {
  const res = await api.put<Post>(`/posts/${id}`, data);
  return res.data;
};

// מוחק פוסט
export const deletePost = async (id: string): Promise<void> => {
  await api.delete(`/posts/${id}`);
};
