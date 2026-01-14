import { Schema, model,InferSchemaType } from "mongoose";

const postSchema = new Schema(
  {
    postName: {
      type: String,
      required: true,
      index: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    text: {
      type: String,
      required: true,
      maxlength: 200,
    },
    media: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true
  }
);

export type Post = InferSchemaType<typeof postSchema>;


export default model("Post", postSchema);
