import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema({
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
});

export type User = InferSchemaType<typeof userSchema>;

export default model("User", userSchema);
