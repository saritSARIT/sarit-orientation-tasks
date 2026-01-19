import { Types } from "mongoose";
import { Post } from "../types/post";

export const validateCreatePost = (data: Post) => {
  if (!data.postName || !data.userId || !data.text) {
    throw new Error("Missing required fields");
  }

  if (typeof data.postName !== "string") {
    throw new Error("Post name must be a string");
  }

  if (typeof data.text !== "string") {
    throw new Error("Text must be a string");
  }

  if (data.text.length > 200) {
    throw new Error("Post text is too long");
  }

  if (!Types.ObjectId.isValid(data.userId)) {
    throw new Error("Invalid userId");
  }

  if (data.media && typeof data.media !== "string") {
    throw new Error("Media must be a string");
  }
};

export const validateGetPostById = (postId: string) => {
  if (!Types.ObjectId.isValid(postId)) {
    throw new Error("Invalid post id");
  }
};

export const validateUpdatePost = (postId: string, data: Post) => {
  if (!Types.ObjectId.isValid(postId)) {
    throw new Error("Invalid post id");
  }

  if (!data || Object.keys(data).length === 0) {
    throw new Error("No fields to update");
  }

  if (data.postName && typeof data.postName !== "string") {
    throw new Error("Post name must be a string");
  }

  if (data.text) {
    if (typeof data.text !== "string") {
      throw new Error("Text must be a string");
    }
    if (data.text.length > 200) {
      throw new Error("Post text is too long");
    }
  }

  if (data.media && typeof data.media !== "string") {
    throw new Error("Media must be a string");
  }
};

export const validateDeletePost = (postId: string) => {
  if (!Types.ObjectId.isValid(postId)) {
    throw new Error("Invalid post id");
  }
};
