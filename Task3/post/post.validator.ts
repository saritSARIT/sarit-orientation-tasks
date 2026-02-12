import Joi from "joi";
import { Types } from "mongoose";
import { maxLength } from "./post.consts";

const objectIdValidator = (value: string, helpers: Joi.CustomHelpers) =>
  Types.ObjectId.isValid(value) ? value : helpers.error("any.invalid");

export const createPostSchema = Joi.object({
  body:Joi.object({
    postName: Joi.string().required(),
    userId: Joi.string().custom(objectIdValidator).required(),
    text: Joi.string().max(maxLength).required(),
    likes: Joi.number().min(0).required(),
    media: Joi.string().uri().optional(),
  }).required(),
  
});

export const updatePostSchema = Joi.object({
  body: Joi.object({
    postName: Joi.string().optional(),
    userId: Joi.string().custom(objectIdValidator).optional(),
    text: Joi.string().max(maxLength).optional(),
    likes:Joi.number().min(0).optional(),
    media: Joi.string().uri().optional(),
  }).required(),
});
