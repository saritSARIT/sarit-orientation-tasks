import { PostRepository } from "../repositories/postRepository";
import {
  validateCreatePost,
  validateDeletePost,
  validateGetPostById,
  validateUpdatePost,
} from "../validators/postValidator";
import { Post } from "../types/post";

export const PostManager = {
  createPost: async (data: Post) => {
    try {
      validateCreatePost(data);
      return PostRepository.createPost(data);
    } catch (error: any) {
      console.error("Error in PostManager.createPost:", error);
      throw new Error(error.message);
    }
  },
  getAllPosts: async () => {
    return await PostRepository.getAllPosts();
  },
  getPostById: async (postId: string) => {
    try {
      validateGetPostById(postId);
      return PostRepository.getPostById(postId);
    } catch (error: any) {
      console.error("Error in PostManager.getPostById:", error);
      throw new Error(error.message);
    }
  },
  updatePost: async (postId: string, data: Post) => {
    try {
      validateUpdatePost(postId, data);
      return PostRepository.updatePost(postId, data);
    } catch (error: any) {
      console.error("Error in PostManager.updatePost:", error);
      throw new Error(error.message);
    }
  },
  deletePost: async (postId: string) => {
    try {
      validateDeletePost(postId);
      return PostRepository.deletePost(postId);
    } catch (error: any) {
      console.error("Error in PostManager.deletePost:", error);
      throw new Error(error.message);
    }
  },
};
