import type { Types } from "mongoose";

export type Post = {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id: Types.ObjectId;
  postName: string;
  userId: Types.ObjectId;
  text: string;
  media?: string;
  likes: number;
  createdAt: Date;
}
