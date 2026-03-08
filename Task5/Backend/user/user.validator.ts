import Joi from "joi";

export const createUserSchema = Joi.object({
  body: Joi.object({
    username: Joi.string().required(),
    displayedName: Joi.string().required(),
  }).required(),
});

export const loginSchema = Joi.object({
  body: Joi.object({
    username: Joi.string().required(),
  }).required(),
});
