import type { Post, PostPayload } from "../types/post";
import { api } from "./server";

export const getPosts = async (): Promise<Post[]> => {
  const res = await api.get<Post[]>("/posts");
  return res.data;
};

// יוצר פוסט חדש
export const createPost = async (data: PostPayload): Promise<Post> => {
  console.log(data);
  const res = await api.post<Post>("/posts", data);
  console.log(res.data);
  return res.data;
};

// מעדכן פוסט קיים
export const updatePost = async (
  id: string,
  data: Partial<Pick<Post, "postName" | "text" | "likes" | "userId" | "media">>,
): Promise<Post> => {
  const res = await api.put<Post>(`/posts/${id}`, data);
  return res.data;
};

export const deletePost = async (id: string): Promise<void> => {
  await api.delete(`/posts/${id}`);
};
