// import type { Types } from "mongoose";

export type Post = {
  _id: string;
  postName: string;
  userId: string;
  text: string;
  media?: string;
  likes: number;
  createdAt: Date;
};

export type PostPayload = Omit<Post, "_id" | "createdAt">;
