import type { Request, Response } from "express";
import { postManager } from "./post.manager";
import { StatusCodes } from "http-status-codes";
import type { Post } from "../types/post";

export const postController = {
  createPost: async (req: Request, res: Response) => {
    const post = await postManager.createPost(req.body);
    res.status(StatusCodes.CREATED).json(post);
  },
  getAllPosts: async (req: Request, res: Response) => {
    const posts = await postManager.getAllPosts();
    res.json(posts);
  },

  getPostById: async (req: Request<{ id: string }>, res: Response) => {
    const post = await postManager.getPostById(req.params.id);
    res.json(post);
  },

  updatePost: async (req: Request<{ id: string }, Post>, res: Response) => {
    const post = await postManager.updatePost(req.params.id, req.body);
    res.json(post);
  },

  deletePost: async (req: Request<{ id: string }>, res: Response) => {
    const post = await postManager.deletePost(req.params.id);
    res.json(post);
  },
};
