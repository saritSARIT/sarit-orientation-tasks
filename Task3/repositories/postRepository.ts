import PostModel from "../models/post";
import { Post } from "../types/post";

export const PostRepository = {
  createPost: async (data: Post) => {
    return PostModel.create(data);
  },
  getAllPosts: async () => {
    return PostModel.find().sort({ createdAt: -1 });
  },
  getPostById: async (postId: string) => {
    return PostModel.findById(postId);
  },
  updatePost: async (postId: string, data: Post) => {
    return PostModel.findByIdAndUpdate(postId, data, { new: true });
  },
  deletePost: async (postId: string) => {
    return PostModel.findByIdAndDelete(postId);
  },
};
