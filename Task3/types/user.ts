import { Types } from "mongoose";

export type User ={
  _id: Types.ObjectId;
  username: string;
  displayedName: string;
}
