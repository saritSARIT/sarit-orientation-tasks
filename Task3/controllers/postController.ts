import { Request, Response } from "express";
import { PostManager } from "../managers/postManager";

export const PostController = {
  createPost: async (req: Request, res: Response) => {
    try {
      res.status(201).json(await PostManager.createPost(req.body));
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
  getAllPosts: async (req: Request, res: Response) => {
    try {
      res.status(200).json(await PostManager.getAllPosts());
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
  getPostById: async (req: Request, res: Response) => {
    try {
      res
        .status(200)
        .json(await PostManager.getPostById(req.params.id as string));
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
  updatePost: async (req: Request, res: Response) => {
    try {
      res
        .status(200)
        .json(await PostManager.updatePost(req.params.id as string, req.body));
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
  deletePost: async (req: Request, res: Response) => {
    try {
      res
        .status(200)
        .json(await PostManager.deletePost(req.params.id as string));
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  },
};
