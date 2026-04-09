import type { Types } from "mongoose";

export type User ={
  // eslint-disable-next-line @typescript-eslint/naming-convention
  _id: Types.ObjectId;
  username: string;
  displayedName: string;
}
