import type { Request, Response } from "express";
import { postManager } from "./post.manager";
import { StatusCodes } from "http-status-codes";
import type { Post } from "../types/post";

export const postController = {
  createPost: async (request: Request<object, object, Post>, response: Response): Promise<void> => {
    const post = await postManager.createPost(request.body);
    response.status(StatusCodes.CREATED).json(post);
  },

  getAllPosts: async (request: Request, response: Response): Promise<void> => {
    const posts = await postManager.getAllPosts();
    response.json(posts);
  },

  getPostById: async (
    request: Request<{ id: string }>,
    response: Response,
  ): Promise<void> => {
    const post = await postManager.getPostById(request.params.id);
    response.json(post);
  },

  updatePost: async (
    request: Request<{ id: string }, object, Post>,
    response: Response,
  ): Promise<void> => {
    const post = await postManager.updatePost(request.params.id, request.body);
    response.json(post);
  },

  deletePost: async (
    request: Request<{ id: string }>,
    response: Response,
  ): Promise<void> => {
    const post = await postManager.deletePost(request.params.id);
    response.json(post);
  },
};
