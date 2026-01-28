import { postRepository } from "./post.repository";
import type { Post } from "../types/post";

export const postManager = {
  createPost: async (data: Post): Promise<Post> =>
    await postRepository.createPost(data),

  getAllPosts: async (): Promise<Post[]> => await postRepository.getAllPosts(),

  getPostById: async (postId: string): Promise<Post | null> =>
    await postRepository.getPostById(postId),

  updatePost: async (postId: string, data: Post): Promise<Post | null> =>
    await postRepository.updatePost(postId, data),

  deletePost: async (postId: string): Promise<Post | null> =>
    await postRepository.deletePost(postId),
};
