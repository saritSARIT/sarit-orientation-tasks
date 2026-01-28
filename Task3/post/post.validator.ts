import Joi from "joi";
import { Types } from "mongoose";
import type { Post } from "../types/post";
import { maxLength } from "./post.consts";

const objectIdValidator = (value: string, helpers: Joi.CustomHelpers) =>
  Types.ObjectId.isValid(value) ? value : helpers.error("any.invalid");

export const createPostSchema = Joi.object({
  body: Joi.object<Omit<Post, "_id" | "likes" | "createdAt">>({
    postName: Joi.string().required(),
    userId: Joi.string().custom(objectIdValidator).required(),
    text: Joi.string().max(maxLength).required(),
  }).required(),
});

export const updatePostSchema = Joi.object({
  body: Joi.object<Partial<Post>>({
    postName: Joi.string().optional(),
    text: Joi.string().max(maxLength).optional(),
  })
    .min(1)
    .required(),
});
