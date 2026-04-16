import { postRepository } from "./post.repository";
import type { Post } from "../types/post";
import { throwError } from "../utils/errors";

export const postManager = {
  createPost: async (data: Post): Promise<Post> =>
    await postRepository.createPost(data),

  getAllPosts: async (): Promise<Post[]> => await postRepository.getAllPosts(),

  getPostById: async (postId: string): Promise<Post | null> =>
    await postRepository.getPostById(postId),

  updatePost: async (
    postId: string,
    data: Post,
    userId: string,
  ): Promise<Post | null> => {
    String(data.userId) !== userId && throwError("Unauthorized");

    return await postRepository.updatePost(postId, data);
  },

  deletePost: async (
    postId: string,
    data: Post,
    userId: string,
  ): Promise<Post | null> => {
    String(data.userId) !== userId && throwError("Unauthorized");

    return await postRepository.deletePost(postId);
  },
};
