import { Document, Types } from "mongoose";
import { IUser } from "./Iuser";

export type IPost = Document & {
  postName: string;
  userId: Types.ObjectId;
  text: string;
  media?: string;
  likes: number;
  createdAt: Date;
}
