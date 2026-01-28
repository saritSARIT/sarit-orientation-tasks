import postSchema from "../models/post";
import type { Post } from "../types/post";

export const postRepository = {
  createPost: async (data: Post): Promise<Post> =>
    await postSchema.create(data),

  getAllPosts: async (): Promise<Post[]> =>
    await postSchema.find().sort({ createdAt: -1 }),

  getPostById: async (postId: string): Promise<Post | null> =>
    await postSchema.findById(postId),

  updatePost: async (postId: string, data: Post): Promise<Post | null> =>
    await postSchema.findByIdAndUpdate(postId, data, { new: true }),

  deletePost: async (postId: string): Promise<Post | null> =>
    await postSchema.findByIdAndDelete(postId),
};
