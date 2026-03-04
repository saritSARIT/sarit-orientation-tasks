import { Schema, model } from "mongoose";
import type { User } from "../types/user";

const userSchema = new Schema<User>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    displayedName: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model("User", userSchema);
