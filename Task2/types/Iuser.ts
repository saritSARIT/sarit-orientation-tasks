import { Document } from "mongoose";

export type IUser = Document & {
  username: string;
  displayedName: string;
}
