import { Schema, model } from "mongoose";

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

module.exports = model("User", userSchema);
